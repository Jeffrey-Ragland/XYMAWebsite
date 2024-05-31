import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import media from '../Assets/Framemedia.png';
import second from '../Assets/secondline.png';
import asian from '../Assets/Frameasian.png';
import shell from '../Assets/Frameshell.png';
import icon1 from '../Assets/Frameicon1.png';
import business from '../Assets/business.png';
import icon2 from '../Assets/icon2.png';
import iitm from '../Assets/iitm.png';
import icon3 from '../Assets/icon3.png';
import story from '../Assets/story.png';
import icon4 from '../Assets/icon4.png';
import cm from '../Assets/cm.png';
import smart from '../Assets/smart.png';
import pm from '../Assets/pm.png';
import icon5 from '../Assets/icon5.png';
import icon6 from '../Assets/66.png';
import image1 from '../Images/Image1.png';
import image2 from '../Images/Image2.png';
import image3 from '../Images/Image3.png';
import image4 from '../Images/Image4.png';
import image5 from '../Images/Image5.png';
import image6 from '../Images/Image6.png';
import image7 from '../Images/Image7.png';
import image8 from '../Images/Image8.png';
import image9 from '../Images/Image9.png';
import image10 from '../Images/Image10.png';
import image11 from '../Images/Image11.png';
import VerticalSlider from './VerticalSlider';
import asain2 from '../Assets/asian2.png';
import line from "../Assets/underline.png";

const Media = () => {

  const navigate =useNavigate();
  const handleContactClick =()=>{
    navigate ('/contact');
  }

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  const handleLoadMore = ()=>
  {
    setLoadMore(true);
  }

  const handleLoadLess = () =>
  {
    setLoadMore(false);
  }

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
    image6
  ];

  const images2=[
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
    image1
  ]


  const images1=[
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
    image9
  ]
  
  
  return (
    <div>
      <section>
        <div className="h-[10vh]">{/* navbar space */}</div>
        <div className="relative h-[60vh] md:h-[70vh] xl:h-[90vh] shadow-white shadow-2xl">
          <img
            src={media}
            alt="media"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="text-white text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-medium md:font-semibold">
              News Room
            </div>
            <div className="text-white mt-2 md:mt-5 text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
              Spotlight on XYMA Analytics
            </div>
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
          XYMA NEWS
        </div>
      </section>

      <section>
        <div className="mt-4 md:mt-10 text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
            <div>Highlights</div>
            <img className="w-full h-2" src={line}></img>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 mx-[5%] xl:mx-[8%]">
          <div
            className="border border-gray-300 p-1 hover:scale-90 transition-transform duration-300 "
            style={{ borderRadius: "14px", width: "100%", margin: "auto" }}
          >
            <img src={asian} alt="Asian" style={{ width: "100%" }} />
            <div className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
              Advancing Technology to Foster a Sustainable Energy Landscape
            </div>
            <div className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
              February 24, 2024
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
                    "https://asiannews.in/accelerating-technology-for-a-cleaner-energy-future/",
                    "_blank"
                  )
                }
              >
                View More
              </button>
            </center>
          </div>

          <div
            className="border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
            style={{ borderRadius: "14px", width: "100%", margin: "auto" }}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <div style={{ position: "relative" }}>
              {isHovered1 ? (
                <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
              ) : (
                <img src={shell} alt="Shell" style={{ width: "100%" }} />
              )}
              <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                <img src={icon1} alt="Icon 1" className="h-[40px]" />
                <p className="text-white">SAUR ENERGY</p>
              </div>
            </div>
            <div className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
              Shell Launches 'Digital Track' for Indian Startups under its E4
              Programme
            </div>
            <div className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
              Updated On Thu, Jul 8th, 2021
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
                    "https://www.saurenergy.com/solar-energy-news/shell-launches-digital-track-for-indian-start-ups-under-its-e4-programme",
                    "_blank"
                  )
                }
              >
                View More
              </button>
            </center>
          </div>

          <div
            className=" border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
            style={{ borderRadius: "14px", width: "100%", margin: "auto" }}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <div style={{ position: "relative" }}>
              {isHovered2 ? (
                <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
              ) : (
                <img src={business} alt="Business" style={{ width: "100%" }} />
              )}
              <div className="flex items-center absolute bottom-0 w-full p-2 gap-2">
                <img src={icon2} alt="Icon 2" className="h-[40px]" />
                <p className="text-white mt-1">Businessline</p>
              </div>
            </div>
            <div className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
              Start-up tech. Remote sensing with XYMA Analytics
            </div>
            <div className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
              Updated - January 09, 2022
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
                    "https://www.thehindubusinessline.com/business-tech/remote-sensing-with-xyma-analytics/article64577779.ece",
                    "_blank"
                  )
                }
              >
                View More
              </button>
            </center>
          </div>

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

          {loadMore && (
            <div className="md:hidden">
              <div
                className=" border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
                style={{
                  borderRadius: "14px",
                  width: "100%",
                  margin: "auto",
                  marginTop: "5%",
                }}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              >
                <div style={{ position: "relative" }}>
                  {isHovered3 ? (
                    <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
                  ) : (
                    <img src={iitm} alt="Iitm" style={{ width: "100%" }} />
                  )}
                  <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                    <img src={icon3} alt="Icon 3" className="h-[40px]" />
                    <p className="text-white mt-1">IIT MADRAS</p>
                  </div>
                </div>
                <div className="text-sm font-semibold mt-1">
                  Sensor for Temperature Measurement at Multiple Points
                </div>
                <div className="text-xs mt-1 text-[#60646C]">11th Oct 2021</div>
                <center>
                  <button
                    className="text-white mt-1 text-sm rounded-full px-4 py-2 mb-2"
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
              </div>

              <div
                className=" border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
                style={{
                  borderRadius: "14px",
                  width: "100%",
                  margin: "auto",
                  marginTop: "5%",
                }}
                onMouseEnter={() => setIsHovered4(true)}
                onMouseLeave={() => setIsHovered4(false)}
              >
                <div style={{ position: "relative" }}>
                  {isHovered4 ? (
                    <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
                  ) : (
                    <img src={story} alt="Story" style={{ width: "100%" }} />
                  )}
                  <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                    <img src={icon4} alt="Icon 4" className="h-[40px]" />
                    <p className="text-white mt-1">YOUR STORY</p>
                  </div>
                </div>
                <div className="text-sm font-semibold mt-1">
                  Prioritize Building Valuable Businesses Over Funding, Advises
                  Kalaari Capital's Vani Kola
                </div>
                <div className="text-xs mt-1 mb-1 text-[#60646C]">
                  Wednesday July 14, 2021
                </div>
                <center>
                  <button
                    className="text-white mt-2 text-sm rounded-full px-4 py-2 mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                    }}
                    onClick={() =>
                      window.open(
                        "https://yourstory.com/herstory/2024/03/kalaari-capital-vani-kola-entrepreneurship-shesparks",
                        "_blank"
                      )
                    }
                  >
                    View More
                  </button>
                </center>
              </div>

              <div
                className=" border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
                style={{
                  borderRadius: "14px",
                  width: "100%",
                  margin: "auto",
                  marginTop: "5%",
                }}
                onMouseEnter={() => setIsHovered5(true)}
                onMouseLeave={() => setIsHovered5(false)}
              >
                <div style={{ position: "relative" }}>
                  {isHovered5 ? (
                    <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
                  ) : (
                    <img src={cm} alt="Cm" style={{ width: "100%" }} />
                  )}
                  <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                    <img src={icon2} alt="Icon 2" className="h-[40px]" />
                    <p className="text-white mt-1">Businessline</p>
                  </div>
                </div>
                <div className="text-sm font-semibold mt-1">
                  TN Chief Minister awards cheques worth ₹95 lakh to 19
                  start-ups
                </div>
                <div className="text-xs mt-1 text-[#60646C]">
                  Updated - December 23, 2021
                </div>
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
              </div>

              <div
                className=" border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
                style={{
                  borderRadius: "14px",
                  width: "100%",
                  margin: "auto",
                  marginTop: "5%",
                }}
                onMouseEnter={() => setIsHovered6(true)}
                onMouseLeave={() => setIsHovered6(false)}
              >
                <div style={{ position: "relative" }}>
                  {isHovered6 ? (
                    <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
                  ) : (
                    <img src={smart} alt="Smart" style={{ width: "100%" }} />
                  )}
                  <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                    <img src={icon2} alt="Icon 2" className="h-[40px]" />
                    <p className="text-white mt-1">Newswires</p>
                  </div>
                </div>
                <div className="text-sm font-semibold mt-1">
                  SmartHub.ai and XYMA Partnership Announcement
                </div>
                <div className="text-xs mt-1 text-[#60646C]">
                  March 01, 2022
                </div>
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
              </div>

              <div
                className=" border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
                style={{
                  borderRadius: "14px",
                  width: "100%",
                  margin: "auto",
                  marginTop: "5%",
                }}
                onMouseEnter={() => setIsHovered7(true)}
                onMouseLeave={() => setIsHovered7(false)}
              >
                <div style={{ position: "relative" }}>
                  {isHovered7 ? (
                    <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
                  ) : (
                    <img src={pm} alt="Pm" style={{ width: "100%" }} />
                  )}
                  <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                    <img src={icon5} alt="Icon 2" className="h-[40px]" />
                    <p className="text-white mt-1">ANI Multimedia News</p>
                  </div>
                </div>
                <div className="text-sm font-semibold mt-1">
                  PM Modi honors Shraddha and RJ Raunac at Bharat Mandapam
                </div>
                <div className="text-xs mt-1 text-[#60646C]">
                  Updated: Mar 02, 2024
                </div>
                <center>
                  <button
                    className="text-white mt-1 text-sm rounded-full px-4 py-2 mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                    }}
                    onClick={() =>
                      window.open(
                        "https://aninews.in/news/national/general-news/pm-modi-presents-most-creative-creator-award-to-shraddha-rj-raunac-at-bharat-mandapam20240308115958/",
                        "_blank"
                      )
                    }
                  >
                    View More
                  </button>
                </center>
              </div>

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

          <div
            className="hidden md:block border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
            style={{
              borderRadius: "14px",
              width: "100%",
              margin: "auto",
              marginTop: "5%",
            }}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <div style={{ position: "relative" }}>
              {isHovered3 ? (
                <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
              ) : (
                <img src={iitm} alt="Iitm" style={{ width: "100%" }} />
              )}
              <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                <img src={icon3} alt="Icon 3" className="h-[40px]" />
                <p className="text-white mt-1">IIT MADRAS</p>
              </div>
            </div>
            <div className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
              Sensor for Temperature Measurement at Multiple Points
            </div>
            <div className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
              11th Oct 2021
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
                    "https://www.iitm.ac.in/happenings/press-releases-and-coverages/remote-sensing-xyma-analytics",
                    "_blank"
                  )
                }
              >
                View More
              </button>
            </center>
          </div>

          <div
            className="hidden md:block border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
            style={{
              borderRadius: "14px",
              width: "100%",
              margin: "auto",
              marginTop: "5%",
            }}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            <div style={{ position: "relative" }}>
              {isHovered4 ? (
                <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
              ) : (
                <img src={story} alt="Story" style={{ width: "100%" }} />
              )}
              <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                <img src={icon4} alt="Icon 4" className="h-[40px]" />
                <p className="text-white mt-1">YOUR STORY</p>
              </div>
            </div>
            <div className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
              Prioritize Building Valuable Businesses Over Funding, Advises
              Kalaari Capital's Vani Kola
            </div>
            <div className="text-xs 2xl:text-sm mt-1 mb-1 text-[#60646C]">
              Wednesday July 14, 2021
            </div>
            <center>
              <button
                className="text-white mt-2 text-sm 2xl:text-base rounded-full px-4 py-2 mb-2"
                style={{
                  background:
                    "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                }}
                onClick={() =>
                  window.open(
                    "https://yourstory.com/herstory/2024/03/kalaari-capital-vani-kola-entrepreneurship-shesparks",
                    "_blank"
                  )
                }
              >
                View More
              </button>
            </center>
          </div>

          <div
            className="hidden md:block border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
            style={{
              borderRadius: "14px",
              width: "100%",
              margin: "auto",
              marginTop: "5%",
            }}
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
          >
            <div style={{ position: "relative" }}>
              {isHovered5 ? (
                <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
              ) : (
                <img src={cm} alt="Cm" style={{ width: "100%" }} />
              )}
              <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                <img src={icon2} alt="Icon 2" className="h-[40px]" />
                <p className="text-white mt-1">Businessline</p>
              </div>
            </div>
            <div className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
              TN Chief Minister awards cheques worth ₹95 lakh to 19 start-ups
            </div>
            <div className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
              Updated - December 23, 2021
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
                    "https://www.thehindubusinessline.com/companies/tn-chief-minister-awards-cheques-worth-95-lakh-to-19-start-ups/article38020063.ece",
                    "_blank"
                  )
                }
              >
                View More
              </button>
            </center>
          </div>

          <div
            className="hidden md:block border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
            style={{
              borderRadius: "14px",
              width: "100%",
              margin: "auto",
              marginTop: "5%",
            }}
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
          >
            <div style={{ position: "relative" }}>
              {isHovered6 ? (
                <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
              ) : (
                <img src={smart} alt="Smart" style={{ width: "100%" }} />
              )}
              <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                <img src={icon2} alt="Icon 2" className="h-[40px]" />
                <p className="text-white mt-1">Newswires</p>
              </div>
            </div>
            <div className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
              SmartHub.ai and XYMA Partnership Announcement
            </div>
            <div className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
              March 01, 2022
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
                    "https://www.einnews.com/pr_news/564327124/smarthub-ai-and-xyma-partnership-announcement",
                    "_blank"
                  )
                }
              >
                View More
              </button>
            </center>
          </div>

          <div
            className="hidden md:block border border-gray-300 p-1 hover:scale-90 transition-transform duration-300"
            style={{
              borderRadius: "14px",
              width: "100%",
              margin: "auto",
              marginTop: "5%",
            }}
            onMouseEnter={() => setIsHovered7(true)}
            onMouseLeave={() => setIsHovered7(false)}
          >
            <div style={{ position: "relative" }}>
              {isHovered7 ? (
                <img src={asain2} alt="Asian2" style={{ width: "100%" }} />
              ) : (
                <img src={pm} alt="Pm" style={{ width: "100%" }} />
              )}
              <div className="flex items-center gap-2 absolute bottom-0 w-full p-2">
                <img src={icon5} alt="Icon 2" className="h-[40px]" />
                <p className="text-white mt-1">ANI Multimedia News</p>
              </div>
            </div>
            <div className="text-sm lg:text-lg 2xl:text-xl font-semibold mt-1">
              PM Modi honors Shraddha and RJ Raunac at Bharat Mandapam
            </div>
            <div className="text-xs 2xl:text-sm mt-1 text-[#60646C]">
              Updated: Mar 02, 2024
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
                    "https://aninews.in/news/national/general-news/pm-modi-presents-most-creative-creator-award-to-shraddha-rj-raunac-at-bharat-mandapam20240308115958/",
                    "_blank"
                  )
                }
              >
                View More
              </button>
            </center>
          </div>
        </div>
      </section>

      <div className="h-[90vh] md:h-[50vh] xl:h-[90vh] bg-[#EEF6FF] md:flex mt-20">
        <div className="h-[30%] md:h-full md:w-1/2 flex flex-col items-center justify-center">
          <img
            //style={{ width: "8%", marginLeft: "50%", marginTop: "25%" }}
            src={icon6}
            alt="Background"
            className="h-[40px]"
          />
          <div className="font-semibold text-xl md:text-3xl lg:text-4xl 2xl:text-5xl text-[#013872] w-[90%] md:w-[60%] text-center">
            "Strength lies in togetherness, creativity is embraced with
            inclusivity, and passion flourishes with freedom."
          </div>
        </div>

        <div className="flex w-full md:w-1/2 h-[70%] md:h-full overflow-hidden">
          <div className="flex justify-center">
            <VerticalSlider images={images1} />
          </div>
          <div className="flex justify-center -mt-32">
            <VerticalSlider images={images2} />
          </div>
          <div className="flex justify-center">
            <VerticalSlider images={images3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
