import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        {/* fallback لو دخل user على رابط غلط */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
