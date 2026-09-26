"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-lg font-bold tracking-wider text-white uppercase">
            FitLog
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
              isActive("/")
                ? "bg-[#1a2312] text-[#ccff00]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
              isActive("/my-plan")
                ? "bg-[#1a2312] text-[#ccff00]"
                : "text-slate-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              Plan
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-[11px] font-bold text-slate-950">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <span className="text-xs sm:text-sm font-medium text-slate-400">
              Saved
            </span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-700 text-[11px] font-medium text-slate-300">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
