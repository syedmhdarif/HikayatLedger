import { supabase } from '../supabase';
import { SignInData, SignUpData, UserProfile } from './authTypes';

export const authService = {
  //Sign Up
  signUp: async (data: SignUpData) => {
    const { email, password, profileName, dateOfBirth } = data;

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          data: {
            profile_name: profileName,
            date_of_birth: dateOfBirth,
          },
        },
      },
    );

    if (signUpError) {
      if (
        signUpError.message.toLowerCase().includes('already registered') ||
        signUpError.message.toLowerCase().includes('already exists') ||
        signUpError.message.toLowerCase().includes('user already registered')
      ) {
        return {
          success: false,
          error: 'This email is already registered. Please login instead.',
          data: null,
          userExists: true,
        };
      }
      return {
        success: false,
        error: signUpError.message,
        data: null,
        userExists: false,
      };
    }

    if (!signUpData.user) {
      return {
        success: false,
        error:
          'Something went wrong. Please try again later. User not created.',
        data: null,
      };
    }

    const { error: profileError } = await supabase.from('profiles').insert({
      id: signUpData.user.id,
      email: email,
      profile_name: profileName,
      date_of_birth: dateOfBirth || null,
    } as never);

    if (profileError) {
      console.error('Error creating profile during signup:', profileError);
    }

    return {
      success: true,
      error: null,
      data: signUpData,
      userExists: false,
    };
  },

  login: async (data: SignInData) => {
    const { email, password } = data;

    const { data: signInData, error: signInError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (signInError) {
      return {
        success: false,
        error: signInError.message,
        data: null,
      };
    }

    return {
      success: true,
      error: null,
      data: signInData,
    };
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return {
        success: false,
        error: error.message,
        data: null,
      };
    }

    return {
      success: true,
      error: null,
      data: null,
    };
  },

  getSession: async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      return { session: null, error: error.message };
    }

    return { session: data.session, error: null };
  },

  getUser: async () => {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      return { user: null, error: error.message };
    }

    return { user: data.user, error: null };
  },

  getProfile: async (
    userId: string,
  ): Promise<{ profile: UserProfile | null; error: string | null }> => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      return { profile: null, error: error.message };
    }

    return { profile: data as UserProfile, error: null };
  },

  ensureProfile: async (userId: string, email: string) => {
    // Check if profile exists
    const { profile } = await authService.getProfile(userId);

    if (profile) {
      return { profile, created: false };
    }

    // Backup user metadata from signup
    const { user } = await authService.getUser();
    const metadata = user?.user_metadata;

    const { data, error } = await supabase
      .from('profiles')
      .insert({
        id: userId,
        email: email,
        profile_name: metadata?.profile_name || email.split('@')[0],
        date_of_birth: metadata?.date_of_birth || null,
      } as never)
      .select()
      .single();

    if (error) {
      console.error('Error creating profile:', error);
      return { profile: null, created: false };
    }

    return { profile: data as UserProfile, created: true };
  },
};
