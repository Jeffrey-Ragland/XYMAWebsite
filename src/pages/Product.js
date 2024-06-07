import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import utmapsLogo from '../Assets/utmapsLogo.png';
import portsLogo from '../Assets/portsLogo.png';
import ztarLogo from '../Assets/ztarLogo.png';
// import video from "../Images/contactOverlay2.mp4";
import utmapsDemo from '../Assets/utmapsDemo.mp4'
import portsDemo from '../Assets/portsDemo.mp4'
import { RiPlayCircleFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdCloseCircle } from "react-icons/io";

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0); //cover image slide
  const [renderUtmapsVideo, setRenderUtmapsVideo] = useState(false); //product video
  const [renderPortsVideo, setRenderPortsVideo] = useState(false);
  const [renderIconMenu, setRenderIconMenu] = useState(false); //icon menu
  const [activeSection, setActiveSection] = useState([]); //sections in viewport
  const [renderReadMoreUtmaps, setRenderReadMoreUtmaps] = useState(false);
  const [renderReadMorePorts, setRenderReadMorePorts] = useState(false);
  const [renderReadMoreZtar, setRenderReadMoreZtar] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sliderRef = useRef(null);
  const coverImageRef = useRef(null);
  const location = useLocation();

  const sectionRefs = {
    uTMapS: useRef(null),
    PoRTS: useRef(null),
    Ztar: useRef(null),
  };

  //to control cover image slide change
  const handleSlideClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  //cover image slick carousel
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
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  //animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // condition to display icon menu
  useEffect(() => {
    const handleScroll = () => {
      const coverImagePosition = coverImageRef.current.getBoundingClientRect();
      const coverImageHeight =
        coverImagePosition.bottom - coverImagePosition.top;
      const scrollDistance = document.documentElement.scrollTop;
      const scrollThreshold = coverImageHeight * 0.6; // 60% of the cover image scrolled

      if (scrollDistance > scrollThreshold) {
        setRenderIconMenu(true);
      } else {
        setRenderIconMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //handles the scroll function
  const handleSectionScroll = (ref) => {
    scrollToSection(ref);
  };

  const scrollToSection = (ref) => {
    const navbarHeight = window.innerHeight * 0.1; // 10vh to account for navbar
    const sectionTop = ref.current.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = sectionTop - navbarHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  //for active section in display
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
        if (ref.current) {
          const sectionPosition = ref.current.getBoundingClientRect();
          const sectionHeight = sectionPosition.height;

          const visiblePart =
            Math.min(viewportHeight, sectionPosition.bottom) -
            Math.max(0, sectionPosition.top);
          const visiblePercentage = (visiblePart / sectionHeight) * 100;

          if (visiblePercentage >= 70) {
            setActiveSection((prevActiveSections) => {
              if (!prevActiveSections.includes(sectionId)) {
                return [...prevActiveSections, sectionId];
              }
              return prevActiveSections;
            });
          } else {
            setActiveSection((prevActiveSections) => {
              return prevActiveSections.filter((id) => id !== sectionId);
            });
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - window.innerHeight * 0.1,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  // progress scroll bar
  const handleProgressScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleProgressScroll);
    return () => window.removeEventListener("scroll", handleProgressScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="h-[10vh]">{/* navbar space */}</div>
      {/* scroll progress bar */}
      <div
        className="fixed w-full h-[1vh] top-[9vh] left-0 z-30"
        style={{
          background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
        }}
      >
        <div
          className="h-[1vh]"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #FF6347 0%,  #FF0000 101.48%)",
          }}
        />
      </div>
      <div ref={coverImageRef} className="shadow-white shadow-2xl relative">
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
        <div className=" absolute w-full flex gap-2 bottom-[20%] p-2 xl:px-[8%] justify-center xl:justify-normal">
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
      </div>

      {/* icon menu */}
      {renderIconMenu && (
        <div
          className="hidden border border-r-orange-400 border-t-orange-400 border-b-orange-400 bg-white z-40 fixed left-0 top-1/2 transform -translate-y-1/2 px-1 md:flex flex-col gap-12 py-2 rounded-r-2xl text-xs font-medium"
          data-aos=""
        >
          <div
            onClick={() => handleSectionScroll(sectionRefs.uTMapS)}
            className={`cursor-pointer rounded-full   ${
              activeSection.includes("uTMapS")
                ? "border-4 border-orange-400"
                : "border-4 border-black"
            }`}
          >
            <img src={utmapsLogo} className="h-6 rounded-full"></img>
          </div>
          <div
            onClick={() => handleSectionScroll(sectionRefs.PoRTS)}
            className={`cursor-pointer bg-black rounded-full ${
              activeSection.includes("PoRTS")
                ? "border-4 border-orange-400"
                : "border-4 border-black"
            }`}
          >
            <img src={portsLogo} className="h-6 rounded-full"></img>
          </div>
          <div
            onClick={() => handleSectionScroll(sectionRefs.Ztar)}
            className={`cursor-pointer bg-black rounded-full ${
              activeSection.includes("Ztar")
                ? "border-4 border-orange-400"
                : "border-4 border-black"
            }`}
          >
            <img src={ztarLogo} className="h-6 rounded-full"></img>
          </div>
        </div>
      )}

      {/* product cards */}

      <div className="  mx-[5%] xl:mx-[8%] flex flex-col items-center">
        {/* utmaps */}
        <section id="uTMapS" ref={sectionRefs.uTMapS}>
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
                  className="w-[50%] h-[85%] object-cover object-top"
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
                    A single customizable waveguide can measure temperature at
                    10 points over 50 meters length.
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-[55%] xl:p-2 md:p-4 flex flex-col justify-evenly ">
              {/* heading and play button */}
              <div className="  md:flex items-start justify-between gap-2 mb-2">
                <div className=" mb-2 md:mb-0 text-lg lg:text-2xl 2xl:text-4xl font-semibold">
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
                <span
                  className="text-[#01285C] font-semibold cursor-pointer ml-1"
                  onClick={() => setRenderReadMoreUtmaps(true)}
                >
                  Read More...
                </span>
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
                  <div className="font-semibold">
                    Semiconductor Manufacturing
                  </div>
                </div>

                <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                  <div className="flex items-center justify-center">
                    <img className="w-10" src={ref} />
                  </div>
                  <div className="font-semibold">Refiniries</div>
                </div>
              </div>
            </div>
            {/* utmaps additional description */}
            {renderReadMoreUtmaps && (
              <div
                className="w-full h-full absolute inset-0 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg"
                data-aos="zoom-in"
              >
                {/* content */}
                <div className="md:flex h-full">
                  <div className="w-full md:w-[20%] flex items-center justify-center mt-4 md:mt-0">
                    <img
                      className="h-60 md:h-auto"
                      src={utmap}
                      alt="utmaps"
                      data-aos="slide-left"
                    />
                  </div>
                  <div className=" w-full md:w-[40%] px-4 py-4 flex flex-col gap-2 text-[#60646C] font-medium text-justify text-xs md:text-sm lg:text-base 2xl:text-xl">
                    <div className="text-black font-semibold text-left text-base md:text-lg lg:text-xl 2xl:text-2xl">
                      Explanation
                    </div>
                    <div>
                      µTMapS & µSTMapS are IIoT-enabled temperature measurement
                      and temperature profiling sensors that captures continuous
                      measurements at multiple points with a single customizable
                      waveguide with multiple configurations in contrast to
                      contact based thermocouples/RTDs or contactless IR guns.
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Nulla consequat massa quis enim.
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium.
                    </div>
                  </div>
                  <div className=" w-full md:w-[40%] px-4 pt-4 md:pt-12 flex flex-col gap-2 text-[#60646C] font-medium text-justify text-xs md:text-sm lg:text-base 2xl:text-xl">
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim. Donec pede justo, fringilla vel, aliquet nec,
                      vulputate eget, arcu. Imperdiet a, venenatis vitae, justo.
                      Donec ultricies nec, pellentesque eu, pretium. In enim
                      justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    </div>
                  </div>
                </div>
                <button
                  className="text-orange-400 absolute right-2 top-2"
                  onClick={() => setRenderReadMoreUtmaps(false)}
                >
                  <IoMdCloseCircle size={30} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ports */}
        <section id="PoRTS" ref={sectionRefs.PoRTS}>
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
                  className="w-[60%] h-[65%] lg:w-[50%] lg:h-[80%] object-cover object-top"
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
              <div className="  md:flex items-start justify-between gap-2 mb-2">
                <div className="mb-2 md:mb-0 text-lg lg:text-2xl 2xl:text-4xl font-semibold">
                  Multi-Parameter Measurement Sensor
                </div>
                <div
                  className=" flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2 cursor-pointer"
                  onClick={() => setRenderPortsVideo(true)}
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
                PoRTS is an invasive/non-invasive based IIoT-enabled rheology
                and temperature measurement sensor that continuously captures
                multiple parameters such as viscosity, density and temperature
                with a single waveguide unlike discrete measurements with
                thermocouple/RTDs or discrete measurements with sampling from
                viscometer and density meter.
                <span
                  className="text-[#01285C] font-semibold cursor-pointer ml-1"
                  onClick={() => setRenderReadMorePorts(true)}
                >
                  Read More...
                </span>
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
            {/* ports additional description */}
            {renderReadMorePorts && (
              <div
                className="w-full h-full absolute inset-0 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg"
                data-aos="zoom-in"
              >
                {/* content */}
                <div className="md:flex h-full">
                  <div className=" w-full md:w-[40%] px-4 py-4 flex flex-col gap-2 text-[#60646C] font-medium text-justify text-xs md:text-sm lg:text-base 2xl:text-xl">
                    <div className="text-black font-semibold text-left text-base md:text-lg lg:text-xl 2xl:text-2xl">
                      Explanation
                    </div>
                    <div>
                      PoRTS is an invasive/non-invasive based IIoT-enabled
                      rheology and temperature measurement sensor that
                      continuously captures multiple parameters such as
                      viscosity, density and temperature with a single waveguide
                      unlike discrete measurements with thermocouple/RTDs or
                      discrete measurements with sampling from viscometer and
                      density meter.
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Nulla consequat massa quis enim.
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium.
                    </div>
                  </div>
                  <div className=" w-full md:w-[40%] px-4 pt-12 flex flex-col gap-2 text-[#60646C] font-medium text-justify text-xs md:text-sm lg:text-base 2xl:text-xl">
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim. Donec pede justo, fringilla vel, aliquet nec,
                      vulputate eget, arcu. Imperdiet a, venenatis vitae, justo.
                      Donec ultricies nec, pellentesque eu, pretium. In enim
                      justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    </div>
                  </div>
                  <div className="w-full md:w-[20%] flex items-center justify-center mt-4 md:mt-0">
                    <img
                      className="h-60 md:h-auto"
                      src={ports}
                      alt="ports"
                      data-aos="slide-right"
                    />
                  </div>
                </div>
                <button
                  className="text-orange-400 absolute right-2 top-2"
                  onClick={() => setRenderReadMorePorts(false)}
                >
                  <IoMdCloseCircle size={30} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ztar */}
        <section id="Ztar" ref={sectionRefs.Ztar}>
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
                  className="w-[60%] h-[75%] lg:w-[55%] lg:h-[95%] object-cover object-top"
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
              <div className=" md:flex items-start justify-between gap-2 mb-2">
                <div className="mb-2 md:mb-0 text-lg lg:text-2xl 2xl:text-4xl font-semibold">
                  Ultrasonic contact & non-contact based level measurement
                  sensor
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
                <span
                  className="text-[#01285C] font-semibold cursor-pointer ml-1"
                  onClick={() => setRenderReadMoreZtar(true)}
                >
                  Read More...
                </span>
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
            {/* ztar additional description */}
            {renderReadMoreZtar && (
              <div
                className="w-full h-full absolute inset-0 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg"
                data-aos="zoom-in"
              >
                {/* content */}
                <div className="md:flex h-full">
                  <div className=" w-full md:w-[20%] flex items-center justify-center">
                    <img
                      className="h-60 md:h-auto"
                      src={ztar}
                      alt="ztar"
                      data-aos="slide-left"
                    />
                  </div>
                  <div className=" w-full md:w-[40%] px-4 py-4 flex flex-col gap-2 text-[#60646C] font-medium text-justify text-xs md:text-sm lg:text-base 2xl:text-xl">
                    <div className="text-black font-semibold text-left text-base md:text-lg lg:text-xl 2xl:text-2xl">
                      Explanation
                    </div>
                    <div>
                      Ztar is a contact/contactless IIoT-enabled level
                      measurement sensor that captures continuous level across
                      any hazardous environment with accuracy in contrast to
                      radar-based level measurement sensors.
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Nulla consequat massa quis enim.
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                      venenatis vitae, justo. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium.
                    </div>
                  </div>
                  <div className=" w-full md:w-[40%] px-4 pt-4 md:pt-12 flex flex-col gap-2 text-[#60646C] font-medium text-justify text-xs md:text-sm lg:text-base 2xl:text-xl">
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim. Donec pede justo, fringilla vel, aliquet nec,
                      vulputate eget, arcu.
                    </div>
                  </div>
                </div>
                <button
                  className="text-orange-400 absolute right-[1%] top-[2%]"
                  onClick={() => setRenderReadMoreZtar(false)}
                >
                  <IoMdCloseCircle size={30} />
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
      {/* utmaps product video */}
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
              <video autoPlay controls>
                <source src={utmapsDemo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      {/* ports product video */}
      {renderPortsVideo && (
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
                  PoRTS&nbsp;Product&nbsp;Demo
                </div>
                <button
                  className="text-orange-400"
                  onClick={() => setRenderPortsVideo(false)}
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
              <video autoPlay controls>
                <source src={portsDemo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
