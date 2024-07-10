import React, { useState, useEffect, useRef} from 'react';
import cs from '../Assets/cs.png';
import newAl1 from '../Assets/newAluminium1.png';
import newAl2 from "../Assets/newAluminium2.png";
import steel1 from '../Assets/steel1.png';
import steel2 from '../Assets/steel3.png';
import marine1 from '../Assets/marine1.jpg';
import marine2 from "../Assets/marine2.png";
import oil1 from '../Assets/tube1.png';
import oil2 from '../Assets/oil2.png';
import semiconductor1 from "../Assets/semiconductor1.jpg";
import semiconductor2 from "../Assets/semiconductor2.jpg";
import mining1 from "../Assets/mining1.jpg";
import mining2 from "../Assets/mining2.png";
import paints1 from '../Assets/paintsresized.png'; 
import paints2 from '../Assets/paints2.jpg';
import { useNavigate } from 'react-router-dom';
import {
  GiMetalDisc, 
  GiMetalBar,
  GiShipBow,
  GiGreaseTrap,
  GiCircuitry,
  GiOilPump,
  GiPaintBucket,
} from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const Resource = () => {
  const [selectedContent, setSelectedContent] = useState("All");
  const [renderIconMenu, setRenderIconMenu] = useState(false);
  const [activeSection, setActiveSection] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  const coverImageRef = useRef(null);

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
  };

  const toggleContent = (word) => {
    setSelectedContent(word);
  };

  const navigate = useNavigate();
  
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
      <section
        ref={coverImageRef}
        className="mt-[10vh] h-[60vh] md:h-[70vh] xl:h-[90vh] relative shadow-white shadow-2xl"
      >
        <img
          className="h-full w-full object-cover"
          src={cs}
          alt="Case Studies"
        />
        <div className="absolute inset-0 text-white flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl font-medium md:font-semibold">
            Case Studies
          </h1>
          <h2 className="text-center mt-4 mx-[10%] xl:mx-[20%] text-xs md:text-lg  xl:text-base 2xl:text-2xl font-normal md:font-medium">
            Xyma Analytics Case Studies are documented examples illustrating the
            application and effectiveness of Xyma Analytics' solutions in
            real-world scenarios
          </h2>
        </div>
      </section>

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
        CASE STUDIES
      </h3>

      {/* icon menu */}
      {renderIconMenu && selectedContent === "All" && (
        <nav
          className="hidden border border-r-orange-400 border-t-orange-400 border-b-orange-400 bg-white z-40 fixed left-0 top-1/2 transform -translate-y-1/2 text-xl px-2 md:flex flex-col gap-8 py-4 rounded-r-2xl"
          data-aos=""
        >
          <button
            onClick={() => handleSectionScroll(sectionRefs.section1)}
            className={`${
              activeSection.includes("section1")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiMetalDisc size={25} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section2)}
            className={`${
              activeSection.includes("section2")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiMetalBar size={25} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section3)}
            className={`${
              activeSection.includes("section3")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiShipBow size={25} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section4)}
            className={`${
              activeSection.includes("section4")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiGreaseTrap size={25} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section5)}
            className={`${
              activeSection.includes("section5")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiCircuitry size={25} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section6)}
            className={`${
              activeSection.includes("section6")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiOilPump size={25} />
          </button>

          <button
            onClick={() => handleSectionScroll(sectionRefs.section7)}
            className={`${
              activeSection.includes("section7")
                ? "text-orange-400"
                : "text-gray-400"
            }`}
          >
            <GiPaintBucket size={25} />
          </button>
        </nav>
      )}

      {/* resources title */}
      <div className=" mx-[5%] lg:mx-[8%] md:flex justify-center mt-8">
        <div
          className=" flex md:flex-col gap-2 w-full md:w-[20%] py-6 px-4 overflow-auto text-sm lg:text-lg xl:text-base 2xl:text-2xl font-medium"
          style={{ scrollbarWidth: "none" }}
        >
          {/* all */}
          <div>
            <div
              onClick={() => toggleContent("All")}
              className={`${
                selectedContent === "All"
                  ? "text-[#013872] font-bold"
                  : "text-[gray]"
              } cursor-pointer flex`}
            >
              {selectedContent === "All" && (
                <div className="invisible md:visible border border-[#013872]"></div>
              )}
              <div className="md:ml-1">All</div>
            </div>
            {selectedContent === "All" && (
              <div className="md:hidden border border-[#013872]"></div>
            )}
          </div>

          {/* aluminum */}
          <div>
            <div
              onClick={() => toggleContent("Aluminum")}
              className={`${
                selectedContent === "Aluminum"
                  ? "text-[#013872] font-bold"
                  : "text-[gray]"
              } cursor-pointer flex`}
            >
              {selectedContent === "Aluminum" && (
                <div className="invisible md:visible border border-[#013872]"></div>
              )}
              <div className="md:ml-1">Aluminum</div>
            </div>
            {selectedContent === "Aluminum" && (
              <div className="md:hidden border border-[#013872]"></div>
            )}
          </div>

          {/* steel */}
          <div>
            <div
              onClick={() => toggleContent("Steel")}
              className={`${
                selectedContent === "Steel"
                  ? "text-[#013872] font-bold"
                  : "text-[gray]"
              } cursor-pointer flex`}
            >
              {selectedContent === "Steel" && (
                <div className="invisible md:visible border border-[#013872]"></div>
              )}
              <div className="md:ml-1">Steel</div>
            </div>
            {selectedContent === "Steel" && (
              <div className="md:hidden border border-[#013872]"></div>
            )}
          </div>

          {/* marine */}
          <div>
            <div
              onClick={() => toggleContent("Marine")}
              className={`${
                selectedContent === "Marine"
                  ? "text-[#013872] font-bold"
                  : "text-[gray]"
              } cursor-pointer flex`}
            >
              {selectedContent === "Marine" && (
                <div className="invisible md:visible border border-[#013872]"></div>
              )}
              <div className="md:ml-1">Marine</div>
            </div>
            {selectedContent === "Marine" && (
              <div className="md:hidden border border-[#013872]"></div>
            )}
          </div>

          {/* oil and gas */}
          <div>
            <div
              onClick={() => toggleContent("OilAndGas")}
              className={`${
                selectedContent === "OilAndGas"
                  ? "text-[#013872] font-bold"
                  : "text-[gray]"
              } cursor-pointer flex`}
            >
              {selectedContent === "OilAndGas" && (
                <div className="invisible md:visible border border-[#013872]"></div>
              )}
              <div className="md:ml-1">Oil&nbsp;&&nbsp;Gas</div>
            </div>
            {selectedContent === "OilAndGas" && (
              <div className="md:hidden border border-[#013872]"></div>
            )}
          </div>

          {/* semiconductor */}
          <div>
            <div
              onClick={() => toggleContent("Semiconductor")}
              className={`${
                selectedContent === "Semiconductor"
                  ? "text-[#013872] font-bold"
                  : "text-[gray]"
              } cursor-pointer flex`}
            >
              {selectedContent === "Semiconductor" && (
                <div className="invisible md:visible border border-[#013872]"></div>
              )}
              <div className="md:ml-1">Semiconductor</div>
            </div>
            {selectedContent === "Semiconductor" && (
              <div className="md:hidden border border-[#013872]"></div>
            )}
          </div>

          {/* mining */}
          <div>
            <div
              onClick={() => toggleContent("Mining")}
              className={`${
                selectedContent === "Mining"
                  ? "text-[#013872] font-bold"
                  : "text-[gray]"
              } cursor-pointer flex`}
            >
              {selectedContent === "Mining" && (
                <div className="invisible md:visible border border-[#013872]"></div>
              )}
              <div className="md:ml-1">Mining</div>
            </div>
            {selectedContent === "Mining" && (
              <div className="md:hidden border border-[#013872]"></div>
            )}
          </div>

          {/* specialty chemicals */}
          <div>
            <div
              onClick={() => toggleContent("Paints")}
              className={`${
                selectedContent === "Paints"
                  ? "text-[#013872] font-bold"
                  : "text-[gray]"
              } cursor-pointer flex`}
            >
              {selectedContent === "Paints" && (
                <div className="invisible md:visible border border-[#013872]"></div>
              )}
              <div className="md:ml-1">Specialty&nbsp;Chemicals</div>
            </div>
            {selectedContent === "Paints" && (
              <div className="md:hidden border border-[#013872]"></div>
            )}
          </div>
        </div>

        {/* resources content */}
        <div className="w-full md:w-[80%]">
          {/* aluminium content */}
          {(selectedContent === "Aluminum" || selectedContent === "All") && (
            <div
              id="section1"
              ref={sectionRefs.section1}
              className="rounded-2xl mb-4 border border-[#CDCED6] font-medium p-4"
              data-aos="slide-left"
            >
              <div className="mb-4 flex justify-between">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                  Aluminum
                </h1>
                <span
                  className="text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() => {
                    navigate("/industries/aluminum");
                  }}
                >
                  Case Study
                </span>
              </div>

              <div className="md:flex gap-4">
                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="w-full h-full rounded-2xl"
                      src={newAl1}
                      alt="aluminum1"
                    />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl mb-4 md:mb-0">
                    A 10°C temperature deviation reduces efficiency, promotes
                    anode effect, and increases PFC emissions.
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="w-full h-full rounded-2xl"
                      src={newAl2}
                      alt="aluminum2"
                    ></img>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    20°C rise halves reformer tube lifespan; design temperature
                    crucial.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* steel content */}
          {(selectedContent === "Steel" || selectedContent === "All") && (
            <div
              id="section2"
              ref={sectionRefs.section2}
              className="rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium p-4"
              data-aos="zoom-out"
            >
              <div className="mb-4 flex justify-between">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                  Steel
                </h1>
                <span
                  className="text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() => {
                    navigate("/industries/steel");
                  }}
                >
                  Case Study
                </span>
              </div>

              <div className="md:flex gap-4">
                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img className="w-full h-full rounded-2xl" src={steel1} alt="steel1" />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl mb-4 md:mb-0">
                    Extending ladle life for one cycle yields steel worth $5.1M
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="w-full h-full rounded-2xl"
                      src={steel2}
                      alt="steel2"
                    ></img>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    Extending the lifespan of the ladle for one cycle results in
                    producing steel valued at $5.1 million
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* marine content */}
          {(selectedContent === "Marine" || selectedContent === "All") && (
            <div
              id="section3"
              ref={sectionRefs.section3}
              className="p-4 rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium"
              data-aos="zoom-out"
            >
              <div className="mb-4 flex justify-between">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                  Marine
                </h1>
                {/* <span
                  className="text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() => {
                    navigate("/industries/marine");
                  }}
                >
                  Case Study
                </span> */}
              </div>

              <div className="md:flex gap-4">
                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={marine1}
                      alt="marine1"
                    />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl mb-4 md:mb-0">
                    The marine industry handles over 90% of the world's trade,
                    transporting around 11 billion tons of goods each year.
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={marine2}
                      alt="marine2"
                    ></img>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    The marine industry employs more than 1.6 million seafarers
                    globally, supporting the backbone of international trade.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* oil and gas content */}
          {(selectedContent === "OilAndGas" || selectedContent === "All") && (
            <div
              id="section4"
              ref={sectionRefs.section4}
              className="p-4 rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium"
              data-aos="zoom-out"
            >
              <div className="mb-4 flex justify-between">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                  Oil&nbsp;&&nbsp;Gas
                </h1>
                <span
                  className="text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() => {
                    navigate("/industries/OilAndGas");
                  }}
                >
                  Case Study
                </span>
              </div>

              <div className="md:flex gap-4">
                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img className="w-full h-full" src={oil1} alt="oil1" />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl mb-4 md:mb-0">
                    30% of maintenance budget influenced by lubricants,
                    highlighting their significant role in operational expenses
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img className="w-full h-full" src={oil2} alt="oil2"></img>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    Lubricants significantly affect operational costs,
                    accounting for 30% of the maintenance budget
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* semiconductor content */}
          {(selectedContent === "Semiconductor" ||
            selectedContent === "All") && (
            <div
              id="section5"
              ref={sectionRefs.section5}
              className="p-4 rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium"
              data-aos="zoom-out"
            >
              <div className="mb-4 flex justify-between">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                  Semiconductor
                </h1>
                {/* <span
                  className="text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() => {
                    navigate("/industries/semiconductor");
                  }}
                >
                  Case Study
                </span> */}
              </div>

              <div className="md:flex gap-4">
                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={semiconductor1}
                      alt="semiconductor1"
                    />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl mb-4 md:mb-0">
                    In 2023, the Global Semiconductor Industry is Projected to
                    Reach $600 Billion in Annual Sales.
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={semiconductor2}
                      alt="semiconductor2"
                    ></img>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    The semiconductor industry is crucial for modern
                    electronics, with a market value projected to exceed $600
                    billion by 2025.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* mining content */}
          {(selectedContent === "Mining" || selectedContent === "All") && (
            <div
              id="section6"
              ref={sectionRefs.section6}
              className="p-4 rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium"
              data-aos="zoom-out"
            >
              <div className="mb-4 flex justify-between">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                  Mining
                </h1>
                {/* <span
                  className="text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() => {
                    navigate("/industries/mining");
                  }}
                >
                  Case Study
                </span> */}
              </div>

              <div className="md:flex gap-4">
                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={mining1}
                      alt="mining1"
                    />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl mb-4 md:mb-0">
                    The mining industry, worth over $1.5 trillion, supplies
                    crucial minerals and metals for global manufacturing and
                    construction.
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={mining2}
                      alt="mining2"
                    ></img>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    The mining industry extracts essential minerals and metals
                    vital for global economic development and industrial
                    production.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* paints content */}
          {(selectedContent === "Paints" || selectedContent === "All") && (
            <div
              id="section7"
              ref={sectionRefs.section7}
              className="p-4 rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium"
              data-aos="zoom-out"
            >
              <div className="mb-4 flex justify-between">
                <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                  Paints
                </h1>
                <span
                  className="text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  onClick={() => {
                    navigate("/industries/SpecialtyChemicals");
                  }}
                >
                  Case Study
                </span>
              </div>

              <div className="md:flex gap-4">
                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={paints1}
                      alt="paint1"
                    />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl mb-4 md:mb-0">
                    Water-based paints account for about 80% of all paints sold
                    in the residential market.
                  </p>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={paints2}
                      alt="paint2"
                    ></img>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    The use of low-VOC paints has increased by over 50% in the
                    past decade due to environmental regulations.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Resource;
