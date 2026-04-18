"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "../../context/AppStateProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { login, user, authReady } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!authReady) return;
    if (user) {
      router.replace("/dashboard");
    }
  }, [authReady, user, router]);

  const handleLogin = () => {
    if (!email.trim()) {
      setError("Please enter your email to continue.");
      return;
    }
    login(email.trim().toLowerCase());
    router.replace("/dashboard");
  };

  if (!authReady) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-100 to-fuchsia-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Habit Tracker</h1>
          <p className="mt-3 text-sm text-slate-500">
            Track your habits and build consistency daily.
          </p>
        </div>

        <div className="space-y-4 max-w-sm mx-auto">
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : (
            <p className="text-sm text-slate-500">
              Your email is stored locally so you can continue your streak.
            </p>
          )}

          <button
            type="button"
            onClick={handleLogin}
            className="mx-auto block w-full max-w-sm rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-indigo-700"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}