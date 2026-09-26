import Image from "next/image";
import { notFound } from "next/navigation";
import WorkoutActions from "@/components/WorkoutActions";
import type { Workout } from "@/types/workout";

async function getWorkout(id: string): Promise<Workout | null> {
  try {
    const res = await fetch(
      `https://api.api-store.workers.dev/api/fitlog/${id}`,
      { cache: "no-store" }
    );
    if (res.ok) {
      const data = await res.json();
      if (data && data.id && data.name) {
        return data;
      }
    }
  } catch {}

  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.id && data.name) {
        return data;
      }
    }
  } catch {}

  return null;
}

export default async function WorkoutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  const specs = [
    { label: "EQUIPMENT", value: workout.equipment },
    { label: "DIFFICULTY", value: workout.difficulty },
    { label: "SETS", value: workout.sets },
    { label: "REPS", value: workout.reps },
    { label: "DURATION", value: `${workout.duration} min` },
    { label: "CALORIES", value: `${workout.caloriesBurned} kcal` },
    { label: "RATING", value: workout.rating },
  ];

  return (
    <main className="flex-1 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 items-start">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#222630] bg-[#15171d] lg:sticky lg:top-28">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col space-y-8">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white">
              {workout.name}
            </h1>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {workout.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {workout.muscleGroups?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#2d3a1f] bg-[#1a2312] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ccff00]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#232834] bg-[#151922] overflow-hidden">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between border-b border-[#232834] last:border-b-0 px-5 py-3.5 text-xs sm:text-sm"
              >
                <span className="font-semibold uppercase tracking-wider text-gray-400">
                  {spec.label}
                </span>
                <span className="font-semibold text-white">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {workout.instructions && workout.instructions.length > 0 && (
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                INSTRUCTIONS
              </h3>
              <ol className="space-y-3">
                {workout.instructions.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#2d3a1f] bg-[#1a2312] text-xs font-bold text-[#ccff00]">
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
}
