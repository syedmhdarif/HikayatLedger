import 'react-native-url-polyfill/auto';
import EncryptedStorage from 'react-native-encrypted-storage';
import { ENV } from '../config/env';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../../types/supabase';

const EncryptedStorageAdapter = {
  getItem: async (key: string): Promise<string | null> => {
    try {
      return await EncryptedStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: async (key: string, value: string): Promise<void> => {
    try {
      await EncryptedStorage.setItem(key, value);
    } catch (error) {
      if (__DEV__) {
        console.error('Error saving to EncryptedStorage:', error);
      }
    }
  },
  removeItem: async (key: string): Promise<void> => {
    try {
      const exists = await EncryptedStorage.getItem(key);
      if (exists !== null) {
        await EncryptedStorage.removeItem(key);
      }
    } catch {}
  },
  clear: async () => {
    try {
      await EncryptedStorage.clear();
    } catch {}
  },
};

const supabaseUrl = ENV.SUPABASE_URL;
const supabaseAnonKey = ENV.SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: EncryptedStorageAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
  global: {
    fetch: fetch,
  },
});
