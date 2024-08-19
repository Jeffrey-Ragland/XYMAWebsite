import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import xyma from '../Assets/xymalogo_white.png';
import CircleComponent from "../CircleComponent";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const location = useLocation();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleBurgerMenu = () =>
  {
    setBurgerMenuOpen(!burgerMenuOpen);
  }

  const HeaderData = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "Industries",
      path: "/industries",
    },
    {
      title: "Careers",
      path: "/careers",
    },
    {
      title: "Media",
      path: "/media",
    },
    {
      title: "About Us",
      path: "/about",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="h-[9vh]">
        <div
          className="h-full flex items-center px-4"
          style={{
            background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
          }}
        >
          <div className="flex items-center text-white lg:justify-around justify-between w-full h-full text-lg xl:text-sm 2xl:text-lg">
            <div className="h-full flex items-center">
              <img className="h-[80%]" src={xyma} alt="Logo" />
            </div>
            <ul className="hidden lg:flex gap-8 items-center">
              {HeaderData.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={`hover:text-orange-400 duration-200 ${
                      location.pathname === item.path ||
                      (item.path === "/industries" &&
                        location.pathname.startsWith("/industries"))
                        ? "text-orange-400"
                        : ""
                    }`}
                  >
                    <span>{item.title}</span>
                  </NavLink>

                  {(location.pathname === item.path ||
                    (item.path === "/industries" &&
                      location.pathname.startsWith("/industries"))) && (
                    <CircleComponent />
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center">
              <button
                className={`hidden lg:block text-white py-3 px-4 xl:py-2 xl:px-3 2xl:py-3 2xl:px-4 rounded-full mb-0.5 hover:scale-105 duration-200`}
                style={{
                  background:
                    "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                }}
                onClick={handleContactClick}
              >
                Get in Touch
              </button>
              {location.pathname === "/contact" && (
                <div
                  className="hidden lg:block w-10 h-1 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                />
              )}
            </div>
            {!burgerMenuOpen && (
              <button
                className="flex items-center justify-center lg:hidden"
                onClick={handleBurgerMenu}
              >
                <IoMenu size={30} />
              </button>
            )}
            {burgerMenuOpen && (
              <button
                className="flex items-center justify-center lg:hidden cursor-pointer"
                onClick={handleBurgerMenu}
              >
                <IoCloseSharp size={30} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* hamburger menu */}
      {burgerMenuOpen && (
        <>
          <div
            className="h-[1vh] w-full"
            style={{
              background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
            }}
          ></div>
          <nav
            className="bg-white h-[90vh] w-full lg:hidden"
            // data-aos="slide-down"
            // data-aos-duration="800"
          >
            <ul className="h-[60%]">
              {HeaderData.map((item, index) => (
                <li
                  key={index}
                  className={`w-full h-1/6 border border-b-gray-300 flex items-center font-[700] text-lg md:text-2xl  ${
                    location.pathname === item.path ||
                    (item.path === "/industries" &&
                      location.pathname.startsWith("/industries"))
                      ? "text-orange-400"
                      : ""
                  }`}
                  onClick={() => {
                    handleBurgerMenu();
                  }}
                >
                  <NavLink
                    to={item.path}
                    className="w-full h-full flex items-center justify-between px-4"
                  >
                    {item.title}
                    <div
                      className={`${
                        location.pathname === item.path ||
                        (item.path === "/industries" &&
                          location.pathname.startsWith("/industries"))
                          ? "text-orange-400"
                          : "text-gray-400"
                      }`}
                    >
                      <FiArrowUpRight size={25} />
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="p-3 h-[30%] flex items-end">
              <button
                className="text-white py-3 px-4 md:text-lg rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                }}
                onClick={() => {
                  handleContactClick();
                  handleBurgerMenu();
                }}
              >
                Get in Touch
              </button>
            </div>
            {/* footer */}
            <footer className="h-[10%] flex justify-center items-center px-4 py-2 text-xs md:text-base border border-t-gray-400">
              <div className="flex flex-col justify-center">
                <div className="flex gap-1 justify-center">
                  <div>© 2024 XYMA Analytics Inc.</div>
                  <div className="text-gray-400">IIT Madras Research Park,</div>
                </div>
                <div className="text-gray-400 text-center">Chennai, 600113</div>
              </div>
            </footer>
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;
