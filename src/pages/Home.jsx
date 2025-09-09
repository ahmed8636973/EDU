import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>⚡ EDUSpark</h1>
        <nav>
          <Link to="/login" style={styles.link}>Login</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <h2 style={styles.title}>Welcome to EDUSpark 🎓</h2>
        <p style={styles.subtitle}>
          A modern platform for learning, collaboration, and innovation.
        </p>
        <Link to="/login" style={styles.button}>
          Get Started
        </Link>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 EDUSpark. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: { fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" },
  header: { display: "flex", justifyContent: "space-between", padding: "20px", backgroundColor: "#2980b9", color: "#fff" },
  logo: { margin: 0 },
  link: { color: "#fff", textDecoration: "none", fontSize: "16px" },
  main: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px", textAlign: "center" },
  title: { fontSize: "32px", marginBottom: "10px", color: "#2c3e50" },
  subtitle: { fontSize: "18px", marginBottom: "20px", color: "#555" },
  button: { padding: "12px 20px", backgroundColor: "#27ae60", color: "#fff", borderRadius: "8px", textDecoration: "none", fontSize: "18px" },
  footer: { textAlign: "center", padding: "10px", backgroundColor: "#f4f4f4", color: "#777" },
};
