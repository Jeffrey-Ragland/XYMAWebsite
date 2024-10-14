import React, {useEffect, useRef, useState} from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import CountUp from 'react-countup';
import iit from '../Assets/Frameiit.png';
import frame1 from '../Assets/Frame1.png';
import frame2 from '../Assets/Frame2.png';
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
import groupPicEdited from '../Assets/groupPicEdited.png';
import teamLeadPic from '../Assets/teamLeadPhoto.JPG';
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
import iitmic from '../Brand/iitmic.png';
import nasscom from '../Brand/nasscom.png';
import shell from '../Brand/shell.png';
import cnde from '../Brand/cnde.png';
import fcri from '../Brand/fcri.png';
import qualcomm from "../Brand/qualcomm.png";
import skf from '../Brand/skf2.png';
import schneider from '../Brand/schneider2.png';
import Slider from "react-slick";
import { RiMapPinTimeLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { GiAchievement } from "react-icons/gi";
import { FaListCheck } from "react-icons/fa6";
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
  const [activePic, setActivePic] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    AOS.init({ duration: 1500 });
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

          if (visiblePercentage >= 90) {
            setActivePic((prevPic) => {
              if (!prevPic.includes(sectionId)) {
                return [...prevPic, sectionId];
              }
              return prevPic;
            });
            setActiveSection((prevActiveSections) => {
            if (!prevActiveSections.includes(sectionId)) {
              return [...prevActiveSections, sectionId];
            }
            return prevActiveSections;
          });
          } else if (visiblePercentage >= 40) {
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

            setActivePic((prevPic) => {
              return prevPic.filter((id) => id !== sectionId);
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

  // typewriting style cover text
  const [typeEffect] = useTypewriter({
    words: [
      "Founded through the shine of CNDE, IIT Madras and incubated at IIT Madras \nIncubation Cell",
    ],
    loop: {},
    typeSpeed: 10,
    deleteSpeed: 20,
    delaySpeed: 3000
  });

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
          <div className="w-full h-full xl:flex justify-between">
            <div className="w-full xl:w-[55%] h-[70%] xl:h-full flex flex-col gap-4 justify-center text-center xl:text-left">
              <p className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold">
                2019
              </p>
              <p className="text-lg md:text-3xl xl:text-4xl 2xl:text-6xl font-normal">
                {typeEffect}{" "}
                <span className="text-orange-500 font-black">
                  <Cursor />
                </span>
              </p>
            </div>
            <div className="w-full xl:w-[10%] h-[30%] xl:h-full flex xl:flex-col justify-evenly">
              <div>
                <p className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold mb-2">
                  <CountUp start={0} end={50} duration={3} delay={0} />+
                </p>
                <p className="text-xs md:text-lg lg:text-xxl xl:text-base 2xl:text-2xl font-normal md:font-medium">
                  Years&nbsp;of&nbsp;Industrial
                  <br />
                  Experience
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold mb-2">
                  <CountUp start={0} end={15} duration={3} delay={0} />+
                </p>
                <p className="text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
                  Intellectual
                  <br />
                  Properties
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold mb-2">
                  <CountUp start={0} end={20} duration={3} delay={0} />+
                </p>
                <p className="text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
                  Projects&nbsp;Across
                  <br />
                  Globe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom text */}
      <h3
        className="text-center font-semibold text-[40px] md:text-[90px] 2xl:text-[120px] -mt-[20px] md:-mt-[50px] 2xl:-mt-[65px] mb-[20px] md:mb-[70px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white, rgb(209, 213, 219))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        ABOUT US
      </h3>

      {/* icon menu */}
      {renderIconMenu && (
        <nav
          className="hidden border border-r-orange-400 border-t-orange-400 border-b-orange-400 bg-white z-40 fixed left-0 top-1/2 transform -translate-y-1/2 text-xl px-2 md:flex flex-col gap-5 py-4 rounded-r-2xl"
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
            <RiMapPinTimeLine size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section2)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section2")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GrGroup size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section3)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section3")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <LiaSitemapSolid size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section4)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section4")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <PiCircuitryLight size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section5)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section5")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <FaLaptopCode size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section6)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section6")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiSoundWaves size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section7)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section7")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <MdOutlineDesignServices size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section8)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section8")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <TbBrandPython size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section9)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section9")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <BsClipboardData size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section10)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section10")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GrUserAdmin size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section11)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section11")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiAchievement size={20} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section12)}
            className={`hover:text-orange-400 ${
              activeSection.includes("section12")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <FaListCheck size={20} />
          </button>
        </nav>
      )}

      <section id="section1" ref={sectionRefs.section1}>
        <div className="mt-8 mx-[5%] mb-8 md:mb-12">
          <div className="text-center flex justify-center">
            <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
              <h1>About XYMA</h1>
              <img className="w-full h-2" src={line} alt="line"></img>
            </div>
          </div>
          <p className="text-[#60646C] text-center text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl mt-2">
            "XYMA Analytics is a deep-tech company started from IIT Madras,
            serving 15+ MNCs globally now to provide them with accurate
            multi-point temperature and multi-parameter measurements through
            patented ultrasonic waveguide technology."
          </p>
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
              className="relative border border-[#CDCED6] w-full md:w-[35%] p-4 rounded-2xl mb-4 md:mb-0 shadow-2xl"
              id="box1"
            >
              <div className="flex gap-2">
                <div className=" w-1/2 flex flex-col items-center">
                  <h2 className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl mb-2">
                    Incubation Partner
                  </h2>
                  <figure className="flex justify-center">
                    <img
                      src={iitmic}
                      alt="iitmic"
                      className="w-[80%] object-cover"
                    />
                  </figure>
                </div>

                <div className="border border-[#CDCED6] mt-4"></div>

                <div className=" w-1/2 flex flex-col justify-between items-center">
                  <h2 className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl">
                    Accelerators
                  </h2>
                  <figure className="flex justify-center">
                    <img
                      src={nasscom}
                      alt="nasscom"
                      className="w-[80%] object-cover"
                    />
                  </figure>
                  <figure className="flex justify-center">
                    <img
                      src={shell}
                      alt="shell"
                      className="w-[80%] object-cover"
                    />
                  </figure>
                </div>
              </div>
              {/* empty div for arrow 1 - small screen*/}
              <div className=" absolute w-4 bottom-0 right-[10%]" id="box5" />
            </div>

            {/* text 1 */}
            <p className=" relative w-[60%] md:w-[30%] text-xs lg:text-sm 2xl:text-lg font-medium flex items-center text-center mb-4 md:mb-0">
              Through strategic alliances with governmental bodies at national
              levels, we have cultivated a network of support that enriches our
              endeavors. These partnerships provide us with regulatory guidance
              and access to funding streams that empower us to innovate and
              execute our initiatives effectively.
            </p>
          </div>

          <div className=" flex flex-col-reverse md:flex-row justify-between mb-2">
            {/* text 2 */}
            <p className="w-[60%] md:w-[30%] text-xs lg:text-sm 2xl:text-lg font-medium flex items-center text-center mb-4 md:mb-0">
              Together with our government allies and corporates, we are shaping
              a brighter future and creating lasting value for our stakeholders.
            </p>
            {/* box 2 */}
            <div className="relative border border-[#CDCED6] w-full md:w-[35%] rounded-2xl mb-4 md:mb-0 py-2 shadow-2xl">
              <div>
                <h2 className="font-semibold text-sm lg:text-base xl:text-base 2xl:text-xl px-4 mb-4 text-center">
                  Research Partners
                </h2>
                {/* empty div for arrow */}
                <div
                  className=" absolute left-0 top-[45%]  w-1"
                  id="box2"
                ></div>
                {/* empty div for arrow */}
                <div className="absolute left-0 top-1/2  w-1" id="box3"></div>

                <div className="flex justify-center gap-4 py-4">
                  <figure className="flex justify-center mb-4">
                    <img
                      src={cnde}
                      alt="cnde"
                      className="w-[80%] object-cover"
                    />
                  </figure>
                  <figure className="flex justify-center mb-4">
                    <img
                      src={fcri}
                      alt="fcri"
                      className="w-[80%] object-cover"
                    />
                  </figure>
                </div>
              </div>

              {/* empty div for arrow 1 - small screen*/}
              <div className="absolute w-4 top-[10%] right-[20%]" id="box6" />
              {/* empty div for arrow 2 - small screen */}
              <div className="absolute w-4 bottom-0 right-[10%]" id="box7" />
            </div>
          </div>
          <div className=" md:flex justify-between">
            {/* box 3 */}
            <div
              className="relative border border-[#CDCED6] w-full md:w-[35%] p-4 rounded-2xl mb-4 md:mb-0 shadow-2xl"
              id="box4"
            >
              <div className=" w-full">
                <h2 className="font-semibold lg:text-base xl:text-base 2xl:text-xl mb-2 text-center">
                  Technological Partner
                </h2>
                <div className="flex flex-col justify-center gap-4">
                  <figure className="flex justify-center py-12 px-4 2xl:px-16 2xl:py-16">
                    <img src={qualcomm} alt="qualcomm" className="" />
                  </figure>
                </div>
              </div>
              {/* empty div for arrow 2 - small screen*/}
              <div className="absolute w-4 top-[10%] right-[20%]" id="box8" />
            </div>
            {/* text 3 */}
            <p className="w-full md:w-[30%] text-xs lg:text-sm 2xl:text-lg font-medium flex items-center text-center mb-4 md:mb-0">
              Our primary focus centers on the dynamic fusion of Ultrasonic
              Technology and Artificial Intelligence, a synergistic pairing
              poised to revolutionize industrial landscapes. Through exhaustive
              Research and Development endeavors, we meticulously sculpt and
              refine our offerings to clients
            </p>
          </div>
        </div>

        <center className="text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold mb-4">
          Testimonials
        </center>
        <div className="mx-[8%] flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex flex-col border border-[#CDCED6] rounded-2xl shadow-2xl px-4 py-8 2xl:px-6 2xl:py-10">
            <div className="flex justify-center mb-4">
              <img src={skf} alt="skfLogo" className="max-w-[145px]" />
            </div>
            <p className="mb-2 text-[#60646C] text-xs lg:text-base 2xl:text-2xl text-justify">
              "XYMA's groundbreaking technology promises to revolutionize
              multipoint and multi-parameter measurements, offering precision,
              versatility, and sustainability in one remarkable package. Excited
              for a long-term partnership with this innovative team!"
            </p>
            <p className="flex justify-end text-xs lg:text-base 2xl:text-2xl font-medium text-gray-700">
              -CEO at Vesta Si Sweden AB, an SKF Group Company
            </p>
          </div>

          <div className="flex flex-col border border-[#CDCED6] rounded-2xl shadow-2xl px-4 py-8 2xl:px-6 2xl:py-10">
            <div className="flex justify-center mb-4">
              <img
                src={schneider}
                alt="schneiderLogo"
                className="max-w-[145px]"
              />
            </div>
            <p className="mb-2 text-[#60646C] text-xs lg:text-base 2xl:text-2xl text-justify">
              "The sensor has truly transformed our paint manufacturing process,
              ensuring real-time monitoring, improved accuracy, enhanced output
              quality, and helped us derive data-driven decisions. We are
              positive about the prospect of continuing further integration of
              the sensors into more OEM units"
            </p>
            <p className="flex justify-end text-xs lg:text-base 2xl:text-2xl font-medium text-gray-700">
              -Senior Principal Technical Expert, Schneider Electric
            </p>
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
            <h1>The Team</h1>
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
            <h2>Team Division</h2>
            <img className="w-full h-2" src={line} alt="line"></img>
          </div>
        </div>
        <figure className="md:mx-[10%] mb-10">
          <img
            className="mt-4 rounded-2xl"
            src={teamLeadPic}
            alt="teamLeads"
            data-aos="zoom-in-up"
          ></img>
        </figure>
      </section>

      <div className="relative">
        <div
          className={`${
            activePic.length > 0
              ? "bg-black/20 absolute inset-0 h-full w-full z-10"
              : ""
          }`}
        ></div>
        {/* electronics team */}
        <section
          id="section4"
          ref={sectionRefs.section4}
          className={`mx-[5%] md:mx-[8%]  ${
            activePic.includes("section4")
              ? "scale-110 shadow-gray-400 shadow-xl relative bg-white z-10"
              : ""
          } p-4 duration-200 mb-8 rounded-xl `}
        >
          <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
            Electronics Team
          </center>
          <div className="md:flex gap-8 mb-6 md:mb-10">
            <figure
              className="w-full md:w-[50%] mb-4 md:mb-0"
              data-aos={isLargeScreen ? "" : "slide-right"}
            >
              <img
                src={electronicsTeam}
                alt="electronicsTeam"
                className="rounded-2xl"
              />
            </figure>
            <p
              className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center -z-10"
              data-aos={isLargeScreen ? "slide-right" : ""}
            >
              The electronics team's responsibilities include creating circuit
              designs, developing embedded systems, and troubleshooting
              electronic hardware. The team works on projects ranging from
              consumer electronics to industrial automation, ensuring that
              devices and systems are reliable, efficient, and meet safety
              standards. They collaborate with other departments to integrate
              electronics into products, enhance functionality, and drive
              innovation in the company's offerings.
            </p>
          </div>
        </section>

        {/* software team */}
        <section
          id="section5"
          ref={sectionRefs.section5}
          className={`mx-[5%] md:mx-[8%] z-10 ${
            activePic.includes("section5")
              ? "scale-110 shadow-gray-400 shadow-xl relative bg-white"
              : ""
          } p-4 duration-200 mb-8 rounded-xl`}
        >
          <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
            Software Development Team
          </center>
          <div className="flex flex-col-reverse md:flex-row gap-8 mb-6 md:mb-10">
            <p
              className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center -z-10"
              data-aos={isLargeScreen ? "slide-left" : ""}
            >
              The software team is responsible for designing, developing,
              testing, and maintaining software applications and systems. Their
              tasks include writing code, debugging, implementing new features,
              and ensuring software performance and security. The team works on
              a range of projects, from developing customer-facing applications
              to internal tools that streamline operations. They use various
              programming languages to create reliable and user-friendly
              software solutions. Collaboration with other departments is key to
              ensuring that the software meets the needs of the business and its
              customers.
            </p>
            <figure
              className="w-full md:w-[50%]"
              data-aos={isLargeScreen ? "" : "slide-left"}
            >
              <img
                src={softwareTeam}
                alt="softwareTeam"
                className="rounded-2xl"
              />
            </figure>
          </div>
        </section>

        {/* ultrasonic team */}
        <section
          id="section6"
          ref={sectionRefs.section6}
          className={`mx-[5%] md:mx-[8%] ${
            activePic.includes("section6")
              ? "scale-110 shadow-gray-400 shadow-xl relative bg-white z-10"
              : ""
          } p-4 duration-200 mb-8 rounded-xl`}
        >
          <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
            Ultrasonics Team
          </center>
          <div className="md:flex gap-8 mb-6 md:mb-10">
            <figure
              className="w-full md:w-[50%] mb-4 md:mb-0"
              data-aos={isLargeScreen ? "" : "slide-right"}
            >
              <img src={portsTeam} alt="portsTeam" className="rounded-2xl" />
            </figure>
            <p
              className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center -z-10"
              data-aos={isLargeScreen ? "slide-right" : ""}
            >
              The ultrasonics team is responsible for developing and
              implementing ultrasonic technology solutions. This involves using
              high-frequency sound waves for various applications. The team
              typically works on designing, testing, and maintaining ultrasonic
              equipment, ensuring high precision and efficiency in their
              operations. They collaborate with other departments to integrate
              ultrasonic solutions into products and processes, improving
              quality control, safety, and performance.
            </p>
          </div>
        </section>

        {/* designing team */}
        <section
          id="section7"
          ref={sectionRefs.section7}
          className={`mx-[5%] md:mx-[8%] ${
            activePic.includes("section7")
              ? "scale-110 shadow-gray-400 shadow-xl relative bg-white z-10"
              : ""
          } p-4 duration-200 mb-8 rounded-xl`}
        >
          <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
            Mechanical Designing Team
          </center>
          <div className="flex flex-col-reverse md:flex-row gap-8 mb-6 md:mb-10">
            <p
              className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center -z-10"
              data-aos={isLargeScreen ? "slide-left" : ""}
            >
              The designing team is responsible for creating visual and user
              experience (UX) designs that align with the company’s brand and
              product goals. Their tasks include developing graphics, layouts,
              and interfaces. They focus on aesthetics, usability, and user
              satisfaction, ensuring that designs are both appealing and
              functional. The team often uses tools like Adobe Creative Suite,
              Sketch, and Figma, and works closely with other departments, such
              as marketing and development.
            </p>
            <figure
              className="w-full md:w-[50%]"
              data-aos={isLargeScreen ? "" : "slide-left"}
            >
              <img src={designTeam} alt="designTeam" className="rounded-2xl" />
            </figure>
          </div>
        </section>

        {/* python team */}
        <section
          id="section8"
          ref={sectionRefs.section8}
          className={`mx-[5%] md:mx-[8%] ${
            activePic.includes("section8")
              ? "scale-110 shadow-gray-400 shadow-xl relative bg-white z-10"
              : ""
          } p-4 duration-200 mb-8 rounded-xl`}
        >
          <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
            Software Backend and Operations Team
          </center>
          <div className="md:flex gap-8 mb-6 md:mb-10">
            <figure
              className="w-full md:w-[50%] mb-4 md:mb-0"
              data-aos={isLargeScreen ? "" : "slide-right"}
            >
              <img src={pythonTeam} alt="pythonTeam" className="rounded-2xl" />
            </figure>
            <p
              className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center -z-10"
              data-aos={isLargeScreen ? "slide-right" : ""}
            >
              The Python team specializes in developing software solutions using
              the Python programming language. Their responsibilities include
              writing and maintaining code for various applications, such as web
              development, data analysis, machine learning, and automation. The
              team works on creating efficient, scalable, and maintainable
              software, leveraging Python's versatility and extensive libraries.
              They collaborate with other departments to integrate Python-based
              solutions into projects.
            </p>
          </div>
        </section>

        {/* data team */}
        <section
          id="section9"
          ref={sectionRefs.section9}
          className={`mx-[5%] md:mx-[8%] ${
            activePic.includes("section9")
              ? "scale-110 shadow-gray-400 shadow-xl relative bg-white z-10"
              : ""
          } p-4 duration-200 mb-8 rounded-xl`}
        >
          <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
            Data Analytics Team
          </center>
          <div className="flex flex-col-reverse md:flex-row gap-8 mb-6 md:mb-10">
            <p
              className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center -z-10"
              data-aos={isLargeScreen ? "slide-left" : ""}
            >
              We process Waveguide temperature data to extract valuable
              insights, using advanced techniques to predict future trends. Our
              team integrates deep learning, computer vision, and thermal
              cameras to uphold the highest standards of work safety.
            </p>
            <figure
              className="w-full md:w-[50%]"
              data-aos={isLargeScreen ? "" : "slide-left"}
            >
              <img src={dataTeam} alt="dataTeam" className="rounded-2xl" />
            </figure>
          </div>
        </section>

        {/* admin team */}
        <section
          id="section10"
          ref={sectionRefs.section10}
          className={`mx-[5%] md:mx-[8%] ${
            activePic.includes("section10")
              ? "scale-110 shadow-gray-400 shadow-xl relative bg-white z-10"
              : ""
          } p-4 duration-200 mb-8 rounded-xl`}
        >
          <center className="mb-4 md:mb-6 2xl:mb-8 text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
            Admin Department
          </center>
          <div className="md:flex gap-8 mb-6 md:mb-10">
            <figure
              className="w-full md:w-[50%] mb-4 md:mb-0"
              data-aos={isLargeScreen ? "" : "slide-right"}
            >
              <img src={adminTeam} alt="adminTeam" className="rounded-2xl" />
            </figure>
            <p
              className="w-full md:w-[50%] text-center text-[#60646C] text-xs lg:text-base 2xl:text-2xl flex items-center -z-10"
              data-aos={isLargeScreen ? "slide-right" : ""}
            >
              The admin department is responsible for managing the day-to-day
              administrative functions and ensuring smooth office operations.
              Their tasks include handling correspondence, managing schedules
              and appointments, organizing meetings, maintaining records, and
              overseeing office supplies and equipment. They also coordinate
              with other departments to support administrative needs, assist
              with human resources tasks like onboarding and payroll, and ensure
              compliance with company policies and procedures.
            </p>
          </div>
        </section>
      </div>

      <section
        id="section11"
        ref={sectionRefs.section11}
        className="mx-[5%] mb-8 md:mb-12 2xl:mb-16"
      >
        <div className="text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold mb-4 md:mb-6 2xl:mb-8">
            <h1>The Vision</h1>
            <img className="w-full h-2" src={line} alt="line"></img>
          </div>
        </div>
        <p className="mb-4 md:mb-6 2xl:mb-8 text-[#60646C] text-center text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl">
          Our vision is to provide reliable measurements at the most unreliable
          times. Democratize sensor-based process efficiency in Industries by
          enabling them with rich data sets of process parameters. Provide
          plant-wide distributed and concurrent sensing solutions for disruptive
          data-driven decision making with enhanced sustainability.
        </p>
        <figure className="grid grid-cols-2 md:flex gap-4 py-2">
          <img
            className="w-[100%] md:w-[24%] md:h-[50%] rounded-2xl"
            src={frame1}
            alt="Frame 1"
            data-aos="fade-up"
          />
          <img
            className="w-[100%] md:w-[24%] md:h-[50%] rounded-2xl"
            src={frame2}
            alt="Frame 2"
            data-aos="fade-up"
          />
          <img
            className="w-[100%] md:w-[24%] md:h-[50%] rounded-2xl"
            src={frame3}
            alt="Frame 3"
            data-aos="fade-up"
          />
          <img
            className="w-[100%] md:w-[24%] md:h-[50%] rounded-2xl"
            src={frame4}
            alt="Frame 4"
            data-aos="fade-up"
          />
        </figure>
      </section>

      <section
        id="section12"
        ref={sectionRefs.section12}
        className="mx-[5%] mt-10 mb-8 md:mb-12 2xl:mb-16"
      >
        <div className="text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold mb-4 md:mb-6 2xl:mb-8">
            <h1>Key Values</h1>
            <img className="w-full h-2" src={line} alt="line"></img>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:flex justify-evenly mx-[15%] md:mx-0 text-center lg:text-base xl:text-base 2xl:text-xl mb-4 md:mb-8 xl:mb-12 2xl:mb-16">
          <figure className="flex flex-col items-center">
            <img
              className="w-auto md:w-[60%]"
              src={c1}
              alt="collaboration"
            ></img>
            <figcaption className="font-semibold mt-2">
              Colloboration
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c2} alt="Security"></img>
            <figcaption className="font-semibold mt-2">Security</figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c3} alt="Innovation"></img>
            <figcaption className="font-semibold mt-2">Innovation</figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <img
              className="w-auto md:w-[60%]"
              src={c4}
              alt="Communication"
            ></img>
            <figcaption className="font-semibold mt-2">
              Communication
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <img
              className="w-auto md:w-[60%]"
              src={c5}
              alt="Accessibility"
            ></img>
            <figcaption className="font-semibold mt-2">
              Accessibility
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c6} alt="Efficiency"></img>
            <figcaption className="font-semibold mt-2">Efficiency</figcaption>
          </figure>
        </div>

        <div className=" md:flex mx-[5%] md:mx-[8%] xl:mx-[15%]">
          {/* react slick carousel */}
          <div className="  w-full md:w-[40%]">
            <Slider {...settings} className=" ">
              <figure className=" text-center">
                <img
                  className=" w-full object-cover rounded-2xl"
                  src={ceo}
                  alt="ceo"
                />
                <p className="text-[#1C2024] font-semibold md:text-base lg:text-base 2xl:text-xl mt-2">
                  Dr. Nishanth Raja
                </p>
                <p className="text-[#60646C] text-xs lg:text-sm 2xl:text-base">
                  CEO and Co-founder
                </p>
              </figure>
              <figure className=" text-center">
                <img
                  className=" w-full object-cover rounded-2xl"
                  src={cto}
                  alt="cto"
                />
                <p className="text-[#1C2024] font-semibold md:text-base lg:text-base 2xl:text-xl mt-2">
                  Aswin Kumar Kathirvel
                </p>
                <p className="text-[#60646C] text-xs lg:text-sm 2xl:text-base">
                  CTO and Co-founder
                </p>
              </figure>
              <figure className="text-center">
                <img
                  className="w-full object-cover rounded-2xl"
                  src={adv1}
                  alt="adv1"
                />
                <p className="text-[#1C2024] font-semibold md:text-base lg:text-base 2xl:text-xl mt-2">
                  Prof. Krishnan Balasubramaniam
                </p>
                <p className="text-[#60646C] text-xs lg:text-sm 2xl:text-base">
                  Founder & Advisor
                </p>
              </figure>
              <figure className="text-center">
                <img
                  className="w-full object-cover rounded-2xl"
                  src={adv2}
                  alt="adv2"
                />
                <p className="text-[#1C2024] font-semibold md:text-base lg:text-base 2xl:text-xl mt-2">
                  Prof. Prabhu Rajagopal
                </p>
                <p className="text-[#60646C] text-xs lg:text-sm 2xl:text-base">
                  Founder & Advisor
                </p>
              </figure>
            </Slider>
          </div>

          <div className=" w-full md:w-[60%] flex flex-col justify-start py-4 px-8 mt-8 2xl:mt-20">
            <h2 className="text-center font-semibold text-lg md:text-2xl lg:text-3xl 2xl:text-4xl text-[#1C2024]">
              The Mission
            </h2>
            <p className="text-center text-[#60646C] text-sm lg:text-base xl:text-base 2xl:text-xl mt-2">
              Our mission is to increase efficiency in operations through
              IIoT-enabled process parameter monitoring and AI-based predictive
              maintenance to enhance asset life and prevent unplanned downtime
              with Ultrasonic Waveguide Technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
