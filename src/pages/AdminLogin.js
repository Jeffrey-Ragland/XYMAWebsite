import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import xyma from '../Brand/xyma.png';
import adminLoginBg from '../Assets/adminLoginBg.JPG';
import { TbSquareRoundedChevronsLeftFilled } from "react-icons/tb";

const AdminLogin = () => {

    const [formData, setFormData] = useState({
        Username: '',
        Password: ''
    });
    const navigate = useNavigate();

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleAdminLoginSubmit = (e) => {
        e.preventDefault();
        fetch("https://database.xyma.live/sensor/adminlogin", {
          // fetch("http://localhost:4000/backend/adminlogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("server response", data);
            if (data.token) {
              localStorage.setItem("token", data.token);
              navigate(data.redirectUrl);
            } else {
              window.alert("Invalid credentials");
            }
          })
          .catch((err) => console.log(err));
    };

  return (
    <div
      className="flex items-center justify-center h-screen relative"
      style={{
        backgroundImage: `url(${adminLoginBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute left-4 top-4 text-orange-500 cursor-pointer" onClick={() => navigate('/careers')}>
        <TbSquareRoundedChevronsLeftFilled size={40} />
      </div>
      <div className="flex flex-col p-4 items-center gap-4 rounded-md backdrop-blur-sm bg-white/40 text-base md:text-lg 2xl:text-xl">
        <div>
          <img className="h-10" src={xyma} alt="logo" />
        </div>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleAdminLoginSubmit}
        >
          <div>
            <input
              type="text"
              name="Username"
              value={formData.Username}
              onChange={handleFormChange}
              placeholder="Username..."
              required
              autoComplete="off"
              className="w-full p-1 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600 text-gray-800"
            />
          </div>
          <div>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleFormChange}
              placeholder="Password..."
              required
              className="w-full p-1 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600 text-gray-800"
            />
          </div>
          <button
            className="py-2 px-4 rounded-md text-sm 2xl:text-base font-medium text-white hover:scale-110 duration-200"
            type="submit"
            style={{
              background: "linear-gradient(180deg, #98FB98 0%, #25c916 100%)",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin
