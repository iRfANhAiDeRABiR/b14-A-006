import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import type { Workout } from "@/types/workout";

type PlanWorkoutCardProps = {
  workout: Workout;
  isPlan: boolean;
};

export default function PlanWorkoutCard({ workout, isPlan }: PlanWorkoutCardProps) {
  return (
    <article className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border border-[#232732] bg-[#14171e] p-4 sm:p-5 transition-colors hover:border-[#323846]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
        <div className="relative h-28 w-full sm:h-20 sm:w-36 overflow-hidden rounded-xl bg-slate-900 shrink-0">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, 144px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white">
            {workout.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            {workout.equipment}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#ccff00]" />
              {workout.duration} min
            </span>
            <span className="flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5 text-[#ccff00]" />
              {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-[#ccff00]" />
              {workout.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap mt-2 md:mt-0">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-slate-700 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-slate-500 hover:text-white"
        >
          VIEW DETAILS
        </Link>

        {isPlan && (
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 transition-colors hover:bg-[#b8e600]"
          >
            <Check className="h-4 w-4 stroke-[2.5]" />
            MARK AS DONE
          </button>
        )}

        <button
          type="button"
          aria-label="Remove exercise"
          className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
