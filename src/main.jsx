import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>🎓 Welcome to <span style={{ color: "#FFD700" }}>EDUSpark</span></h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "40px" }}>
        Ignite your learning journey with <b>EDUSpark</b>.  
        Whether you are a student or an admin, everything starts here. 🚀
      </p>

      <Link to="/login" style={{ textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "#FFD700",
            color: "#333",
            border: "none",
            padding: "12px 30px",
            fontSize: "1.1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ffcc00")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#FFD700")}
        >
          🔑 Get Started
        </button>
      </Link>
    </div>
  );
}
