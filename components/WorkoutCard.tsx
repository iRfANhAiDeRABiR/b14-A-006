import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import type { Workout } from "@/types/workout";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  const tags = workout.muscleGroups || [];
  const calories = workout.caloriesBurned ?? 0;

  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d] transition-all duration-200 hover:border-slate-700 hover:shadow-xl hover:shadow-black/40"
    >
      <div>
        <div className="relative h-48 w-full overflow-hidden bg-slate-900">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5 pb-0">
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#2d3a1f] bg-[#1a2312] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#ccff00]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-bold uppercase tracking-tight text-white transition-colors group-hover:text-[#ccff00] line-clamp-1">
            {workout.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-400">
            {workout.equipment}
          </p>
        </div>
      </div>

      <div className="p-5 pt-4">
        <div className="flex items-center justify-between border-t border-[#20242e] pt-3 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gray-400" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame className="h-3.5 w-3.5 text-orange-400" />
            <span>{calories} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 fill-[#ccff00] text-[#ccff00]" />
            <span className="font-medium text-slate-200">{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

