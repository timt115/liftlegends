import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = https://mkydddrbykcphrpcgzyb.supabase.co;
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1reWRkZHJieWtjcGhycGNnenliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MzQzNDUsImV4cCI6MjA1NTAxMDM0NX0.LFVyWIj9Cel2PBI-8xsjTWGX8QLw87nyMSa322pLFl0;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
