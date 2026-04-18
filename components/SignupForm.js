"use client";

import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Signup successful (demo)");
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <button className="w-full bg-indigo-600 text-white py-3 rounded-lg">
        Sign Up
      </button>
    </form>
  );
}