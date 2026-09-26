"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import toast, { Toaster } from "react-hot-toast";
import type { Workout } from "@/types/workout";

type WorkoutContextType = {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  markAsDone: (id: number) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
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

  const markAsDone = (id: number) => {
    setPlan((current) => current.filter((workout) => workout.id !== id));
    toast.success("Workout completed!");
  };

  const removeFromPlan = (id: number) => {
    setPlan((current) => current.filter((workout) => workout.id !== id));
    toast.success("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setSaved((current) => current.filter((workout) => workout.id !== id));
    toast.success("Removed from saved");
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        markAsDone,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1e293b",
            color: "#f8fafc",
            border: "1px solid #334155",
          },
        }}
      />
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

