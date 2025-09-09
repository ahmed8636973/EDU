// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}>
        🎓 Welcome to EDUSpark
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "500px", lineHeight: "1.5" }}>
        Your gateway to learning and teaching. Explore courses, manage your profile, and join the EDUSpark community!
      </p>
      <Link
        to="/login"
        style={{
          padding: "12px 30px",
          backgroundColor: "#fff",
          color: "#2575fc",
          fontWeight: "bold",
          borderRadius: "8px",
          textDecoration: "none",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.3)";
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
        }}
      >
        Go to Login
      </Link>
    </div>
  );
}
