"use client";
import { useState } from "react";
import { useApp } from "../context/AppStateProvider";

export default function HabitList() {
  const { habits, toggleHabit, deleteHabit, editHabit } = useApp();
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {habits.length === 0 ? (
        <div className="col-span-full rounded-2xl bg-white border border-slate-100 p-8 shadow-lg text-center hover:shadow-2xl hover:scale-[1.01] transition duration-300 ease-out">
          <p className="text-xl font-semibold text-slate-800">No habits yet</p>
          <p className="mt-3 text-sm text-slate-600">Add your first habit to start tracking progress today.</p>
        </div>
      ) : (
        habits.map((habit) => (
          <div
            key={habit.id}
            className="rounded-2xl bg-white border border-slate-100 p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300 ease-out"
          >
            {editingId === habit.id ? (
              <div className="space-y-4">
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 hover:border-slate-400 focus:border-indigo-400"
                  autoFocus
                />
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      editHabit(habit.id, newTitle);
                      setEditingId(null);
                    }}
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700 hover:shadow-lg hover:scale-105 active:scale-95 ease-out"
                  >
                    💾 Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-300 hover:shadow-md hover:scale-105 active:scale-95 ease-out"
                  >
                    ✖ Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <label className="inline-flex items-center gap-3 cursor-pointer flex-1">
                    <input
                      type="checkbox"
                      checked={habit.completed}
                      onChange={() => toggleHabit(habit.id)}
                      className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 accent-indigo-600"
                    />
                    <span className={`text-lg font-semibold ${
                      habit.completed ? "text-gray-400 line-through" : "text-slate-900"
                    }`}>
                      {habit.title}
                    </span>
                  </label>
                </div>
                <p className={`text-sm font-medium ${
                  habit.completed ? "text-green-600" : "text-slate-600"
                }`}>
                  {habit.completed ? "✅ Completed" : "⏳ Pending"}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    onClick={() => {
                      setEditingId(habit.id);
                      setNewTitle(habit.title);
                    }}
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-indigo-700 hover:shadow-lg hover:scale-105 active:scale-95 ease-out"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => deleteHabit(habit.id)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-red-600 hover:shadow-lg hover:scale-105 active:scale-95 ease-out"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}