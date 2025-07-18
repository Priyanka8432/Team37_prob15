// src/Login.js
import React from "react";
import { auth, provider, signInWithPopup } from "./firebase";

export default function Login({ onLogin }) {
  const allowedDomain = "@yourcompany.com"; // Change this to your company domain

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;

      if (email.endsWith(allowedDomain)) {
        onLogin(result.user); // Proceed to app
      } else {
        alert("Access denied: Only company members can log in.");
        auth.signOut(); // Sign out unauthorized users
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        Sign in with Google
      </button>
    </div>
  );
}
