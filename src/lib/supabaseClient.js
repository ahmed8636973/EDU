// استدعاء مكتبة Supabase
import { createClient } from "@supabase/supabase-js";

// قراءة بيانات الاتصال من الـ Environment Variables
// لازم تكون ضايف القيم دي في ملف .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// التحقق من ان القيم متسجلة فعلاً
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("❌ supabaseUrl and supabaseAnonKey are required! تأكد انك ضايفهم في .env");
}

// انشاء الكلاينت اللي هنتعامل بيه في كل المشروع
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
