// src/lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// القيم دي هتيجي من ملف .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// لو ناقص أي قيمة اطبع Error في الكونسول
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("❌ Supabase URL or Anon Key is missing. تأكد من .env");
}

// إنشاء Supabase Client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
