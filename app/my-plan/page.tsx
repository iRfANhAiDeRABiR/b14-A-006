"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";

export default function MyPlanPage() {
  const { plan, saved } = useWorkout();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const targetList = activeTab === "plan" ? plan : saved;
  const exercises = targetList.length;
  const minutes = targetList.reduce(
    (total, w) => total + (Number(w.duration) || 0),
    0
  );
  const calories = targetList.reduce(
    (total, w) => total + (Number(w.caloriesBurned) || 0),
    0
  );

  const displayedWorkouts = targetList;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-5">
        <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
          MY PLAN
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-slate-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="rounded-2xl border border-[#232732] bg-[#13161d] mb-5 overflow-hidden">
        <div className="grid grid-cols-3 divide-x divide-[#232732]">
          <div className="p-4 sm:px-6 sm:py-5 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Exercises
            </span>
            <p className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#ccff00]">
              {exercises}
            </p>
          </div>

          <div className="p-4 sm:px-6 sm:py-5 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Minutes
            </span>
            <p className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
              {minutes}
            </p>
          </div>

          <div className="p-4 sm:px-6 sm:py-5 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Calories
            </span>
            <p className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
              {calories}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-1 rounded-xl border border-[#232732] bg-[#151921] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === "plan"
                ? "border border-[#2b303d] bg-[#1f242d] text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === "saved"
                ? "border border-[#2b303d] bg-[#1f242d] text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-slate-400">Sort By</span>
          <div className="flex items-center gap-2 rounded-lg border border-[#232732] bg-[#13161d] px-3 py-1.5 text-xs font-medium text-white shadow-sm">
            <span>Duration</span>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </div>
        </div>
      </div>

      {displayedWorkouts.length === 0 ? (
        <div className="my-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-[#111317]/50 p-8 sm:p-12 text-center">
          <h2 className="text-lg sm:text-xl font-black uppercase tracking-wider text-white">
            NOTHING HERE YET
          </h2>
          <p className="mt-1.5 max-w-md text-xs sm:text-sm text-slate-400">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#ccff00] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-colors hover:bg-[#b8e600]"
          >
            GO TO WORKOUTS
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-2.5">
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

