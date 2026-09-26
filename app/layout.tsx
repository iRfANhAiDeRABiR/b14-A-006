import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
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
      <body className="bg-slate-900 text-slate-100 min-h-screen antialiased">
        {/* Toast notification component ready for future alerts */}
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
