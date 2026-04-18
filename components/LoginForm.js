"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Enter email");
      return;
    }

    localStorage.setItem("user", email);
    window.location.href = "/dashboard";
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <button className="w-full bg-green-600 text-white py-3 rounded-lg">
        Login
      </button>
    </form>
  );
}