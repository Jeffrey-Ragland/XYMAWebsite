import React from 'react'
import vector from '../Assets/Vector.png';
import logo from "../Assets/logo.png";
import twitter from "../Assets/twitter.png";
import linkedin from "../Assets/linkedin.png";
import share from "../Assets/share.png";
import line from "../Assets/line.png";
import arrow from "../Assets/arrow.png";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const handleContactClick = () => {
      navigate("/contact");
    };
  return (
    <div
      className="mt-24"
      style={{
        background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
      }}
    >
      <div className="flex justify-center items-center">
        <div
          className="mt-[-50px] rounded-3xl w-full md:w-[90%] md:flex text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold p-4 px-8"
          style={{
            background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
          }}
        >
          <div className=" w-full md:w-[60%] flex flex-col items-center md:items-start">
            <div>Enhance&nbsp;Process&nbsp;Efficiency&nbsp;through</div>
            <div className="flex gap-2">
              <div>XYMA</div>
              <div>
                <div>Analytics' Innovations</div>
                <img className="w-full h-2" src={vector} />
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[40%] text-xs lg:text-sm xl:text-xs 2xl:text-base p-2 md:p-4 flex gap-2 justify-center h-16 md:h-auto mt-2 md:mt-0">
            <button
              className="bg-[#01285C] text-white rounded-full w-44 px-1"
              onClick={handleContactClick}
            >
              Get&nbsp;in&nbsp;Touch
            </button>
            <button className="bg-white text-[#01285C] rounded-full w-44 px-1">
              Download&nbsp;Brochure
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-12">
        <div className="w-[90%] text-white flex flex-col md:flex-row gap-2">
          <div className="w-full md:w-[25%] flex flex-col items-center md:items-start">
            <img className="w-32 h-14" src={logo} alt="Logo"></img>
            <div className="text-white text-xs lg:text-sm xl:text-xs 2xl:text-base w-full md:w-[80%] mt-2 text-center md:text-left">
              Patented Ultrasonic Waveguide based sensors for preventing
              unplanned downtime and enhancing process efficiency.
            </div>
            <div className="flex gap-3 mt-4">
              <img
                className="w-6 h-6 cursor-pointer"
                onClick={() =>
                  window.open("https://x.com/analyticsxyma?lang=en", "_blank")
                }
                src={twitter}
                alt="Twitter"
              ></img>
              <img
                className="w-6 h-6 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/xyma-analytics?original_referer=https%3A%2F%2Fwww.xyma.in%2F",
                    "_blank"
                  )
                }
                src={linkedin}
                alt="LinkedIn"
              ></img>
              <img
                className="w-6 h-6 cursor-pointer"
                src={share}
                alt="Share"
              ></img>
            </div>
          </div>

          <div className="w-full md:w-[50%] flex text-xs lg:text-sm xl:text-xs 2xl:text-base">
            <div className="w-1/3">
              <div className="font-semibold mb-5 text-sm lg:text-base xl:text-sm 2xl:text-lg">
                Quick Links <img className="mt-1 h-0.5 w-5" src={line} />
              </div>
              <div
                className="mb-3 cursor-pointer hover:text-orange-500 duration-200"
                onClick={() => navigate("/about")}
              >
                About Us
              </div>
              <div
                className="mb-3 cursor-pointer hover:text-orange-500 duration-200"
                onClick={() => navigate("/careers")}
              >
                Career
              </div>
              <div
                className="mb-3 cursor-pointer hover:text-orange-500 duration-200"
                onClick={() => navigate("/media")}
              >
                Media
              </div>
              <div
                className="mb-3 cursor-pointer hover:text-orange-500 duration-200"
                onClick={() => navigate("/resources")}
              >
                Resources
              </div>
            </div>

            <div className="w-1/3">
              <div className="font-semibold mb-5 text-sm lg:text-base xl:text-sm 2xl:text-lg">
                Products <img className="mt-1 h-0.5 w-5" src={line} />
              </div>
              <div className="mb-3 hover:text-orange-500 duration-200 cursor-pointer">
                μTMapS
              </div>
              <div className="mb-3 hover:text-orange-500 duration-200 cursor-pointer">
                PoRTS
              </div>
              <div className="mb-3 hover:text-orange-500 duration-200 cursor-pointer">
                Ztar
              </div>
              <div className="mb-3 hover:text-orange-500 duration-200 cursor-pointer">
                I-PAMS
              </div>
            </div>

            <div className="w-1/3">
              <div className="font-semibold mb-5 text-sm lg:text-base xl:text-sm 2xl:text-lg">
                Support <img className="mt-1 h-0.5 w-5" src={line} />
              </div>
              <div
                className="mb-3 cursor-pointer hover:text-orange-500 duration-200"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </div>
              <div className="mb-3 cursor-pointer hover:text-orange-500 duration-200">
                Contact Sales
              </div>
            </div>
          </div>

          <div className="w-full md:w-[25%] flex items-start justify-center">
            <div className="flex flex-col items-start p-4 gap-2.5 w-full bg-black/40 rounded-xl">
              <div className="text-sm lg:text-base xl:text-sm 2xl:text-lg">
                Subscribe Now
              </div>
              <form class="flex gap-2 items-center w-full">
                <input
                  type="email"
                  className="text-xs lg:text-sm xl:text-xs 2xl:text-base text-black w-[85%] rounded-sm p-2"
                  placeholder="Enter your email"
                  required
                />
                <div className="w-[15%] flex justify-center">
                  <img className="h-8 md:h-6 lg:h-8" src={arrow} />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="h-0.5 mt-4 mb-4 w-[90%] bg-[#013872]" />
        {/* footer */}
        <div className="md:flex justify-between text-white text-xs lg:text-sm xl:text-xs 2xl:text-base w-[90%] mb-4 font-light">
          <div className="md:flex text-center gap-1 justify-center">
            <div className="flex justify-center">
              <div className="mr-1">© 2022 XYMA Analytics Inc.</div>
              <div className="text-gray-400">IIT Madras Research Park, </div>
            </div>
            <div className="text-gray-400">Chennai, 600113</div>
          </div>
          <div className="flex gap-8 justify-center mt-4 md:mt-0 mb-4 md:mb-0">
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
