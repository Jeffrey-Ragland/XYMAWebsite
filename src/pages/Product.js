import React, { useState, useRef, useEffect } from "react";
import "./Sb.css";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
import image3 from "../Assets/image3.png";
import utmap from "../Assets/utmaps.png";
import isteel from "../Assets/isteel.png";
import ports from "../Assets/ports.png";
import ztar from "../Assets/Ztar.png";
import paint from "../Assets/paint.png";
import metal from "../Assets/metal.png";
import aicon from "../Assets/aluminumicon.png";
import refrigerant from "../Assets/refrigerant.png";
import luboil from "../Assets/luboil.png";
import semi from "../Assets/semi.png";
import ref from "../Assets/refineries.png";
import eor from "../Assets/eor.png";
import video from "../Images/contactOverlay2.mp4";
//import utmapsDemo from '../Assets/videos/utmapsDemoCompressed.mp4'
import { RiPlayCircleFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdCloseCircle } from "react-icons/io";

const Product = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [renderUtmapsVideo, setRenderUtmapsVideo] = useState(false);
  const sliderRef = useRef(null);

  const handleSlideClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    beforeChange: (current, next) => setCurrentSlide(next)
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  
  return (
    <div className="relative overflow-hidden">
      <div className="h-[10vh]">{/* navbar space */}</div>
      <div className="shadow-white shadow-2xl relative">
        <Slider ref={sliderRef} {...settings}>
          {/* image 1 */}
          <div className="h-[60vh] md:h-[70vh] xl:h-[90vh] relative">
            <img
              className="w-full h-full object-cover object-right-top"
              src={image1}
              alt="image1"
            />
            <div className=" inset-0 xl:w-[32%] 2xl:w-[42%] flex flex-col gap-2 lg:gap-4 absolute m-[8%] text-white  items-center justify-center xl:items-start xl:justify-start">
              <div className=" text-2xl md:text-5xl lg:text-6xl 2xl:text-8xl font-medium md:font-semibold text-center xl:text-left">
                Multi-point Temperature Measurements
              </div>
              <div
                className=" p-1 text-center xl:text-left text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-medium md:font-semibold"
                style={{
                  background:
                    "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              >
                Up to 1600° C
              </div>
              <div className=" text-xs md:text-lg lg:text-xl xl:text-base  2xl:text-xl font-normal md:font-medium text-center xl:text-left">
                “The Disruptive Ultrasonic Waveguide Technology”
              </div>
            </div>
          </div>

          {/* image 2 */}
          <div className="h-[60vh] md:h-[70vh] xl:h-[90vh] relative">
            <img
              className="w-full h-full object-cover object-right-top"
              src={image2}
              alt="image2"
            />
            <div className=" inset-0 xl:w-[32%] 2xl:w-[42%] flex flex-col gap-2 lg:gap-4 absolute m-[8%] text-white  items-center justify-center xl:items-start xl:justify-start">
              <div className=" text-2xl md:text-5xl lg:text-6xl 2xl:text-8xl font-medium md:font-semibold text-center xl:text-left">
                Multi - Parameter Measurements
              </div>
              <div
                className=" p-1 text-center xl:text-left text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-medium md:font-semibold"
                style={{
                  background:
                    "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              >
                Viscosity, Density, Temperature
              </div>
              <div className=" text-xs md:text-lg lg:text-xl xl:text-base  2xl:text-xl font-normal md:font-medium text-center xl:text-left">
                “The Disruptive Ultrasonic Waveguide Technology”
              </div>
            </div>
          </div>

          {/* image 3 */}
          <div className="h-[60vh] md:h-[70vh] xl:h-[90vh] relative">
            <img
              className="w-full h-full object-cover object-right-top"
              src={image3}
              alt="image3"
            />
            <div className=" inset-0 xl:w-[32%] 2xl:w-[42%] flex flex-col gap-2 lg:gap-4 absolute m-[8%] text-white  items-center justify-center xl:items-start xl:justify-start">
              <div className=" text-2xl md:text-5xl lg:text-6xl 2xl:text-8xl font-medium md:font-semibold text-center xl:text-left">
                Powered by AI
              </div>
              <div
                className=" p-1 text-center xl:text-left text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-medium md:font-semibold"
                style={{
                  background:
                    "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              >
                IIoT Enabled, Data Analytics, Anomaly Detection, Predictive
                Maintenance
              </div>
            </div>
          </div>
        </Slider>
        <div className=" absolute w-full flex gap-2 bottom-[10%] p-2 xl:px-[8%] justify-center xl:justify-normal">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-16 h-1 cursor-pointer rounded-full ${
                currentSlide === index ? "bg-white" : "bg-white/20"
              }`}
              onClick={() => handleSlideClick(index)}
            />
          ))}
        </div>
      </div>

      {/* bottom text */}
      <div
        className="text-center font-semibold text-[40px] md:text-[90px] 2xl:text-[120px] -mt-[20px] md:-mt-[50px] 2xl:-mt-[65px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white, rgb(209, 213, 219))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        XYMA PRODUCTS
      </div>

      {/* product cards */}

      <div className="  mx-[5%] xl:mx-[8%] flex flex-col items-center">
        {/* utmaps */}
        <div
          className="md:flex p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg mb-4 max-w-[1640px]"
          data-aos="flip-up"
        >
          <div className=" w-full md:w-[45%] mb-2 xl:mb-0 xl:p-2 ">
            <div
              className="w-full h-full flex flex-col justify-center items-center rounded-lg relative"
              style={{
                background:
                  "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
              }}
            >
              <img
                className="w-[45%] h-[95%] object-cover object-top"
                src={utmap}
                alt="UTMapS"
              />
              <div
                className="absolute bottom-0 w-full px-4 rounded-b-lg py-2"
                style={{
                  background: "rgba(64, 64, 64, 0.5)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold mb-1"
                  style={{
                    background:
                      "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    display: "inline-block",
                  }}
                >
                  μTMapS
                </div>
                <div className=" text-white text-xs md:text-sm lg:text-lg xl:text-base 2xl:text-xl">
                  A single customizable waveguide can measure temperature at 10
                  points over 50 meters length.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[55%] xl:p-2 md:p-4 flex flex-col justify-evenly ">
            {/* heading and play button */}
            <div className="  md:flex items-center justify-between gap-2 mb-2">
              <div className=" mb-2 md:mb-0 text-[clamp(20px,3vw,40px)] font-semibold">
                Multi-Point Temperature Mapping Sensor
              </div>
              <div
                className="  flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2  cursor-pointer"
                onClick={() => setRenderUtmapsVideo(true)}
              >
                <div className="text-[#FE9D1C]">
                  <RiPlayCircleFill size={20} />
                </div>
                <div className="text-sm mb-[2px] text-white">
                  Play&nbsp;Video
                </div>
              </div>
            </div>

            {/* orange tab */}
            <div className="md:flex">
              <div className="px-2 py-1 rounded-full text-[clamp(16px,1vw,20px)] font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2">
                Temperature Range: 25° C to 1600° C
              </div>
            </div>

            {/* description */}
            <div className="  text-[#60646C] text-[clamp(16px,1.2vw,20px)] mb-2 font-medium">
              µTMapS & µSTMapS are IIoT-enabled temperature measurement and
              temperature profiling sensors that captures continuous
              measurements at multiple points with a single customizable
              waveguide with multiple configurations in contrast to contact
              based thermocouples/RTDs or contactless IR guns.
            </div>

            {/* cards */}
            <div className=" md:flex gap-2 mb-2 text-sm lg:text-base 2xl:text-xl">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 border border-[#D9D9E0] bg-white p-2 mb-2 md:mb-0">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={isteel} />
                </div>
                <div className="font-semibold">Steel Manufacturing</div>
              </div>

              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={aicon} />
                </div>
                <div className="font-semibold">Aluminium Manufacturing</div>
              </div>
            </div>

            <div className=" md:flex gap-2  mb-2 text-sm lg:text-base 2xl:text-xl">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white mb-2 md:mb-0">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={semi} />
                </div>
                <div className="font-semibold">Semiconductor Manufacturing</div>
              </div>

              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={ref} />
                </div>
                <div className="font-semibold">Refiniries</div>
              </div>
            </div>
          </div>
        </div>

        {/* ports */}
        <div
          className="md:flex p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg mb-4 max-w-[1640px]"
          data-aos="flip-up"
        >
          <div className="w-full md:w-[45%] mb-2 xl:mb-0 xl:p-2 ">
            <div
              className="w-full h-full flex flex-col justify-center items-center rounded-lg relative"
              style={{
                background:
                  "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
              }}
            >
              <img
                className="w-[50%] h-[70%] lg:w-[45%] lg:h-[80%] object-cover object-top"
                src={ports}
                alt="ports"
              />
              <div
                className="absolute bottom-0 w-full px-4 rounded-b-lg py-2"
                style={{
                  background: "rgba(64, 64, 64, 0.5)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div
                  className=" text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold mb-1"
                  style={{
                    background:
                      "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    display: "inline-block",
                  }}
                >
                  PoRTS
                </div>
                <div className="text-white text-xs md:text-sm lg:text-lg xl:text-base 2xl:text-xl">
                  A single customizable wavelength can measure viscosity,
                  density & Temperature continuously.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[55%] xl:p-2 md:p-4 flex flex-col justify-evenly">
            {/* heading and play button */}
            <div className="  md:flex items-center justify-between gap-2 mb-2">
              <div className="mb-2 md:mb-0 text-[clamp(20px,3vw,40px)] font-semibold">
                Multi-Parameter Measurement Sensor
              </div>
              <div className=" flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2">
                <div className="text-[#FE9D1C]">
                  <RiPlayCircleFill size={20} />
                </div>
                <div className="text-sm mb-[2px] text-white">
                  Play&nbsp;Video
                </div>
              </div>
            </div>

            {/* orange tab */}
            <div className="md:flex flex-wrap lg:gap-2 text-[clamp(16px,1vw,20px)] font-medium">
              <div className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2 lg:mb-0">
                Viscosity: 50 cP - 15000 cP
              </div>

              <div className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2 lg:mb-0">
                Density: 700 kg/m³ to 1200 kg/m³
              </div>

              <div className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2">
                Temperature: 20° C to 400° C
              </div>
            </div>

            {/* description */}
            <div className=" text-[#60646C] text-[clamp(16px,1.2vw,20px)] mb-2 font-medium">
              PoRTS is an invasive/non-invasive based IIoT-enabled rheology and
              temperature measurement sensor that continuously captures multiple
              parameters such as viscosity, density and temperature with a
              single waveguide unlike discrete measurements with
              thermocouple/RTDs or discrete measurements with sampling from
              viscometer and density meter.
            </div>

            {/* cards */}
            <div className="md:flex gap-2 mb-2 text-sm lg:text-base 2xl:text-xl">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 border border-[#D9D9E0] bg-white p-2 mb-2 md:mb-0">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={paint} />
                </div>
                <div className="font-semibold">Paint Manufacturing</div>
              </div>

              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={luboil} />
                </div>
                <div className="font-semibold">Lubrication Oil</div>
              </div>
            </div>

            <div className="md:flex gap-2  mb-2 text-sm lg:text-base 2xl:text-xl">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={eor} />
                </div>
                <div className="font-semibold">E.O.R.</div>
              </div>
            </div>
          </div>
        </div>

        {/* ztar */}
        <div
          className="md:flex p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg mb-4 max-w-[1640px]"
          data-aos="flip-up"
        >
          <div className="w-full md:w-[45%] mb-2 xl:mb-0 xl:p-2 ">
            <div
              className="w-full h-full flex flex-col justify-center items-center rounded-lg relative"
              style={{
                background:
                  "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
              }}
            >
              <img
                className="w-[50%] h-[75%] lg:w-[45%] lg:h-[95%] object-cover object-top"
                src={ztar}
                alt="ztar"
              />
              <div
                className="absolute bottom-0 w-full px-4 rounded-b-lg py-2"
                style={{
                  background: "rgba(64, 64, 64, 0.5)",
                  backdropFilter: "blur(9px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold mb-1"
                  style={{
                    background:
                      "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    display: "inline-block",
                  }}
                >
                  Ztar
                </div>
                <div className=" text-white text-xs md:text-sm lg:text-lg xl:text-base 2xl:text-xl">
                  A single wavelength can measure viscosity, density &
                  Temperature continuously.
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[55%] xl:p-2 md:p-4 flex flex-col justify-evenly">
            {/* heading and play button */}
            <div className=" md:flex items-center justify-between gap-2 mb-2">
              <div className="mb-2 md:mb-0 text-[clamp(20px,3vw,40px)] font-semibold">
                Ultrasonic contact & non-contact based level measurement sensor
              </div>
              <div className=" flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2">
                <div className="text-[#FE9D1C]">
                  <RiPlayCircleFill size={20} />
                </div>
                <div className="text-sm mb-[2px] text-white">
                  Play&nbsp;Video
                </div>
              </div>
            </div>

            {/* orange tab */}
            <div className="md-flex">
              <div className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[clamp(16px,1vw,20px)] font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2">
                Level: 0.03 m to 10 m
              </div>
            </div>

            {/* description */}
            <div className=" text-[#60646C] text-[clamp(16px,1.2vw,20px)] mb-2 font-medium">
              Ztar is a contact/contactless IIoT-enabled level measurement
              sensor that captures continuous level across any hazardous
              environment with accuracy in contrast to radar-based level
              measurement sensors.
            </div>

            {/* cards */}
            <div className=" md:flex gap-2 mb-2 md:mb-20 text-sm lg:text-base 2xl:text-xl">
              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 border border-[#D9D9E0] bg-white p-2 mb-2 md:mb-0">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={metal} />
                </div>
                <div className="font-semibold">Metal Manufacturing</div>
              </div>

              <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                <div className="flex items-center justify-center">
                  <img className="w-10" src={refrigerant} />
                </div>
                <div className="font-semibold">Refrigerants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderUtmapsVideo && (
        <div className="fixed inset-0 w-full h-full bg-black/80 z-50">
          <div className="  fixed bg-white text-3xl text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md">
            <div className="">
              <div
                className=" flex gap-2 justify-between p-3 text-white"
                style={{
                  background:
                    "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
                }}
              >
                <div className="text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-3xl font-semibold">
                  μTMapS&nbsp;Product&nbsp;Demo
                </div>
                <button
                  className="text-orange-400"
                  onClick={() => setRenderUtmapsVideo(false)}
                >
                  <IoMdCloseCircle size={30} />
                </button>
              </div>
              <div
                className="h-1"
                style={{
                  background:
                    "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                }}
              />
            </div>
            <div className="flex justify-center p-0.5">
              <video className="" src={video} autoPlay controls />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
