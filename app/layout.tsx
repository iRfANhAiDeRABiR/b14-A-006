import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Basic metadata for page title and description
export const metadata: Metadata = {
  title: "FitLog | Train With Intent",
  description: "FitLog - dark, no-nonsense gym companion and workout library.",
};

// Root layout that wraps all pages in the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased flex flex-col">
        {/* Toast notification component ready for future alerts */}
        <Toaster position="top-right" />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
