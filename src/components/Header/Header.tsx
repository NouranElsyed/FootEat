import { useEffect, useState } from "react";
import logo from "../../../public/logo.svg";
import { NavLink } from "react-router-dom";
import "./index.css";

interface HeaderProps {
  openModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const navList = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseY = event.clientY; // Get the Y position of the mouse
      if (mouseY < 100) {
        setIsVisible(true); // Show the navbar if the mouse is within 100px from the top
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-full transition-all duration-500 ${
        isScrolled ? "bg-white/5 backdrop-blur-3xl shadow-md shadow-amber-800" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="headerContainer mx-auto flex justify-between items-center px-4">
        <div className="flex-1">
          <img
            src={logo}
            alt="Logo"
            className={`logo scale-100 transition-all duration-500 ${
              isScrolled ? "w-30 " : "w-40"
            }`}
          />
        </div>

        <ul
          className={`navLink flex-1 justify-end text-base text-orange-800 font-semibold py-3 rounded-full transition-all duration-300 ${
            isMobile ? "hidden" : "flex"
          }`}
        >
          {navList.map((item, index) => (
            <li key={index} className="px-3">
              <NavLink
                className={({ isActive }) =>
                  `cursor-pointer ${
                    isActive ? "text-orange-600 " : "text-orange-800"
                  }`
                }
                to={item.path}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex-1 flex justify-end md:hidden">
          <button
            className="text-3xl cursor-pointer text-white bg-neutral-500 rounded-xl p-2"
            onClick={openModal}
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};