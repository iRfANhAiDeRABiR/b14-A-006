import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col-reverse items-center justify-between gap-8 rounded-2xl border border-[#222630] bg-[#15171d] p-6 sm:p-10 lg:flex-row lg:gap-12 lg:p-14">
        <div className="flex max-w-xl flex-col items-start text-left">
          <span className="mb-3 text-xs font-bold tracking-widest text-[#ccff00] uppercase">
            WORKOUT LIBRARY
          </span>

          <h1 className="mb-4 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mb-6 max-w-lg text-sm text-gray-400 sm:text-base leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#b8e600] active:scale-95"
          >
            <span>BROWSE WORKOUTS</span>
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex w-full items-center justify-center lg:w-auto">
          <Image
            src="/banner.png"
            alt="FitLog Banner"
            width={340}
            height={340}
            priority
            className="h-auto w-64 object-contain sm:w-80 lg:w-[340px]"
          />
        </div>
      </div>
    </section>
  );
}
