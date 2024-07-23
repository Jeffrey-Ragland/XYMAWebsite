import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import "./Sb.css";
import steel from '../Assets/steel1.png';
import lubricants from '../Assets/marine2.jpeg';
import paints from "../Assets/paintsresized.jpg";
import semiconductor from '../Assets/semiconductor1.jpg';
import utmaps from '../Assets/newut.jpeg';
import ports from "../Assets/ports.png";
import ztar from "../Assets/Ztar.png";
import ipams from '../Assets/IPAMS.png';
import client from '../Assets/client.png';
import real from '../Assets/real.png';
import solution from '../Assets/solution.png';
import time from '../Assets/time.png'; 
import sg from '../Brand/sg.png';
import tata from '../Brand/tata.png';
import lam from '../Brand/lam.png';
import ind from '../Brand/iocl.png';
import bharat from '../Brand/bpcl.png';
import ved from '../Brand/vedanta.png';
import drdo from '../Brand/drdo.png';
import cumi from '../Brand/cumi.png';
import epri from '../Brand/epri.png';
import skf from '../Brand/skf.png';
import schneider from '../Brand/schneider.png';
import reliance from '../Brand/reliance.png';
import threeLions from '../Brand/threeLions.png';
import cairn from '../Brand/cairn.png';
import newbgcropped from '../Assets/newbgcropped.png';
import sensor from '../Assets/sensor.png';
import iot from '../Assets/iot.png';
import grp from '../Assets/Group.png';
import zero from '../Assets/zero.png';
import ai from '../Assets/ai.png';
import tool from '../Assets/tool.png';
import line from '../Assets/underline.png';
import awardPhoto from '../Assets/awardPhoto.jpg';
import homeVideo from '../videoAssets/homeVideo.mp4';
import aluminumVideo from '../videoAssets/aluminumVideo.mp4';
import OilVideo from '../videoAssets/ioclFinal.mp4';
import miningVideo from '../videoAssets/cumiFinal.mp4';
import brochure from "../pdfAssets/XymaBrochure.pdf";
import ipamsBadge2 from "../Assets/IPAMSBadge.png";
import portsBadge2 from "../Assets/portsBadge.png";
import ztarBadge2 from "../Assets/ZtarBadge.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { GiWaterSplash } from "react-icons/gi";
import { MdOutlineSensors } from "react-icons/md";
import { SiBlueprint } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  const [clickedImage, setClickedImage] = useState(aluminumVideo);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [overlay, setOverlay] = useState(false);
  const [utmapsBadge, setUtmapsBadge] = useState(false);
  const [portsBadge, setPortsBadge] = useState(false);
  const [ztarBadge, setZtarBadge] = useState(false);
  const [ipamsBadge, setIpamsBadge] = useState(false);
  const [renderIconMenu, setRenderIconMenu] = useState(false);
  const [activeSection, setActiveSection] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  // const [miniCoverEnter, setMiniCoverEnter] = useState(false);
 
  const coverImageRef = useRef(null);
  const navigate = useNavigate();

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 7,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 2,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          slidesPerRow: 3,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: false,
        },
      },
    ],
  };

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

  //for active section in display
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
        if(ref.current)
        {
        const sectionPosition = ref.current.getBoundingClientRect();
        const sectionHeight = sectionPosition.height;

        const visiblePart =
          Math.min(viewportHeight, sectionPosition.bottom) -
          Math.max(0, sectionPosition.top);
        const visiblePercentage = (visiblePart / sectionHeight) * 100;

        if (visiblePercentage >= 60) {
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

  // progress scroll bar
  const handleProgressScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll',handleProgressScroll);
    return () => window.removeEventListener('scroll', handleProgressScroll);
  }, []);

  const handleOverlayEnter = () => {
    setOverlay(true);
  };

  const handleOverlayLeave = () => {
    setOverlay(false);
  };

  const handleUtmapsBadgeEnter = () => {
    setUtmapsBadge(true);
  };

  const handleUtmapsBadgeLeave = () => {
    setUtmapsBadge(false);
  };

  const handlePortsBadgeEnter = () => {
    setPortsBadge(true);
  };

  const handlePortsBadgeLeave = () => {
    setPortsBadge(false);
  };

  const handleZtarBadgeEnter = () => {
    setZtarBadge(true);
  };

  const handleZtarBadgeLeave = () => {
    setZtarBadge(false);
  };

  const handleImageChange = (event) => {
    switch (event.target.id) {
      case "aluminum":
        setClickedImage(aluminumVideo);
        break;

      case "steel":
        setClickedImage(steel);
        break;

      case "lubricants":
        setClickedImage(lubricants);
        break;

      case "oilRecovery":
        setClickedImage(OilVideo);
        break;

      case "semiconductor":
        setClickedImage(semiconductor);
        break;

      case "mining":
        setClickedImage(miningVideo);
        break;

      case "paints":
        setClickedImage(paints);
        break;

      default:
        break;
    }
  };

  
  const handleProductClick = (sectionId) => {
    if (window.innerWidth >= 1024) {
    navigate(`/products#${sectionId}`);
    }
  };
 
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []); 

  return (
    <div className="w-full overflow-hidden">
      <div className="h-[10vh]">{/* space for navbar */}</div>
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
      {/* cover image */}
      <section
        className="relative h-[60vh] md:h-[70vh] xl:h-[90vh] w-full shadow-white shadow-2xl"
        ref={coverImageRef}
      >
        {/* cover video */}
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={homeVideo} type="video/mp4" />
        </video>

        <button
          className="bg-white/50 text-[#01285C] rounded-full px-3 md:px-6 py-2 md:py-2 absolute bottom-[4%] xl:bottom-[8%] left-[4%] xl:left-[8%] font-semibold text-xs md:text-sm xl:text-base 2xl:text-lg hover:scale-110 duration-200 flex items-center gap-4"
          onClick={() => window.open(brochure, "_blank")}
        >
          Download&nbsp;Brochure{" "}
          <span>
            <FaAngleRight size={20} />
          </span>
        </button>

        <div className="absolute inset-0 flex flex-col text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl text-white font-medium md:font-semibold gap-2 items-center justify-center xl:items-start xl:justify-start m-[8%]">
          <div className="flex xl:flex-col gap-2 md:gap-4">
            <div data-aos="slide-right">Prevent</div>
            <div data-aos="slide-right">Unplanned</div>
          </div>
          <div data-aos="slide-right">Downtime</div>
          <p
            className="text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-xl mt-2 font-normal md:font-medium"
            data-aos="slide-right"
          >
            "The Disruptive Ultrasonic Waveguide Technology"
          </p>
        </div>
      </section>
      {/* bottom text */}
      <h1
        className="text-center font-semibold text-[40px] md:text-[90px] 2xl:text-[120px] -mt-[20px] md:-mt-[50px] 2xl:-mt-[65px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white, rgb(209, 213, 219))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        XYMA ANALYTICS
      </h1>

      {/* icon menu */}
      {renderIconMenu && (
        <nav
          className="hidden border border-r-orange-400 border-t-orange-400 border-b-orange-400 bg-white z-40 fixed left-0 top-1/2 transform -translate-y-1/2 text-xl px-2 md:flex flex-col gap-12 py-4 rounded-r-2xl"
          data-aos=""
        >
          <button
            onClick={() => handleSectionScroll(sectionRefs.section1)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section1")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiWaterSplash size={25} />
          </button>
          <button
            onClick={() => handleSectionScroll(sectionRefs.section2)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section2")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <MdOutlineSensors size={25} />
          </button>
          <button
            onClick={() => handleSectionScroll(sectionRefs.section3)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section3")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <SiBlueprint size={25} />
          </button>
          <button
            onClick={() => handleSectionScroll(sectionRefs.section4)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section4")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <HiUserGroup size={25} />
          </button>
        </nav>
      )}

      {/* elements section */}
      <section id="section1" ref={sectionRefs.section1} className="pt-1">
        {/* text with underline */}
        <header
          // ref={sectionRefs.section1}
          className="flex flex-col justify-center items-center mb-4 md:mb-6 mt-4 md:mt-8 lg:mt-12 mx-[5%] md:mx-[8%] xl:mx-[5%]"
        >
          <h2 className="md:flex flex-wrap justify-center gap-2 text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold text-center ">
            <p>XYMA&nbsp;Sensors:&nbsp;Transforming</p>
            <div>
              <p>Industries&nbsp;into&nbsp;Digital&nbsp;Industry</p>
              <img className=" w-full h-2" src={line} alt="line"></img>
            </div>
          </h2>
          <p className="text-center text-[#60646C] mx-[5%] md:mx-[10%] text-sm md:text-base lg:text-lg 2xl:text-2xl font-medium">
            We are known for improving Production and Product Quality by
            ensuring Optimum Investment for Production Costs and increasing
            Asset Life and Safety.
          </p>
        </header>
        {/* elements cards */}
        <div className="md:flex mx-[5%] xl:mx-[8%] mb-8 md:mb-16 lg:mb-24 2xl:mb-32">
          {/* list of elements */}
          <aside
            className="w-full overflow-auto md:w-[20%] xl:w-[16%] 2xl:w-[15%] text-gray-500 flex items-center mb-2 md:mb-0 md:items-start md:justify-start md:flex-col text-sm lg:text-lg xl:text-base 2xl:text-2xl font-medium"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="mb-0 md:mb-2 ml-2">
              <h3 className=" font-bold text-[#013872] text-base lg:text-2xl 2xl:text-3xl">
                Industries:
              </h3>
              <div className="border border-[#013872] mx-4 rounded-full" />
            </div>

            {/* aluminum */}
            <div>
              <div
                className={`md:w-full cursor-pointer p-1 xl:mb-1 flex hover:text-[#013872] hover:font-bold ${
                  clickedImage === aluminumVideo && "text-[#013872] font-bold"
                }`}
                id="aluminum"
                onClick={handleImageChange}
              >
                {clickedImage === aluminumVideo && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Aluminum</div>
              </div>
              {clickedImage === aluminumVideo && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            {/* steel */}
            <div>
              <div
                className={`md:w-full flex p-1 xl:mb-1 cursor-pointer hover:text-[#013872] hover:font-bold ${
                  clickedImage === steel && "text-[#013872] font-bold"
                }`}
                id="steel"
                onClick={handleImageChange}
              >
                {clickedImage === steel && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Steel</div>
              </div>
              {clickedImage === steel && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            {/* marine */}
            <div>
              <div
                className={`md:w-full flex p-1 xl:mb-1 cursor-pointer hover:text-[#013872] hover:font-bold ${
                  clickedImage === lubricants && "text-[#013872] font-bold"
                }`}
                id="lubricants"
                onClick={handleImageChange}
              >
                {clickedImage === lubricants && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Marine</div>
              </div>
              {clickedImage === lubricants && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            {/* oil and gas */}
            <div>
              <div
                className={`md:w-full flex p-1 xl:mb-1 cursor-pointer hover:text-[#013872] hover:font-bold ${
                  clickedImage === OilVideo && "text-[#013872] font-bold"
                }`}
                id="oilRecovery"
                onClick={handleImageChange}
              >
                {clickedImage === OilVideo && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Oil&nbsp;&&nbsp;Gas</div>
              </div>
              {clickedImage === OilVideo && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            {/* semiconductor */}
            <div>
              <div
                className={`md:w-full flex p-1 xl:mb-1 cursor-pointer hover:text-[#013872] hover:font-bold ${
                  clickedImage === semiconductor && "text-[#013872] font-bold"
                }`}
                id="semiconductor"
                onClick={handleImageChange}
              >
                {clickedImage === semiconductor && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Semiconductor</div>
              </div>
              {clickedImage === semiconductor && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            {/* mining */}
            <div>
              <div
                className={`md:w-full flex p-1 xl:mb-1 cursor-pointer hover:text-[#013872] hover:font-bold ${
                  clickedImage === miningVideo && "text-[#013872] font-bold"
                }`}
                id="mining"
                onClick={handleImageChange}
              >
                {clickedImage === miningVideo && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Mining</div>
              </div>
              {clickedImage === miningVideo && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>

            {/* specialty chemicals */}
            <div>
              <div
                className={`md:w-full flex p-1 xl:mb-1 cursor-pointer hover:text-[#013872] hover:font-bold ${
                  clickedImage === paints && "text-[#013872] font-bold"
                }`}
                id="paints"
                onClick={handleImageChange}
              >
                {clickedImage === paints && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="ml-1 -z-10">Specialty&nbsp;Chemicals</div>
              </div>
              {clickedImage === paints && (
                <div className="border border-[#013872] md:hidden" />
              )}
            </div>
          </aside>

          {/* aluminum content */}
          {clickedImage === aluminumVideo && (
            <>
              {/* element image*/}
              <figure
                className=" flex flex-col items-center justify-center relative w-full md:w-[43%] xl:w-[48%] 2xl:w-[50%] px-2 xl:px-4"
                data-aos="slide-right"
              >
                <video
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  className="rounded-2xl shadow-white shadow-2xl"
                >
                  <source src={aluminumVideo} type="video/mp4" />
                </video>
                <figcaption
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ALUMINUM
                </figcaption>
              </figure>
              {/* elements description */}
              <div
                className=" w-full md:w-[37%] xl:w-[36%] 2xl:w-[35%] flex items-center justify-center p-4 "
                data-aos="slide-left"
              >
                <article
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  <span className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mr-2">
                    10°C
                  </span>
                  deviation in ideal bath temperature reduces current
                  efficiency, promotes anode effect, and increases{" "}
                  <span className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mx-2">
                    PFC
                  </span>
                  emissions
                  {/* • Continuous Temperature Monitoring of Collector Bars and Side
                  Shell of Potline. <br />• Continuous Temperature Moitoring of
                  Cryolite Bath. */}
                </article>
              </div>
            </>
          )}

          {/* steel content */}
          {clickedImage === steel && (
            <>
              {/* element image*/}
              <figure
                className=" flex flex-col items-center justify-center relative w-full md:w-[43%] xl:w-[48%] 2xl:w-[50%] px-2 xl:px-4"
                data-aos="fade-up"
              >
                <img
                  src={steel}
                  alt="steel"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
                <figcaption
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  STEEL
                </figcaption>
              </figure>
              {/* elements description */}
              <div
                className=" w-full md:w-[37%] xl:w-[36%] 2xl:w-[35%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <article
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  <span className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mr-2">
                    $5.1M
                  </span>
                  would be worth of steel produced by extending ladle life for 1
                  set of cycle
                  {/* Continuous Temperature Profile Monitoring of Galvanizing Line
                  for Zinc Process. */}
                </article>
              </div>
            </>
          )}

          {/* marine content */}
          {clickedImage === lubricants && (
            <>
              {/* element image*/}
              <figure
                className=" flex flex-col items-center justify-center relative w-full md:w-[43%] xl:w-[48%] 2xl:w-[50%] px-2 xl:px-4"
                data-aos="fade-up"
              >
                <img
                  src={lubricants}
                  alt="lubricants"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
                <figcaption
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  MARINE
                </figcaption>
              </figure>
              {/* elements description */}
              <div
                className=" w-full md:w-[37%] xl:w-[36%] 2xl:w-[35%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <article
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  <span className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mr-2">
                    30%
                  </span>
                  of Maintenance Budget is Affected by Lubricants.
                </article>
              </div>
            </>
          )}

          {/* oil recovery content */}
          {clickedImage === OilVideo && (
            <>
              {/* element image*/}
              <figure
                className=" flex flex-col items-center justify-center relative w-full md:w-[43%] xl:w-[48%] 2xl:w-[50%] px-2 xl:px-4"
                data-aos="fade-up"
              >
                <video
                  autoPlay
                  loop
                  controls
                  className="rounded-2xl shadow-white shadow-2xl"
                >
                  <source src={OilVideo} type="video/mp4" />
                </video>
                <figcaption
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  OIL&nbsp;&&nbsp;GAS
                </figcaption>
              </figure>
              {/* elements description */}
              <div
                className=" w-full md:w-[37%] xl:w-[36%] 2xl:w-[35%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <article
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  <span className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mr-2">
                    1.3
                  </span>
                  lakhs/day would be the worth of injection polymer of unknown
                  viscosity flooded in EOR due to unavailability of continuous
                  viscosity measurement technique.
                  {/* Continuous Skin Temperature Monitoring of Reformer Tubes &
                  Continuous Oil Condition Monitoring. */}
                </article>
              </div>
            </>
          )}

          {/* semiconductor content */}
          {clickedImage === semiconductor && (
            <>
              {/* element image*/}
              <figure
                className=" flex flex-col items-center justify-center relative w-full md:w-[43%] xl:w-[48%] 2xl:w-[50%] px-2 xl:px-4"
                data-aos="fade-up"
              >
                <img
                  src={semiconductor}
                  alt="semiconductor"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
                <figcaption
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SEMICONDUCTOR
                </figcaption>
              </figure>
              {/* elements description */}
              <div
                className=" w-full md:w-[37%] xl:w-[36%] 2xl:w-[35%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <article
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  In{" "}
                  <span className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mr-2">
                    2023
                  </span>
                  , the Global Semiconductor Industry is Projected to Reach
                  <span className="font-black text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl ml-2">
                    $600
                  </span>{" "}
                  Billion in Annual Sales.
                </article>
              </div>
            </>
          )}

          {/* mining content */}
          {clickedImage === miningVideo && (
            <>
              {/* element image*/}
              <figure
                className=" flex flex-col items-center justify-center relative w-full md:w-[43%] xl:w-[48%] 2xl:w-[50%] px-2 xl:px-4"
                data-aos="fade-up"
              >
                <video
                  autoPlay
                  loop
                  controls
                  className="rounded-2xl shadow-white shadow-2xl"
                >
                  <source src={miningVideo} type="video/mp4" />
                </video>
                <figcaption
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-4xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  MINING
                </figcaption>
              </figure>
              {/* elements description */}
              <div
                className=" w-full md:w-[37%] xl:w-[36%] 2xl:w-[35%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <article
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  Continuous Thickness Monitoring of Ceramic Liners.
                </article>
              </div>
            </>
          )}

          {/* paints content */}
          {clickedImage === paints && (
            <>
              {/* element image*/}
              <figure
                className=" flex flex-col items-center justify-center relative w-full md:w-[43%] xl:w-[48%] 2xl:w-[50%] px-2 xl:px-4"
                data-aos="fade-up"
              >
                <img
                  src={paints}
                  alt="paints"
                  className="shadow-white shadow-2xl rounded-2xl object-cover"
                />
                <figcaption
                  className="md:absolute md:top-full md:left-1/2 md:transform md:-translate-x-1/2 text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, white, rgb(209, 213, 219))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SPECIALTY&nbsp;CHEMICALS
                </figcaption>
              </figure>
              {/* elements description */}
              <div
                className=" w-full md:w-[37%] xl:w-[36%] 2xl:w-[35%] flex items-center justify-center p-4"
                data-aos="fade-up"
              >
                <article
                  className=" text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center"
                  style={{
                    color: "transparent",
                    background:
                      "linear-gradient(285.12deg, #011D4B 29.02%, #4B95E2 97.82%)",
                    backgroundClip: "text",
                    width: "100%",
                  }}
                >
                  {/* Batch non-homogeneity due to unavailability of continuous
                  viscosity measurement technique. */}
                  Real-Time Monitoring of Viscosity and Temperature in Paint
                  Mixtures, Maintains Paint Consistency and Improves Paint
                  Quality.
                </article>
              </div>
            </>
          )}
        </div>
      </section>

      {/* semi circle component */}
      <section
        className="  flex flex-col items-center justify-center relative mb-8 xl:h-[95vh]"
        id="section2"
        ref={sectionRefs.section2}
      >
        <div
          className={`hidden xl:block w-full h-full z-10 bg-black absolute transition-opacity duration-500 ${
            overlay ? "opacity-40" : "opacity-0"
          }`}
        ></div>
        <header
          // ref={sectionRefs.section2}
          className="flex justify-center relative text-center mb-1 text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold mx-[5%]"
        >
          <h2 className="flex flex-wrap justify-center gap-1">
            <div>Patented Ultrasonic </div>
            <div>
              <div>Waveguide Sensors:</div>
              <img className=" w-full h-2 -z-10" src={line} alt="line"></img>
            </div>
          </h2>
        </header>
        <h3 className="text-center text-xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-semibold mb-2 md:mb-4 2xl:mb-8">
          XYMA Analytics
        </h3>

        <div className=" mt-3 px-4 md:px-0 md:flex flex-wrap justify-center gap-2 text-[#FE7D18] z-10">
          {/* utmaps badge */}
          <article>
            <div
              className="mb-2 border border-[#FE9D1C] rounded-full cursor-pointer flex p-1 px-2 gap-2 bg-[#FFF6EA] relative"
              onMouseEnter={() => {
                handleOverlayEnter();
                handleUtmapsBadgeEnter();
              }}
              onMouseLeave={() => {
                handleOverlayLeave();
                handleUtmapsBadgeLeave();
              }}
              onClick={() => handleProductClick("uTMapS")}
            >
              <div>
                <img
                  className="object-cover object-top rounded-full w-6 h-6"
                  src={utmaps}
                  alt="utmaps"
                />
              </div>
              <h1 className="text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl font-semibold">
                μTMapS: Multi-Point Temperature
              </h1>
            </div>
            <div className="flex justify-end md:justify-normal">
              {utmapsBadge && (
                <div className="absolute bg-white border border-[#FE9D1C] rounded-xl w-[70%] md:w-[500px] z-10 text-gray-500 md:flex">
                  <div className="bg-white rounded-t-xl md:rounded-l-xl h-[150px] w-full md:w-[40%] p-1">
                    <figure className="w-full h-full bg-black rounded-xl flex justify-center ">
                      <img
                        className="object-cover object-top rounded-xl w-[50%] md:w-[75%] h-full"
                        src={utmaps}
                        alt="utmaps"
                      />
                    </figure>
                  </div>
                  <div className="bg-white w-full md:w-[60%] p-1 rounded-b-xl md:rounded-r-xl">
                    <h2 className="text-base font-bold text-black mb-1">
                      μTMapS & μSTMapS
                    </h2>
                    <p className="text-xs text-justify">
                      μTMapS & μSTMapS are IIoT-enabled temperature measurement
                      temperature profiling sensors that captures continuos
                      measurements at multiple points with asingle customized
                      waveguide with multiple configurations in contrast to
                      based thermocouples/RTDs or contactless IR guns
                    </p>
                  </div>
                </div>
              )}
            </div>
          </article>

          {/* ports badge */}
          <div>
            <div
              className="mb-2 border border-[#FE9D1C] rounded-full cursor-pointer flex p-1 px-2 gap-2 bg-[#FFF6EA] relative"
              onMouseEnter={() => {
                handleOverlayEnter();
                handlePortsBadgeEnter();
              }}
              onMouseLeave={() => {
                handleOverlayLeave();
                handlePortsBadgeLeave();
              }}
              onClick={() => handleProductClick("PoRTS")}
            >
              <div>
                <img
                  className="object-cover object-top rounded-full w-6 h-6 bg-black"
                  src={portsBadge2}
                  alt="ports"
                />
              </div>
              <h1 className="text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl font-semibold">
                PoRTS: Multi-Parameter Measurement
              </h1>
            </div>
            <div className="flex justify-end md:justify-normal">
              {portsBadge && (
                <div className="absolute bg-white border border-[#FE9D1C] rounded-xl w-[70%] md:w-[500px] z-10  text-gray-500 md:flex">
                  <div className="bg-white rounded-t-xl md:rounded-l-xl h-[150px] w-full md:w-[40%] p-1">
                    <figure className="w-full h-full bg-black rounded-xl flex justify-center ">
                      <img
                        className="object-cover object-top rounded-xl w-[50%] md:w-[75%] h-full"
                        src={ports}
                        alt="ports"
                      />
                    </figure>
                  </div>
                  <div className="bg-white w-full md:w-[60%] p-1 rounded-b-xl md:rounded-r-xl">
                    <h2 className="text-base font-bold text-black mb-1">
                      PoRTS
                    </h2>
                    <p className="text-xs text-justify">
                      PoRTS is an invasive/non-invasive based IIoT-enabled
                      rheology and temperature mesurement sensor that
                      continuously captures multiple parameters such as
                      viscosity, density and temperature with a single waveguide
                      unlike discrete measurement with thermocouple/RTDs or
                      discrete measurements with sampling from viscometer and
                      density meter.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ztar badge */}
          <div>
            <div
              className="mb-2 border border-[#FE9D1C] rounded-full cursor-pointer flex p-1 px-2 gap-2 bg-[#FFF6EA] relative"
              onMouseEnter={() => {
                handleOverlayEnter();
                handleZtarBadgeEnter();
              }}
              onMouseLeave={() => {
                handleOverlayLeave();
                handleZtarBadgeLeave();
              }}
              onClick={() => handleProductClick("Ztar")}
            >
              <div>
                <img
                  className="object-cover object-top rounded-full w-6 h-6 bg-black"
                  src={ztarBadge2}
                  alt="ztar"
                />
              </div>
              <h1 className="text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl font-semibold">
                Ztar: Contact/Non-contact based Level
              </h1>
            </div>

            <div className="flex justify-end md:justify-normal">
              {ztarBadge && (
                <div className="absolute bg-white border border-[#FE9D1C] rounded-xl w-[70%] md:w-[350px] z-10 text-gray-500 md:flex">
                  <div className="bg-white rounded-t-xl md:rounded-l-xl h-[150px] w-full md:w-[40%] p-1">
                    <figure className="w-full h-full bg-black rounded-xl flex justify-center ">
                      <img
                        className="object-cover object-top rounded-xl w-[50%] md:w-[75%] h-full"
                        src={ztar}
                        alt="ztar"
                      />
                    </figure>
                  </div>
                  <div className="bg-white w-full md:w-[60%] p-1 rounded-b-xl md:rounded-r-xl">
                    <h2 className="text-base font-bold text-black mb-1">
                      Ztar
                    </h2>
                    <p className="text-xs text-justify">
                      Ztar is a contact/contactless IIoT-enabled level that
                      captures continuous level across any hazardous environment
                      with accuracy in contrast to radar-based level measurement
                      sensors.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ipams badge */}
          <div className="relative">
            <div
              className="mb-2 border border-[#FE9D1C] rounded-full cursor-pointer flex p-1 px-2 gap-2 bg-[#FFF6EA] relative"
              onMouseEnter={() => {
                handleOverlayEnter();
                setIpamsBadge(true);
              }}
              onMouseLeave={() => {
                handleOverlayLeave();
                setIpamsBadge(false);
              }}
              onClick={() => handleProductClick("IPAMS")}
            >
              <div>
                <img
                  className="object-cover object-center rounded-full w-6 h-6 p-0.5 bg-black"
                  src={ipamsBadge2}
                  alt="ipams"
                />
              </div>
              <h1 className="text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl font-semibold">
                I-PAMS: Asset Monitoring
              </h1>
            </div>

            <div className="flex justify-end md:justify-normal">
              {ipamsBadge && (
                <div className="absolute right-[2%] bg-white border border-[#FE9D1C] rounded-xl w-[70%] md:w-[350px] z-10 text-gray-500 md:flex">
                  <div className="bg-white rounded-t-xl md:rounded-l-xl h-[150px] w-full md:w-[40%] p-1">
                    <figure className="w-full h-full bg-black rounded-xl flex justify-center ">
                      <img
                        className="object-cover object-center p-5"
                        src={ipams}
                        alt="ipams"
                      />
                    </figure>
                  </div>
                  <div className="bg-white w-full md:w-[60%] p-1 rounded-b-xl md:rounded-r-xl">
                    <h2 className="text-base font-bold text-black mb-1">
                      I-PAMS
                    </h2>
                    <p className="text-xs text-justify">
                      I-PAMS is out Industrial-IoT based asset monitoring system
                      for industries. It provides real-time data visualization
                      and detailed analysis delivering complete process control
                      to the operator.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative block w-[90%] md:w-[50%] xl:w-[40%] mt-2 2xl:w-[50%] ">
          <img
            className="w-full -z-10"
            data-aos="zoom-in-up"
            src={newbgcropped}
            alt="Background"
          />
          <div className="absolute flex text-right top-[65%] -left-[4%] 2xl:-left-[2%] rounded-2xl">
            <div>
              <img
                className="w-12 h-12"
                src={sensor}
                alt="Sensor"
                onMouseEnter={() => {
                  setHoveredItem("sensor");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                }}
              />
            </div>
            {hoveredItem === "sensor" && (
              <h3 className="md:hidden text-[10px] absolute top-1/2 left-[105%] transform -translate-y-1/2 bg-white p-1 rounded-xl border border-[#FE9D1C] text-[#FE7D18] text-left font-medium">
                Sensor&nbsp;Life&nbsp;up&nbsp;to 50,000 hrs
              </h3>
            )}
            <h3 className="hidden md:block text-[10px] xl:text-sm 2xl:text-lg absolute top-1/2 left-auto right-[105%] transform -translate-y-1/2 p-1 rounded-md border border-[#FE9D1C] shadow-orange-200 shadow-lg text-[#FE7D18] font-medium bg-white">
              Sensor&nbsp;Life&nbsp;up&nbsp;to&nbsp;50,000&nbsp;hrs
            </h3>
          </div>
          <div className="absolute flex text-right top-[30%] left-[4%] rounded-2xl">
            <div>
              <img
                className="w-12 h-12"
                src={iot}
                alt="Sensor"
                onMouseEnter={() => {
                  setHoveredItem("iot");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                }}
              />
            </div>
            {hoveredItem === "iot" && (
              <h3 className="md:hidden text-[10px] absolute top-1/2 left-[105%] transform -translate-y-1/2 bg-white p-1 rounded-xl border border-[#FE9D1C] text-[#FE7D18] text-left font-medium">
                Multi - Point Measurement
              </h3>
            )}
            <h3 className="hidden md:block text-[10px] xl:text-sm 2xl:text-lg absolute top-1/2 left-auto right-[105%] transform -translate-y-1/2 p-1 rounded-md  border border-[#FE9D1C]  text-[#FE7D18] font-medium bg-white shadow-orange-200 shadow-lg">
              Multi&nbsp;Point&nbsp;Measurement
            </h3>
          </div>
          <div className="absolute flex text-right top-[3%] left-[20%] rounded-2xl">
            <div>
              <img
                className="w-12 h-12"
                src={grp}
                alt="Sensor"
                onMouseEnter={() => {
                  setHoveredItem("grp");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                }}
              />
            </div>
            {hoveredItem === "grp" && (
              <h3 className="md:hidden text-[10px] absolute top-1/2 left-[105%] transform -translate-y-1/2 bg-white p-1 rounded-xl border border-[#FE9D1C] text-[#FE7D18] text-left font-medium">
                Energy Management System-IoT
              </h3>
            )}
            <h3 className="hidden md:block text-[10px] xl:text-sm 2xl:text-lg absolute top-1/2 left-auto right-[105%] transform -translate-y-1/2 p-1 rounded-md  border border-[#FE9D1C]  text-[#FE7D18] font-medium bg-white shadow-orange-200 shadow-lg">
              Energy&nbsp;Management&nbsp;System&nbsp;IoT
            </h3>
          </div>
          <div className="absolute flex text-right top-[3%] right-[20%] rounded-2xl">
            <div>
              <img
                className="w-12 h-12"
                src={zero}
                alt="Sensor"
                onMouseEnter={() => {
                  setHoveredItem("zero");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                }}
              />
            </div>
            {hoveredItem === "zero" && (
              <h3 className="md:hidden text-xs p-1 rounded-xl border border-[#FE9D1C] text-[#FE7D18] absolute top-1/2 right-[105%] transform -translate-y-1/2 bg-white text-right font-medium ">
                Zero&nbsp;Manual Intervention
              </h3>
            )}
            <h3 className="hidden md:block text-[10px] xl:text-sm 2xl:text-lg absolute top-1/2 right-auto left-[105%] transform -translate-y-1/2 p-1 rounded-md  border border-[#FE9D1C]  text-[#FE7D18] font-medium bg-white text-left shadow-orange-200 shadow-lg">
              Zero&nbsp;Manual&nbsp;Intervention
            </h3>
          </div>
          <div className="absolute flex text-right top-[30%] right-[4%] rounded-2xl">
            <div>
              <img
                className="w-12 h-12"
                src={ai}
                alt="Sensor"
                onMouseEnter={() => {
                  setHoveredItem("ai");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                }}
              />
            </div>
            {hoveredItem === "ai" && (
              <h3 className="md:hidden text-xs p-1 rounded-xl border border-[#FE9D1C] text-[#FE7D18] absolute top-1/2 right-[105%] transform -translate-y-1/2 bg-white text-right font-medium ">
                AI&nbsp;Enable&nbsp;Corrective Actions
              </h3>
            )}
            <h3 className="hidden md:block text-[10px] xl:text-sm 2xl:text-lg absolute top-1/2 left-[105%] right-auto transform -translate-y-1/2 p-1 rounded-md  border border-[#FE9D1C]  text-[#FE7D18] font-medium bg-white text-left shadow-orange-200 shadow-lg">
              AI&nbsp;Enable&nbsp;Corrective&nbsp;Actions
            </h3>
          </div>
          <div className="absolute flex text-right top-[65%] -right-[4%] 2xl:-right-[2%] rounded-2xl">
            <div>
              <img
                className="w-12 h-12"
                src={tool}
                alt="Sensor"
                onMouseEnter={() => {
                  setHoveredItem("tool");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                }}
              />
            </div>
            {hoveredItem === "tool" && (
              <h3 className="md:hidden text-xs p-1 rounded-xl border border-[#FE9D1C] text-[#FE7D18] absolute top-1/2 right-[105%] transform -translate-y-1/2 bg-white text-right font-medium ">
                Retrofit Benifits
              </h3>
            )}
            <h3 className="hidden md:block text-[10px] xl:text-sm 2xl:text-lg absolute top-1/2 left-[105%] right-auto transform -translate-y-1/2 p-1 rounded-md  border border-[#FE9D1C]  text-[#FE7D18] font-medium bg-white text-left shadow-orange-200 shadow-lg">
              Retrofit&nbsp;Benifits
            </h3>
          </div>
        </div>
      </section>

      {/* grid card section */}
      <section id="section3" ref={sectionRefs.section3} className=" ">
        <div
          className="text-white py-4 md:pb-10 md:pt-10"
          style={{
            background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
          }}
        >
          <div
            // ref={sectionRefs.section3}
            className=" flex justify-center items-center  xl:mx-[8%]"
          >
            <header className="md:flex md:flex-wrap justify-center gap-2 text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold text-center">
              <div>Enhancing&nbsp;Profitable,</div>
              <div className="mx-[8%] md:mx-0 flex flex-col items-center">
                <div>Competitive&nbsp;and&nbsp;Sustainable&nbsp;Business</div>
                <img className="w-full h-2" src={line} alt="line"></img>
              </div>
            </header>
          </div>

          <div className=" mt-4 mx-[5%] xl:mx-[8%] flex flex-col md:flex-row p-4 gap-3">
            <div
              className="w-full md:w-[35%] px-4 2xl:px-8 rounded-lg flex flex-col gap-2 text-center py-8 md:py-12 xl:py-16 justify-center"
              data-aos="flip-right"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
            >
              <div className=" flex justify-center">
                <img className="rounded-lg" src={awardPhoto} alt="award" />
              </div>
              <div className="text-xl lg:text-2xl 2xl:text-4xl font-semibold">
                <h1>Award Winning Technology</h1>
              </div>

              <h2 className="text-sm lg:text-base xl:text-lg 2xl:text-xl">
                Winner of National Technology Award 2023 - Start up.
              </h2>
            </div>

            <div className=" w-full md:w-[65%] flex flex-col gap-3">
              <div className=" flex flex-col md:flex-row gap-3 h-auto md:h-1/2">
                {/* white box 1 */}
                <div
                  className=" rounded-lg bg-white w-full md:w-1/2 p-2 py-4 flex flex-col gap-2"
                  data-aos="flip-up"
                >
                  <div className="flex gap-2 ">
                    <div className=" flex items-center justify-center">
                      <img className="w-12 " src={client} alt="Client icon" />
                    </div>
                    <h3 className=" flex items-center text-black text-lg  lg:text-2xl 2xl:text-3xl font-semibold">
                      Client-Centric
                    </h3>
                  </div>
                  <p className=" text-[#60646C] text-left text-sm lg:text-base 2xl:text-xl">
                    The Solution is provided based on in-depth understanding of
                    clients needs addressing the relevant challenges.
                  </p>
                </div>

                {/* white box 2 */}
                <div
                  className=" rounded-lg bg-white w-full md:w-1/2 p-2 py-4 flex flex-col gap-2"
                  data-aos="flip-up"
                >
                  <div className="flex gap-2 ">
                    <div className=" flex items-center justify-center">
                      <img className="w-12 " src={solution} alt="solution" />
                    </div>
                    <h3 className=" flex items-center text-black text-lg  lg:text-2xl 2xl:text-3xl font-semibold">
                      Customization for Solutions
                    </h3>
                  </div>
                  <p className=" text-[#60646C] text-left text-sm lg:text-base 2xl:text-xl">
                    Gain immediate access to valuable data through the
                    technology's adaptability with material selection and
                    configuration for waveguides.
                  </p>
                </div>
              </div>

              <div className=" flex flex-col md:flex-row gap-3 h-auto md:h-1/2">
                {/* white box 3 */}
                <div
                  className=" rounded-lg bg-white w-full md:w-1/2 p-2 py-4 flex flex-col gap-2"
                  data-aos="flip-up"
                >
                  <div className="flex gap-2 ">
                    <div className=" flex items-center justify-center">
                      <img className="w-12 " src={real} alt="real" />
                    </div>
                    <h3 className=" flex items-center text-black text-lg  lg:text-2xl 2xl:text-3xl font-semibold">
                      Real-Time Insights
                    </h3>
                  </div>
                  <p className=" text-[#60646C] text-left text-sm lg:text-base 2xl:text-xl">
                    Gain immediate access to valuable data through our
                    supervised sensing capabilities, empowering informed
                    decision-making.
                  </p>
                </div>

                {/* white box 4 */}
                <div
                  className=" rounded-lg bg-white w-full md:w-1/2 p-2 py-4 flex flex-col gap-2"
                  data-aos="flip-up"
                >
                  <div className="flex gap-2 ">
                    <div className=" flex items-center justify-center">
                      <img className="w-12 " src={time} alt="time" />
                    </div>
                    <h3 className=" flex items-center text-black text-lg  lg:text-2xl 2xl:text-3xl font-semibold">
                      On-Time Delivery
                    </h3>
                  </div>
                  <p className=" text-[#60646C] text-left text-sm lg:text-base 2xl:text-xl">
                    Committed to adhering to project timelines and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-12 w-full"
          style={{
            background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
          }}
        >
          <div className="sliding-text-container " data-aos="slide-left">
            <div className="flex">
              <div className="mt-2.5 sliding-text text-white gap-1">
                <h3>Continuous Wear Monitoring &#10039;</h3>
                <h3>
                  Continuous Multi-point temperature measurements &#10039;
                </h3>
                <h3>Continuous multi-parameter measurements &#10039;</h3>
                <h3>
                  Continuous contact & non-contact based level measurement
                  &#10039;
                </h3>

                {/* duplicate */}
                <h3>Continuous Wear Monitoring &#10039;</h3>
                <h3>
                  Continuous Multi-point temperature measurements &#10039;
                </h3>
                <h3>Continuous multi-parameter measurements &#10039;</h3>
                <h3>
                  Continuous contact & non-contact based level measurement
                  &#10039;
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* clients section */}
      <section id="section4" ref={sectionRefs.section4} className=" ">
        <header
          // ref={sectionRefs.section4}
          className="flex flex-col justify-center items-center mt-8 md:mt-20 md:pt-4"
        >
          <div className="text-center flex justify-center">
            <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
              <h1>Our&nbsp;Clients</h1>
              <img className="w-full h-2" src={line} alt="line"></img>
            </div>
          </div>
          <p className="flex justify-center items-center mt-3 text-center text-[#60646C] mx-[5%] md:mx-[8%] xl:mx-[12%] text-sm md:text-base lg:text-lg 2xl:text-xl font-medium">
            Committed to client satisfaction with constant support at all
            stages, our aim is to aid Industry 4.0 transformation while reducing
            environmental impact, increasing cost savings, and enhancing process
            efficiency.
          </p>
        </header>

        {/* client logo carousel*/}
        <div className="mt-16 mb-8 md:mx-[8%]">
          <Slider {...settings}>
            <figure className="mb-6">
              <img
                src={sg}
                alt="saint-gobain-logo"
                className="mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={tata}
                alt="tata-steel-logo"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={drdo}
                alt="Defence-Research-and-Development-Organisation-logo"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={cumi}
                alt="cumi"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={lam}
                alt="lam"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={ind}
                alt="ind"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={epri}
                alt="epri"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={skf}
                alt="skf"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={bharat}
                alt="bharat"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={ved}
                alt="ved"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={schneider}
                alt="schneider"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={reliance}
                alt="reliance"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={threeLions}
                alt="threeLions"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>

            <figure className="mb-6">
              <img
                src={cairn}
                alt="cairn"
                className=" mx-auto max-w-[145px] h-auto"
              />
            </figure>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;