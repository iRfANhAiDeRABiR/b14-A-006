"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import type { Workout } from "@/types/workout";

export default function HomePage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
        if (res.ok) {
          const data = await res.json();
          setWorkouts(data);
          setLoading(false);
          return;
        }
      } catch {}

      try {
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
        if (res.ok) {
          const data = await res.json();
          setWorkouts(data);
          setLoading(false);
          return;
        }
      } catch {}

      setWorkouts([]);
      setLoading(false);
    }

    loadWorkouts();
  }, []);

  return (
    <main className="flex-1">
      <Hero />

      <section id="library" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            THE LIBRARY
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {loading ? (
          <div className="py-20 text-center text-sm font-medium text-slate-400">
            Loading workouts...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
