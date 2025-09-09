// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// خلى fallback للقيم الفارغة
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// لو أي من المتغيرات ناقصة، اطبع warning بدل throw error
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Supabase environment variables are missing. Some features may not work.");
}

// إنشاء client حتى لو المتغيرات ناقصة
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
