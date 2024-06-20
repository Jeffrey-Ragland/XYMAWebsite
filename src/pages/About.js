import React, {useEffect, useRef, useState} from 'react';
import iit from '../Assets/Frameiit.png';
import frame1 from '../Assets/Frame1.png';
import frame21 from '../Assets/Frame21.png';
import frame3 from '../Assets/Frame3.png';
import frame4 from '../Assets/Frame4.png';
import c1 from '../Assets/Framec1.png';
import c2 from '../Assets/Framec2.png';
import c3 from '../Assets/Framec3.png';
import c4 from '../Assets/Framec4.png';
import c5 from '../Assets/Framec5.png';
import c6 from '../Assets/Framec6.png';
import ceo from "../Assets/ceo.jpg";
import cto from "../Assets/cto.jpg";
import adv1 from "../Assets/adv1.png";
import adv2 from "../Assets/adv2.png";
import framevector from '../Assets/framevector.png';
import photo from '../Assets/photo.png';
import groupPicEdited from '../Assets/groupPicEdited.png';
import teamLeadPic from '../Assets/teamLeadPhoto.jpg';
import designTeam from "../Assets/designTeam.jpg";
import dataTeam from "../Assets/dataTeam.jpg";
import electronicsTeam from "../Assets/electronicsTeam.jpg";
import softwareTeam from "../Assets/softwareTeam.jpg";
import adminTeam from "../Assets/adminTeam.jpg";
import portsTeam from "../Assets/portsTeam.jpg";
import pythonTeam from "../Assets/pythonTeam.jpg";
import Xarrow from "react-xarrows";
import useWindowSize from "react-use/lib/useWindowSize";
import line from "../Assets/underline.png";
import xyma from '../Brand/xyma.png';
import iitmic from '../Brand/iitmic.png';
import sg from "../Brand/sg2.png";
import ind from "../Brand/iocl2.png";
import bharat from "../Brand/bpcl2.png";
import ved from "../Brand/vedanta2.png";
import lam from "../Brand/lam.png";
import epri from "../Brand/epri.png";
import skf from "../Brand/skf.png";
import schneider from "../Brand/schneider.png";
import drdo from "../Brand/drdo.png";
import cumi from "../Brand/cumi.png";
import threeLions from "../Brand/threeLions.png";
import cairn from "../Brand/cairn.png";
import startup from '../Brand/startupIndia.png';
import nasscom from '../Brand/nasscom.png';
import shell from '../Brand/shell.png';
import srf from "../Brand/srf.png";
import forge from '../Brand/forge.png';
import ventureEight from '../Brand/8xVentures.png';
import venture from '../Brand/venture.png';
import gail from '../Brand/gail.png';
import ab from '../Brand/ab.png';
import nalco from '../Brand/nalco.jpg';
import Slider from "react-slick";
import { RiMapPinTimeLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { GiAchievement } from "react-icons/gi";
import { FaListCheck, FaArrowRightToBracket } from "react-icons/fa6";
import { LiaSitemapSolid } from "react-icons/lia";
import { GiSoundWaves } from "react-icons/gi";
import { PiCircuitryLight } from "react-icons/pi";
import { TbBrandPython } from "react-icons/tb";
import { BsClipboardData } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [renderIconMenu, setRenderIconMenu] = useState(false);
  const [activeSection, setActiveSection] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [boxOneMore, setBoxOneMore] = useState(false);
  const [boxTwoMore, setBoxTwoMore] = useState(false);
  const [boxThreeMore, setBoxThreeMore] = useState(false);

  const { width } = useWindowSize();
  const isLargeScreen = width >= 768;

  const coverImageRef = useRef(null);

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
    section8: useRef(null),
    section9: useRef(null),
    section10: useRef(null),
    section11: useRef(null),
    section12: useRef(null),
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

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

          if (visiblePercentage >= 40) {
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
    <div className="overflow-hidden">
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
      <div
        ref={coverImageRef}
        className=" relative mt-[10vh] h-[60vh] md:h-[70vh] xl:h-[90vh] shadow-white shadow-2xl"
      >
        <img className="h-full w-full object-cover" src={iit} alt="Frame" />
        <div className="absolute h-full w-full inset-0 p-8 md:p-16 text-white">
          <div className="w-full h-full xl:flex">
            <div className="w-full xl:w-[90%] h-[70%] xl:h-full flex flex-col gap-4 justify-center text-center xl:text-left">
              <div className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold">
                2019
              </div>
              <div className="text-lg md:text-3xl lg:text-4xl 2xl:text-6xl font-normal">
                Founded through the CNDE, IIT <br /> Madras, and incubated at
                IIT Madras <br /> Incubation Cell
              </div>
            </div>
            <div className="w-full xl:w-[10%] h-[30%] xl:h-full flex xl:flex-col justify-evenly">
              <div>
                <div className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold mb-2">
                  50+
                </div>
                <div className="text-xs md:text-lg lg:text-xxl xl:text-base 2xl:text-2xl font-normal md:font-medium">
                  Years&nbsp;of&nbsp;Industrial
                  <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold mb-2">
                  15+
                </div>
                <div className="text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
                  Intellectual
                  <br />
                  Properties
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold mb-2">
                  20+
                </div>
                <div className="text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
                  Projects&nbsp;Accross
                  <br />
                  Globe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom text */}
      <div
        className="text-center font-semibold text-[40px] md:text-[90px] 2xl:text-[120px] -mt-[20px] md:-mt-[50px] 2xl:-mt-[65px] mb-[20px] md:mb-[70px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white, rgb(209, 213, 219))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        ABOUT US
      </div>

      {/* icon menu */}
      {renderIconMenu && (
        <div
          className="hidden border border-r-orange-400 border-t-orange-400 border-b-orange-400 bg-white z-40 fixed left-0 top-1/2 transform -translate-y-1/2 text-xl px-2 md:flex flex-col gap-5 py-4 rounded-r-2xl"
          data-aos=""
        >
          <div
            onClick={() => handleSectionScroll(sectionRefs.section1)}
            className={`cursor-pointer ${
              activeSection.includes("section1")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <RiMapPinTimeLine size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section2)}
            className={`cursor-pointer ${
              activeSection.includes("section2")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GrGroup size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section3)}
            className={`cursor-pointer ${
              activeSection.includes("section3")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <LiaSitemapSolid size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section4)}
            className={`cursor-pointer ${
              activeSection.includes("section4")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <PiCircuitryLight size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section5)}
            className={`cursor-pointer ${
              activeSection.includes("section5")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <FaLaptopCode size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section6)}
            className={`cursor-pointer ${
              activeSection.includes("section6")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiSoundWaves size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section7)}
            className={`cursor-pointer ${
              activeSection.includes("section7")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <MdOutlineDesignServices size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section8)}
            className={`cursor-pointer ${
              activeSection.includes("section8")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <TbBrandPython size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section9)}
            className={`cursor-pointer ${
              activeSection.includes("section9")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <BsClipboardData size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section10)}
            className={`cursor-pointer ${
              activeSection.includes("section10")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GrUserAdmin size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section11)}
            className={`cursor-pointer ${
              activeSection.includes("section11")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiAchievement size={20} />
          </div>

          <div
            onClick={() => handleSectionScroll(sectionRefs.section12)}
            className={`cursor-pointer ${
              activeSection.includes("section12")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <FaListCheck size={20} />
          </div>
        </div>
      )}

      <section id="section1" ref={sectionRefs.section1}>
        <div className="mt-8 mx-[5%] mb-8 md:mb-12">
          <div className="text-center flex justify-center">
            <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
              <div>About XYMA</div>
              <img className="w-full h-2" src={line} alt="line"></img>
            </div>
          </div>
          <div className="text-[#60646C] text-center text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl mt-2">
            "XYMA Analytics is a deep-tech company started from IIT Madras,
            serving 15+ MNCs globally now to provide them with accurate
            multi-point temperature and multi-parameter measurements through
            patented ultrasonic waveguide technology."
          </div>
        </div>

        {/* arrow box */}
        <div className="mx-[5%] mb-8 md:mb-12 2xl:mb-16">
          {isLargeScreen ? (
            <>
              <Xarrow
                start="box1"
                end="box2"
                dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                color="gray"
                strokeWidth={1}
                headSize={10}
                curveness={1.2}
                showTail={true}
                tailShape="circle"
                zIndex={10}
              />
              <Xarrow
                start="box3"
                end="box4"
                dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                color="gray"
                strokeWidth={1}
                headSize={10}
                curveness={1.2}
                showTail={true}
                tailShape="circle"
                zIndex={10}
              />
            </>
          ) : (
            <>
              <Xarrow
                start="box5"
                end="box6"
                startAnchor="bottom"
                endAnchor="top"
                dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                color="gray"
                strokeWidth={1}
                headSize={10}
                curveness={1.2}
                showTail={true}
                tailShape="circle"
                zIndex={10}
              />
              <Xarrow
                start="box7"
                end="box8"
                startAnchor="bottom"
                endAnchor="top"
                dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
                color="gray"
                strokeWidth={1}
                headSize={10}
                curveness={1.2}
                showTail={true}
                tailShape="circle"
                zIndex={10}
              />
            </>
          )}

          <div className=" md:flex justify-between mb-2">
            {/* box 1 */}
            <div
              className="relative border border-[#CDCED6] w-full md:w-[35%] p-4 rounded-2xl mb-4 md:mb-0"
              id="box1"
            >
              <div className=" w-full h-full">
                <div className=" flex items-center mb-2">
                  <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                    May-2019
                  </span>
                </div>
                <div className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl mb-2">
                  Incorporation of Xyma Analytics at IITM IC
                </div>
                <div className="mb-2 mx-[10%]">
                  <div className="flex items-center gap-2">
                    <div className="w-1/2 flex justify-center">
                      <img
                        src={xyma}
                        alt="xymalogo"
                        className="w-[80%] object-cover"
                      />
                    </div>
                    <div className="w-1/2 flex justify-center">
                      <img
                        src={iitmic}
                        alt="iitmic"
                        className="w-[80%] object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className=" flex items-center mb-2">
                  <span
                    className="text-xs lg:text-sm xl:text-xs 2xl:text-sm rounded-full px-2 py-1 text-white cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                    }}
                    onClick={() => setBoxOneMore(true)}
                  >
                    View More
                  </span>
                </div>
              </div>
              {/* empty div for arrow 1 - small screen*/}
              <div className=" absolute w-4 bottom-0 right-[10%]" id="box5" />

              {boxOneMore && (
                <div className="absolute inset-0 border border-[#CDCED6] rounded-2xl  h-full bg-white p-4 flex gap-2">
                  <div
                    className="absolute right-4 top-4 cursor-pointer text-[#FE6F17]"
                    onClick={() => setBoxOneMore(false)}
                  >
                    <FaArrowRightToBracket size={20} />
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <div className="flex">
                      <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                        Sep-2019
                      </span>
                    </div>
                    <div className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl mb-4 mt-2">
                      DPIIT Approval [DIPP3990]
                    </div>
                    <div className=" flex-1 flex items-center">
                      <div className="flex justify-center ">
                        <img
                          src={startup}
                          alt="startup"
                          className="w-[95%] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border border-[#CDCED6] my-4"></div>
                  <div className="w-1/2 flex flex-col">
                    <div>
                      <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                        Mar-2020
                      </span>
                    </div>
                    <div className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl mt-2">
                      Product Delivered to SGRI
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className="flex justify-center">
                        <img
                          src={sg}
                          alt="sg"
                          className="w-[90%] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* text 1 */}
            <div className=" relative w-[60%] md:w-[30%] text-sm lg:text-base xl:text-sm 2xl:text-lg font-medium flex items-center text-left mb-4 md:mb-0">
              Lorem Ipsum has been the industry's standard dummy text when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </div>
          </div>

          <div className=" flex flex-col-reverse md:flex-row justify-between mb-2">
            {/* text 2 */}
            <div className="w-[60%] md:w-[30%] text-sm lg:text-base xl:text-sm 2xl:text-lg font-medium flex items-center text-left mb-4 md:mb-0">
              Lorem Ipsum has been the industry's standard dummy text when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </div>
            {/* box 2 */}
            <div className="relative border border-[#CDCED6] w-full md:w-[35%] rounded-2xl mb-4 md:mb-0 py-2">
              <div className="flex gap-2">
                <div className=" w-1/2">
                  <div className="flex items-center px-4 mb-2">
                    <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                      Feb-2021
                    </span>
                  </div>
                  <div className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl px-4 mb-1">
                    Accelerators
                  </div>
                  {/* empty div for arrow */}
                  <div
                    className=" absolute left-0 top-[45%]  w-1"
                    id="box2"
                  ></div>
                  {/* empty div for arrow */}
                  <div className="absolute left-0 top-1/2  w-1" id="box3"></div>
                  <div className="mb-4 mx-[10%]">
                    <div className="">
                      <div className="flex justify-center mb-4">
                        <img
                          src={nasscom}
                          alt="nasscom"
                          className="w-[80%] object-cover"
                        />
                      </div>
                      <div className="flex justify-center mb-4">
                        <img
                          src={shell}
                          alt="shell"
                          className="w-[80%] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-[#CDCED6] mt-4"></div>

                <div className=" w-1/2 flex flex-col">
                  <div className="flex items-center px-4 mb-2">
                    <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                      Sep-2021
                    </span>
                  </div>
                  <div className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl px-4 mb-1">
                    Product Delivered
                  </div>
                  <div className="mb-2 mx-[10%] flex-1 flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1/2 flex justify-center">
                        <img
                          src={bharat}
                          alt="bharat"
                          className="w-[80%] object-cover"
                        />
                      </div>
                      <div className="w-1/2 flex justify-center">
                        <img
                          src={ind}
                          alt="ind"
                          className="w-[80%] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center px-4 mb-4">
                <span
                  className="text-xs lg:text-sm xl:text-xs 2xl:text-sm rounded-full px-2 py-1 text-white cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() => setBoxTwoMore(true)}
                >
                  View More
                </span>
              </div>
              {/* empty div for arrow 1 - small screen*/}
              <div className="absolute w-4 top-[10%] right-[20%]" id="box6" />
              {/* empty div for arrow 2 - small screen */}
              <div className="absolute w-4 bottom-0 right-[10%]" id="box7" />

              {boxTwoMore && (
                <div className="absolute inset-0 border border-[#CDCED6] rounded-2xl  h-full bg-white p-4 flex gap-2">
                  <div
                    className="absolute right-4 top-4 cursor-pointer text-[#FE6F17]"
                    onClick={() => setBoxTwoMore(false)}
                  >
                    <FaArrowRightToBracket size={20} />
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <div className="flex">
                      <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                        Mar-2022
                      </span>
                    </div>
                    <div className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl mb-2 mt-2">
                      Project Delivered for Vedanta & SRF
                    </div>
                    <div>
                      <div className="flex justify-center mb-2">
                        <img
                          src={ved}
                          alt="vedanta"
                          className="w-[60%] object-cover"
                        />
                      </div>
                      <div className="flex justify-center">
                        <img
                          src={srf}
                          alt="srf"
                          className="w-[60%] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border border-[#CDCED6] my-4"></div>
                  <div className="w-1/2 flex flex-col">
                    <div>
                      <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                        Apr-2020
                      </span>
                    </div>
                    <div className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl mt-2">
                      Seed Investment
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex gap-1">
                        <div className="flex justify-center w-1/2">
                          <img
                            src={forge}
                            alt="forge"
                            className="w-[60%] object-cover"
                          />
                        </div>
                        <div className="flex justify-center items-center w-1/2">
                          <img
                            src={ventureEight}
                            alt="8Exventure"
                            className="h-6 md:h-4 lg:h-6 2xl:h-10 object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div className="flex justify-center items-center w-1/2">
                          <img
                            src={venture}
                            alt="ventureCatalyst"
                            className="h-5 md:h-3 lg:h-5 2xl:h-9 object-cover"
                          />
                        </div>
                        <div className="flex justify-center w-1/2">
                          <img
                            src={gail}
                            alt="gail"
                            className="w-[60%] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className=" md:flex justify-between">
            {/* box 3 */}
            <div
              className="relative border border-[#CDCED6] w-full md:w-[35%] p-4 rounded-2xl mb-4 md:mb-0"
              id="box4"
            >
              <div className=" w-full">
                <div className="flex gap-1">
                  <div className="w-1/2 ">
                    <div className="flex items-center mb-2">
                      <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                        Sep-2022
                      </span>
                    </div>
                    <div className="font-semibold lg:text-base xl:text-base 2xl:text-xl mb-2">
                      Project Initiated
                    </div>
                    <div className="flex justify-center mb-2 ">
                      <img
                        src={lam}
                        alt="lam"
                        className="w-[60%] object-cover "
                      />
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={epri}
                        alt="epri"
                        className="w-[60%] object-cover"
                      />
                    </div>
                  </div>

                  <div className="border border-[#CDCED6] mt-8 mr-4"></div>

                  <div className="w-1/2 flex flex-col">
                    <div className="flex items-center mb-2">
                      <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                        Sep-2023
                      </span>
                    </div>
                    <div className="font-semibold lg:text-base xl:text-base 2xl:text-xl mb-2">
                      Product Delivered
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex gap-1">
                        <div className="flex justify-center w-1/2">
                          <img
                            src={skf}
                            alt="skf"
                            className="w-full object-cover"
                          />
                        </div>
                        <div className="flex justify-center items-center w-1/2">
                          <img
                            src={cumi}
                            alt="cumi"
                            className="w-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <div className="flex justify-center items-center w-1/2">
                          <img
                            src={drdo}
                            alt="drdo"
                            className="w-full object-cover"
                          />
                        </div>
                        <div className="flex justify-center w-1/2">
                          <img
                            src={schneider}
                            alt="schneider"
                            className="w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-2">
                  <span
                    className="text-xs lg:text-sm xl:text-xs 2xl:text-sm rounded-full px-2 py-1 text-white cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                    }}
                    onClick={() => setBoxThreeMore(true)}
                  >
                    View More
                  </span>
                </div>
              </div>
              {/* empty div for arrow 2 - small screen*/}
              <div className="absolute w-4 top-[10%] right-[20%]" id="box8" />

              {boxThreeMore && (
                <div className="absolute inset-0 border border-[#CDCED6] rounded-2xl  h-full bg-white p-4 flex gap-2">
                  <div
                    className="absolute right-4 top-4 cursor-pointer text-[#FE6F17]"
                    onClick={() => setBoxThreeMore(false)}
                  >
                    <FaArrowRightToBracket size={20} />
                  </div>
                  <div className="flex flex-col  ">
                    <div className="flex">
                      <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                        Mar-2024
                      </span>
                    </div>
                    <div className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl mb-4 mt-2">
                      Project Initiated
                    </div>
                    <div className="flex  ">
                      <div className="w-1/2">
                        <div className="flex justify-center mb-2">
                          <img
                            src={threeLions}
                            alt="threeLions"
                            className="w-[60%] object-cover"
                          />
                        </div>
                        <div className="flex justify-center items-center">
                          <img
                            src={nalco}
                            alt="nalco"
                            className="w-[40%] object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="flex justify-center items-center mb-2">
                          <img
                            src={cairn}
                            alt="cairn"
                            className="w-[50%] object-cover"
                          />
                        </div>
                        <div className="flex justify-center">
                          <img
                            src={ab}
                            alt="ab"
                            className="w-[50%] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* text 3 */}
            <div className="w-full md:w-[30%] text-sm lg:text-base xl:text-sm 2xl:text-lg font-medium flex items-center text-left mb-4 md:mb-0">
              Lorem Ipsum has been the industry's standard dummy text when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </div>
          </div>
        </div>
      </section>

      <section
        id="section2"
        ref={sectionRefs.section2}
        className="mx-[5%] md:mx-[8%] mb-4 md:mb-8 2xl:mb-12"
      >
        {/* group pic */}
        <div className="text-center flex justify-center mb-4 md:mb-6 2xl:mb-8">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
            <div>The Team</div>
            <img className="w-full h-2" src={line} alt="line"></img>
          </div>
        </div>
        <img
          className="mt-4 rounded-2xl"
          src={groupPicEdited}
          alt="group"
          data-aos="zoom-in-up"
        ></img>
      </section>

      {/* team leads */}
      <section
        id="section3"
        ref={sectionRefs.section3}
        className="mx-[5%] md:mx-[10%]"
      >
        <div className="text-center flex justify-center mb-4 md:mb-6 2xl:mb-8">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
            <div>Team Division</div>
            <img className="w-full h-2" src={line} alt="line"></img>
          </div>
        </div>
        <div className="md:mx-[10%] mb-10">
          <img
            className="mt-4 rounded-2xl"
            src={teamLeadPic}
            alt="teamLeads"
            data-aos="zoom-in-up"
          ></img>
        </div>
      </section>

      {/* electronics team */}
      <section
        id="section4"
        ref={sectionRefs.section4}
        className="mx-[5%] md:mx-[8%]"
      >
        <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
          Electronics Team
        </center>
        <div className="md:flex gap-8 mb-6 md:mb-10">
          <div className="w-full md:w-[50%] mb-4 md:mb-0">
            <img
              src={electronicsTeam}
              alt="electronicsTeam"
              className="rounded-2xl"
              data-aos="slide-right"
            />
          </div>
          <div className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center">
            The electronics team's responsibilities include creating circuit
            designs, developing embedded systems, and troubleshooting electronic
            hardware. The team works on projects ranging from consumer
            electronics to industrial automation, ensuring that devices and
            systems are reliable, efficient, and meet safety standards. They
            collaborate with other departments to integrate electronics into
            products, enhance functionality, and drive innovation in the
            company's offerings.
          </div>
        </div>
      </section>

      {/* software team */}
      <section
        id="section5"
        ref={sectionRefs.section5}
        className="mx-[5%] md:mx-[8%]"
      >
        <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
          Software Development Team
        </center>
        <div className="flex flex-col-reverse md:flex-row gap-8 mb-6 md:mb-10">
          <div className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center">
            The software team is responsible for designing, developing, testing,
            and maintaining software applications and systems. Their tasks
            include writing code, debugging, implementing new features, and
            ensuring software performance and security. The team works on a
            range of projects, from developing customer-facing applications to
            internal tools that streamline operations. They use various
            programming languages to create reliable and user-friendly software
            solutions. Collaboration with other departments is key to ensuring
            that the software meets the needs of the business and its customers.
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src={softwareTeam}
              alt="softwareTeam"
              className="rounded-2xl"
              data-aos="slide-left"
            />
          </div>
        </div>
      </section>

      {/* ultrasonic team */}
      <section
        id="section6"
        ref={sectionRefs.section6}
        className="mx-[5%] md:mx-[8%]"
      >
        <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
          Ultrasonics Team
        </center>
        <div className="md:flex gap-8 mb-6 md:mb-10">
          <div className="w-full md:w-[50%] mb-4 md:mb-0">
            <img
              src={portsTeam}
              alt="portsTeam"
              className="rounded-2xl"
              data-aos="slide-right"
            />
          </div>
          <div className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center">
            The ultrasonics team is responsible for developing and implementing
            ultrasonic technology solutions. This involves using high-frequency
            sound waves for various applications. The team typically works on
            designing, testing, and maintaining ultrasonic equipment, ensuring
            high precision and efficiency in their operations. They collaborate
            with other departments to integrate ultrasonic solutions into
            products and processes, improving quality control, safety, and
            performance.
          </div>
        </div>
      </section>

      {/* designing team */}
      <section
        id="section7"
        ref={sectionRefs.section7}
        className="mx-[5%] md:mx-[8%]"
      >
        <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
          Mechanical Designing Team
        </center>
        <div className="flex flex-col-reverse md:flex-row gap-8 mb-6 md:mb-10">
          <div className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center">
            The designing team is responsible for creating visual and user
            experience (UX) designs that align with the company’s brand and
            product goals. Their tasks include developing graphics, layouts, and
            interfaces. They focus on aesthetics, usability, and user
            satisfaction, ensuring that designs are both appealing and
            functional. The team often uses tools like Adobe Creative Suite,
            Sketch, and Figma, and works closely with other departments, such as
            marketing and development.
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src={designTeam}
              alt="designTeam"
              className="rounded-2xl"
              data-aos="slide-left"
            />
          </div>
        </div>
      </section>

      {/* python team */}
      <section
        id="section8"
        ref={sectionRefs.section8}
        className="mx-[5%] md:mx-[8%]"
      >
        <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
          Software Backend and Operations Team
        </center>
        <div className="md:flex gap-8 mb-6 md:mb-10">
          <div className="w-full md:w-[50%] mb-4 md:mb-0">
            <img
              src={pythonTeam}
              alt="pythonTeam"
              className="rounded-2xl"
              data-aos="slide-right"
            />
          </div>
          <div className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center">
            The Python team specializes in developing software solutions using
            the Python programming language. Their responsibilities include
            writing and maintaining code for various applications, such as web
            development, data analysis, machine learning, and automation. The
            team works on creating efficient, scalable, and maintainable
            software, leveraging Python's versatility and extensive libraries.
            They collaborate with other departments to integrate Python-based
            solutions into projects.
          </div>
        </div>
      </section>

      {/* data team */}
      <section
        id="section9"
        ref={sectionRefs.section9}
        className="mx-[5%] md:mx-[8%]"
      >
        <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
          Data Analytics Team
        </center>
        <div className="flex flex-col-reverse md:flex-row gap-8 mb-6 md:mb-10">
          <div className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center">
            The data analysis team is responsible for collecting, processing,
            and interpreting large sets of data to provide actionable insights.
            Their tasks include data cleaning, statistical analysis, data
            visualization, and creating reports to support decision-making
            processes. The team uses various tools and techniques to identify
            trends, patterns, and correlations within the data, helping the
            company to optimize operations, understand customer behavior, and
            drive strategic initiatives.
          </div>
          <div className="w-full md:w-[50%]">
            <img
              src={dataTeam}
              alt="dataTeam"
              className="rounded-2xl"
              data-aos="slide-left"
            />
          </div>
        </div>
      </section>

      {/* admin team */}
      <section
        id="section10"
        ref={sectionRefs.section10}
        className="mx-[5%] md:mx-[8%]"
      >
        <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
          Admin Department
        </center>
        <div className="md:flex gap-8 mb-6 md:mb-10">
          <div className="w-full md:w-[50%] mb-4 md:mb-0">
            <img
              src={adminTeam}
              alt="adminTeam"
              className="rounded-2xl"
              data-aos="slide-right"
            />
          </div>
          <div className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center">
            The admin department is responsible for managing the day-to-day
            administrative functions and ensuring smooth office operations.
            Their tasks include handling correspondence, managing schedules and
            appointments, organizing meetings, maintaining records, and
            overseeing office supplies and equipment. They also coordinate with
            other departments to support administrative needs, assist with human
            resources tasks like onboarding and payroll, and ensure compliance
            with company policies and procedures.
          </div>
        </div>
      </section>

      <section
        id="section11"
        ref={sectionRefs.section11}
        className="mx-[5%] mb-8 md:mb-12 2xl:mb-16"
      >
        <div className="text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold mb-4 md:mb-6 2xl:mb-8">
            <div>The Vision</div>
            <img className="w-full h-2" src={line} alt="line"></img>
          </div>
        </div>
        <div className="mb-4 md:mb-6 2xl:mb-8 text-[#60646C] text-center text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl">
          Our vision is to provide reliable measurements at the most unreliable
          times. Democratize sensor-based process efficiency in Industries by
          enabling them with rich data sets of process parameters. Provide
          plant-wide distributed and concurrent sensing solutions for disruptive
          data-driven decision making with enhanced sustainability.
        </div>
        <div className="grid grid-cols-2 md:flex gap-4 py-2">
          <img
            className="w-[100%] md:w-[24%] md:h-[50%]"
            src={frame1}
            alt="Frame 1"
            data-aos="fade-up"
          />
          <img
            className="w-[100%] md:w-[24%] md:h-[50%]"
            src={frame21}
            alt="Frame 2"
            data-aos="fade-up"
          />
          <img
            className="w-[100%] md:w-[24%] md:h-[50%]"
            src={frame3}
            alt="Frame 3"
            data-aos="fade-up"
          />
          <img
            className="w-[100%] md:w-[24%] md:h-[50%]"
            src={frame4}
            alt="Frame 4"
            data-aos="fade-up"
          />
        </div>
      </section>

      <section
        id="section12"
        ref={sectionRefs.section12}
        className="mx-[5%] mt-10 mb-8 md:mb-12 2xl:mb-16"
      >
        <div className="text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold mb-4 md:mb-6 2xl:mb-8">
            <div>Key Values</div>
            <img className="w-full h-2" src={line} alt="line"></img>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:flex justify-evenly mx-[15%] md:mx-0 text-center lg:text-base xl:text-base 2xl:text-xl mb-4 md:mb-8 xl:mb-12 2xl:mb-16">
          <div className="flex flex-col items-center">
            <img
              className="w-auto md:w-[60%]"
              src={c1}
              alt="collaboration"
            ></img>
            <div className="font-semibold mt-2">Colloboration</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c2} alt="Security"></img>
            <div className="font-semibold mt-2">Security</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c3} alt="Innovation"></img>
            <div className="font-semibold mt-2">Innovation</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-auto md:w-[60%]"
              src={c4}
              alt="Communication"
            ></img>
            <div className="font-semibold mt-2">Communication</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-auto md:w-[60%]"
              src={c5}
              alt="Accessibility"
            ></img>
            <div className="font-semibold mt-2">Accessibility</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c6} alt="Efficiency"></img>
            <div className="font-semibold mt-2">Efficiency</div>
          </div>
        </div>

        <div className=" md:flex mx-[5%] md:mx-[8%] xl:mx-[15%]">
          {/* react slick carousel */}
          <div className="  w-full md:w-[40%]">
            <Slider {...settings} className=" ">
              <div className=" text-center">
                <img
                  className=" w-full object-cover rounded-2xl"
                  src={ceo}
                  alt="ceo"
                />
                <div className="text-[#1C2024] font-semibold md:text-base lg:text-base 2xl:text-xl mt-2">
                  Dr. Nishanth Raja
                </div>
                <div className="text-[#60646C] text-xs lg:text-sm 2xl:text-base">
                  CEO and Co-founder
                </div>
              </div>
              <div className=" text-center">
                <img
                  className=" w-full object-cover rounded-2xl"
                  src={cto}
                  alt="cto"
                />
                <div className="text-[#1C2024] font-semibold md:text-base lg:text-base 2xl:text-xl mt-2">
                  Aswin Kumar Kathirvel
                </div>
                <div className="text-[#60646C] text-xs lg:text-sm 2xl:text-base">
                  CTO and Co-founder
                </div>
              </div>
              <div className="text-center">
                <img
                  className="w-full object-cover rounded-2xl"
                  src={adv1}
                  alt="adv1"
                />
                <div className="text-[#1C2024] font-semibold md:text-base lg:text-base 2xl:text-xl mt-2">
                  Prof. Krishnan Balasubramaniam
                </div>
                <div className="text-[#60646C] text-xs lg:text-sm 2xl:text-base">
                  Founder & Advisor
                </div>
              </div>
              <div className="text-center">
                <img
                  className="w-full object-cover rounded-2xl"
                  src={adv2}
                  alt="adv2"
                />
                <div className="text-[#1C2024] font-semibold md:text-base lg:text-base 2xl:text-xl mt-2">
                  Prof. Prabhu Rajagopal
                </div>
                <div className="text-[#60646C] text-xs lg:text-sm 2xl:text-base">
                  Founder & Advisor
                </div>
              </div>
            </Slider>
          </div>

          <div className=" w-full md:w-[60%] flex flex-col justify-start py-4 px-8 mt-8 2xl:mt-20">
            <div className="text-center font-semibold text-lg md:text-2xl lg:text-3xl 2xl:text-4xl text-[#1C2024]">
              The Mission
            </div>
            <div className="text-center text-[#60646C] text-sm lg:text-base xl:text-base 2xl:text-xl mt-2">
              Our mission is to increase efficiency in operations through
              IIoT-enabled process parameter monitoring and AI-based predictive
              maintenance to enhance asset life and prevent unplanned downtime
              with Ultrasonic Waveguide Technology.
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 md:mb-12 2xl:mt-16">
          <img className="h-12" src={framevector} alt='vector'></img>
        </div>
        <div className="text-[#60646C] text-center px-1 md:px-24 text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl font-semibold mb-4 md:mb-6 2xl:mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </div>

        <div className="flex flex-col items-center">
          <img className="w-20" src={photo} alt="pic" />
          <div className="text-[#1C2024] font-semibold md:text-lg lg:text-xl 2xl:text-2xl mt-2">
            Dr. Nishanth Raja
          </div>
          <div className="text-[#60646C] text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-lg">
            C.E.O. and Co-founder
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
