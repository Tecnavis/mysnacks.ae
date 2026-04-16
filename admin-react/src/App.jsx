import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return <h1 style={{ color: "white" }}>Dashboard Working ✅</h1>;
}

function Locations() {
  return <h1 style={{ color: "white" }}>Locations Page</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", background: "#0a0a0a", height: "100vh" }}>
        <div style={{ width: 200, background: "#111", color: "#fff", padding: 20 }}>
          <h3>Admin</h3>
          <Link to="/" style={{ display: "block", color: "white" }}>Dashboard</Link>
          <Link to="/locations" style={{ display: "block", color: "white" }}>Locations</Link>
        </div>

        <div style={{ padding: 20, width: "100%" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/locations" element={<Locations />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}