import React, { useState } from "react";
import "./style.css";

export default function FakeLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const allowedDomain = "@yourcompany.com";

  const handleLogin = () => {
    if (!email || !name || !role) {
      setError("Please fill in all fields including your role.");
      return;
    }

    if (email.endsWith(allowedDomain)) {
      onLogin({ displayName: name, email, role });
    } else {
      setError("Access denied: You must use a company email.");
    }
  };

  const roles = [
    "Product Manager",
    "Software Engineer",
    "Designer",
    "Marketing Specialist",
    "QA Tester",
    "Sales Executive",
    "HR Manager",
    "Data Analyst",
    "DevOps Engineer",
    "Support Agent",
  ];

  return (
    <div className="login-container">
      {/* Blobs */}
      <div className="blob blue"></div>
      <div className="blob silver"></div>

      {/* Card */}
      <div className="login-card">
        <h2>🚀 Internal Launch Portal</h2>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Priya Dev"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError("");
          }}
        />

        <label>Company Email</label>
        <input
          type="email"
          placeholder="priya@yourcompany.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />

        <label>Role Specification</label>
        <select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            setError("");
          }}
        >
          <option value="" disabled>
            -- Select Your Role --
          </option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>

        {error && <div className="error-message">{error}</div>}

        <button onClick={handleLogin}>
          🔐 Sign In with Company Email
        </button>
      </div>
    </div>
  );
}
