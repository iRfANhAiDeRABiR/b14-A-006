"use client";

import { useState } from "react";
import Link from "next/link";
import { useWorkout } from "@/context/WorkoutContext";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";

export default function MyPlanPage() {
  const { plan, saved } = useWorkout();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const exercises = plan.length;
  const minutes = plan.reduce((total, w) => total + (w.duration || 0), 0);
  const calories = plan.reduce(
    (total, w) => total + (w.caloriesBurned || 0),
    0
  );

  const displayedWorkouts = activeTab === "plan" ? plan : saved;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 min-h-[calc(100vh-5rem)]">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
          MY PLAN
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        <div className="rounded-2xl border border-[#232732] bg-[#13161d] p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Exercises
          </span>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            {exercises}
          </p>
        </div>

        <div className="rounded-2xl border border-[#232732] bg-[#13161d] p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Minutes
          </span>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            {minutes}
          </p>
        </div>

        <div className="rounded-2xl border border-[#232732] bg-[#13161d] p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Calories
          </span>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white">
            {calories}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 rounded-xl border border-[#232732] bg-[#151921] p-1.5 w-fit mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("plan")}
          className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold uppercase transition-colors ${
            activeTab === "plan"
              ? "border border-[#2b303d] bg-[#1f242d] text-[#ccff00] shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          TODAY&apos;S PLAN
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("saved")}
          className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold uppercase transition-colors ${
            activeTab === "saved"
              ? "border border-[#2b303d] bg-[#1f242d] text-[#ccff00] shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          SAVED
        </button>
      </div>

      {displayedWorkouts.length === 0 ? (
        <div className="my-8 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-[#111317]/50 p-10 sm:p-16 text-center">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
            NOTHING HERE YET
          </h2>
          <p className="mt-2 max-w-md text-sm sm:text-base text-slate-400">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#ccff00] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 transition-colors hover:bg-[#b8e600]"
          >
            GO TO WORKOUTS
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {displayedWorkouts.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              isPlan={activeTab === "plan"}
            />
          ))}
        </div>
      )}
    </main>
  );
}
