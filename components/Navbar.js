"use client";

import Link from "next/link";
import { useApp } from "../context/AppStateProvider";

export default function Navbar() {
  const { logout } = useApp();

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md">

      {/* LEFT: LOGO */}
      <h1 className="text-xl font-bold text-indigo-600">
        Habit Tracker
      </h1>

      {/* CENTER: NAV LINKS */}
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard"
          className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-indigo-100 transition"
        >
          Dashboard
        </Link>

        <Link
          href="/add"
          className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-indigo-100 transition"
        >
          Add Habit
        </Link>

        <Link
          href="/habits"
          className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-indigo-100 transition"
        >
          My Habits
        </Link>
      </div>

      {/* RIGHT: LOGOUT */}
      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-600 transition"
      >
        Logout
      </button>
    </nav>
  );
}