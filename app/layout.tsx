import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased flex flex-col justify-between">
        <WorkoutProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </WorkoutProvider>
      </body>
    </html>
  );
}
