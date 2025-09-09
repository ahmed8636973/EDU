import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/studentdashboard" element={<StudentDashboard />} />
      <Route path="*" element={<Home />} /> {/* fallback */}
    </Routes>
  );
}
