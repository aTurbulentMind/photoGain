import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.supabaseUrl;
const supabaseAnonKey = import.meta.env.supabaseAnonKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
