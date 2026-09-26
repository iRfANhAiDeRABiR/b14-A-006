"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";
import type { Workout } from "@/types/workout";

type WorkoutContextType = {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export function WorkoutProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const addToPlan = (workout: Workout) => {
    const exists = plan.some((item) => item.id === workout.id);
    if (exists) {
      toast.error("Already in today's plan");
      return;
    }
    setPlan((prev) => [...prev, workout]);
    toast.success("Added to today's plan");
  };

  const addToSaved = (workout: Workout) => {
    const exists = saved.some((item) => item.id === workout.id);
    if (exists) {
      toast.error("Already saved");
      return;
    }
    setSaved((prev) => [...prev, workout]);
    toast.success("Saved for later");
  };

  return (
    <WorkoutContext.Provider value={{ plan, saved, addToPlan, addToSaved }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkout must be used within a WorkoutProvider");
  }
  return context;
}
