import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import xyma from '../Assets/xymalogo_white.png';
import { HeaderData } from "../data/HeaderData";
import CircleComponent from "../CircleComponent";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

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

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="h-[10vh]">
        <div
          className="h-[9vh] flex items-center px-4"
          style={{
            background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
          }}
        >
          <div className="flex items-center text-white lg:justify-around justify-between w-full h-full text-lg xl:text-sm 2xl:text-lg">
            <div className="h-full flex items-center">
              <img className="h-[65%]" src={xyma} alt="Logo" />
            </div>
            <div className="hidden lg:flex gap-8 items-center">
              {HeaderData.map((item, index) => (
                <div key={index} className="">
                  <NavLink
                    to={item.path}
                    className={`${
                      location.pathname === item.path && "text-orange-400"
                    }`}
                  >
                    <span>{item.title}</span>
                  </NavLink>

                  {location.pathname === item.path && <CircleComponent />}
                </div>
              ))}
            </div>
            <div
              className="hidden lg:block text-white py-3 px-4 xl:py-2 xl:px-3 2xl:py-3 2xl:px-4 rounded-full cursor-pointer"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
              onClick={handleContactClick}
            >
              Get in Touch
            </div>
            {!burgerMenuOpen && (
              <div
                className="flex items-center justify-center lg:hidden cursor-pointer"
                onClick={handleBurgerMenu}
              >
                <IoMenu size={30} />
              </div>
            )}
            {burgerMenuOpen && (
              <div
                className="flex items-center justify-center lg:hidden cursor-pointer"
                onClick={handleBurgerMenu}
              >
                <IoCloseSharp size={30} />
              </div>
            )}
          </div>
        </div>
        <div
          className="h-[1vh] w-full"
          style={{
            background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
          }}
        ></div>
      </div>

      {/* hamburger menu */}
      {burgerMenuOpen && (
        <div
          className="bg-white h-[90vh] w-full lg:hidden"
          // data-aos="slide-down"
          // data-aos-duration="800"
        >
          <div className="h-[60%]">
            {HeaderData.map((item, index) => (
              <div
                key={index}
                className={`w-full h-1/6 border border-b-gray-300 flex items-center font-[700] text-lg md:text-2xl  ${
                  location.pathname === item.path ? "text-orange-400" : ""
                }`}
                onClick={() => {
                  //handleNavItemClick(index);
                  handleBurgerMenu();
                }}
              >
                <NavLink
                  to={item.path}
                  className="w-full h-full flex items-center justify-between px-4"
                >
                  {/* <div className="border border-black w-full h-full"> */}
                  {item.title}
                  <div
                    className={`${
                      location.pathname === item.path
                        ? "text-orange-400"
                        : "text-gray-400"
                    }`}
                  >
                    <FiArrowUpRight size={25} />
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
          <div className="p-3 h-[28%] flex items-end">
            <div
              className="text-white py-3 px-4 md:text-lg rounded-full cursor-pointer"
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
            </div>
          </div>
          {/* footer */}
          <div className="h-[12%] px-4 py-2 text-xs md:text-base border border-t-gray-400">
            <div className="h-[55%] flex flex-col justify-center">
              <div className="flex gap-1 justify-center">
                <div>© 2022 XYMA Analytics Inc.</div>
                <div className="text-gray-400">IIT Madras Research Park,</div>
              </div>
              <div className="text-gray-400 text-center">
                Chennai, 600113
              </div>
            </div>
            <div className="h-[45%] flex gap-6 justify-center items-center py-1">
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
