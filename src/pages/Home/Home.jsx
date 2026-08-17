import Hero from "../../components/Hero";
import AboutSection from "./components/AboutSection";
import VisionSection from "./components/Vision";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <AboutSection />
      <VisionSection />
    </div>
  );
}
