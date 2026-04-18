"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "../../context/AppStateProvider";
import HabitForm from "../../components/HabitForm";

export default function AddHabitPage() {
  const { user, authReady } = useApp();
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
          <div className="space-y-2 mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">➕ Add New Habit</h1>
            <p className="text-slate-600 font-medium">Create a new habit and start building your daily routine.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:bg-white transition duration-300 hover:shadow-md">
            <HabitForm />
          </div>
        </div>
      </div>
    </div>
  );
}
