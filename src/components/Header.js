import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderData } from '../data/HeaderData';
import CircleComponent from '../CircleComponent';
import Home from '../pages/Home';
import {useNavigate } from "react-router-dom";
import xyma from "../Assets/xymalogo_white.png";

function Header() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0); 

  const handleNavItemClick = (index) => {
    setSelectedIndex(index);
  };

  const handleContactClick = () => {
    navigate("/contact");
    setSelectedIndex(null);
  };

  return (
    <div className=" flex items-center text-white justify-around w-full border border-red-400">
      <div className="border border-white">
        <img className="mr-4 md:mr-36 h-10" src={xyma} alt="Logo" />
      </div>
      <div className="flex space-x-10 items-center border border-white">
        {HeaderData.map((item, index) => (
          <div key={index} className="">
            <NavLink
              to={item.path}
              className={`${selectedIndex === index ? "text-orange-400" : ""}`}
              onClick={() => handleNavItemClick(index)}
            >
              <span>{item.title}</span>
            </NavLink>

            {selectedIndex === index && <CircleComponent />}
          </div>
        ))}
      </div>
      <div
        className="text-white py-3 px-4 rounded-full cursor-pointer border border-white"
        style={{
          background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
        }}
        onClick={handleContactClick}
      >
        Get in Touch
      </div>
    </div>
  );
}

export default Header;
