"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "../../context/AppStateProvider";
import HabitList from "../../components/HabitList";

export default function HabitsPage() {
  const { user, authReady, habits } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!authReady) return;
    if (!user) {
      router.replace("/login");
    }
  }, [authReady, user, router]);

  if (!authReady || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="rounded-2xl bg-white border border-slate-100 p-8 shadow-lg hover:shadow-2xl hover:scale-[1.01] transition duration-300 ease-out">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="space-y-2 animate-fade-in">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">📋 My Habits</h1>
              <p className="text-slate-600 font-medium">View, edit, delete, and toggle completion for your habits.</p>
            </div>
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 border border-indigo-200 hover:bg-indigo-200 transition duration-300 hover:shadow-md">
              {habits.length} habit{habits.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="space-y-6">
            <HabitList />
          </div>
        </div>
      </div>
    </div>
  );
}
