"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "../../context/AppStateProvider";

export default function Dashboard() {
  const { user, habits, authReady } = useApp();
  const router = useRouter();

  useEffect(() => {
    if (!authReady) return;
    if (!user) {
      router.replace("/login");
    }
  }, [authReady, user, router]);

  if (!authReady || !user) return null;

  const completedCount = habits.filter((h) => h.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[2rem] shadow-xl">
          <div
            className="h-72 sm:h-96 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/20 to-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/80">Fitness Focus</p>
            <h1 className="text-4xl font-bold sm:text-5xl">Power your habits, power your day</h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80">
              A premium dashboard for building daily consistency and celebrating each win.
            </p>
          </div>
        </section>

        {/* QUICK STATS */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="group rounded-2xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-500 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center gap-3 text-white">
              <span className="rounded-2xl bg-white/20 p-3 text-xl">🔥</span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-80">Progress</p>
                <p className="mt-3 text-3xl font-bold">{completedCount}/{habits.length}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/90">Completed habits right now</p>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-600">💪</div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Motivation</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">Stay consistent.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Small wins stack up into a stronger routine.</p>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-slate-100 p-3 text-slate-800">📊</div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Habit Stats</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">{habits.length} total</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Track completion and keep momentum visible.</p>
          </div>
        </div>

        {/* TODAY'S FOCUS */}
        <section className="rounded-2xl bg-white/80 backdrop-blur-xl p-6 shadow-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Today's Focus</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">Review your key habits</h2>
            </div>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              {habits.length} habits</span>
          </div>

          <div className="mt-6 space-y-3">
            {habits.length > 0 ? (
              habits.slice(0, 5).map((habit) => (
                <div
                  key={habit.id}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                >
                  <div>
                    <p className={`font-medium ${habit.completed ? "text-slate-400 line-through" : "text-slate-900"}`}>
                      {habit.title}
                    </p>
                    <p className="text-xs text-slate-500">{habit.completed ? "Done" : "Pending"}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className={habit.completed ? "text-green-600" : "text-amber-500"}>
                      {habit.completed ? "✅" : "⏳"}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-6 text-center text-slate-500">
                No habits yet — add one to start your fitness streak.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
