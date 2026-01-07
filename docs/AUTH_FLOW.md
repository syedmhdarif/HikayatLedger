# Authentication Flow - Hikayat Ledger

## Overview

This document describes the authentication architecture using **Supabase Auth** with **React Context** and **Redux** for state management.

---

## React Context API

### What is React Context?

React Context is a built-in feature that allows data to be passed through the component tree without having to pass props manually at every level. It solves the "prop drilling" problem where data needs to be passed through multiple intermediate components.

```
Without Context (Prop Drilling):
┌─────────────────────────────────────────────┐
│ App (has user data)                         │
│    ↓ passes user as prop                    │
│ Layout                                      │
│    ↓ passes user as prop                    │
│ Sidebar                                     │
│    ↓ passes user as prop                    │
│ UserAvatar (needs user data)                │
└─────────────────────────────────────────────┘

With Context:
┌─────────────────────────────────────────────┐
│ AuthProvider (provides user data)           │
│    │                                        │
│    ├── Layout                               │
│    │      └── Sidebar                       │
│    │             └── UserAvatar ←───────────┤
│    │                  (consumes directly)   │
└─────────────────────────────────────────────┘
```

### How Context Works

Context consists of three main parts:

#### 1. Creating Context

```typescript
import { createContext } from 'react';

// Create a context with a default value
const AuthContext = createContext<AuthContextValue | undefined>(undefined);
```

#### 2. Provider Component

The Provider wraps the component tree and supplies the context value to all descendants:

```typescript
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Auth logic here...

  const value: AuthContextValue = {
    user,
    isLoading,
    signIn,
    signOut,
    // ... other values and methods
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
```

#### 3. Consumer Hook

Components consume context using a custom hook:

```typescript
export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Usage in any component
const ProfileScreen = () => {
  const { user, signOut } = useAuth();
  return <Text>Welcome, {user?.email}</Text>;
};
```

### Why Context for Authentication?

| Requirement | How Context Solves It |
|-------------|----------------------|
| Global access | Auth state accessible from any component |
| Centralized logic | All auth operations in one place |
| Reactive updates | Components re-render when auth state changes |
| Clean API | Simple `useAuth()` hook for consumers |
| Type safety | Full TypeScript support with typed context |

### Benefits for Hikayat Ledger

#### 1. Centralized Auth Management

All authentication logic lives in `AuthProvider`:
- Session initialization on app start
- Listening to Supabase auth events
- Managing loading states
- Handling auth errors

```typescript
// AuthProvider handles everything
useEffect(() => {
  // Check existing session
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) {
      dispatch(setUser(session.user));
      dispatch(setSession(session));
      dispatch(setAuthenticated(true));
    }
    setIsLoading(false);
  });

  // Listen for auth changes
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    async (event, session) => {
      // Handle SIGNED_IN, SIGNED_OUT, TOKEN_REFRESHED, etc.
    }
  );

  return () => subscription.unsubscribe();
}, []);
```

#### 2. Simplified Component Code

Components don't need to know about Supabase or Redux directly:

```typescript
// Before: Complex component with direct Supabase calls
const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({...});
    if (data.session) {
      dispatch(setUser(data.user));
      dispatch(setSession(data.session));
      // ... more boilerplate
    }
  };
};

// After: Clean component using Context
const LoginScreen = () => {
  const { signIn } = useAuth();

  const handleLogin = async () => {
    const result = await signIn({ email, password });
    if (!result.success) {
      showError(result.error);
    }
    // Navigation happens automatically via auth state change
  };
};
```

#### 3. Automatic Navigation

The auth state in Context/Redux drives navigation automatically:

```typescript
// Route.tsx - No manual navigation needed
const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
```

#### 4. Profile Data Caching

Context maintains user profile data, reducing API calls:

```typescript
const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const refreshProfile = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user?.id)
      .single();
    setProfile(data);
  };

  // Profile available everywhere without re-fetching
  return (
    <AuthContext.Provider value={{ profile, refreshProfile, ... }}>
      {children}
    </AuthContext.Provider>
  );
};
```

### Context + Redux: Why Both?

This project uses **Context for auth operations** and **Redux for auth state persistence**:

| Concern | Solution | Why |
|---------|----------|-----|
| Auth methods (signIn, signOut) | Context | Methods don't need persistence |
| Auth state (user, session) | Redux | Persisted across app restarts |
| Supabase event handling | Context | Centralized subscription management |
| State for other features | Redux | Consistent state management pattern |

```
Data Flow:
┌─────────────────────────────────────────────────────────────┐
│                      AuthProvider                            │
│  ┌─────────────────┐      ┌─────────────────────────────┐   │
│  │  Supabase Auth  │ ───→ │  Context (methods + state)  │   │
│  │  onAuthChange   │      │         │                   │   │
│  └─────────────────┘      │         ↓                   │   │
│                           │  dispatch(setUser())        │   │
│                           │  dispatch(setSession())     │   │
│                           │         │                   │   │
│                           └─────────│───────────────────┘   │
│                                     ↓                        │
│                           ┌─────────────────────────────┐   │
│                           │   Redux Store (persisted)   │   │
│                           │   - user                    │   │
│                           │   - session                 │   │
│                           │   - isAuthenticated         │   │
│                           └─────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Context Best Practices Used

1. **Undefined default value** - Forces proper Provider usage
2. **Custom hook with error boundary** - `useAuth()` throws if used outside Provider
3. **Memoized context value** - Prevents unnecessary re-renders
4. **TypeScript interfaces** - Full type safety for all context values
5. **Single responsibility** - Context handles auth, Redux handles persistence

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         App.tsx                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                    Redux Provider                      │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │                 ThemeProvider                    │  │  │
│  │  │  ┌───────────────────────────────────────────┐  │  │  │
│  │  │  │               AuthProvider                 │  │  │  │
│  │  │  │  ┌─────────────────────────────────────┐  │  │  │  │
│  │  │  │  │          NavigationContainer         │  │  │  │  │
│  │  │  │  │  ┌─────────────┬─────────────────┐  │  │  │  │  │
│  │  │  │  │  │  AuthStack  │    MainStack    │  │  │  │  │  │
│  │  │  │  │  │  (Login)    │    (Home)       │  │  │  │  │  │
│  │  │  │  │  └─────────────┴─────────────────┘  │  │  │  │  │
│  │  │  │  └─────────────────────────────────────┘  │  │  │  │
│  │  │  └───────────────────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Flow Summary

### App Startup Flow

```
App Start
    ↓
AuthProvider mounts
    ↓
Check getSession()
    ↓
┌─────────────────┬─────────────────┐
│  Has Session    │   No Session    │
│       ↓         │        ↓        │
│  Validate Token │  Show AuthStack │
│       ↓         │   (Login/Signup)│
│  Fetch Profile  │                 │
│       ↓         │                 │
│  Show MainStack │                 │
│   (Home/Tabs)   │                 │
└─────────────────┴─────────────────┘
```

### Login/Signup Flow

```
User submits credentials
    ↓
authService.signIn() / signUp()
    ↓
Supabase authenticates
    ↓
onAuthStateChange fires
    ↓
┌─────────────────────────────┐
│  Dispatch Redux Actions:    │
│  - setUser(user)            │
│  - setSession(session)      │
│  - setAuthenticated(true)   │
└─────────────────────────────┘
    ↓
Navigation auto-switches to MainStack
```

### Logout Flow

```
User taps logout
    ↓
authService.signOut()
    ↓
Supabase clears session
    ↓
onAuthStateChange fires (SIGNED_OUT)
    ↓
┌─────────────────────────────┐
│  Dispatch Redux Actions:    │
│  - clearAuth()              │
└─────────────────────────────┘
    ↓
Navigation auto-switches to AuthStack
```

---

## File Structure

```
src/
├── common/
│   ├── services/
│   │   └── supabase/
│   │       └── supabaseClient.ts    # Supabase client initialization
│   │   └── auth/
│   │       └── authTypes.ts         # Auth type definitions
│   └── context/
│       └── AuthContext.tsx          # Auth context provider
│
├── modules/
│   └── auth/
│       ├── screens/
│       │   ├── login/
│       │   │   └── LoginScreen.tsx
│       │   ├── signUp/
│       │   │   └── SignupScreen.tsx
│       │   └── forgotPassword/
│       │       └── ForgotPasswordScreen.tsx
│       ├── hooks/
│       │   └── useAuthValidation.ts
│       └── services/
│           └── authService.ts       # Auth API wrapper
│
├── app/
│   ├── store/
│   │   └── slices/
│   │       └── authSlice.ts         # Redux auth state
│   └── routes/
│       └── Route.tsx                # Navigation with auth check
```

---

## Implementation Details

### 1. Supabase Client (`supabaseClient.ts`)

```typescript
import { createClient } from '@supabase/supabase-js';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV({ id: 'supabase-storage' });

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: {
      getItem: (key) => storage.getString(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: (key) => storage.delete(key),
    },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
```

### 2. Auth Service (`authService.ts`)

| Method | Supabase Call | Description |
|--------|---------------|-------------|
| `signUp(email, password, metadata)` | `supabase.auth.signUp()` | Register new user |
| `signIn(email, password)` | `supabase.auth.signInWithPassword()` | Login user |
| `signOut()` | `supabase.auth.signOut()` | Logout user |
| `getSession()` | `supabase.auth.getSession()` | Get current session |
| `getUser()` | `supabase.auth.getUser()` | Get current user |
| `resetPassword(email)` | `supabase.auth.resetPasswordForEmail()` | Send reset email |
| `updatePassword(password)` | `supabase.auth.updateUser()` | Update password |
| `getProfile(userId)` | `supabase.from('profiles').select()` | Fetch user profile |
| `updateProfile(userId, data)` | `supabase.from('profiles').update()` | Update profile |

### 3. Auth Context (`AuthContext.tsx`)

```typescript
interface AuthContextValue {
  // State
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Methods
  signUp: (data: SignUpData) => Promise<AuthResult>;
  signIn: (data: SignInData) => Promise<AuthResult>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<AuthResult>;
}
```

**Key Responsibilities:**
- Initialize auth state on mount
- Listen to `onAuthStateChange` events
- Sync auth state with Redux store
- Provide auth methods to components

### 4. Redux Auth Slice (`authSlice.ts`)

```typescript
interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  lastActivityTimestamp: number | null;
}

// Actions
- setUser(user)
- setProfile(profile)
- setSession(session)
- setAuthenticated(boolean)
- setLoading(boolean)
- setError(string | null)
- updateLastActivity()
- clearAuth()
```

### 5. Navigation (`Route.tsx`)

```typescript
const Routes = () => {
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const isLoading = useAppSelector(state => state.auth.isLoading);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
```

---

## Supabase Database Schema

### Profiles Table

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT,
  profile_name TEXT,
  date_of_birth DATE,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, profile_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'profile_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();
```

---

## Auth State Events

| Event | Trigger | Action |
|-------|---------|--------|
| `SIGNED_IN` | User logs in | Set user, session, fetch profile |
| `SIGNED_OUT` | User logs out | Clear all auth state |
| `TOKEN_REFRESHED` | Token auto-refreshed | Update session |
| `USER_UPDATED` | User data changed | Update user state |
| `PASSWORD_RECOVERY` | Reset link clicked | Navigate to reset screen |

---

## Error Handling

| Error Code | Description | User Action |
|------------|-------------|-------------|
| `invalid_credentials` | Wrong email/password | Show error message |
| `email_not_confirmed` | Email not verified | Prompt to check email |
| `user_already_exists` | Email already registered | Prompt to login |
| `weak_password` | Password too weak | Show password requirements |
| `network_error` | No internet | Show retry option |

---

## Security Considerations

1. **Token Storage**: Use MMKV (encrypted) for storing tokens
2. **Session Expiry**: 30-day inactivity timeout
3. **Auto Refresh**: Tokens auto-refresh before expiry
4. **RLS Policies**: Users can only access their own data
5. **Input Validation**: Validate all inputs before API calls

---

## Testing Checklist

- [ ] New user can sign up
- [ ] Existing user can log in
- [ ] User can log out
- [ ] Session persists across app restarts
- [ ] Expired session redirects to login
- [ ] Password reset email is sent
- [ ] Profile updates are saved
- [ ] Error messages display correctly
- [ ] Loading states show during API calls
