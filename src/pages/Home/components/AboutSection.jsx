import { Link } from "react-router-dom";
import img from "../../../assets/alb11.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export default function AboutSection() {
  return (
    <div
      id="about-us"
      className="flex lg:flex-row flex-col my-10 md:items-start lg:items-center gap-10 md:gap-32 justify-ceter w-full md:px-15 px-4"
    >
      <motion.img
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:h-120 h-92 rounded-2xl object-cover w-120"
        src={img}
        alt=""
      />

      <div className="flex flex-col w-full md:px-0 lg:w-1/2 gap-4">
        <h4 className="font-medium text-secondary">ABOUT US</h4>
        <motion.h2
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="font-header md:w-[66%] text-3xl font-medium md:text-[45px]"
        >
          Hope that reaches beyond the church walls.
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="leading-8 text-[#5B6265] text-sm md:text-base"
        >
          Albishiri Trust Foundation is a faith-driven nonprofit committed to
          transforming lives and strengthening underserved rural communities
          through sustainable development, empowerment, and Christian outreach.{" "}
          <br />
          <br />
          The organization works to address both spiritual and socio- economic
          needs through practical community programs.
        </motion.p>
        <Link
          className="flex items-center gap-2 md:text-base text-sm  text-[#163625] border-b border-secondary w-fit py-2 font-semibold"
          to={"/our-programs"}
        >
          Learn About Us <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
