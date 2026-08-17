import { Church } from "lucide-react";
import { motion } from "framer-motion";
export default function Missioncard({ cardItems, idx }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 * idx }}
      className="flex  shadow rounded-xl  p-4 w-full  border border-[#D5D5D5] h-36 items-start justify-center flex-col gap-2"
    >
      <span>{cardItems?.icon}</span>
      <h4 className="font-medium w-[66%]">{cardItems?.name}</h4>
      <p className="text-[#6B7280]">{cardItems?.text}</p>
    </motion.div>
  );
}
