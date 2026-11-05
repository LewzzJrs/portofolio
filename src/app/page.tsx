import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#A53860F0]/94">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
