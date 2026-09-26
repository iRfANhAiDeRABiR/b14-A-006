import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <section id="library" className="min-h-[60px]"></section>
    </main>
  );
}
