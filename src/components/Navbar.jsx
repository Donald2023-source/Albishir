import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../static";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Programs", href: "/programs" },
    { name: "Our Impact", href: "/impact" },
    { name: "Our Work", href: "/work" },
  ];

  const [nav, setNav] = useState(false);
  const navigation = useNavigate();
  console.log(navigation?.name);

  return (
    <nav className="flex sticky z-50 bg-white/70 lg:py-3 p-3 md:px-20 items-center justify-between">
      <Link to={"/"} className="flex items-center gap-4">
        <img className="sm:h-auto w-auto h-10" src={logo} alt="" />
        <strong className="text-primary lg:block lg:text-base text-xs md:text-base md:leading-5 tracking-tight">
          ALBISHIR TRUST <br /> FOUNDATION
        </strong>
      </Link>
      <ul
        className={
          nav
            ? "absolute flex gap-8 flex-col inset-0 items-center justify-center h-screen bg-white"
            : " lg:flex hidden items-center gap-8"
        }
      >
        {navItems.map((item, idx) => (
          <Link
            className={
              nav
                ? ""
                : "hover:text-primary  text-black/65 hover:font-semibold font-medium transition-all"
            }
            to={item?.href}
            key={idx}
          >
            {item?.name}
          </Link>
        ))}
      </ul>
      <Button
        text={"Get Involved"}
        className="bg-primary hidden lg:block text-white hover:scale-105 transition-all rounded-lg"
      />

      {nav ? (
        <X
          onClick={() => setNav(false)}
          className="absolute top-10 right-10 cursor-pointer"
        />
      ) : (
        <Menu
          onClick={() => setNav(true)}
          className="cursor-pointer lg:hidden block"
        />
      )}
    </nav>
  );
}
