import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { WorkoutProvider } from "@/context/WorkoutContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitLog | Train With Intent",
  description: "FitLog - dark, no-nonsense gym companion and workout library.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased flex flex-col">
        <WorkoutProvider>
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
          <Navbar />
          {children}
        </WorkoutProvider>
      </body>
    </html>
  );
}
