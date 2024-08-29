import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import xyma from '../Assets/xymalogo_white.png';
import CircleComponent from "../CircleComponent";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import mainProductsCover from '../Assets/newbgcropped.png';
import otherProductsCover from '../Assets/heatStressMonitor.png';
// import AOS from "aos";
// import "aos/dist/aos.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [navbarProductsHover, setNavbarProductsHover] = useState(false);
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
      title: "About\u00A0Us",
      path: "/about",
    },
    {
      title: "Other\u00A0Projects",
      path: "/otherProjects",
    },
  ];

  const productPaths = [HeaderData[1].path, HeaderData[6].path];
  const productsActive = location.pathname === productPaths[0] || location.pathname === productPaths[1];

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

            {/* <ul className="hidden lg:flex gap-4 xl:gap-8 items-center">
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
            </ul> */}

            <ul className="hidden lg:flex gap-4 xl:gap-8 items-center">
              <li>
                <NavLink
                  to={HeaderData[0].path}
                  className={`hover:text-orange-400 duration-200 ${
                    location.pathname === HeaderData[0].path
                      ? "text-orange-400"
                      : ""
                  }`}
                >
                  <span>{HeaderData[0].title}</span>
                </NavLink>
                {location.pathname === HeaderData[0].path && (
                  <CircleComponent />
                )}
              </li>

              <li
                onMouseEnter={() => setNavbarProductsHover(true)}
                onMouseLeave={() => setNavbarProductsHover(false)}
              >
                {/* <NavLink
                  to={HeaderData[1].path}
                  className={`hover:text-orange-400 duration-200 ${
                    location.pathname === HeaderData[1].path
                      ? "text-orange-400"
                      : ""
                  }`}
                >
                  <span>{HeaderData[1].title}</span>
                </NavLink> */}

                <div
                  className={`hover:text-orange-400 duration-200 cursor-pointer ${
                    productsActive ? "text-orange-400" : ""
                  }`}
                >
                  <span>{HeaderData[1].title}</span>
                </div>

                {productsActive && <CircleComponent />}

                {/* navbar product hover content */}
                {navbarProductsHover && (
                  <div className="absolute left-0 backdrop-blur-sm bg-white/20 flex justify-center w-full text-gray-600 gap-4 px-4 py-8 shadow-2xl">
                    <NavLink
                      to={HeaderData[1].path}
                      className={`border  bg-[#F9F9FB] p-4 rounded-lg shadow-lg flex w-[40%] 2xl:w-[35%] hover:scale-[1.02] duration-200 cursor-pointer ${
                        location.pathname === HeaderData[1].path
                          ? "border-orange-500"
                          : "border-[#E0E1E6]"
                      }`}
                      onClick={() => setNavbarProductsHover(false)}
                    >
                      <div
                        className="w-1/2 flex justify-center items-center p-4 rounded-lg"
                        style={{
                          background:
                            "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
                        }}
                      >
                        <img
                          src={mainProductsCover}
                          alt="mainProducts"
                          className="max-h-[100px] xl:max-h-[125px] 2xl:max-h-[150px] object-cover"
                        />
                      </div>
                      <p className="w-1/2 px-4">
                        <p className="font-semibold text-base 2xl:text-xl text-gray-700">
                          Key Products
                        </p>
                        <p className="text-xs 2xl:text-base text-justify">
                          Explore our advanced range of sensors and monitoring
                          solutions for diverse measurement needs even in the
                          most challenging conditions. Our lineup features
                          Multi-Point and Multi-Parameter Temperature Mapping
                          Sensors and Ultrasonic Level Measurement Sensors.
                        </p>
                      </p>
                    </NavLink>

                    <NavLink
                      to={HeaderData[6].path}
                      className={`border  bg-[#F9F9FB] p-4 rounded-lg shadow-lg flex w-[40%] 2xl:w-[35%] hover:scale-[1.02] duration-200 cursor-pointer ${
                        location.pathname === HeaderData[6].path
                          ? "border-orange-500"
                          : "border-[#E0E1E6]"
                      }`}
                      onClick={() => setNavbarProductsHover(false)}
                    >
                      <div
                        className="w-1/2 rounded-lg flex justify-center items-center p-4"
                        style={{
                          background:
                            "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
                        }}
                      >
                        <img
                          src={otherProductsCover}
                          alt="otherProducts"
                          className="max-h-[100px] xl:max-h-[125px] 2xl:max-h-[150px] object-cover"
                        />
                      </div>
                      <p className="w-1/2 px-4">
                        <p className="font-semibold text-base 2xl:text-xl text-gray-700">
                          Other Projects
                        </p>
                        <p className="text-xs 2xl:text-base text-justify">
                          Discover more of our innovative products designed to
                          enhance thermal monitoring and analysis. Our solutions
                          offer advanced capabilities to meet various needs and
                          improve operational efficiency.
                        </p>
                      </p>
                    </NavLink>
                  </div>
                )}
              </li>

              <li>
                <NavLink
                  to={HeaderData[2].path}
                  className={`hover:text-orange-400 duration-200 ${
                    location.pathname === HeaderData[2].path ||
                    (HeaderData[2].path === "/industries" &&
                      location.pathname.startsWith("/industries"))
                      ? "text-orange-400"
                      : ""
                  }`}
                >
                  <span>{HeaderData[2].title}</span>
                </NavLink>
                {(location.pathname === HeaderData[2].path ||
                  (HeaderData[2].path === "/industries" &&
                    location.pathname.startsWith("/industries"))) && (
                  <CircleComponent />
                )}
              </li>

              <li>
                <NavLink
                  to={HeaderData[3].path}
                  className={`hover:text-orange-400 duration-200 ${
                    location.pathname === HeaderData[3].path
                      ? "text-orange-400"
                      : ""
                  }`}
                >
                  <span>{HeaderData[3].title}</span>
                </NavLink>
                {location.pathname === HeaderData[3].path && (
                  <CircleComponent />
                )}
              </li>

              <li>
                <NavLink
                  to={HeaderData[4].path}
                  className={`hover:text-orange-400 duration-200 ${
                    location.pathname === HeaderData[4].path
                      ? "text-orange-400"
                      : ""
                  }`}
                >
                  <span>{HeaderData[4].title}</span>
                </NavLink>
                {location.pathname === HeaderData[4].path && (
                  <CircleComponent />
                )}
              </li>

              <li>
                <NavLink
                  to={HeaderData[5].path}
                  className={`hover:text-orange-400 duration-200 ${
                    location.pathname === HeaderData[5].path
                      ? "text-orange-400"
                      : ""
                  }`}
                >
                  <span>{HeaderData[5].title}</span>
                </NavLink>
                {location.pathname === HeaderData[5].path && (
                  <CircleComponent />
                )}
              </li>

              {/* <li>
                <NavLink
                  to={HeaderData[6].path}
                  className={`hover:text-orange-400 duration-200 ${
                    location.pathname === HeaderData[6].path
                      ? "text-orange-400"
                      : ""
                  }`}
                >
                  <span>{HeaderData[6].title}</span>
                </NavLink>
                {location.pathname === HeaderData[6].path && (
                  <CircleComponent />
                )}
              </li> */}
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
                Get&nbsp;in&nbsp;Touch
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
            {/* <ul className="h-[60%]">
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
            </ul> */}

            <ul className="h-[60%]">
              <li
                className={`w-full h-1/6 border border-b-gray-300 flex items-center font-[700] text-lg md:text-2xl ${
                  location.pathname === HeaderData[0].path ||
                  (HeaderData[0].path === "/industries" &&
                    location.pathname.startsWith("/industries"))
                    ? "text-orange-400"
                    : ""
                }`}
                onClick={() => {
                  handleBurgerMenu();
                }}
              >
                <NavLink
                  to={HeaderData[0].path}
                  className="w-full h-full flex items-center justify-between px-4"
                >
                  {HeaderData[0].title}
                  <div
                    className={`${
                      location.pathname === HeaderData[0].path ||
                      (HeaderData[0].path === "/industries" &&
                        location.pathname.startsWith("/industries"))
                        ? "text-orange-400"
                        : "text-gray-400"
                    }`}
                  >
                    <FiArrowUpRight size={25} />
                  </div>
                </NavLink>
              </li>

              <li
                className={`w-full h-1/6 border border-b-gray-300 flex items-center font-[700] text-lg md:text-2xl ${
                  location.pathname === HeaderData[1].path ||
                  (HeaderData[1].path === "/industries" &&
                    location.pathname.startsWith("/industries"))
                    ? "text-orange-400"
                    : ""
                }`}
                onClick={() => {
                  handleBurgerMenu();
                }}
              >
                <NavLink
                  to={HeaderData[1].path}
                  className="w-full h-full flex items-center justify-between px-4"
                >
                  {HeaderData[1].title}
                  <div
                    className={`${
                      location.pathname === HeaderData[1].path ||
                      (HeaderData[1].path === "/industries" &&
                        location.pathname.startsWith("/industries"))
                        ? "text-orange-400"
                        : "text-gray-400"
                    }`}
                  >
                    <FiArrowUpRight size={25} />
                  </div>
                </NavLink>
              </li>

              <li
                className={`w-full h-1/6 border border-b-gray-300 flex items-center font-[700] text-lg md:text-2xl ${
                  location.pathname === HeaderData[2].path ||
                  (HeaderData[2].path === "/industries" &&
                    location.pathname.startsWith("/industries"))
                    ? "text-orange-400"
                    : ""
                }`}
                onClick={() => {
                  handleBurgerMenu();
                }}
              >
                <NavLink
                  to={HeaderData[2].path}
                  className="w-full h-full flex items-center justify-between px-4"
                >
                  {HeaderData[2].title}
                  <div
                    className={`${
                      location.pathname === HeaderData[2].path ||
                      (HeaderData[2].path === "/industries" &&
                        location.pathname.startsWith("/industries"))
                        ? "text-orange-400"
                        : "text-gray-400"
                    }`}
                  >
                    <FiArrowUpRight size={25} />
                  </div>
                </NavLink>
              </li>

              <li
                className={`w-full h-1/6 border border-b-gray-300 flex items-center font-[700] text-lg md:text-2xl ${
                  location.pathname === HeaderData[3].path ||
                  (HeaderData[3].path === "/industries" &&
                    location.pathname.startsWith("/industries"))
                    ? "text-orange-400"
                    : ""
                }`}
                onClick={() => {
                  handleBurgerMenu();
                }}
              >
                <NavLink
                  to={HeaderData[3].path}
                  className="w-full h-full flex items-center justify-between px-4"
                >
                  {HeaderData[3].title}
                  <div
                    className={`${
                      location.pathname === HeaderData[3].path ||
                      (HeaderData[3].path === "/industries" &&
                        location.pathname.startsWith("/industries"))
                        ? "text-orange-400"
                        : "text-gray-400"
                    }`}
                  >
                    <FiArrowUpRight size={25} />
                  </div>
                </NavLink>
              </li>

              <li
                className={`w-full h-1/6 border border-b-gray-300 flex items-center font-[700] text-lg md:text-2xl ${
                  location.pathname === HeaderData[4].path ||
                  (HeaderData[4].path === "/industries" &&
                    location.pathname.startsWith("/industries"))
                    ? "text-orange-400"
                    : ""
                }`}
                onClick={() => {
                  handleBurgerMenu();
                }}
              >
                <NavLink
                  to={HeaderData[4].path}
                  className="w-full h-full flex items-center justify-between px-4"
                >
                  {HeaderData[4].title}
                  <div
                    className={`${
                      location.pathname === HeaderData[4].path ||
                      (HeaderData[4].path === "/industries" &&
                        location.pathname.startsWith("/industries"))
                        ? "text-orange-400"
                        : "text-gray-400"
                    }`}
                  >
                    <FiArrowUpRight size={25} />
                  </div>
                </NavLink>
              </li>

              <li
                className={`w-full h-1/6 border border-b-gray-300 flex items-center font-[700] text-lg md:text-2xl ${
                  location.pathname === HeaderData[5].path ||
                  (HeaderData[5].path === "/industries" &&
                    location.pathname.startsWith("/industries"))
                    ? "text-orange-400"
                    : ""
                }`}
                onClick={() => {
                  handleBurgerMenu();
                }}
              >
                <NavLink
                  to={HeaderData[5].path}
                  className="w-full h-full flex items-center justify-between px-4"
                >
                  {HeaderData[5].title}
                  <div
                    className={`${
                      location.pathname === HeaderData[5].path ||
                      (HeaderData[5].path === "/industries" &&
                        location.pathname.startsWith("/industries"))
                        ? "text-orange-400"
                        : "text-gray-400"
                    }`}
                  >
                    <FiArrowUpRight size={25} />
                  </div>
                </NavLink>
              </li>

              <li
                className={`w-full h-1/6 border border-b-gray-300 flex items-center font-[700] text-lg md:text-2xl ${
                  location.pathname === HeaderData[6].path ||
                  (HeaderData[6].path === "/industries" &&
                    location.pathname.startsWith("/industries"))
                    ? "text-orange-400"
                    : ""
                }`}
                onClick={() => {
                  handleBurgerMenu();
                }}
              >
                <NavLink
                  to={HeaderData[6].path}
                  className="w-full h-full flex items-center justify-between px-4"
                >
                  {HeaderData[6].title}
                  <div
                    className={`${
                      location.pathname === HeaderData[6].path ||
                      (HeaderData[6].path === "/industries" &&
                        location.pathname.startsWith("/industries"))
                        ? "text-orange-400"
                        : "text-gray-400"
                    }`}
                  >
                    <FiArrowUpRight size={25} />
                  </div>
                </NavLink>
              </li>
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
