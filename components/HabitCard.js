"use client";

export default function HabitCard({ habit, toggleHabit, deleteHabit }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition duration-300 ease-out border border-slate-100">
      <div className="flex-1">
        <p className={`text-lg font-semibold transition duration-300 ${
          habit.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}>
          {habit.title}
        </p>
        <p className={`text-sm mt-2 font-medium transition duration-300 ${
          habit.completed ? "text-green-600" : "text-gray-500"
        }`}>
          {habit.completed ? "✓ Completed" : "⏳ Pending"}
        </p>
      </div>

      <div className="flex gap-2 ml-4">
        <button
          onClick={() => toggleHabit(habit.id)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 hover:shadow-lg hover:scale-110 transition duration-300 ease-out active:scale-95"
        >
          ✓
        </button>

        <button
          onClick={() => deleteHabit(habit.id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 hover:shadow-lg hover:scale-110 transition duration-300 ease-out active:scale-95"
        >
          ✕
        </button>
      </div>
    </div>
  );
}