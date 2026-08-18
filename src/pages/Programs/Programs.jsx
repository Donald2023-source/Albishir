import { Link } from "react-router-dom";
import img from "../../assets/alb4.png";
import img2 from "../../assets/alb3.jpg";
import img3 from "../../assets/alb2.png";
import img4 from "../../assets/alb1.jpg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProgramElement from "./components/programElement";
export default function Programs() {
  const list1 = [
    "Provide sustainable and clean energy",
    "Enable worship services and community gatherings",
    "Support educational and outreach programs",
    "Enhance safety and security in church environments",
  ];

  const list2 = [
    "Biblical knowledge and sound doctrine",
    "Leadership and pastoral care skills",
    "Conflict resolution and community engagement strategies",
    "Practical ministry tools for effective service",
  ];

  const list3 = [
    "Skills acquisition and vocational training for women",
    "Educational support and mentorship for children",
    "Health awareness and community support programs",
    "Advocacy for the rights and protection of vulnerable groups",
  ];

  const list4 = [
    "Teaching sound biblical doctrine",
    "Equipping believers to defend their faith",
    "Addressing contemporary religious and cultural challenges",
    "Promoting interfaith dialogue with wisdom and respect",
  ];
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="md:w-[35%] flex items-center py-8 mx-auto flex-col text-center gap-6">
        <h2 className="font-header text-5xl">Our Programs</h2>
        <p className="text-[#5A5A5ACC] md:text-lg">
          Empowering communities through dedicated support, resource sharing,
          and sustainable development.
        </p>
      </div>
      <div className="flex flex-col gap-10 md:px-1 px-4">
        <ProgramElement
          img={img}
          title={"Rural Church Empowerment"}
          text1={
            "Many rural churches lack access to reliable electricity, limiting their ability to function effectively. Albishiri Trust Foundation is committed to installing solar panel systems in rural churches to:"
          }
          list={list1}
          num={"01"}
          text2={
            "Through this initiative, we bring both physical light and spiritual illumination to underserved communities."
          }
          showButton={false}
        />

        <ProgramElement
          img={img2}
          title={"Pastor & Leadership Development"}
          text1={
            "We believe that strong leadership is essential for vibrant communities. Our Pastors Training Program equips rural church leaders with:"
          }
          list={list2}
          num={"02"}
          text2={
            "By empowering pastors, we strengthen the church as a pillar of hope and transformation in rural areas."
          }
          showButton={false}
          className={"lg:flex-row-reverse"}
        />
        <ProgramElement
          img={img3}
          title={"Women & Children Empowerment"}
          text1={
            "Albishiri Trust Foundation is dedicated to supporting women and children through programs that promote dignity, opportunity, and well-being. Our initiatives include:"
          }
          list={list3}
          num={"03"}
          text2={
            "We aim to break cycles of poverty and build resilient families and communities."
          }
          showButton={false}
        />
        <ProgramElement
          img={img4}
          title={"Christian Apologetics & Faith Development"}
          text1={
            "In a rapidly changing world, understanding and defending the Christian faith is essential. Our Christian Apologetics Program focuses on:"
          }
          list={list4}
          num={"04"}
          text2={
            "We are committed to raising confident and grounded Christians who can engage their world with truth and love."
          }
          showButton={true}
          buttonContent={"Support This Program"}
          className={"lg:flex-row-reverse"}
        />
      </div>
    </div>
  );
}
