import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Programs", href: "/our-programs" },
    // { name: "About Us", href: "#about-us" },
    // { name: "Our Impact", href: "#our-impact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (e, href) => {
    e.preventDefault();
    setNav(false);

    if (href.startsWith("/")) {
      navigate(href);
      return;
    }

    const targetId = href.replace("#", "");

    if (window.location.pathname === "/") {
      const element = document.getElementById(targetId);

      if (element) {
        const offset = 80;

        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }

      return;
    }

    navigate(`/${href}`);
  };

  return (
    <nav className="flex fixed w-full top-0 z-50 bg-white/80 lg:py-3 p-3 md:px-20 items-center justify-between">
      <Link to="/" className="flex items-center gap-4">
        <img
          className="sm:h-auto w-auto h-10"
          src={logo}
          alt="Albishir Trust Foundation"
        />

        <strong className="text-primary lg:block lg:text-base text-xs md:text-base md:leading-5 tracking-tight">
          ALBISHIR TRUST <br />
          FOUNDATION
        </strong>
      </Link>

      <ul
        className={
          nav
            ? "absolute flex gap-8 flex-col inset-0 items-center justify-center h-screen bg-white"
            : "lg:flex hidden items-center gap-8"
        }
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            onClick={(e) => handleScroll(e, item.href)}
            className={
              nav
                ? ""
                : "hover:text-primary text-black/65 hover:font-semibold font-medium transition-all"
            }
            to={item.href}
          >
            {item.name}
          </Link>
        ))}
      </ul>

      <Link to={"/get-involved"}>
        <Button
          text="Get Involved"
          className="bg-primary hidden lg:block text-white hover:scale-105 transition-all rounded-lg"
        />
      </Link>

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
