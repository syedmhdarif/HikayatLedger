import { User, Session } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  email: string;
  profile_name: string;
  date_of_birth: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface SignUpData {
  email: string;
  password: string;
  profileName: string;
  dateOfBirth: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isVisitor?: boolean;
  isEmailVerified?: boolean;
}

export interface AuthContextType extends AuthState {
  signUp: (data: SignUpData) => Promise<{ success: boolean; error?: string }>;
  signIn: (data: SignInData) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<{ success: boolean; error?: string }>;
  refreshProfile: () => Promise<void>;
  updateProfile: (
    data: Partial<UserProfile>,
  ) => Promise<{ success: boolean; error?: string }>;
}
