import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-[#0f1115]">
      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
          <span className="text-base font-bold tracking-wider text-white uppercase">
            FitLog
          </span>
        </Link>
        <p className="text-xs text-slate-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}

