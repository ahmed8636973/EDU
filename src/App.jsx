import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/studentdashboard" element={<StudentDashboard />} />
      {/* fallback لو حد دخل مسار غلط */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
