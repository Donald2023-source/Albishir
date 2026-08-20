import {
  ArrowRight,
  BookOpen,
  Heart,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  UserLock,
} from "lucide-react";
import img from "../../assets/alb8.png";
import Button from "../../components/Button";
export default function Contact() {
  return (
    <div>
      <div className="md:h-[60vh] h-[40vh] relative w-full">
        <img className="h-full object-cover w-full" src={img} alt="img" />
        <div className="absolute inset-0 w-full bg-primary/40" />
        <h2 className="font-bold md:text-5xl text-3xl absolute inset-0 text-center flex items-center justify-center text-white">
          Contact
        </h2>
      </div>

      <div className="flex flex-col max-w-7xl w-full mx-auto items-center py-9">
        <h2 className="text-2xl font-header text-black/60 font-extrabold py-2">
          Get in touch with us !
        </h2>
        <p className="text-center text-sm md:text-base text-black/70">
          Contact us for more information about our organization, donation
          opportunities, partnerships, and volunteer programs.
        </p>
        <div className="w-full grid py-6 px-4 md:grid-cols-3 gap-10">
          <div className=" px-9 rounded-2xl  py-10 shadow-lg flex flex-col items-center text-center  gap-3">
            <Smartphone className="text-primary" />
            <p className="font-semibold text-sm text-primary">PHONE </p>

            <p className="text-sm text-[#4B5563]">Phone +234 8109515815</p>
            <p className="text-sm text-[#4B5563]">Phone +234 7014727901</p>
          </div>
          <div className=" px-9 rounded-2xl py-10 shadow-lg flex flex-col items-center text-center  gap-3">
            <MapPin className="text-primary" />
            <p className="font-semibold text-sm text-primary">ADDRESS </p>
            <p className="text-sm text-[#4B5563]">
              No. 4 Temple Close, Off Miango Road, Jos, Plateau State, Nigeria.
            </p>
          </div>
          <div className=" px-9 rounded-2xl py-10 shadow-lg flex flex-col items-center text-center  gap-3">
            <Mail className="text-primary" />
            <p className="text-primary text-sm font-semibold">EMAIL </p>
            <p className="text-sm text-[#4B5563]">
              albishiritrust2019@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
