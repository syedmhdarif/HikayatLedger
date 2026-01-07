import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  AuthContextType,
  SignInData,
  SignUpData,
  UserProfile,
} from '../services/auth/authTypes';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import {
  clearAuth,
  selectIsSessionExpired,
  selectProfile,
  selectSession,
  selectUser,
  setProfile,
  setSession,
  setUser,
  updateLastActivity,
} from '../../app/store/slices/authSlice';
import { authService } from '../services/auth/authService';
import { AppState, AppStateStatus } from 'react-native';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const profile = useAppSelector(selectProfile);
  const session = useAppSelector(selectSession);
  const isSessionExpired = useAppSelector(selectIsSessionExpired);

  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = useMemo(() => {
    return !!session && !!user && !isSessionExpired;
  }, [session, user, isSessionExpired]);

  const isEmailVerified = useMemo(() => {
    return user?.email_confirmed_at != null;
  }, [user]);

  // Initialize auth state
  useEffect(() => {
    const initialize = async () => {
      try {
        if (session && user && !isSessionExpired) {
          dispatch(updateLastActivity());
        }
      } finally {
        setIsLoading(false);
      }
    };

    initialize();
  }, []);

  // Handle session expiry
  useEffect(() => {
    if (isSessionExpired && isAuthenticated) {
      if (__DEV__) {
        console.log('Session expired due to inactivity');
      }
      signOut();
    }
  }, [isSessionExpired, isAuthenticated]);

  // Track app activity
  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active' && isAuthenticated) {
        dispatch(updateLastActivity());
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => subscription.remove();
  }, [isAuthenticated, dispatch]);

  const signIn = useCallback(
    async (data: SignInData) => {
      setIsLoading(true);
      try {
        const result = await authService.login(data);
        if (result.success && result.data) {
          dispatch(setUser(result.data.user));
          dispatch(setSession(result.data.session));
          // Fetch profile after sign in
          if (result.data.user) {
            const { profile: userProfile } = await authService.ensureProfile(
              result.data.user.id,
              result.data.user.email || '',
            );
            if (userProfile) {
              dispatch(setProfile(userProfile));
            }
          }
        }
        return { success: result.success, error: result.error || undefined };
      } catch (error) {
        if (__DEV__) {
          console.error('Sign in error:', error);
        }
        return { success: false, error: 'An unexpected error occurred' };
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch],
  );

  const signUp = useCallback(
    async (data: SignUpData) => {
      setIsLoading(true);
      try {
        const result = await authService.signUp(data);
        if (result.success && result.data) {
          dispatch(setUser(result.data.user));
          dispatch(setSession(result.data.session));
        }
        return { success: result.success, error: result.error || undefined };
      } catch (error) {
        if (__DEV__) {
          console.error('Sign up error:', error);
        }
        return { success: false, error: 'An unexpected error occurred' };
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch],
  );

  const signOut = useCallback(async () => {
    setIsLoading(true);
    try {
      await authService.signOut();
      return { success: true, error: undefined };
    } catch (error) {
      if (__DEV__) {
        console.error('Sign out error:', error);
      }
      return {
        success: false,
        error: 'An unexpected error occurred, user not logged out',
      };
    } finally {
      dispatch(clearAuth());
      setIsLoading(false);
    }
  }, [dispatch]);

  const refreshProfile = useCallback(async () => {
    if (!user?.id || !user?.email) return;
    try {
      const { profile: userProfile } = await authService.ensureProfile(
        user.id,
        user.email,
      );
      if (userProfile) {
        dispatch(setProfile(userProfile));
      }
    } catch (error) {
      if (__DEV__) {
        console.error('Error refreshing profile:', error);
      }
    }
  }, [user, dispatch]);

  const updateProfile = useCallback(async (data: Partial<UserProfile>) => {
    // TODO: Implement updateProfile in authService when needed
    if (__DEV__) {
      console.log('updateProfile called with:', data);
    }
    return { success: false, error: 'Not implemented' };
  }, []);

  const value: AuthContextType = {
    user,
    profile,
    session,
    isLoading,
    isAuthenticated,
    isVisitor: !isAuthenticated,
    isEmailVerified,
    signIn,
    signUp,
    signOut,
    refreshProfile,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
