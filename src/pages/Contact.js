import React, { useRef, useEffect } from 'react';
import video2 from '../Images/contactOverlay2.mp4';
import map from '../Images/map.png';
import call from '../Images/call.png';
import mail from '../Images/mail.png';
import location from '../Images/location.png'; 
import line from "../Assets/underline.png";
import { IoChevronDown } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {

  const sectionRef = useRef(null);

  const handleButtonClick = () => {
    const navbarHeight = window.innerHeight * 0.1; // 10vh to account for navbar
    const sectionTop =
      sectionRef.current.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = sectionTop - navbarHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="mt-[10vh]">
      <section>
        <div className=" relative h-[60vh] md:h-[70vh] xl:h-[90vh] shadow-white shadow-2xl">
          <video
            src={video2}
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 text-white flex flex-col gap-4 justify-center items-center mx-[15%] text-center">
            <div className="text-xl md:text-4xl xl:text-3xl 2xl:text-5xl font-medium md:font-semibold">
              Unlock Insights, Elevate Performance - Reach Out to XYMA Analytics
              Today
            </div>
            <button
              className="text-white text-xs md:text-base lg:text-lg xl:text-xs text 2xl:text-xl font-normal md:font-medium py-2 px-3 md:px-5 mt-3 rounded-full flex items-center gap-1 hover:scale-90 duration-200"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
              onClick={handleButtonClick}
            >
              <div className="">Get In Touch</div>
              <div className="mt-0.5">
                <IoChevronDown size={15} />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* bottom text */}
      <div
        className="text-center font-semibold text-[40px] md:text-[90px] 2xl:text-[120px] -mt-[25px] md:-mt-[50px] 2xl:-mt-[65px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white, rgb(209, 213, 219))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        CONTACT US
      </div>

      <section
        ref={sectionRef}
        className="mx-[5%] md:mx-[20%] mt-6 mb-8 md:mb-12 2xl:mb-16 flex items-center justify-center"
      >
        <div className="">
          <div className="flex justify-center gap-2 text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-center">
            <div>Get</div>
            <div className="">
              <div>In&nbsp;Touch</div>
              <img className="w-full h-2" src={line}></img>
            </div>
          </div>

          <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl text-center mt-2 mb-2">
            Our attention is fully focused on You. Do not hesitate to contact us
            at any time
          </div>

          <div className=" mb-4">
            <form
              onSubmit={handleFormSubmit}
              className="text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl"
            >
              <div className="md:flex gap-4">
                <div className=" w-full md:w-1/2 mb-2">
                  <label
                    className="block font-semibold mb-1"
                    htmlFor="username"
                  >
                    Your Name <span className="text-[#CE2C31]">*</span>
                  </label>
                  <input
                    className="appearance-none leading-tight w-full border border-gray-400 rounded-lg p-2 text-gray-800 focus:outline-none focus:border-gray-600"
                    id="username"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className=" w-full md:w-1/2 mb-2">
                  <label className="block font-semibold mb-1" htmlFor="email">
                    Business Email <span className="text-[#CE2C31]">*</span>
                  </label>
                  <input
                    className="w-full appearance-none border border-gray-400 rounded-lg p-2 text-gray-800 leading-tight focus:outline-none focus:border-gray-600"
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>

              <div className="md:flex gap-4">
                <div className=" w-full md:w-1/2 mb-2">
                  <label className="block font-semibold mb-1" htmlFor="job">
                    Job Title <span className="text-[#CE2C31]">*</span>
                  </label>
                  <input
                    className="appearance-none leading-tight w-full md:w-full border border-gray-400 rounded-lg p-2 text-gray-800 focus:outline-none focus:border-gray-600"
                    id="job"
                    type="text"
                    placeholder="Enter your Job Title"
                  />
                </div>
                <div className=" w-full md:w-1/2 mb-2">
                  <label className="block font-semibold mb-1" htmlFor="company">
                    Company <span className="text-[#CE2C31]">*</span>
                  </label>
                  <input
                    className="w-full appearance-none border border-gray-400 rounded-lg p-2 text-gray-800 leading-tight focus:outline-none focus:border-gray-600"
                    id="company"
                    type="text"
                    placeholder="Enter your Company's Name"
                  />
                </div>
              </div>

              <div className="mb-2">
                <label className="block font-semibold mb-2" htmlFor="select">
                  Select Solution Need <span className="text-[#CE2C31]">*</span>
                </label>
                <select
                  className="w-full appearance-none border border-gray-400 rounded-lg p-2 text-gray-800 leading-tight focus:outline-none focus:border-gray-600"
                  id="select"
                  //placeholder="Select Solution"
                >
                  <option value="" disabled selected hidden>
                    Select Solution
                  </option>
                  <option value="sales">Sales</option>
                  <option value="marketing">Marketing</option>
                  <option value="finance">Finance</option>
                  <option value="hr">Human Resources</option>
                </select>
              </div>

              <div className="mb-2">
                <label className="block font-semibold mb-2" htmlFor="detail">
                  Details On Your Requirements
                  <span className="text-[#CE2C31]">*</span>
                </label>
                <textarea
                  className="w-full appearance-none border border-gray-400 rounded-lg p-2 text-gray-800 leading-tight focus:outline-none focus:border-gray-600 h-16 md:h-20"
                  id="detail"
                  type="text"
                  placeholder="Enter your requirements"
                />
              </div>

              <div className="flex justify-center">
                <div className="block md:w-full">
                  <button
                    style={{
                      background:
                        "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                    }}
                    className="text-white py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mb-8 md:mb-12 2xl:mb-16">
        <div className="flex justify-center gap-2 text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-center">
          <div>Around the world:</div>
          <div className="">
            <div>XYMA&nbsp;Analytics</div>
            <img className="w-full h-2" src={line}></img>
          </div>
        </div>

        <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl text-center mt-2">
          Installations of Ultrasonic Waveguide Sensors in different countries
        </div>
        <div className=" h-[200px] md:h-auto">
          <img className="object-cover w-full h-full" src={map} data-aos="fade"></img>
        </div>
      </section>

      <div className="text-center flex justify-center">
        <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold mb-4 md:mb-6 2xl:mb-8">
          <div>Location</div>
          <img className="w-full h-2" src={line}></img>
        </div>
      </div>

      <div className="md:flex justify-center  mx-[5%]">
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] 2xl:h-[450px] p-4">
          <iframe
            className="rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6996041325237!2d80.24036047361022!3d12.991055214454398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526789b9607537%3A0x961343cab532a48d!2sXYMA%20Analytics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1714978751471!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full md:w-1/2 p-4 flex items-center text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
          <div className="flex flex-col">
            <div className="flex border border-gray-300 rounded-xl p-2">
              <img className="w-7 h-7 mt-0.5" src={call} alt="Call Icon" />
              <div className="ml-4 text-[#60646C] font-semibold">
                Contact Details:
                <div className="text-black">(+91) 9442949347</div>
              </div>
            </div>

            <div className="flex mt-3 border border-gray-300 rounded-xl p-2">
              <img
                className="w-7 h-7 mt-0.5"
                src={location}
                alt="Location Icon"
              />
              <div className="ml-4 text-[#60646C] font-semibold">
                Current Location:
                <div className="text-black">XYMA ANALYTICS PRIVATE LIMITED</div>
                <div className="text-black">
                  B4-01, 4th Floor, Phase II, B-Block, IITM Research Park,
                  Kanagam Road, Taramani, Chennai, TamilNadu, India - 600113
                </div>
              </div>
            </div>

            <div className="mt-3 flex border border-gray-300 rounded-xl p-2">
              <img className="w-7 h-7 mt-0.5" src={mail} alt="Mail Icon" />
              <div className="ml-4 text-[#60646C] font-semibold">
                Email Address:
                <div className="text-black">
                  info@xyma.in
                  <br />
                  nishanthraja@xyma.in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
