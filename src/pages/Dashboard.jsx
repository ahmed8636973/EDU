import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        navigate("/login"); // لو مش مسجل دخول يرجع لصفحة اللوجين
        return;
      }

      // ✅ تحقق من الإيميل (الأدمن فقط)
      if (user.email === "ahmed8636973@eduspark") {
        setAuthorized(true);
      } else {
        navigate("/"); // أي مستخدم تاني يتوجه للصفحة الرئيسية
      }

      setLoading(false);
    };

    checkAdmin();
  }, [navigate]);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  if (!authorized) return null;

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#2c3e50" }}>✅ Welcome Admin</h1>
      <p style={{ fontSize: "18px", color: "#555" }}>
        You are now logged in as the super admin of <b>EDUSpark</b>.
      </p>
      <div
        style={{
          marginTop: "30px",
          display: "inline-block",
          padding: "15px 30px",
          backgroundColor: "#3498db",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Go to Dashboard
      </div>
    </div>
  );
}