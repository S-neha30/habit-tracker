"use client";
import { useState } from "react";
import { useApp } from "../context/AppStateProvider";

export default function HabitForm() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const { addHabit } = useApp();

  const handleAdd = () => {
    if (!title.trim()) {
      setError("Please enter a habit name.");
      return;
    }
    addHabit(title);
    setTitle("");
    setError("");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
          placeholder="Enter a new habit..."
          className="w-full flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition duration-300 hover:border-slate-400 hover:shadow-md"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-700 hover:shadow-lg hover:scale-105 active:scale-95 ease-out whitespace-nowrap"
        >
          <span className="mr-2 transition duration-300 inline-block">➕</span>Add Habit
        </button>
      </div>
      {error && <p className="text-sm text-red-600 font-semibold animate-pulse">{error}</p>}
    </div>
  );
}