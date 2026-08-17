import Navbar from "./Navbar";
import heroImg from "../assets/alb7.png";
export default function Hero() {
  return (
    <section className="relative h-screen">
      <Navbar />
      <img className="absolute object-cover inset-0 h-full w-full" src={heroImg} alt="" />
    </section>
  );
}
