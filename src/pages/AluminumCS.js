import React, {useEffect, useState} from 'react';
import { HiChevronLeft } from 'react-icons/hi2';
import aluminum from "../Assets/newAluminium1.png";
import csImg1 from '../Assets/aluminumCS1.png';
import csImg2 from "../Assets/aluminumCS2.png";
import csImg3 from "../Assets/aluminumCS3.png";
import csImg4 from "../Assets/aluminumCS4.png";
import line from "../Assets/underline.png";
import { useNavigate } from 'react-router-dom';
import { FaFileDownload } from "react-icons/fa";
import aluminumCSPdf from '../pdfAssets/aluminum.pdf';
import AOS from "aos";
import "aos/dist/aos.css";

const AluminumCS = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/industries");
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
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
    <div className=" mx-[5%] overflow-hidden">
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

      <div className="mt-6 md:mt-12 mb-2 flex justify-between items-center flex-wrap">
        <div className="flex gap-2 text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold text-center">
          <div
            className="cursor-pointer md:flex items-center 2xl:hidden"
            onClick={handleBack}
          >
            <HiChevronLeft size={25} />
          </div>
          <div
            className="hidden cursor-pointer 2xl:flex items-center"
            onClick={handleBack}
          >
            <HiChevronLeft size={35} />
          </div>
          <div>Aluminum</div>
          <div className="flex flex-col items-center">
            <div>Case&nbsp;Study</div>
            <img className="w-full h-2" src={line} alt='line'></img>
          </div>
        </div>

        <div className="bg-gray-200 text-xs md:text-sm 2xl:text-base text-gray-500 rounded-2xl py-1 px-3 font-medium">
          4&nbsp;Min&nbsp;Read
        </div>
      </div>

      <div className="md:flex mb-4">
        <div className=" w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <img src={aluminum} alt="Aluminum" data-aos="zoom-out" />
        </div>

        <div className=" w-full md:w-1/2 md:p-8 text-sm lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold text-center flex items-center">
          Continuous Temperature Monitoring of Collector Bars, Side Shell and
          Cryolite Bath - Aluminium Manufacturing
        </div>
      </div>

      <div className="text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl mx-[3%] mb-4 text-justify">
        <div className="mb-4">
          Aluminum is a metal with properties that are highly sensitive to
          temperature fluctuations. The aluminum smelting process involves high
          temperatures and the handling of molten metal, which presents
          significant hazards. By closely monitoring the temperature of the pot
          shell, operators can detect any abnormalities or potential issues
          before they escalate into safety hazards such as overheating or
          equipment failure.
        </div>

        <div>
          Temperature monitoring allows for proactive maintenance and
          troubleshooting. By tracking temperature trends over time, operators
          can identify patterns or deviations that may indicate underlying
          problems with the equipment or process. This enables timely
          intervention to prevent costly downtime or damage to the machinery.
        </div>
      </div>

      <div className="border border-gray-200 md:mx-[10%] mt-8 mb-8" />

      {/* challenges */}
      <div className=" mx-2 mb-6">
        <div>
          <div className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4">
            Challenges:
          </div>
          <ul
            className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
            style={{ listStyleType: "disc" }}
          >
            <li>
              The extreme temperatures involved in the smelting process can make
              it difficult to accurately measure and maintain consistent
              readings. The high heat can lead to sensor malfunction or damage,
              impacting the reliability of temperature data.
            </li>
            <li>
              The harsh operating conditions, such as dust, vibrations, and
              chemical exposure, further exacerbate these challenges by
              potentially interfering with monitoring equipment and reducing its
              lifespan.
            </li>
            <li>
              Moreover, the size and scale of aluminum manufacturing facilities
              often mean that numerous pot shells need to be monitored
              simultaneously, complicating the task of ensuring comprehensive
              and real-time temperature monitoring across the entire operation.
              This can lead to delays in detecting temperature fluctuations or
              hotspots, which could potentially result in equipment damage or
              safety hazards if not addressed promptly.
            </li>
            <li>
              Any inaccuracies or delays in temperature monitoring can lead to
              variations in product quality, increased energy consumption, and
              production inefficiencies, ultimately impacting the overall
              profitability of the operation.
            </li>
          </ul>
        </div>
      </div>

      <div className="font-medium text-base md:text-lg lg:text-xl 2xl:text-2xl mb-4">
        Installing µTMapS on collector bars, side shell and cryolite bath in
        Vedanta plant
      </div>

      <div className="md:flex gap-4 mb-4">
        <div className="flex gap-4 mb-4">
          <div>
            <img
              src={csImg1}
              alt="plant1"
              className="rounded-md"
              data-aos="zoom-out"
            />
          </div>

          <div>
            <img
              src={csImg2}
              alt="plant2"
              className="rounded-md"
              data-aos="zoom-out"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img
              src={csImg3}
              alt="plant3"
              className="rounded-md"
              data-aos="zoom-out"
            />
          </div>

          <div>
            <img
              src={csImg4}
              alt="plant4"
              className="rounded-md"
              data-aos="zoom-out"
            />
          </div>
        </div>
      </div>

      {/* solution */}
      <div className=" mx-2 mb-6">
        <div>
          <div className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4">
            Solution:
          </div>
          <ul
            className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
            style={{ listStyleType: "disc" }}
          >
            <li>
              XYMA's Multi-point temperature Sensor is capable of measuring high
              temperatures at multiple points in real-time across any hazardous
              environment.
            </li>
            <li>
              The edge computing unit in the XYMA Electronics Unit is capable of
              performing advanced computations to extract temperature data from
              the received ultrasonic signals. The output from the edge
              classifiers is transmitted to the dashboard using industrial
              standard, wireless (or wired) communication technology using a
              transmitting unit. The status can be monitored in the client DCS
              system and also can be displayed in XYMA's customizable dashboard.
            </li>
            <li>
              It can measure the temperature range up from 25°C to 1450°C.The
              precise and accurate temperature measurement of the collector
              bars, side shell and cryolite bath can be detected.
            </li>
            <li>
              The AI- Powered soft sensors can provide 3D temperature profiles
              and dashboard gives timely alerts to safely maintain industrial
              operations.
            </li>
            <li>
              Our XYMA sensors are compatible for all industrial standards and
              electronic unit is designed with ATEX certification assures that
              product has tested and met the necessary safety standards to
              operate in potentially hazardous environments.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <div
          className="p-2 rounded-md cursor-pointer text-white"
          style={{
            background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
          }}
          onClick={() => window.open(aluminumCSPdf, "_blank")}
        >
          <FaFileDownload size={20} />
        </div>
      </div>
    </div>
  );
};

export default AluminumCS;
