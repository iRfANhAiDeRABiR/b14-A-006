"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";
import type { Workout } from "@/types/workout";

type PlanWorkoutCardProps = {
  workout: Workout;
  isPlan: boolean;
};

export default function PlanWorkoutCard({ workout, isPlan }: PlanWorkoutCardProps) {
  const { markAsDone, removeFromPlan, removeFromSaved } = useWorkout();

  return (
    <article className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-[#232732] bg-[#14171e] p-3 sm:px-4 sm:py-3.5 transition-colors hover:border-[#323846]">
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
        <div className="relative h-16 w-28 sm:h-[72px] sm:w-36 overflow-hidden rounded-xl bg-slate-900 shrink-0">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            unoptimized
            sizes="(max-width: 640px) 112px, 144px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col min-w-0">
          <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white truncate">
            {workout.name}
          </h3>
          <p className="text-xs text-slate-400 font-medium truncate">
            {workout.equipment}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-[#ccff00]" />
              {workout.duration} min
            </span>
            <span className="flex items-center gap-1">
              <Flame className="h-3.5 w-3.5 text-[#ccff00]" />
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-[#ccff00]" />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-end sm:self-center">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-slate-700 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
        >
          VIEW DETAILS
        </Link>

        {isPlan && (
          <button
            type="button"
            onClick={() => markAsDone(workout.id)}
            className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-colors hover:bg-[#b8e600]"
          >
            <Check className="h-3.5 w-3.5 stroke-[2.5]" />
            MARK AS DONE
          </button>
        )}

        <button
          type="button"
          aria-label="Remove exercise"
          onClick={() => (isPlan ? removeFromPlan(workout.id) : removeFromSaved(workout.id))}
          className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

