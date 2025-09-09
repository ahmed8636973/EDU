import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "ahmed8636973@eduspark"; // ✨ الأدمن محفوظ هنا

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        navigate("/login"); // لو مش عامل تسجيل دخول → يرجعه لوجين
        return;
      }

      if (data.user.email === ADMIN_EMAIL) {
        setAuthorized(true); // ✅ الأدمن مسموح يدخل
      } else {
        navigate("/"); // 🚫 أي حد تاني يترفض
      }

      setLoading(false);
    };

    checkAdmin();
  }, [navigate]);

  if (loading) return <p style={{ textAlign: "center" }}>⏳ Loading...</p>;
  if (!authorized) return null;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✅ Welcome Admin</h1>
      <p style={styles.text}>
        You are logged in as the <b>Super Admin</b> of EDUSpark.
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "80px",
    fontFamily: "Arial, sans-serif",
  },
  title: { color: "#27ae60", fontSize: "32px" },
  text: { fontSize: "18px", color: "#555" },
};
