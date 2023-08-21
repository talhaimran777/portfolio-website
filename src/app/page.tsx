import HeroSection from "components/HeroSection";
import Projects from "components/Projects";
import Navbar from "components/ui/Navbar";

export default function Home() {
  return (
    <div className="px-2 min-[1208px]:px-0">
      <Navbar />
      <HeroSection />
      <hr />
      <Projects />
    </div>
  );
}
