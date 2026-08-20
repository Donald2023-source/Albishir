import {
  Church,
  HeartPulse,
  GraduationCap,
  Sun,
  ArrowRight,
} from "lucide-react";
import Missioncard from "./MissionCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../../../assets/alb10.jpg";
export default function Mission() {
  const MissionCardItems = [
    {
      name: "Church Empowerment",
      icon: <Church color="#FF8125" />,
      text: "Resources and energy for rural churches.",
      id: 1,
    },
    {
      name: "Community Development",
      icon: <HeartPulse color="#FF8125" />,
      text: "Programs that build dignity.",
      id: 2,
    },
    {
      name: "Leadership Development",
      text: "Equipping pastors and leaders.",
      icon: <GraduationCap color="#FF8125" />,
      id: 3,
    },
    {
      name: "Renewable Energy",
      text: "Clean solar power where the grid ends.",
      icon: <Sun color="#FF8125" />,
      id: 4,
    },
  ];
  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col md:p-20 p-4 my-5 md:gap-20 gap-10">
        <div className="md:w-[40%] flex flex-col gap-3">
          <strong className="text-sm text-secondary">OUR MISSION</strong>
          <h4 className="font-header text-3xl ">Our Mission</h4>
          <p className="text-[#6B7280] md:w-[78%] leading-8 md:leading-7">
            To promote holistic development through rural church empowerment,
            leadership training, renewable energy solutions, and community-based
            programs that uplift women, children, and Christian faith.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {MissionCardItems?.map((item, idx) => (
            <Missioncard key={idx} idx={item?.id} cardItems={item} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <strong className="text-sm text-secondary ">WHAT WE DO</strong>
        <p className="font-header font-medium text-xl md:text-4xl py-4">
          Where We Make a Difference
        </p>

        <div className="flex lg:flex-row flex-col my-10 md:items-start lg:items-center gap-10 md:gap-32 justify-ceter w-full md:px-15 px-4">
          <motion.img
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:h-110 h-92 rounded-2xl object-cover w-120"
            src={img}
            alt=""
          />

          <div className="flex flex-col w-full md:px-0 lg:w-1/2 gap-4">
            <motion.h2
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="font-header md:w-[80%] text-3xl font-medium md:text-[45px]"
            >
              Rural Church Empowerment Through Solar Energy
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="leading-8 text-[#5B6265] md:w-[70%] pl-1 text-sm md:text-base"
            >
              Many rural churches lack access to reliable electricity, limiting
              their ability to function effectively. Albishiri Trust Foundation
              is committed to installing solar panel systems in rural churches
              to...
            </motion.p>
            <Link
              className="flex items-center gap-2 md:ml-0 ml-1 md:text-base text-sm  text-[#163625] border-b border-secondary w-fit py-2 font-semibold"
              to={"/our-programs"}
            >
              Explore Our Programs <ArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div
        id="our-impact"
        className="md:p-20 px-4 py-10 w-full flex flex-col md:items-center gap-5 bg-primary/8"
      >
        <h4 className="md:text-center font-semibold text-primary">
          OUR IMPACT
        </h4>
        <p className="text-2xl font-header">
          Together, We Can Make a Difference.
        </p>
        <p className="md:w-[38%] text-sm md:text-base lg:text-lg lg:w-[42%] text-[#4B5563] md:text-center leading-7 lg:leading-10 mx-auto">
          Our work reaches five connected areas of community life. We share only
          what we can account for no invented numbers.
        </p>
      </div>
    </div>
  );
}
