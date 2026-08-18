import Hero from "../../components/Hero";
import AboutSection from "./components/AboutSection";
import Mission from "./components/Mission";
import Roles from "./components/Roles";
import VisionSection from "./components/Vision";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <AboutSection />
      <VisionSection />
      <Mission />
      <Roles />
    </div>
  );
}
