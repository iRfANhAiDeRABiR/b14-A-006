export default function LoadingSpinner({
  message = "Loading workouts...",
}: {
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-700 border-t-[#ccff00]" />
      <p className="mt-4 text-xs sm:text-sm font-medium text-slate-400">
        {message}
      </p>
    </div>
  );
}

