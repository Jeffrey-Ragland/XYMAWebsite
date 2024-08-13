import React, { useState, useEffect, useRef } from 'react';
import media from '../Assets/Framemedia.png';
import shell from '../Assets/Frameshell.png';
import icon1 from '../Assets/Frameicon1.png';
import business from '../Assets/business.png';
import icon2 from '../Assets/icon2.png';
import iitm from '../Assets/iitm.png';
import icon3 from '../Assets/icon3.png';
import cm from '../Assets/cm.png';
import smart from '../Assets/smart.png';
import icon6 from '../Assets/66.png';
import newsDD from '../Assets/MediaNewsDD.png';
import newsTOI from '../Assets/MediaNewsTOI.png';
import newsWiresLogo from '../Assets/newsWiresLogo.png'
import toiLogo from '../Assets/toiLogo.png';
import ddLogo from '../Assets/ddLogo.png';
import image1 from '../Assets/Image1.png';
import image2 from '../Assets/Image2.png';
import image3 from '../Assets/Image3.png';
import image4 from '../Assets/Image4.png';
import image5 from '../Assets/Image5.png';
import image6 from '../Assets/Image6.png';
import image7 from '../Assets/Image7.png';
import image8 from '../Assets/Image8.png';
import image9 from '../Assets/Image9.png';
import image10 from '../Assets/Image10.png';
import image11 from '../Assets/Image11.png';
import VerticalSlider from './VerticalSlider';
import line from "../Assets/underline.png";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPhotoVideo } from "react-icons/fa";

const Media = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [renderIconMenu, setRenderIconMenu] = useState(false);
  const [activeSection, setActiveSection] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const coverImageRef = useRef(null);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  const handleLoadLess = () => {
    setLoadMore(false);
  };

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
  };

  const images3 = [
    image1,
    image2,
    image3,
    image4,
    image2,
    image5,
    image6,
    image1,
    image2,
    image3,
    image4,
    image2,
    image5,
    image6,
  ];

  const images2 = [
    image7,
    image8,
    image7,
    image9,
    image11,
    image2,
    image1,
    image7,
    image8,
    image7,
    image9,
    image11,
    image2,
    image1,
  ];

  const images1 = [
    image6,
    image11,
    image5,
    image10,
    image3,
    image7,
    image9,
    image6,
    image11,
    image5,
    image10,
    image3,
    image7,
    image9,
  ];

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
    <div>
      <section>
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
              background:
                "linear-gradient(90deg, #FF6347 0%,  #FF0000 101.48%)",
            }}
          />
        </div>
        <div
          ref={coverImageRef}
          className="relative h-[60vh] md:h-[70vh] xl:h-[90vh] shadow-white shadow-2xl"
        >
          <img
            src={media}
            alt="media"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl font-medium md:font-semibold">
              News Room
            </h1>
            <p className="text-white mt-2 md:mt-5 text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
              Spotlight on XYMA Analytics
            </p>
          </div>
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
          XYMA NEWS
        </h3>
      </section>

      <section id="section1" ref={sectionRefs.section1}>
        <div className="mt-4 md:mt-10 text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
            <h1>Highlights</h1>
            <img className="w-full h-2" src={line} alt="line"></img>
          </div>
        </div>

        <div className="mt-10 mx-[5%] xl:mx-[8%]">
          <div className="flex flex-col md:flex-row gap-4 md:mb-4">
            {/* news 1 */}
            <figure className="border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full md:w-1/3">
              <div className="relative">
                <img
                  src={newsDD}
                  alt="DD Thumbnail"
                  className="w-full rounded-xl"
                />
                <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                  <img
                    src={ddLogo}
                    alt="DD Logo"
                    className="h-[40px] rounded-md"
                  />
                  <p className="text-white">DD Tamil</p>
                </div>
              </div>
              <div>
                <figcaption className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
                  Startup Handshake - Interview with DD Tamil
                </figcaption>
                <p className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
                  Updated - Jun 23rd, 2024
                </p>
              </div>
              <center>
                <button
                  className="text-white mt-1 text-sm 2xl:text-base rounded-full px-4 py-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://youtu.be/tWcYGGV8vRk?si=XcOBGJmpfOuxRir1",
                      "_blank"
                    )
                  }
                >
                  View More
                </button>
              </center>
            </figure>

            {/* news 2 */}
            <figure className="border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full md:w-1/3">
              <div className="relative">
                <img src={shell} alt="Shell" className="w-full" />
                <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                  <img src={icon1} alt="Icon 1" className="h-[40px]" />
                  <p className="text-white">SAUR ENERGY</p>
                </div>
              </div>
              <figcaption className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
                Shell Launches 'Digital Track' for Indian Startups under its E4
                Programme
              </figcaption>
              <p className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
                Updated - Jul 8th, 2021
              </p>
              <center>
                <button
                  className="text-white mt-1 text-sm 2xl:text-base rounded-full px-4 py-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.saurenergy.com/solar-energy-news/shell-launches-digital-track-for-indian-start-ups-under-its-e4-programme",
                      "_blank"
                    )
                  }
                >
                  View More
                </button>
              </center>
            </figure>

            {/* news 3 */}
            <figure className=" border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full md:w-1/3">
              <div className="relative">
                <img src={business} alt="Business" className="w-full" />
                <div className="flex items-center absolute bottom-0 w-full p-2 gap-2">
                  <img src={icon2} alt="Icon 2" className="h-[40px]" />
                  <p className="text-white mt-1">Businessline</p>
                </div>
              </div>
              <figcaption className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
                Start-up tech. Remote sensing with XYMA Analytics
              </figcaption>
              <p className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
                Updated - Jan 9th, 2022
              </p>
              <center>
                <button
                  className="text-white mt-1 text-sm 2xl:text-base rounded-full px-4 py-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.thehindubusinessline.com/business-tech/remote-sensing-with-xyma-analytics/article64577779.ece",
                      "_blank"
                    )
                  }
                >
                  View More
                </button>
              </center>
            </figure>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* news 4 */}
            <figure className="hidden md:block border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full md:w-1/3">
              <div className="relative">
                <img src={iitm} alt="Iitm" className="w-full" />
                <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                  <img src={icon3} alt="Icon 3" className="h-[40px]" />
                  <p className="text-white mt-1">IIT MADRAS</p>
                </div>
              </div>
              <figcaption className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
                Sensor for Temperature Measurement at Multiple Points
              </figcaption>
              <p className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
                Updated - Oct 11th, 2021
              </p>
              <center>
                <button
                  className="text-white mt-1 text-sm 2xl:text-base rounded-full px-4 py-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.iitm.ac.in/happenings/press-releases-and-coverages/remote-sensing-xyma-analytics",
                      "_blank"
                    )
                  }
                >
                  View More
                </button>
              </center>
            </figure>

            {/* news 5 */}
            <figure className="hidden md:block border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full md:w-1/3">
              <div className="relative">
                <img src={cm} alt="Cm" className="w-full" />
                <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                  <img src={icon2} alt="Icon 2" className="h-[40px]" />
                  <p className="text-white mt-1">Businessline</p>
                </div>
              </div>
              <figcaption className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
                TN Chief Minister awards cheques worth ₹95 lakh to 19 start-ups
              </figcaption>
              <p className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
                Updated - Dec 23rd, 2021
              </p>
              <center>
                <button
                  className="text-white mt-1 text-sm 2xl:text-base rounded-full px-4 py-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.thehindubusinessline.com/companies/tn-chief-minister-awards-cheques-worth-95-lakh-to-19-start-ups/article38020063.ece",
                      "_blank"
                    )
                  }
                >
                  View More
                </button>
              </center>
            </figure>

            {/* news 6 */}
            <figure className="hidden md:block border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full md:w-1/3">
              <div className="relative">
                <img src={smart} alt="Smart" className="w-full" />
                <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                  <img
                    src={newsWiresLogo}
                    alt="newsWires Logo"
                    className="h-[40px] rounded-md"
                  />
                  <p className="text-white mt-1">Newswires</p>
                </div>
              </div>
              <figcaption className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
                SmartHub.ai and XYMA Partnership Announcement
              </figcaption>
              <p className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
                Updated - Mar 1st, 2022
              </p>
              <center>
                <button
                  className="text-white mt-1 text-sm 2xl:text-base rounded-full px-4 py-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://www.einnews.com/pr_news/564327124/smarthub-ai-and-xyma-partnership-announcement",
                      "_blank"
                    )
                  }
                >
                  View More
                </button>
              </center>
            </figure>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* news 7 */}
            <figure className="hidden md:block border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full md:w-1/3">
              <div className="relative">
                <img
                  src={newsTOI}
                  alt="Times of  India Cover"
                  className="w-full rounded-xl"
                />
                <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                  <img
                    src={toiLogo}
                    alt="Times of India Logo"
                    className="h-[40px] rounded-md"
                  />
                  <p className="text-white">Times of India</p>
                </div>
              </div>
              <figcaption className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
                They sensed an oppurtunity and took it
              </figcaption>
              <p className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
                Updated - Feb 20th, 2023
              </p>
              <center>
                <button
                  className="text-white mt-1 text-sm 2xl:text-base rounded-full px-4 py-2 mb-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() =>
                    window.open(
                      "https://timesofindia.indiatimes.com/city/chennai/they-sensed-an-opportunity-and-took-it/articleshow/98083290.cms",
                      "_blank"
                    )
                  }
                >
                  View More
                </button>
              </center>
            </figure>

            {/* empty div for alignment */}
            <div className="hidden md:block w-1/3" />
            <div className="hidden md:block w-1/3" />
          </div>

          {/* icon menu */}
          {renderIconMenu && (
            <nav
              className="hidden border border-r-orange-400 border-t-orange-400 border-b-orange-400 bg-white z-40 fixed left-0 top-1/2 transform -translate-y-1/2 px-1 md:flex flex-col gap-12 py-2 rounded-r-2xl text-xs font-medium"
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
                <IoNewspaperOutline size={25} />
              </button>
              <button
                onClick={() => handleSectionScroll(sectionRefs.section2)}
                className={`hover:text-orange-400 ${
                  activeSection.includes("section2")
                    ? "text-orange-400"
                    : "text-gray-400"
                }`}
              >
                <FaPhotoVideo size={25} />
              </button>
            </nav>
          )}

          {/* mobile view load more button to load more news */}
          {!loadMore && (
            <div
              className="cursor-pointer p-2 md:hidden text-center text-white rounded-full text-sm font-medium mt-4 hover:scale-90 duration-300"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
              onClick={handleLoadMore}
            >
              Load More
            </div>
          )}

          {/* mobile view duplicate news content */}
          {loadMore && (
            <div className="md:hidden">
              {/* mobile news 4 */}
              <figure className="border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full m-auto">
                <div className="relative">
                  <img src={iitm} alt="Iitm" className="w-full" />
                  <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                    <img src={icon3} alt="Icon 3" className="h-[40px]" />
                    <p className="text-white mt-1">IIT MADRAS</p>
                  </div>
                </div>
                <figcaption className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
                  Sensor for Temperature Measurement at Multiple Points
                </figcaption>
                <p className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
                  11th Oct 2021
                </p>
                <center>
                  <button
                    className="text-white mt-1 text-sm 2xl:text-base rounded-full px-4 py-2 mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.iitm.ac.in/happenings/press-releases-and-coverages/remote-sensing-xyma-analytics",
                        "_blank"
                      )
                    }
                  >
                    View More
                  </button>
                </center>
              </figure>

              {/* mobile news 5 */}
              <figure className=" border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full m-auto mt-[5%]">
                <div className="relative">
                  <img src={cm} alt="Cm" className="w-full" />
                  <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                    <img src={icon2} alt="Icon 2" className="h-[40px]" />
                    <p className="text-white mt-1">Businessline</p>
                  </div>
                </div>
                <figcaption className="text-sm font-semibold mt-1">
                  TN Chief Minister awards cheques worth ₹95 lakh to 19
                  start-ups
                </figcaption>
                <p className="text-xs mt-1 text-[#60646C]">
                  Updated - December 23, 2021
                </p>
                <center>
                  <button
                    className="text-white mt-1 text-sm rounded-full px-4 py-2 mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.thehindubusinessline.com/companies/tn-chief-minister-awards-cheques-worth-95-lakh-to-19-start-ups/article38020063.ece",
                        "_blank"
                      )
                    }
                  >
                    View More
                  </button>
                </center>
              </figure>

              {/* mobile news 6 */}
              <figure className=" border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full m-auto mt-[5%]">
                <div className="relative">
                  <img src={smart} alt="Smart" className="w-full" />
                  <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                    <img
                      src={newsWiresLogo}
                      alt="newsWires Logo"
                      className="h-[40px]"
                    />
                    <p className="text-white mt-1">Newswires</p>
                  </div>
                </div>
                <figcaption className="text-sm font-semibold mt-1">
                  SmartHub.ai and XYMA Partnership Announcement
                </figcaption>
                <p className="text-xs mt-1 text-[#60646C]">March 01, 2022</p>
                <center>
                  <button
                    className="text-white mt-1 text-sm rounded-full px-4 py-2 mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.einnews.com/pr_news/564327124/smarthub-ai-and-xyma-partnership-announcement",
                        "_blank"
                      )
                    }
                  >
                    View More
                  </button>
                </center>
              </figure>

              {/* mobile news 7 */}
              <figure className="border border-gray-300 p-1 hover:scale-90 duration-300 rounded-lg w-full m-auto mt-[5%]">
                <div className="relative">
                  <img
                    src={newsTOI}
                    alt="Times of  India Cover"
                    className="w-full rounded-lg"
                  />
                  <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                    <img
                      src={toiLogo}
                      alt="Times of India Logo"
                      className="h-[40px] rounded-md"
                    />
                    <p className="text-white">Times of India</p>
                  </div>
                </div>
                <figcaption className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
                  They sensed an oppurtunity and took it
                </figcaption>
                <p className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
                  Updated - Feb 20th, 2023
                </p>
                <center>
                  <button
                    className="text-white mt-1 text-sm 2xl:text-base rounded-full px-4 py-2 mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                    }}
                    onClick={() =>
                      window.open(
                        "https://timesofindia.indiatimes.com/city/chennai/they-sensed-an-opportunity-and-took-it/articleshow/98083290.cms",
                        "_blank"
                      )
                    }
                  >
                    View More
                  </button>
                </center>
              </figure>

              <div
                className="cursor-pointer p-2 md:hidden text-center text-white rounded-full text-sm font-medium mt-4 hover:scale-90 duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                }}
                onClick={handleLoadLess}
              >
                Load less
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="section2" ref={sectionRefs.section2}>
        <div className="h-[90vh] md:h-[50vh] xl:h-[90vh] bg-[#EEF6FF] md:flex mt-20">
          <div className="h-[30%] md:h-full md:w-1/2 flex flex-col items-center justify-center">
            <img
              //style={{ width: "8%", marginLeft: "50%", marginTop: "25%" }}
              src={icon6}
              alt="Background"
              className="h-[40px]"
            />
            <p className="font-semibold text-xl md:text-3xl lg:text-4xl 2xl:text-5xl text-[#013872] w-[90%] md:w-[60%] text-center">
              "Strength lies in togetherness, creativity is embraced with
              inclusivity, and passion flourishes with freedom."
            </p>
          </div>

          <div className="flex w-full md:w-1/2 h-[70%] md:h-full overflow-hidden">
            <figure className="flex justify-center">
              <VerticalSlider images={images1} />
            </figure>
            <figure className="flex justify-center -mt-20 xl:-mt-32">
              <VerticalSlider images={images2} />
            </figure>
            <figure className="flex justify-center">
              <VerticalSlider images={images3} />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
