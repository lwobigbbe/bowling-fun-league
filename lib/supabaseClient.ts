import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(https://zanfhsqyzefmgzvdhpbb.supabase.co, eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphbmZoc3F5emVmbWd6dmRocGJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNDQxMDgsImV4cCI6MjA5NDcyMDEwOH0.SXBp9id0vpzfjVJt6v7j9pougBrhagaJGHBsoTGRkds);
