"use client";

import { Plus, Bookmark } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";
import type { Workout } from "@/types/workout";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToPlan, addToSaved } = useWorkout();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
      <button
        type="button"
        onClick={() => addToPlan(workout)}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#ccff00] px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#b8e600] active:scale-95"
      >
        <Plus className="h-4 w-4" />
        <span>ADD TO TODAY&apos;S PLAN</span>
      </button>

      <button
        type="button"
        onClick={() => addToSaved(workout)}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-gray-700 bg-transparent px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-slate-800 active:scale-95"
      >
        <Bookmark className="h-4 w-4" />
        <span>SAVE FOR LATER</span>
      </button>
    </div>
  );
}
