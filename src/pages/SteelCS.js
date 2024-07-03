import React, { useEffect, useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import steel from "../Assets/steel3.png";
import csImg1 from '../Assets/steelChallenge.png';
import csImg2 from "../Assets/steelMonitoring.png";
import line from "../Assets/underline.png";
import { useNavigate } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import steelCSPdf from "../pdfAssets/steel.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const SteelCS = () => {
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
          <div>Steel</div>
          <div className="flex flex-col items-center">
            <div>Case&nbsp;Study</div>
            <img className="w-full h-2" src={line}></img>
          </div>
        </div>

        <div className="bg-gray-200 text-xs md:text-sm 2xl:text-base text-gray-500 rounded-2xl py-1 px-3 font-medium">
          6&nbsp;Min&nbsp;Read
        </div>
      </div>

      <div className="md:flex mb-4">
        <div className=" w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <img src={steel} alt="steel" data-aos="zoom-out" className="rounded-3xl"/>
        </div>

        <div className=" w-full md:w-1/2 md:p-8 text-sm lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold text-center flex items-center">
          Continuous Tundish Temperature Monitoring Improves Energy Efficiency
          and Product Quality
        </div>
      </div>

      <div className="text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl mx-[3%] mb-4 text-justify">
        <div className="mb-4">
          Temperature measurement is an integral part of the steelmaking
          process. Temperature monitoring in the tundish linings provides data
          that can be used to detect refractory wear. It also improve the
          tundish preheating process. Improvements in the preheating process can
          significantly save enormous amount of energy.
        </div>

        <div>
          Temperature Monitoring is also important to achieve consistent product
          quality and high productivity. Various operating faults and quality
          defects can be avoided by continuous temperature monitoring. So,
          continuous temperature monitoring of tundish enables the use of
          advanced control strategies which can improve operating stability,
          energy efficiency, and product yield. These improvements results in
          large energy cost savings.
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
            In the continuous casting process of steel, the tundish is an
            intermediate vessel between the ladle and the continuous caster
            mold. Tundish fluid dynamics are guided by a set of dams and
            fixtures known as furniture, which are designed to maximize the
            amount of time that steel flows in the tundish.
          </li>
          <li>
            As these fixtures are utilized repeatedly throughout a continuous
            casting cycle, their performance may deteriorate, resulting in a
            change in steel residence duration in the tundish. This has a
            negative impact on the consistency of superheat management.
          </li>
        </ul>

        <div className="flex justify-center mb-6 mt-6">
          <img
            src={csImg1}
            alt="steelPlant"
            className="max-w-[200px] md:max-w-[400px] 2xl:max-w-[500px] rounded-md"
            data-aos="zoom-out"
          />
        </div>

        <ul
          className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
          style={{ listStyleType: "disc" }}
        >
          <li>
            Superheat in the casting process refers to the temperature increase
            of the molten metal above its melting point. Accurate measurement of
            this elevated temperature is required to reliably control the
            casting speed of the machine.
          </li>
          <li>
            If the superheat is too low, the caster is at risk of clogging
            and/or freezing the submerged entry nozzle (SEN), thereby
            terminating operations and damaging equipment. Conversely, if
            superheat is too high, an increased risk of various defects such as
            lower-quality microstructure and breakouts can ensue. A high
            superheat also increases energy losses, necessitating more cooling.
            Predictive models for fluid dynamics and tundish heat losses can be
            used to assess and improve superheat control and refractory wear.
          </li>
        </ul>
      </div>

      {/* tundish preheating process */}
      <div className=" mx-2 mb-6">
        <div>
          <div className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4">
            Tundish Pre-Heating Process:
          </div>
          <ul
            className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
            style={{ listStyleType: "disc" }}
          >
            <li>
              Pre-heating tundish helps maintain the desired temperature of the
              molten metal as it passes through the tundish, ensuring consistent
              casting conditions and preventing premature solidification.
              Secondly, preheating reduces the risk of thermal shock to the
              refractory lining of the tundish, which could otherwise lead to
              cracking or failure.
            </li>
            <li>
              The process measures single-point temperature measurement using
              thermocouples are traditional and inapt for tundish pre-heating.
              Thermocouple are not meant for long-term use and are often
              discarded after a single use or after a relatively short period,
              typically within hours or a few days. They have short lifespan due
              to the harsh conditions they endure during the casting process.
            </li>
            <li>
              An accurate, information-rich, fast, minimally invasive and multi
              point temperature measurement system is highly desirable to
              measure continuous temperature measurements of tundish.
            </li>
          </ul>
        </div>
      </div>

      {/* temperature monitoring */}
      <div className=" mx-2 mb-6">
        <div>
          <div className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4">
            Real-Time Temperature Monitoring using Ultrasonic Waveguide
            Technology:
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
              the received ultrasonic signals.
            </li>
            <li>
              The output from the edge classifiers is transmitted to the
              dashboard using industrial standard, wireless (or wired)
              communication technology using a transmitting unit. The status can
              be monitored in the client DCS system and also can be displayed in
              XYMA's customizable dashboard.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <img
          src={csImg2}
          alt="utmaps"
          className="max-w-[300px] md:max-w-[400px] 2xl:max-w-[500px] rounded-md"
          data-aos="zoom-out"
        />
      </div>

      {/* utmaps */}
      <div className=" mx-2 mb-6">
        <div>
          <div className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4">
            μTMapS Multi Point Temperature Mapping Sensor:
          </div>
          <ul
            className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
            style={{ listStyleType: "disc" }}
          >
            <li>
              μTMapS Multi Point Temperature Mapping Sensors helps to reduce the
              complex pre-heating procedure of tundish. These sensors utilize
              ultrasonic technology to accurately measure and monitor
              temperature distribution across multiple points on the tundish.
              From temperature data can be collected from multiple locations
              simultaneously, providing a comprehensive understanding of the
              temperature profile within the tundish.
            </li>
            <li>
              The sensor can also identify hot spots and cold spots within the
              tundish. This information allows operators to adjust heating
              elements or other interventions to ensure a more uniform
              temperature distribution, reducing the need for prolonged
              pre-heating to compensate for temperature variations.
            </li>
            <li>
              The control of superheat can be managed efficiently, With accurate
              temperature data, operators can optimize the heating system to
              ensure that the entire tundish reaches the desired temperature
              efficiently. By targeting specific areas that may require more
              heating and minimizing over-heating in other areas, the
              pre-heating process can be streamlined, saving time and energy.
            </li>
            <li>
              The system setup provides real-time feedback on temperature
              variations of tundish. This allows operators to make immediate
              adjustments to heating settings.
            </li>
            <li>
              This targeted approach not only reduces energy consumption but
              also prevent downtime, thereby enhancing overall productivity in
              steel manufacturing operations.
            </li>
            <li>
              Overall, the integration of μTMapS Multi Point Temperature Mapping
              Sensors streamlines the pre-heating process for tundishes,
              resulting in cost savings, improved efficiency, and enhanced
              product quality in steel Industry.
            </li>
          </ul>
        </div>
      </div>

      {/* conclusion */}
      <div className=" mx-2 mb-6">
        <div>
          <div className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4">
            Conclusion:
          </div>
          <ul
            className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
            style={{ listStyleType: "disc" }}
          >
            <li>
              The optimal solution is to invest in long life time sensors which
              measure continuous spatial temperature of tundish. μTMapS Multi
              Point Temperature Mapping Sensors would be robust product to
              measure accurate spatial temperature of tundish.
            </li>
            <li>
              The system works with novelized technology and best industrial
              standards to detect the real time multi point and multi parameter
              measurement in a cost efficient way. By revolutionizing the
              pre-heating procedure with ultrasonic waveguide sensors, The Steel
              Industry majorly saves large energy cost and unlock their high
              potential in production.
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
          onClick={() => window.open(steelCSPdf, "_blank")}
        >
          <FaFileDownload size={20} />
        </div>
      </div>
    </div>
  );
};

export default SteelCS;
