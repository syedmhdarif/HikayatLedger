import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserProfile } from '../../../common/services/auth/authTypes';
import { Session, User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  isAuthenticated: boolean;
  lastActivityTimestamp: number | null;
}

const initialState: AuthState = {
  user: null,
  profile: null,
  session: null,
  isAuthenticated: false,
  lastActivityTimestamp: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setProfile: (state, action: PayloadAction<UserProfile | null>) => {
      state.profile = action.payload;
    },
    setSession: (state, action: PayloadAction<Session | null>) => {
      state.session = action.payload;
      state.isAuthenticated = !!action.payload && !!state.user;
    },
    updateLastActivity: state => {
      state.lastActivityTimestamp = Date.now();
    },
    clearAuth: state => {
      state.user = null;
      state.profile = null;
      state.session = null;
      state.isAuthenticated = false;
      state.lastActivityTimestamp = null;
    },
  },
});

export const {
  setUser,
  setProfile,
  setSession,
  updateLastActivity,
  clearAuth,
} = authSlice.actions;

type StateWithAuth = { auth: AuthState };

export const selectUser = (state: StateWithAuth) => state.auth.user;
export const selectProfile = (state: StateWithAuth) => state.auth.profile;
export const selectSession = (state: StateWithAuth) => state.auth.session;
export const selectIsAuthenticated = (state: StateWithAuth) =>
  state.auth.isAuthenticated;
export const selectLastActivityTimestamp = (state: StateWithAuth) =>
  state.auth.lastActivityTimestamp;

// Check if session is expired (30 days of inactivity)
export const selectIsSessionExpired = (state: StateWithAuth) => {
  const { lastActivityTimestamp } = state.auth;
  if (!lastActivityTimestamp) return false;

  const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  return now - lastActivityTimestamp > thirtyDaysInMs;
};

export default authSlice.reducer;
