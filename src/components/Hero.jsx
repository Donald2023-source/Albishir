import Navbar from "./Navbar";
import heroImg from "../assets/alb7.png";
import Button from "./Button";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-screen">
      <Navbar />
      <img
        className="absolute object-cover inset-0 h-full w-full"
        src={heroImg}
        alt=""
      />

      <div className="absolute px-5 md:px-20 gap-10 lg:w-[55%] md:w-full w-full text-white h-full flex flex-col justify-center">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="font-header font-semibold scale-y-105 md:text-6xl text-4xl lg:text-7xl  tracking-wide"
        >
          Bringing Light to Communities. Empowering Lives.
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-[70%] leading-8 font-medium text-white/65"
        >
          We serve underserved rural communities through church empowerment,
          leadership development, renewable energy, and programs that create
          opportunity for women and children.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center gap-5"
        >
          <Button
            className="bg-primary px-9 md:text-base text-sm text-white rounded-lg"
            text={"Donate"}
          />
          <Button
            className="bg-white/10 px-9 md:text-base text-sm text-white rounded-lg"
            text={"Discover Our Mission"}
          />
        </motion.div>
      </div>
    </section>
  );
}
