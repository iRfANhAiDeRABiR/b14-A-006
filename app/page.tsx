import { Dumbbell, CheckCircle2, Flame } from "lucide-react";

// Simple FitLog starter homepage to confirm the setup works
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
      {/* Welcome Card */}
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-800/60 p-8 shadow-2xl backdrop-blur">
        {/* Brand Icon */}
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ccff00] text-slate-950 shadow-lg shadow-[#ccff00]/20">
          <Dumbbell className="h-8 w-8" />
        </div>

        {/* Project Title */}
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Fit<span className="text-[#ccff00]">Log</span>
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Next.js + TypeScript + Tailwind CSS setup is complete!
        </p>

        {/* Setup verification checklist */}
        <div className="mt-6 space-y-2.5 rounded-xl border border-slate-750 bg-slate-900/70 p-4 text-left text-sm text-slate-300">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-[#ccff00]" />
            <span>Next.js App Router</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-[#ccff00]" />
            <span>TypeScript Enabled</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-[#ccff00]" />
            <span>Tailwind CSS Dark Theme</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-[#ccff00]" />
            <span>Lucide React Icons</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-[#ccff00]" />
            <span>React Hot Toast Ready</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
          <Flame className="h-4 w-4 text-orange-400" />
          <span>Train with intent. Log every set.</span>
        </div>
      </div>
    </main>
  );
}
