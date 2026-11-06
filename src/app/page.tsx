import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skill from "@/components/sections/Skill";
import Standout from "@/components/sections/Standout";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#A53860F0]/94">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Standout />
    </main>
  );
}
