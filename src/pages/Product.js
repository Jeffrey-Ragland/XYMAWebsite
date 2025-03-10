import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image1 from "../Assets/productCover1.png";
import image2 from "../Assets/productCover2.png";
import image3 from "../Assets/productCover3.png";
import utmap from "../Assets/utmaps.png";
import isteel from "../Assets/isteel.png";
import ports from "../Assets/ports.png";
import ztar from "../Assets/Ztar.png";
import ipams from "../Assets/IPAMS.png";
import paint from "../Assets/paint.png";
import metal from "../Assets/metal.png";
import aicon from "../Assets/aluminumicon.png";
import refrigerant from "../Assets/refrigerant.png";
import luboil from "../Assets/luboil.png";
import semi from "../Assets/semi.png";
import ref from "../Assets/refineries.png";
import eor from "../Assets/eor.png";
import utmapsLogo from "../Assets/utmapsLogo.png";
import portsLogo from "../Assets/portsLogo.png";
import ztarLogo from "../Assets/ztarLogo.png";
import ipamsLogo from "../Assets/ipamsLogo.png";
import ipamsIcon1 from "../Assets/ipamsIcon1.png";
import ipamsIcon2 from "../Assets/ipamsIcon2.png";
import ipamsIcon3 from "../Assets/ipamsIcon3.png";
import utmapsDemo from "../videoAssets/utmapsDemo.mp4";
import portsDemo from "../videoAssets/portsDemo.mp4";
import ztarDemo from "../videoAssets/ztarDemo.mp4";
import ipamsDemo from "../videoAssets/ipamsDemo.mp4";
import additionalLogo1 from "../Assets/additionalLogo1.png";
import additionalLogo2 from "../Assets/additionalLogo2.png";
import additionalLogo3 from "../Assets/additionalLogo3.png";
import additionalLogo4 from "../Assets/additionalLogo4.png";
import additionalLogo5 from "../Assets/additionalLogo5.png";
import additionalLogo6 from "../Assets/additionalLogo6.png";
import additionalLogo7 from "../Assets/additionalLogo7.png";
import line from "../Assets/underline.png";
import { RiPlayCircleFill } from "react-icons/ri";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { IoMdCloseCircle } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0); //cover image slide
  const [renderUtmapsVideo, setRenderUtmapsVideo] = useState(false); //product video
  const [renderPortsVideo, setRenderPortsVideo] = useState(false);
  const [renderZtarVideo, setRenderZtarVideo] = useState(false);
  const [renderIpamsVideo, setRenderIpamsVideo] = useState(false);
  const [renderIconMenu, setRenderIconMenu] = useState(false); //icon menu
  const [activeSection, setActiveSection] = useState([]); //sections in viewport
  const [renderReadMoreUtmaps, setRenderReadMoreUtmaps] = useState(false);
  const [renderReadMorePorts, setRenderReadMorePorts] = useState(false);
  const [renderReadMoreZtar, setRenderReadMoreZtar] = useState(false);
  const [renderReadMoreIpams, setRenderReadMoreIpams] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sliderRef = useRef(null);
  const coverImageRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const sectionRefs = {
    uTMapS: useRef(null),
    PoRTS: useRef(null),
    Ztar: useRef(null),
    IPAMS: useRef(null),
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
      <main ref={coverImageRef} className="shadow-white shadow-2xl relative">
        <Slider ref={sliderRef} {...settings}>
          {/* image 1 */}
          <div className="h-[60vh] md:h-[70vh] xl:h-[90vh] relative">
            <img
              className="w-full h-full object-cover object-right-top"
              src={image1}
              alt="image1"
            />
            <div className=" inset-0 xl:w-[32%] 2xl:w-[42%] flex flex-col gap-2 lg:gap-4 absolute m-[8%] text-white  items-center justify-center xl:items-start xl:justify-start">
              <h1 className=" text-2xl md:text-5xl xl:text-6xl 2xl:text-8xl font-medium md:font-semibold text-center xl:text-left">
                Multi-point Temperature Measurements
              </h1>
              <p
                className=" p-1 text-center xl:text-left text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-medium md:font-semibold"
                style={{
                  background:
                    "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              >
                Up to 1450° C
              </p>
              <h2 className=" text-xs md:text-lg lg:text-xl xl:text-base  2xl:text-xl font-normal md:font-medium text-center xl:text-left">
                “The Disruptive Ultrasonic Waveguide Technology”
              </h2>
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
              <h1 className=" text-2xl md:text-5xl xl:text-6xl 2xl:text-8xl font-medium md:font-semibold text-center xl:text-left">
                Multi - Parameter Measurements
              </h1>
              <p
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
              </p>
              <h2 className=" text-xs md:text-lg lg:text-xl xl:text-base  2xl:text-xl font-normal md:font-medium text-center xl:text-left">
                “The Disruptive Ultrasonic Waveguide Technology”
              </h2>
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
              <h1 className=" text-2xl md:text-5xl xl:text-6xl 2xl:text-8xl font-medium md:font-semibold text-center xl:text-left">
                Powered by AI
              </h1>
              <h2
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
              </h2>
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
        <h3
          className="text-center font-semibold text-[40px] md:text-[90px] 2xl:text-[120px] -mt-[20px] md:-mt-[50px] 2xl:-mt-[65px]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, white, rgb(209, 213, 219))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          XYMA PRODUCTS
        </h3>
      </main>

      {/* icon menu */}
      {renderIconMenu && (
        <nav
          className="hidden border border-r-orange-400 border-t-orange-400 border-b-orange-400 bg-white z-40 fixed left-0 top-1/2 transform -translate-y-1/2 px-1 md:flex flex-col gap-12 py-2 rounded-r-2xl text-xs font-medium"
          data-aos=""
        >
          <button
            onClick={() => handleSectionScroll(sectionRefs.uTMapS)}
            className={`rounded-full ${
              activeSection.includes("uTMapS")
                ? "border-4 border-orange-400"
                : "border-4 border-black"
            }`}
          >
            <img
              src={utmapsLogo}
              alt="utmapsLogo"
              className="h-6 rounded-full"
            ></img>
          </button>
          <button
            onClick={() => handleSectionScroll(sectionRefs.PoRTS)}
            className={`bg-black rounded-full ${
              activeSection.includes("PoRTS")
                ? "border-4 border-orange-400"
                : "border-4 border-black"
            }`}
          >
            <img
              src={portsLogo}
              alt="portsLogo"
              className="h-6 rounded-full"
            ></img>
          </button>
          <button
            onClick={() => handleSectionScroll(sectionRefs.Ztar)}
            className={`bg-black rounded-full ${
              activeSection.includes("Ztar")
                ? "border-4 border-orange-400"
                : "border-4 border-black"
            }`}
          >
            <img
              src={ztarLogo}
              alt="ztarLogo"
              className="h-6 rounded-full"
            ></img>
          </button>
          <button
            onClick={() => handleSectionScroll(sectionRefs.IPAMS)}
            className={`bg-black rounded-full ${
              activeSection.includes("IPAMS")
                ? "border-4 border-orange-400"
                : "border-4 border-black"
            }`}
          >
            <img
              src={ipamsLogo}
              alt="ipamsLogo"
              className="h-6 rounded-full"
            ></img>
          </button>
        </nav>
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
                  <h1
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
                  </h1>
                  <h2 className=" text-white text-xs md:text-sm lg:text-lg xl:text-base 2xl:text-xl">
                    A single customizable waveguide that can measure temperature
                    at 10 points over 50 meters length.
                  </h2>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-[55%] xl:p-2 md:p-4 flex flex-col justify-evenly ">
              {/* heading and play button */}
              <div className="  md:flex items-start justify-between gap-2 mb-2">
                <h1 className=" mb-2 md:mb-0 text-lg lg:text-2xl 2xl:text-4xl font-semibold">
                  Multi-Point Temperature Mapping Sensor
                </h1>
                <div
                  className="flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2 cursor-pointer hover:scale-110 duration-200"
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
                <h2 className="px-2 py-1 rounded-full text-[clamp(16px,1vw,20px)] font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2">
                  Temperature Range: 25° C to 1450° C
                </h2>
              </div>

              {/* description */}
              <p className="  text-[#60646C] text-[clamp(16px,1.2vw,20px)] mb-2 font-medium">
                µTMapS & µSTMapS are IIoT-enabled temperature measurement and
                temperature profiling sensors that captures continuous
                measurements at multiple points with a single customizable
                waveguide with multiple configurations in contrast to contact
                based thermocouples/RTDs or contactless IR guns.
                <span
                  className="text-orange-500 font-bold cursor-pointer ml-1 hover:font-black"
                  onClick={() => setRenderReadMoreUtmaps(true)}
                >
                  Read More...
                </span>
              </p>

              {/* cards */}
              <div className=" md:flex gap-2 mb-2 text-sm lg:text-base 2xl:text-xl">
                <div className="rounded-lg w-full md:w-1/2 flex items-center justify-between gap-2 border border-[#D9D9E0] bg-white p-2 mb-2 md:mb-0">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <img className="w-10" src={isteel} alt="steelLogo" />
                    </div>
                    <h3 className="font-semibold">Steel Manufacturing</h3>
                  </div>
                  <div
                    className="text-orange-400 text-2xl 2xl:text-3xl cursor-pointer hover:scale-125 duration-200"
                    onClick={() => {
                      navigate("/industries/steel");
                    }}
                  >
                    <HiMiniArrowTopRightOnSquare />
                  </div>
                </div>

                <div className="rounded-lg w-full md:w-1/2 flex items-center justify-between gap-2 p-2 border border-[#D9D9E0] bg-white">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <img className="w-10" src={aicon} alt="aluminumLogo" />
                    </div>
                    <h3 className="font-semibold text-sm 2xl:text-xl">
                      Aluminium Manufacturing
                    </h3>
                  </div>
                  <div
                    className="text-orange-400 text-2xl 2xl:text-3xl cursor-pointer hover:scale-125 duration-200"
                    onClick={() => {
                      navigate("/industries/aluminum");
                    }}
                  >
                    <HiMiniArrowTopRightOnSquare />
                  </div>
                </div>
              </div>

              <div className=" md:flex gap-2  mb-2 text-sm lg:text-base 2xl:text-xl">
                <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white mb-2 md:mb-0">
                  <div className="flex items-center justify-center">
                    <img className="w-10" src={semi} alt="semiconductorLogo" />
                  </div>
                  <h3 className="font-semibold text-sm 2xl:text-xl">
                    Semiconductor Manufacturing
                  </h3>
                </div>

                <div className="rounded-lg w-full md:w-1/2 flex items-center justify-between gap-2 p-2 border border-[#D9D9E0] bg-white">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <img className="w-10" src={ref} alt="refiniriesLogo" />
                    </div>
                    <h3 className="font-semibold">Refineries</h3>
                  </div>
                  <div
                    className="text-orange-400 text-2xl 2xl:text-3xl cursor-pointer hover:scale-125 duration-200"
                    onClick={() => {
                      navigate("/industries/OilAndGas");
                    }}
                  >
                    <HiMiniArrowTopRightOnSquare />
                  </div>
                </div>
              </div>
            </div>
            {/* utmaps additional description */}
            {renderReadMoreUtmaps && (
              <div
                className="w-full h-full absolute inset-0 border border-[#E0E1E6] rounded-lg"
                data-aos="zoom-in"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #FFF6EA 100%)",
                }}
              >
                {/* content */}
                <div className="md:flex h-full">
                  <figure className="w-full md:w-[20%] flex items-center justify-center h-[30%] md:h-auto  ">
                    <img
                      className="h-60 md:h-auto"
                      src={utmap}
                      alt="utmaps"
                      data-aos="slide-left"
                    />
                  </figure>
                  <div className=" w-full md:w-[40%] px-4 py-4 flex flex-col gap-2 2xl:gap-6 text-[#60646C] text-justify text-xs md:text-sm lg:text-base 2xl:text-2xl h-[30%] md:h-auto ">
                    <div className="flex">
                      <figure className="text-black font-semibold text-base md:text-lg lg:text-xl 2xl:text-3xl">
                        <figcaption>About µTMapS & µSTMapS</figcaption>
                        <img className="w-full h-2" src={line} alt="line"></img>
                      </figure>
                    </div>
                    <article
                      className="overflow-auto"
                      style={{ scrollbarWidth: "none" }}
                    >
                      <p className="mb-2 2xl:mb-6">
                        µTMapS & µSTMapS are IIoT-enabled temperature
                        measurement and temperature profiling sensors that
                        captures continuous measurements at multiple points with
                        a single customizable waveguide with multiple
                        configurations in contrast to contact based
                        thermocouples/RTDs or contactless IR guns.
                      </p>
                      <p>
                        The edge computing unit in the XYMA Electronics Unit
                        performs advanced computations to extract temperature
                        data from the received ultrasonic signals. The output
                        from the edge classifiers is transmitted to the
                        dashboard using industrial-standard wireless (or wired)
                        communication technology via a transmitting unit.The
                        status can be monitored in DCS system and displayed on
                        XYMA's customizable dashboard.
                      </p>
                    </article>
                  </div>
                  <div className="  w-full md:w-[40%] h-[40%] md:h-auto px-4 py-4 flex flex-col gap-2 text-black text-left text-sm lg:text-base 2xl:text-xl  ">
                    <div className="flex">
                      <div className="text-black font-semibold text-base md:text-lg lg:text-xl 2xl:text-3xl">
                        <h5>Specifications</h5>
                        <img className="w-full h-2" src={line} alt="line"></img>
                      </div>
                    </div>
                    <div className="flex flex-col justify-around  h-full">
                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img src={additionalLogo1} alt="additionalLogo1" />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <h5 className="text-[#01285C] font-semibold">
                            Functions:
                          </h5>
                          <p className="text-[#60646C]">
                            Measures Unit Temperature (µTMapS), Skin Temperature
                            (µSTMapS)
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo2}
                            alt="additionalLogo2"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <h5 className="text-[#01285C] font-semibold">
                            Measuring&nbsp;Range:
                          </h5>
                          <p className="text-[#60646C]">
                            Temperature: 25 °C to 1450 °C
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo3}
                            alt="additionalLogo3"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <h5 className="text-[#01285C] font-semibold">
                            Resolution:
                          </h5>
                          <p className="text-[#60646C]">Temperature: 0.01 °C</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo4}
                            alt="additionalLogo4"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <h5 className="text-[#01285C] font-semibold">
                            Accuracy:
                          </h5>
                          <p className="text-[#60646C]">Temperature: ±1 °C</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo5}
                            alt="additionalLogo5"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <h5 className="text-[#01285C] font-semibold">
                            Power&nbsp;Supply:
                          </h5>
                          <p className="text-[#60646C]">
                            Compatible with Industrial Standards
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="text-orange-400 hover:text-[#fc0b03] duration-200 absolute right-2 top-2"
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
                  <h1
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
                  </h1>
                  <p className="text-white text-xs md:text-sm lg:text-lg xl:text-base 2xl:text-xl">
                    A single customizable waveguide that can measure viscosity,
                    density & Temperature continuously.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-[55%] xl:p-2 md:p-4 flex flex-col justify-evenly">
              {/* heading and play button */}
              <div className="  md:flex items-start justify-between gap-2 mb-2">
                <h1 className="mb-2 md:mb-0 text-lg lg:text-2xl 2xl:text-4xl font-semibold">
                  Multi-Parameter Measurement Sensor
                </h1>
                <div
                  className=" flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2 cursor-pointer hover:scale-110 duration-200"
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
                <h1 className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2 lg:mb-0">
                  Viscosity: 50 cP - 15000 cP
                </h1>

                <h1 className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2 lg:mb-0">
                  Density: 700 kg/m³ to 1200 kg/m³
                </h1>

                <h1 className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2">
                  Temperature: 20° C to 400° C
                </h1>
              </div>

              {/* description */}
              <p className=" text-[#60646C] text-[clamp(16px,1.2vw,20px)] mb-2 font-medium">
                PoRTS is an invasive/non-invasive based IIoT-enabled rheology
                and temperature measurement sensor that continuously captures
                multiple parameters such as viscosity, density and temperature
                unlike discrete measurements with thermocouple/RTDs or discrete
                measurements with sampling from viscometer and density meter.
                <span
                  className="text-orange-500 hover:font-black font-bold cursor-pointer ml-1"
                  onClick={() => setRenderReadMorePorts(true)}
                >
                  Read More...
                </span>
              </p>

              {/* cards */}
              <div className="md:flex gap-2 mb-2 text-sm lg:text-base 2xl:text-xl">
                <div className="rounded-lg w-full md:w-1/2 flex items-center justify-between gap-2 border border-[#D9D9E0] bg-white p-2 mb-2 md:mb-0">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <img className="w-10" src={paint} alt="paint" />
                    </div>
                    <h3 className="font-semibold">Paint Manufacturing</h3>
                  </div>
                  <div
                    className="text-orange-400 text-2xl 2xl:text-3xl cursor-pointer hover:scale-125 duration-200"
                    onClick={() => {
                      navigate("/industries/SpecialtyChemicals");
                    }}
                  >
                    <HiMiniArrowTopRightOnSquare />
                  </div>
                </div>

                <div className="rounded-lg w-full md:w-1/2 flex items-center justify-between gap-2 p-2 border border-[#D9D9E0] bg-white">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <img className="w-10" src={luboil} alt="lube" />
                    </div>
                    <h3 className="font-semibold">Lubrication Oil</h3>
                  </div>
                  <div
                    className="text-orange-400 text-2xl 2xl:text-3xl cursor-pointer hover:scale-125 duration-200"
                    onClick={() => {
                      navigate("/industries/OilAndGas");
                    }}
                  >
                    <HiMiniArrowTopRightOnSquare />
                  </div>
                </div>
              </div>

              {/* <div className="md:flex gap-2  mb-2 text-sm lg:text-base 2xl:text-xl">
                <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                  <div className="flex items-center justify-center">
                    <img className="w-10" src={eor} alt="eor" />
                  </div>
                  <h3 className="font-semibold">E.O.R.</h3>
                </div>
              </div> */}
            </div>
            {/* ports additional description */}
            {renderReadMorePorts && (
              <div
                className="w-full h-full absolute inset-0 border border-[#E0E1E6] rounded-lg "
                data-aos="zoom-in"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #FFF6EA 100%)",
                }}
              >
                {/* content */}
                <div className="md:flex h-full">
                  <figure className="w-full md:w-[20%] h-[30%] md:h-auto   flex items-center justify-center">
                    <img
                      className="h-60 md:h-auto"
                      src={ports}
                      alt="ports"
                      data-aos="slide-left"
                    />
                  </figure>
                  <div className=" w-full md:w-[40%] h-[30%] md:h-auto px-4 py-4 flex flex-col gap-2 2xl:gap-6 text-[#60646C] text-justify text-xs md:text-sm lg:text-base 2xl:text-2xl">
                    <div className="flex">
                      <div className="text-black font-semibold text-base md:text-lg lg:text-xl 2xl:text-3xl">
                        <h1>About PoRTS</h1>
                        <img className="w-full h-2" src={line} alt="line"></img>
                      </div>
                    </div>
                    <article
                      className="overflow-auto"
                      style={{ scrollbarWidth: "none" }}
                    >
                      <p className="mb-2 2xl:mb-6">
                        PoRTS is an invasive/non-invasive based IIoT-enabled
                        rheology and temperature measurement sensor that
                        continuously captures multiple parameters such as
                        viscosity, density and temperature unlike discrete
                        measurements with thermocouple/RTDs or discrete
                        measurements with sampling from viscometer and density
                        meter.
                      </p>
                      <p>
                        The edge computing unit in the XYMA Electronics Unit
                        performs advanced computations to extract measurement
                        data from received ultrasonic signals. The output from
                        the edge classifiers is transmitted to the dashboard
                        using industrial-standard wireless (or wired)
                        communication technology via a transmitting unit. The
                        status can be monitored in DCS system and displayed on
                        XYMA's customizable dashboard.
                      </p>
                    </article>
                  </div>
                  <div className=" w-full md:w-[40%] h-[40%] md:h-auto   px-4 py-4 flex flex-col gap-2 text-black text-left text-sm lg:text-base 2xl:text-xl  ">
                    <div className="flex">
                      <div className="text-black font-semibold text-base md:text-lg lg:text-xl 2xl:text-3xl">
                        <h3>Specifications</h3>
                        <img className="w-full h-2" src={line} alt="line"></img>
                      </div>
                    </div>
                    <div className="flex flex-col justify-around  h-full">
                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img src={additionalLogo1} alt="additionalLogo1" />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <h4 className="text-[#01285C] font-semibold">
                            Functions:
                          </h4>
                          <p className="text-[#60646C]">
                            Measures Viscosity, Density and Temperature
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo2}
                            alt="additionalLogo2"
                          />
                        </div>
                        <div className="w-[88%]">
                          <h4 className="text-[#01285C] font-semibold">
                            Measuring&nbsp;Range:
                          </h4>
                          <div className="text-[#60646C]">
                            <div className="flex items-center gap-1">
                              <p className="text-[#01285C]">Viscosity:</p>
                              <p className="text-xs md:text-sm 2xl:text-lg">
                                50cP - 15000 cP,
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <p className="text-[#01285C]">Density:</p>
                              <p className="text-xs md:text-sm 2xl:text-lg">
                                700 kg/m³ to 1200 kg/m³,
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <p className="text-[#01285C]">Temperature:</p>
                              <p className="text-xs md:text-sm 2xl:text-lg">
                                20 °C - 400 °C
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo3}
                            alt="additionalLogo3"
                          />
                        </div>
                        <div className="w-[88%]">
                          <h4 className="text-[#01285C] font-semibold">
                            Resolution:
                          </h4>
                          <div className="text-[#60646C]">
                            <div className="flex gap-2">
                              <div className="flex items-center gap-1">
                                <p className="text-[#01285C]">Viscosity:</p>
                                <p className="text-xs md:text-sm 2xl:text-lg">
                                  10cP,
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="text-[#01285C]">Density:</p>
                                <p className="text-xs md:text-sm 2xl:text-lg">
                                  1 kg/m³,
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <p className="text-[#01285C]">Temperature:</p>
                              <p className="text-xs md:text-sm 2xl:text-lg">
                                0.1 °C
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo4}
                            alt="additionalLogo4"
                          />
                        </div>
                        <div className="w-[88%]">
                          <h4 className="text-[#01285C] font-semibold">
                            Accuracy:
                          </h4>
                          <div className="text-[#60646C]">
                            <div className="flex gap-2">
                              <div className="flex items-center gap-1">
                                <p className="text-[#01285C]">Viscosity:</p>
                                <p className="text-xs md:text-sm 2xl:text-lg">
                                  ±1 %,
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <p className="text-[#01285C]">Density:</p>
                                <p className="text-xs md:text-sm 2xl:text-lg">
                                  ±1 %
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <p className="text-[#01285C]">Temperature:</p>
                              <p className="text-xs md:text-sm 2xl:text-lg">
                                ±1 °C
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo5}
                            alt="additionalLogo5"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <h4 className="text-[#01285C] font-semibold">
                            Power&nbsp;Supply:
                          </h4>
                          <p className="text-[#60646C]">
                            Compatible with Industrial Standards
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="text-orange-400 hover:text-[#fc0b03] duration-200 absolute right-2 top-2"
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
                  <h1
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
                  </h1>
                  <p className=" text-white text-xs md:text-sm lg:text-lg xl:text-base 2xl:text-xl">
                    A single waveguide that can measure level continuously
                    across any hazardous environment.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-[55%] xl:p-2 md:p-4 flex flex-col justify-evenly">
              {/* heading and play button */}
              <div className=" md:flex items-start justify-between gap-2 mb-2">
                <h1 className="mb-2 md:mb-0 text-lg lg:text-2xl 2xl:text-4xl font-semibold">
                  Ultrasonic contact & non-contact based level measurement
                  sensor
                </h1>
                <div
                  className=" flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2 cursor-pointer hover:scale-110 duration-200"
                  onClick={() => setRenderZtarVideo(true)}
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
              <div className="md-flex">
                <h2 className=" w-full md:w-auto md:inline-block px-2 py-1 rounded-full text-[clamp(16px,1vw,20px)] font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2">
                  Level: 0.03 m to 10 m
                </h2>
              </div>

              {/* description */}
              <p className=" text-[#60646C] text-[clamp(16px,1.2vw,20px)] mb-2 font-medium">
                Ztar is a contact/contactless IIoT-enabled level measurement
                sensor that captures continuous level across any hazardous
                environment with accuracy in contrast to radar-based level
                measurement sensors.
                <span
                  className="text-orange-500 hover:font-black font-bold cursor-pointer ml-1"
                  onClick={() => setRenderReadMoreZtar(true)}
                >
                  Read More...
                </span>
              </p>

              {/* cards */}
              <div className=" md:flex gap-2 mb-2 md:mb-20 text-sm lg:text-base 2xl:text-xl">
                <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 border border-[#D9D9E0] bg-white p-2 mb-2 md:mb-0">
                  <div className="flex items-center justify-center">
                    <img className="w-10" src={metal} alt="metal" />
                  </div>
                  <h3 className="font-semibold">Metal Manufacturing</h3>
                </div>

                <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                  <div className="flex items-center justify-center">
                    <img className="w-10" src={refrigerant} alt="refrigerant" />
                  </div>
                  <h3 className="font-semibold">Refrigerants</h3>
                </div>
              </div>
            </div>
            {/* ztar additional description */}
            {renderReadMoreZtar && (
              <div
                className="w-full h-full absolute inset-0 border border-[#E0E1E6] rounded-lg "
                data-aos="zoom-in"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #FFF6EA 100%)",
                }}
              >
                {/* content */}
                <div className="md:flex h-full">
                  <figure className="w-full md:w-[20%] h-[30%] md:h-auto  flex items-center justify-center">
                    <img
                      className="h-60 md:h-auto"
                      src={ztar}
                      alt="ztar"
                      data-aos="slide-left"
                    />
                  </figure>
                  <div className=" w-full md:w-[40%] h-[30%] md:h-auto px-4 py-4 flex flex-col gap-2 2xl:gap-6 text-[#60646C] text-justify text-xs md:text-sm lg:text-base 2xl:text-2xl">
                    <div className="flex">
                      <div className="text-black font-semibold text-base md:text-lg lg:text-xl 2xl:text-3xl">
                        <h1>About Ztar</h1>
                        <img className="w-full h-2" src={line} alt="line"></img>
                      </div>
                    </div>

                    <article
                      className="overflow-auto"
                      style={{ scrollbarWidth: "none" }}
                    >
                      <p className="mb-2 2xl:mb-6">
                        Ztar is a contact/contactless IIoT-enabled level
                        measurement sensor that captures continuous level across
                        any hazardous environment with accuracy in contrast to
                        radar-based level measurement sensors.
                      </p>
                      <p>
                        Ztar is a waveguide based ultrasonic level sensor that
                        provides accurate measurements even at higher
                        temperatures. It is compatible with corrosive and
                        hazardous fluids due to wide range of waveguide
                        materials.
                      </p>
                    </article>
                  </div>
                  <div className=" w-full md:w-[40%] h-[40%] md:h-auto px-4 py-4 flex flex-col gap-2 text-black text-left text-sm lg:text-base 2xl:text-xl  ">
                    <div className="flex">
                      <div className="text-black font-semibold text-base md:text-lg lg:text-xl 2xl:text-3xl">
                        <h2>Specifications</h2>
                        <img className="w-full h-2" src={line} alt="line"></img>
                      </div>
                    </div>
                    <div className="flex flex-col justify-around  h-full">
                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img src={additionalLogo1} alt="additionalLogo1" />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <p className="text-[#01285C] font-semibold">
                            Functions:
                          </p>
                          <p className="text-[#60646C]">Measures Fluid Level</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo2}
                            alt="additionalLogo2"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <p className="text-[#01285C] font-semibold">
                            Measuring&nbsp;Level:
                          </p>
                          <p className="text-[#60646C]">
                            Level: 0.03 m to 10 m
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo3}
                            alt="additionalLogo3"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <p className="text-[#01285C] font-semibold">
                            Resolution:
                          </p>
                          <p className="text-[#60646C]">Level: 1 mm</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo4}
                            alt="additionalLogo4"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <p className="text-[#01285C] font-semibold">
                            Accuracy:
                          </p>
                          <p className="text-[#60646C]">Level: ±1 %</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo5}
                            alt="additionalLogo5"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <p className="text-[#01285C] font-semibold">
                            Power&nbsp;Supply:
                          </p>
                          <p className="text-[#60646C]">
                            Compatible with Industrial Standards
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="text-orange-400 hover:text-[#fc0b03] duration-200 absolute right-2 top-2"
                  onClick={() => setRenderReadMoreZtar(false)}
                >
                  <IoMdCloseCircle size={30} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* i-pams */}
        <section id="IPAMS" ref={sectionRefs.IPAMS}>
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
                <div className="p-16 lg:p-24 2xl:p-28">
                  <img
                    className="object-cover object-center"
                    src={ipams}
                    alt="ipams"
                  />
                </div>
                <div
                  className="absolute bottom-0 w-full px-4 rounded-b-lg py-2"
                  style={{
                    background: "rgba(64, 64, 64, 0.5)",
                    backdropFilter: "blur(9px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                >
                  <h1
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
                    I-PAMS
                  </h1>
                  <p className=" text-white text-xs md:text-sm lg:text-lg xl:text-base 2xl:text-xl">
                    Provides real-time data visualization and detailed analysis
                    delivering complete process control.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full md:w-[55%] xl:p-2 md:p-4 flex flex-col justify-evenly ">
              {/* heading and play button */}
              <div className="  md:flex items-start justify-between gap-2 mb-2">
                <h1 className=" mb-2 md:mb-0 text-lg lg:text-2xl 2xl:text-4xl font-semibold">
                  IoT for Plant Asset Monitoring System
                </h1>
                <div
                  className="  flex rounded-full items-center justify-center gap-1 bg-[#01285C] h-4 py-4 px-2  cursor-pointer hover:scale-110 duration-200"
                  onClick={() => setRenderIpamsVideo(true)}
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
                <h2 className="px-2 py-1 rounded-full text-[clamp(16px,1vw,20px)] font-medium text-[#FE7D18] border border-[#FE9D1C] bg-[#FFF6EA] text-center mb-2">
                  Real Time Monitoring Access
                </h2>
              </div>

              {/* description */}
              <p className="  text-[#60646C] text-[clamp(16px,1.2vw,20px)] mb-2 font-medium">
                I-PAMS is out Industrial-IoT based asset monitoring system for
                industries. It provides real-time data visualization and
                detailed analysis delivering complete process control to the
                operator.
                <span
                  className="text-orange-500 hover:font-black font-bold cursor-pointer ml-1"
                  onClick={() => setRenderReadMoreIpams(true)}
                >
                  Read More...
                </span>
              </p>

              {/* cards */}
              <div className=" md:flex gap-2 mb-2 text-sm lg:text-base 2xl:text-xl">
                <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 border border-[#D9D9E0] bg-white p-2 mb-2 md:mb-0">
                  <div className="flex items-center justify-center border border-[#D9D9E0] rounded-md p-1">
                    <img
                      className="w-9 rounded-md"
                      src={ipamsIcon1}
                      alt="ipamsIcon1"
                    />
                  </div>
                  <h3 className="font-semibold">Real-time Thermal Mapping</h3>
                </div>

                <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white">
                  <div className="flex items-center justify-center border border-[#D9D9E0] rounded-md p-1">
                    <img
                      className="w-9 rounded-md"
                      src={ipamsIcon2}
                      alt="ipamsIcon2"
                    />
                  </div>
                  <h3 className="font-semibold">Predictive Maintenance</h3>
                </div>
              </div>

              <div className=" md:flex gap-2  mb-2 text-sm lg:text-base 2xl:text-xl">
                <div className="rounded-lg w-full md:w-1/2 flex items-center gap-2 p-2 border border-[#D9D9E0] bg-white mb-2 md:mb-0">
                  <div className="flex items-center justify-center border border-[#D9D9E0] rounded-md p-1">
                    <img
                      className="w-9 rounded-md"
                      src={ipamsIcon3}
                      alt="ipamsIcon3"
                    />
                  </div>
                  <h3 className="font-semibold">Data Visualization</h3>
                </div>
              </div>
            </div>
            {/* ipams additional description */}
            {renderReadMoreIpams && (
              <div
                className="w-full h-full absolute inset-0 border border-[#E0E1E6] rounded-lg"
                data-aos="zoom-in"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, #FFF6EA 100%)",
                }}
              >
                {/* content */}
                <div className="md:flex h-full">
                  <figure className="w-full md:w-[20%] flex items-center justify-center h-[30%] md:h-auto p-4">
                    <img
                      className="h-60 md:h-auto"
                      src={ipams}
                      alt="ipams"
                      data-aos="slide-left"
                    />
                  </figure>
                  <div className="w-full md:w-[40%] px-4 py-4 flex flex-col gap-2 2xl:gap-6 text-[#60646C] text-justify text-xs md:text-sm lg:text-base 2xl:text-2xl h-[30%] md:h-auto ">
                    <div className="flex">
                      <div className="text-black font-semibold text-base md:text-lg lg:text-xl 2xl:text-3xl">
                        <h1>About I-PAMS</h1>
                        <img className="w-full h-2" src={line} alt="line"></img>
                      </div>
                    </div>
                    <article
                      className="overflow-auto"
                      style={{ scrollbarWidth: "none" }}
                    >
                      <p className="mb-2 2xl:mb-6">
                        I-PAMS is out Industrial-IoT based asset monitoring
                        system for industries. It provides real-time data
                        visualization and detailed analysis delivering complete
                        process control to the operator. It enables report
                        generation through a wide range of formats including
                        CSV, PDF etc.
                      </p>
                      <p>
                        I-PAMS also provides a wide range of widgets which are
                        easily accessible. These widgets will be then used to
                        visualize the data.Since I-PAMS provide real time
                        monitoring, the user will be alerted through sms, email
                        etc. I-PAMS provides data management and analytics tools
                        for predictive maintenance. Through digital twin, the
                        user can create a digital model of physical asset to
                        increase the overall efficiency.
                      </p>
                    </article>
                  </div>
                  <div className="w-full md:w-[40%] h-[40%] md:h-auto px-4 py-4 flex flex-col gap-2 text-black text-left text-sm lg:text-base 2xl:text-xl  ">
                    <div className="flex">
                      <div className="text-black font-semibold text-base md:text-lg lg:text-xl 2xl:text-3xl">
                        <h2>Specifications</h2>
                        <img className="w-full h-2" src={line} alt="line"></img>
                      </div>
                    </div>
                    <div className="flex flex-col justify-around  h-full">
                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img src={additionalLogo1} alt="additionalLogo1" />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <p className="text-[#01285C] font-semibold">
                            Functions:
                          </p>
                          <p className="text-[#60646C]">
                            Real Time Monitoring Assets
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo6}
                            alt="additionalLogo6"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <p className="text-[#01285C] font-semibold">
                            Security&nbsp;Protocol:
                          </p>
                          <p className="text-[#60646C]">
                            HTTPS(TCL/SSL), IPsec, SSH, WPA/WPA2/2PA3, Bcrypt,
                            Keberos
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className=" w-[12%]">
                          <img
                            className="w-20"
                            src={additionalLogo7}
                            alt="additionalLogo7"
                          />
                        </div>
                        <div className="flex gap-2 w-[88%]">
                          <p className="text-[#01285C] font-semibold">
                            Data&nbsp;Connectivity Protocol:
                          </p>
                          <p className="text-[#60646C]">
                            Zigbee, WiFi(2.49Hz, 5.49Hz), Bluetooth-LE, LORA,
                            RS-232, Tcp/Ip, Modbus, RS-485, Cellular
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="text-orange-400 hover:text-[#fc0b03] duration-200 absolute right-2 top-2"
                  onClick={() => setRenderReadMoreIpams(false)}
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
          <div className="fixed bg-white text-3xl text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] xl:w-[75%] ">
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
                  className="text-orange-400 hover:text-[#fc0b03] duration-200"
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
          <div className="  fixed bg-white text-3xl text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] xl:w-[75%]">
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
                  className="text-orange-400 hover:text-[#fc0b03] duration-200"
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

      {/* ztar product video */}
      {renderZtarVideo && (
        <div className="fixed inset-0 w-full h-full bg-black/80 z-50">
          <div className="  fixed bg-white text-3xl text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] xl:w-[75%]">
            <div className="">
              <div
                className=" flex gap-2 justify-between p-3 text-white"
                style={{
                  background:
                    "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
                }}
              >
                <div className="text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-3xl font-semibold">
                  Ztar&nbsp;Product&nbsp;Demo
                </div>
                <button
                  className="text-orange-400 hover:text-[#fc0b03] duration-200"
                  onClick={() => setRenderZtarVideo(false)}
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
                <source src={ztarDemo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      {/* ipams product video */}
      {renderIpamsVideo && (
        <div className="fixed inset-0 w-full h-full bg-black/80 z-50">
          <div className="  fixed bg-white text-3xl text-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] xl:w-[75%]">
            <div className="">
              <div
                className=" flex gap-2 justify-between p-3 text-white"
                style={{
                  background:
                    "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
                }}
              >
                <div className="text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-3xl font-semibold">
                  I-PAMS&nbsp;Product&nbsp;Demo
                </div>
                <button
                  className="text-orange-400 hover:text-[#fc0b03] duration-200"
                  onClick={() => setRenderIpamsVideo(false)}
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
                <source src={ipamsDemo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
