import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://moajtchljlwdsgzlmkxu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vYWp0Y2hsamx3ZHNnemxta3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NDU5NjYsImV4cCI6MjAzNTUyMTk2Nn0.kc8k8lUanw48LxXgl7-0zAfDEBm_yUsjetrE-yb5_Wc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);