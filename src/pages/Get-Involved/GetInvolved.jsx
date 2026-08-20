import { ArrowRight, BookOpen, Heart, UserLock } from "lucide-react";
import img from "../../assets/alb8.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
export default function GetInvolved() {
  return (
    <div>
      <div className="md:h-[60vh] h-[40vh] relative w-full">
        <img className="h-full object-cover w-full" src={img} alt="img" />
        <div className="absolute inset-0 w-full bg-primary/40" />
        <h2 className="font-bold md:text-5xl text-3xl absolute inset-0 text-center flex items-center justify-center text-white">
          Get Involved
        </h2>
      </div>

      <div className="flex flex-col max-w-7xl w-full mx-auto items-center py-9">
        <h2 className="text-3xl font-extrabold py-2">
          Let's Work <span className="text-secondary">Together</span>
        </h2>
        <p className="md:w-[40%] text-sm md:text-base px-2 text-center">
          Partner, give, or serve every contribution helps strengthen churches,
          equip leaders, and create opportunity.
        </p>

        <div className="w-full grid py-6 px-4 md:grid-cols-3 gap-10">
          <div className=" px-9 rounded-2xl  py-10 shadow-lg flex flex-col items-center text-center  gap-3">
            <UserLock className="text-primary" />
            <p className="font-header text-lg">Partner With Us</p>
            <p className="text-sm text-[#4B5563]">
              Work with us to expand programs and reach more communities.
            </p>
            <span className="flex items-center gap-">
              <Link
                to="/contact"
                className="flex items-center hover:scale-95 transition-all cursor-pointer bg-primary/8 p-3 rounded-lg text-sm gap-1"
              >
                Partner With Us
                <ArrowRight size={16} />
              </Link>
            </span>
          </div>
          <div className=" px-9 rounded-2xl py-10 shadow-lg flex flex-col items-center text-center  gap-3">
            <Heart className="text-primary" />
            <p className="font-header text-lg">Donate </p>
            <p className="text-sm text-[#4B5563]">
              Your support helps us expand our programs and reach more
              communities in need.
            </p>
            <span className="flex items-center gap-">
              <Link
                to="/contact"
                className="flex hover:scale-95 transition-all items-center cursor-pointer bg-primary text-white p-3 rounded-lg text-sm gap-1"
              >
                Donate Now
                <ArrowRight size={16} />
              </Link>
            </span>
          </div>
          <div className=" px-9 rounded-2xl py-10 shadow-lg flex flex-col items-center text-center  gap-3">
            <BookOpen className="text-primary" />
            <p className="font-header text-lg">Volunteer </p>
            <p className="text-sm text-[#4B5563]">
              Contribute your time, skills, and passion to help make a
              difference.
            </p>
            <span className="flex items-center gap-">
              <Link
                to="/contact"
                className="flex items-center hover:scale-95 transition-all cursor-pointer bg-primary/8 p-3 rounded-lg text-sm gap-1"
              >
                Volunteer
                <ArrowRight size={16} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
