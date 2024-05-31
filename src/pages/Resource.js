import React, { useState, useEffect} from 'react';
import cs from '../Assets/cs.png';
import all1 from '../Images/all1.png';
import all2 from '../Images/all2.png';
import all3 from '../Images/all3.png';
import aluminum from '../Images/al1.png';
import steel1 from '../Images/steel1.png';
import steel2 from '../Images/steel2.png';
import tube1 from '../Images/tube1.png';
import tube2 from '../Images/tube2.png';
import oil1 from '../Images/oil1.png';
import oil2 from '../Images/oil2.png';
import oilRecovery from "../Assets/oilRecovery.png";
import oilRecovery2 from '../Assets/oilRecovery3.jpg';
import paints1 from '../Assets/paintsresized.png';
import paints2 from '../Assets/paints2.jpg';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Resource = () => {
  const [selectedContent, setSelectedContent] = useState('All');

  const toggleContent = (word) => {
      setSelectedContent(word);
  };

  const navigate= useNavigate();
  const handleContactClick = () =>{
    navigate ('/contact');
  }
  const handleCaseStudyClick=()=>{
    navigate("/resources/casestudy");
  }
  
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

    return (
      <div className="overflow-hidden">
        <section className="mt-[10vh] h-[60vh] md:h-[70vh] xl:h-[90vh] relative shadow-white shadow-2xl">
          <img
            className="h-full w-full object-cover"
            src={cs}
            alt="Case Studies"
          />
          <div className="absolute inset-0 text-white flex flex-col items-center justify-center">
            <div className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-medium md:font-semibold">
              Case Studies
            </div>
            <div className="text-center mt-4 mx-[25%] md:mx-[30%] xl:mx-[20%] text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
              Xyma Analytics Case Studies are documented examples illustrating
              the application and effectiveness of Xyma Analytics' solutions in
              real-world scenarios
            </div>
          </div>
        </section>

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
          CASE STUDIES
        </div>

        {/* resources title */}
        <div className=" mx-[5%] lg:mx-[8%]  md:flex justify-center mt-8">
          <div
            className=" flex md:flex-col gap-2 w-full md:w-[20%] py-6 px-4 overflow-auto text-sm lg:text-lg xl:text-base 2xl:text-2xl font-medium"
            style={{ scrollbarWidth: "none" }}
          >
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

            <div>
              <div
                onClick={() => toggleContent("Refiniries")}
                className={`${
                  selectedContent === "Refiniries"
                    ? "text-[#013872] font-bold"
                    : "text-[gray]"
                } cursor-pointer flex`}
              >
                {selectedContent === "Refiniries" && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="md:ml-1">Refiniries</div>
              </div>
              {selectedContent === "Refiniries" && (
                <div className="md:hidden border border-[#013872]"></div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleContent("Lubricants")}
                className={`${
                  selectedContent === "Lubricants"
                    ? "text-[#013872] font-bold"
                    : "text-[gray]"
                } cursor-pointer flex`}
              >
                {selectedContent === "Lubricants" && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="md:ml-1">Lubricants</div>
              </div>
              {selectedContent === "Lubricants" && (
                <div className="md:hidden border border-[#013872]"></div>
              )}
            </div>

            <div>
              <div
                onClick={() => toggleContent("OilRecovery")}
                className={`${
                  selectedContent === "OilRecovery"
                    ? "text-[#013872] font-bold"
                    : "text-[gray]"
                } cursor-pointer flex`}
              >
                {selectedContent === "OilRecovery" && (
                  <div className="invisible md:visible border border-[#013872]"></div>
                )}
                <div className="md:ml-1">Oil&nbsp;Recovery</div>
              </div>
              {selectedContent === "OilRecovery" && (
                <div className="md:hidden border border-[#013872]"></div>
              )}
            </div>

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
                <div className="md:ml-1">Paints</div>
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
                className="md:flex rounded-2xl mb-4 border border-[#CDCED6]"
                data-aos="slide-left"
              >
                <div className="w-full md:w-1/2 p-4">
                  <div className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl mb-4">
                    Aluminum
                  </div>
                  <div className="mb-4 relative">
                    <img className="w-full h-full" src={aluminum} />
                    <span
                      className="absolute bottom-4 right-4 bg-white text-xs 2xl:text-sm rounded-full p-1 cursor-pointer"
                      onClick={handleCaseStudyClick}
                    >
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl font-medium">
                    A 10°C temperature deviation reduces efficiency, promotes
                    anode effect, and increases PFC emissions.
                  </div>
                </div>
                {/* empty line */}
                <div className="border border-[#CDCED6] my-[10%]" />
                <div className="w-full md:w-1/2 p-4">
                  <div className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl mb-4">
                    All
                  </div>
                  <div className="flex p-4">
                    <div className="w-[30%] flex items-center justify-center">
                      <img
                        className="border border-gray-300 rounded-lg"
                        src={all1}
                      />
                    </div>
                    <div className="w-[70%] px-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                      A 10°C shift lowers efficiency, boosts anode effect, and
                      raises PFC emissions.
                    </div>
                  </div>
                  {/* empty line */}
                  <div className="border border-[#CDCED6] mx-[5%]" />
                  <div className="flex p-4">
                    <div className="w-[30%] flex items-center justify-center">
                      <img
                        className="border border-gray-300 rounded-lg"
                        src={all2}
                      />
                    </div>
                    <div className="w-[70%] px-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                      Extending the ladle life for one cycle would result in
                      steel production worth $5.1 million.
                    </div>
                  </div>
                  {/* empty line */}
                  <div className="border border-[#CDCED6] mx-[5%]" />
                  <div className="flex p-4">
                    <div className="w-[30%] flex items-center justify-center">
                      <img
                        className="border border-gray-300 rounded-lg "
                        src={all3}
                      />
                    </div>
                    <div className="w-[70%] px-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                      20°C rise halves reformer tube lifespan; design
                      temperature crucial.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* steel content */}
            {(selectedContent === "Steel" || selectedContent === "All") && (
              <div
                className="md:flex rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium"
                data-aos="flip-up"
              >
                <div className="w-full md:w-1/2 p-4">
                  <div className="mb-4 flex justify-between">
                    <div className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                      Steel
                    </div>
                    <span
                      className="md:hidden text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="w-full h-full" src={steel1} />
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    Extending ladle life for one cycle yields steel worth $5.1M
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex justify-end mb-4">
                    <span
                      className="hidden md:block text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="w-full h-full" src={steel2}></img>
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    Extending the lifespan of the ladle for one cycle results in
                    producing steel valued at $5.1 million
                  </div>
                </div>
              </div>
            )}

            {/* refiniries content */}
            {(selectedContent === "Refiniries" ||
              selectedContent === "All") && (
              <div
                className="md:flex rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium"
                data-aos="flip-up"
              >
                <div className="w-full md:w-1/2 p-4">
                  <div className="mb-4 flex justify-between">
                    <div className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                      Refiniries
                    </div>
                    <span
                      className="md:hidden text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="w-full h-full" src={tube1} />
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    A 20°C temperature rise cuts reformer tube lifespan by half
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex justify-end mb-4">
                    <span
                      className="hidden md:block text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="w-full h-full" src={tube2}></img>
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    A 20°C temperature increase halves the lifespan of reformer
                    tubes
                  </div>
                </div>
              </div>
            )}

            {/* lubricants content */}
            {(selectedContent === "Lubricants" ||
              selectedContent === "All") && (
              <div
                className="md:flex rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium"
                data-aos="flip-up"
              >
                <div className="w-full md:w-1/2 p-4">
                  <div className="mb-4 flex justify-between">
                    <div className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                      Lubricants
                    </div>
                    <span
                      className="md:hidden text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="w-full h-full" src={oil1} />
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    30% of maintenance budget influenced by lubricants,
                    highlighting their significant role in operational expenses
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex justify-end mb-4">
                    <span
                      className="hidden md:block text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="w-full h-full" src={oil2}></img>
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    Lubricants significantly affect operational costs,
                    accounting for 30% of the maintenance budget
                  </div>
                </div>
              </div>
            )}

            {/* oil recovery content */}
            {(selectedContent === "OilRecovery" ||
              selectedContent === "All") && (
              <div
                className="md:flex rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium"
                data-aos="flip-up"
              >
                <div className="w-full md:w-1/2 p-4">
                  <div className="mb-4 flex justify-between">
                    <div className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                      Oil Recovery
                    </div>
                    <span
                      className="md:hidden text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={oilRecovery}
                    />
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    1.3 lakhs/day would be the worth of injection polymer of
                    unknown viscosity flooded in EOR due to unavailability of
                    continuous viscosity measurement technique.
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex justify-end mb-4">
                    <span
                      className="hidden md:block text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={oilRecovery2}
                    ></img>
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    Enhanced oil recovery 'EOR' techniques can improve recovery
                    rates from 20-40% to 30-60% of the original oil in place.
                  </div>
                </div>
              </div>
            )}

            {/* paints content */}
            {(selectedContent === "Paints" || selectedContent === "All") && (
              <div
                className="md:flex rounded-xl mb-4 bg-[#FCFCFD] border border-[#CDCED6] font-medium"
                data-aos="flip-up"
              >
                <div className="w-full md:w-1/2 p-4">
                  <div className="mb-4 flex justify-between">
                    <div className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl">
                      Paints
                    </div>
                    <span
                      className="md:hidden text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img className="rounded-2xl w-full h-full" src={paints1} />
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    Water-based paints account for about 80% of all paints sold
                    in the residential market.
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex justify-end mb-4">
                    <span
                      className="hidden md:block text-sm text-white px-2 py-1 rounded-full mt-2 cursor-pointer"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                    >
                      Read More
                    </span>
                  </div>
                  <div className="relative mb-4">
                    <img
                      className="rounded-2xl w-full h-full"
                      src={paints2}
                    ></img>
                    <span className="absolute bottom-4 right-4 bg-white text-xs rounded-full p-1 cursor-pointer">
                      Case Studies
                    </span>
                  </div>
                  <div className="text-base md:text-lg lg:text-xl 2xl:text-2xl">
                    The use of low-VOC paints has increased by over 50% in the
                    past decade due to environmental regulations and consumer
                    demand.
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
