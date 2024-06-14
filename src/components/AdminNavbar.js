import React from 'react'
import xyma from "../Assets/xymalogo_white.png";

import { useNavigate, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const AdminNavbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const adminPaths = [
      {
        title: "Portal",
        path: "/admin@2k24Portal",
      },
      {
        title: "Applications",
        path: "/admin@2k24Applications",
      },
    ];

  return (
    <div className="fixed top-0 left-0 w-full">
      <div
        className="flex items-center h-[9vh] text-white px-4"
        style={{
          background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
        }}
      >
        <div className="flex items-center gap-4 h-full  w-1/3">
          <div className="h-full flex items-center">
            <img className="h-[80%]" src={xyma} alt="Logo" />
          </div>
          <div className="text-base md:text-xl 2xl:text-2xl font-medium">
            Admin Portal
          </div>
        </div>

        {/* routes */}
        <div className="flex gap-4 justify-center  w-1/3">
          {adminPaths.map((item, index) => (
            <div key={index} className="">
              <NavLink
                to={item.path}
                className={`${
                  location.pathname === item.path && "text-orange-400"
                }`}
              >
                <span>{item.title}</span>
              </NavLink>
            </div>
          ))}
        </div>

        <div className=" w-1/3 flex justify-end">
          <button
            className="py-2 px-4 rounded-full hover:scale-110 duration-200 text-sm 2xl:text-base font-medium"
            style={{
              background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
            }}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/admin@2k24");
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div
        className="h-[1vh] mb-4"
        style={{
          background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
        }}
      ></div>
    </div>
  );
}

export default AdminNavbar
