import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <span className="text-6xl sm:text-8xl font-black tracking-tight text-[#ccff00]">
        404
      </span>
      <h1 className="mt-4 text-xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
        PAGE NOT FOUND
      </h1>
      <p className="mt-2 max-w-md text-xs sm:text-sm text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#ccff00] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 transition-colors hover:bg-[#b8e600]"
      >
        BACK TO WORKOUTS
      </Link>
    </main>
  );
}

