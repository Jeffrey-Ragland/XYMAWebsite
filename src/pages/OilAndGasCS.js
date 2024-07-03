import React, { useEffect, useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import reformerTube from '../Assets/tube1.png';
import oil from "../Assets/oil1.png";
import csImg1 from '../Assets/refiniries1.png';
import csImg2 from "../Assets/refiniries2.png";
import csImg3 from "../Assets/refiniries3.png";
import csImg4 from "../Assets/refiniries4.png";
import csImg5 from "../Assets/lubricants1.png";
import csImg6 from "../Assets/lubricants2.png";
import line from "../Assets/underline.png";
import { useNavigate } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import refiniriesCSPdf from "../pdfAssets/oilAndGas1.pdf";
import lubricantsCSPdf from "../pdfAssets/oilAndGas2.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const OilAndGasCS = () => {
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

      <div className="mt-6 md:mt-12 mb-2 flex flex-wrap justify-between items-center">
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
          <div>Oil&nbsp;&&nbsp;Gas</div>
          <div className="flex flex-col items-center">
            <div>Case&nbsp;Studies</div>
            <img className="w-full h-2" src={line}></img>
          </div>
        </div>

        <div className="bg-gray-200 text-xs md:text-sm 2xl:text-base text-gray-500 rounded-2xl py-1 px-3 font-medium">
          6&nbsp;Min&nbsp;Read
        </div>
      </div>

      {/* refiniries case study */}
      <div className="font-semibold text-lg md:text-2xl lg:text-3xl 2xl:text-5xl mx-[3%]">
        Refiniries:
      </div>

      <div className="md:flex mb-4">
        <div className=" w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <img src={reformerTube} alt="reformerTube" data-aos="zoom-out" />
        </div>

        <div className=" w-full md:w-1/2 md:p-8 text-sm lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold text-center flex items-center">
          Continuous Skin Temperature Monitoring of Reformer tubes
        </div>
      </div>

      <div className="text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl mx-[3%] mb-4 text-justify">
        <div className="mb-4">
          Temperature monitoring in reformer tubes is paramount for the safe and
          smooth operation in refineries. High temperatures can lead to thermal
          stresses and material degradation in reformer tubes. Monitoring
          temperatures helps to assess the condition of the tubes and detect any
          signs of deterioration or damage, allowing for timely maintenance or
          replacement to avoid unplanned downtime and costly repairs.
        </div>
      </div>

      <div className="border border-gray-200 md:mx-[10%] mt-8 mb-8" />

      {/* challenges */}
      <div className="mx-2 mb-6">
        <div className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4 ">
          Challenges:
        </div>
        <ul
          className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
          style={{ listStyleType: "disc" }}
        >
          <li>
            The extreme operating conditions within reformer units, including
            high temperatures and pressures, can make it difficult to accurately
            measure and maintain temperatures within the tubes.
          </li>
          <li>
            The high temperatures, pressures, and corrosive environments within
            refineries can accelerate oil degradation and make accurate
            monitoring difficult.
          </li>
        </ul>

        <div className="flex flex-col items-center mb-6 mt-6">
          <img
            src={csImg1}
            alt="csImg1"
            className="max-w-[200px] md:max-w-[400px] 2xl:max-w-[500px] rounded-md mb-2"
            data-aos="zoom-out"
          />
          <div className="text-gray-800 text-xs md:text-base 2xl:text-xl font-medium mx-[20%] md:mx-0 text-center">
            Reformer tubes enduring heavy temperature at IOCL plant
          </div>
        </div>

        <ul
          className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
          style={{ listStyleType: "disc" }}
        >
          <li>
            Achieving uniform temperature distribution along the length of the
            reformer tubes is crucial.
          </li>
          <li>
            The sheer scale of refinery operations and the interconnections of
            different units make real-time monitoring and decision-making
            critical and difficult to achieve.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2 items-center mb-6">
        <div className="flex gap-4">
          <div>
            <img
              src={csImg2}
              alt="csImg2"
              className="max-w-[100px] md:max-w-[200px] 2xl:max-w-[300px] rounded-xl"
              data-aos="zoom-out"
            />
          </div>
          <div>
            <img
              src={csImg3}
              alt="csImg2"
              className="max-w-[100px] md:max-w-[200px] 2xl:max-w-[300px] rounded-xl"
              data-aos="zoom-out"
            />
          </div>
        </div>
        <div className="text-gray-800 text-xs md:text-base 2xl:text-xl font-medium mx-[20%] md:mx-0 text-center">
          Installing XYMA Product, μTMaPS in IOCL
        </div>
      </div>

      {/* solution */}
      <div className="mx-2 mb-6">
        <div className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4 ">
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
        </ul>

        <div className="flex flex-col items-center mb-6 mt-6">
          <img
            src={csImg4}
            alt="csImg4"
            className="max-w-[200px] md:max-w-[400px] 2xl:max-w-[500px] rounded-md mb-2"
            data-aos="zoom-out"
          />
          <div className="text-gray-800 text-xs md:text-base 2xl:text-xl font-medium mx-[20%] md:mx-0 text-center">
            Dashboard for Process Parameter
          </div>
        </div>

        <ul
          className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
          style={{ listStyleType: "disc" }}
        >
          <li>
            It can measure the temperature range up from 25°C to 1450°C.The
            precise and accurate temperature measurement of the reformer tube
            can be detected.
          </li>
          <li>
            The AI- Powered soft sensors can provide 3D temperature profiles of
            the reformer tube and dashboard gives timely alerts to safely
            maintain industrial operations.
          </li>
          <li>
            Our XYMA sensors are compatible for all industrial standards and
            electronic unit is designed with ATEX certification assures that
            product has tested and met the necessary safety standards to operate
            in potentially hazardous environments.
          </li>
        </ul>
      </div>

      <div className="flex justify-end">
        <div
          className="p-2 rounded-md cursor-pointer text-white"
          style={{
            background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
          }}
          onClick={() => window.open(refiniriesCSPdf, "_blank")}
        >
          <FaFileDownload size={20} />
        </div>
      </div>

      <div className="border border-gray-300 md:mx-[8%] mt-8 mb-8" />

      {/* lubricants case study */}
      <div className="font-semibold text-lg md:text-2xl lg:text-3xl 2xl:text-5xl mx-[3%]">
        Lubrication Industry:
      </div>

      <div className="md:flex mb-4">
        <div className=" w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <img src={oil} alt="oil" data-aos="zoom-out" />
        </div>

        <div className=" w-full md:w-1/2 md:p-8 text-sm lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold text-center flex items-center">
          Continuous Oil Condition Monitoring
        </div>
      </div>

      <div className="text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl mx-[3%] mb-4 text-justify">
        <div className="mb-4">
          Oil monitoring is crucial process in lubrication industry to ensure
          operational efficiency and maintain equipment integrity. By closely
          monitoring oil properties enables early detection of potential issues
          within machinery . It also allows for timely oil changes or
          replenishment, extending the lifespan of machinery and reducing
          maintenance costs.
        </div>
      </div>

      <div className="border border-gray-200 md:mx-[10%] mt-8 mb-8" />

      {/* challenges */}
      <div className="mx-2 mb-6">
        <div className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4 ">
          Challenges:
        </div>
        <ul
          className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
          style={{ listStyleType: "disc" }}
        >
          <li>
            Oil monitoring is challenging due to its complex process. Monitoring
            involves tracking parameters such as temperature, pressure, flow
            rates, and chemical composition throughout process stages which can
            require specialized equipment and expertise.
          </li>
        </ul>

        <div className="flex flex-col gap-2 items-center mb-6 mt-6">
          <div className="flex gap-4">
            <div>
              <img
                src={csImg5}
                alt="csImg5"
                className="max-w-[100px] md:max-w-[200px] 2xl:max-w-[300px] rounded-xl"
                data-aos="zoom-out"
              />
            </div>
            <div>
              <img
                src={csImg6}
                alt="csImg6"
                className="max-w-[100px] md:max-w-[200px] 2xl:max-w-[300px] rounded-xl"
                data-aos="zoom-out"
              />
            </div>
          </div>
          <div className="text-gray-800 text-xs md:text-base 2xl:text-xl font-medium mx-[20%] md:mx-0 text-center">
            Installing XYMA Product, PoRTS in IOCL
          </div>
        </div>

        <ul
          className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
          style={{ listStyleType: "disc" }}
        >
          <li>
            Obtaining representative oil samples for analysis can be difficult,
            especially in large or inaccessible machinery. Improper sampling
            techniques can lead to inaccurate results.
          </li>
          <li>
            Interpreting oil monitoring data and translating it into actionable
            insights that imply equipment health and performance is difficult.
          </li>
        </ul>
      </div>

      {/* solution */}
      <div className="mx-2 mb-6">
        <div className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4 ">
          Solution:
        </div>
        <ul
          className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
          style={{ listStyleType: "disc" }}
        >
          <li>
            Our XYMA Analytics product PoRTS is multi-parameter measurement
            sensor to continuously monitor viscosity, density and temperature of
            a fluid with high reliability and precision using single ultrasonic
            waveguide.
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
        </ul>

        <div className="flex flex-col items-center mb-6 mt-6">
          <img
            src={csImg4}
            alt="csImg4"
            className="max-w-[200px] md:max-w-[400px] 2xl:max-w-[500px] rounded-md mb-2"
            data-aos="zoom-out"
          />
          <div className="text-gray-800 text-xs md:text-base 2xl:text-xl font-medium mx-[20%] md:mx-0 text-center">
            Dashboard for Process Parameter
          </div>
        </div>

        <ul
          className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
          style={{ listStyleType: "disc" }}
        >
          <li>
            It can measure the viscosity from 50 cP - 15000 cP, density from 700
            kg/m³ - 1200 kg/m³, Temperature: 20°C to 400°C
          </li>
          <li>
            The AI- Powered soft sensors can provide 3D temperature profiles of
            any asset. The dashboard gives timely alerts to safely maintain
            industrial operations.
          </li>
          <li>
            Our XYMA sensors are compatible for all industrial standards and
            electronic unit is designed with ATEX certification assures that
            product has tested and met the necessary safety standards to operate
            in potentially hazardous environments.
          </li>
        </ul>
      </div>

      <div className="flex justify-end">
        <div
          className="p-2 rounded-md cursor-pointer text-white"
          style={{
            background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
          }}
          onClick={() => window.open(lubricantsCSPdf, "_blank")}
        >
          <FaFileDownload size={20} />
        </div>
      </div>
    </div>
  );
};

export default OilAndGasCS;
