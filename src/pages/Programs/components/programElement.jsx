import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
export default function ProgramElement({
  num,
  title,
  text1,
  buttonContent,
  showButton,
  list,
  img,
  text2,
  className,
}) {
  return (
    <div
      className={twMerge(
        "flex lg:flex-row flex-col my-10 md:items-start lg:items-center gap-10 md:gap-32 justify-ceter w-full",
        className,
      )}
    >
      <motion.img
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:h-120 h-80 rounded-2xl object-cover w-140"
        src={img}
        alt=""
      />

      <div className="flex flex-col w-full md:px-0 lg:w-1/2 gap-4">
        <li className="font-medium list-item text-secondary">{num}</li>
        <motion.h2
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="font-header  md:w-[80%] text-3xl font-medium md:text-[45px]"
        >
          {title}
        </motion.h2>
        <span>
          <p className="text-[#5B6265]">{text1}</p>
          <motion.ul
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="leading-8  text-sm md:text-base list-disc py-5 ml-5"
          >
            {list?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </motion.ul>
          <p className="text-[#5B6265]">{text2}</p>
        </span>
        {showButton && (
          <Link
            className="flex items-center gap-2 md:text-base text-sm  text-[#163625] border-b border-secondary w-fit py-2 font-semibold"
            to={"/donate"}
          >
            {buttonContent} <ArrowRight />
          </Link>
        )}
      </div>
    </div>
  );
}
