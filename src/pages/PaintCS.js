import React, { useEffect, useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import csImg1 from "../Assets/paint1.png";
import csImg2 from "../Assets/paint2.png";
import paints from "../Assets/paints2.jpg";
import line from "../Assets/underline.png";
import { useNavigate } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import paintCSPdf from "../pdfAssets/specialty.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const PaintCS = () => {
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

      <article>
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
            <h1>Paints</h1>
            <h1 className="flex flex-col items-center">
              <div>Case&nbsp;Study</div>
              <img className="w-full h-2" src={line} alt="line"></img>
            </h1>
          </div>

          <div className="bg-gray-200 text-xs md:text-sm 2xl:text-base text-gray-500 rounded-2xl py-1 px-3 font-medium">
            3&nbsp;Min&nbsp;Read
          </div>
        </div>

        <div className="md:flex mb-4">
          <figure className=" w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
            <img
              src={paints}
              alt="paint"
              data-aos="zoom-out"
              className="rounded-2xl"
            />
          </figure>

          <p className=" w-full md:w-1/2 md:p-8 text-sm lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold text-center flex items-center">
            Real-Time Monitoring of Viscosity and Temperature in Paint Mixtures
            Maintains Paint Consistency and Improves Paint Quality
          </p>
        </div>

        <div className="text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl mx-[3%] mb-4 text-justify">
          <p className="mb-4">
            The case study explains how the paint industry overcome the problem
            of monitoring the continuous viscosity of the paint, which directly
            affects its quality. The paint mixture homogeneity monitoring
            involves ensuring consistency and uniformity in paint formulations
            throughout the manufacturing process.By closely monitoring the
            composition, color, viscosity, and other key parameters of the paint
            mixture throughout the manufacturing process, the manufacturers can
            guarantee that each batch meets the desired quality standards.
          </p>

          <p>
            Overall, paint mixture viscosity and temperature monitoring plays a
            crucial role in ensuring product quality, regulatory compliance, and
            customer satisfaction in the paint manufacturing
            industry.Consistency in paint formulations is essential for
            maintaining the brand reputation and meeting customer expectations.
          </p>
        </div>

        <div className="border border-gray-200 md:mx-[10%] mt-8 mb-8" />

        {/* challenges */}
        <div className=" mx-2 mb-6">
          <div>
            <h2 className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4">
              Challenges:
            </h2>
            <ul
              className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
              style={{ listStyleType: "disc" }}
            >
              <li>
                The most challenging process is testing the paint mixture
                samplings in the laboratory by holding the production process.
              </li>
              <li>
                In a laboratory setting, paint samples are typically measured
                using instruments such as spectrophotometers or colorimeters.
                Measurements are typically taken on static samples, which means
                the paint must be prepared and brought to the lab for analysis.
              </li>
              <li>
                Traditional methods of monitoring paint homogeneity, such as
                manual sampling and visual inspection, are often time consuming,
                labor-intensive, and prone to human error
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4 justify-center items-center">
          <figure className="flex flex-col gap-2 ">
            <img
              src={csImg1}
              alt="plant1"
              className="max-w-[200px] md:max-w-[400px] 2xl:max-w-[500px] rounded-3xl"
              data-aos="zoom-out"
            />
            <figcaption className="text-gray-800 text-xs md:text-base 2xl:text-xl font-medium mx-[20%] md:mx-0 text-center">
              3D Model of XYMA Sensors
            </figcaption>
          </figure>

          <figure className="flex flex-col gap-2 items-center">
            <img
              src={csImg2}
              alt="plant2"
              className="max-w-[200px] md:max-w-[400px] 2xl:max-w-[500px] rounded-3xl"
              data-aos="zoom-out"
            />
            <figcaption className="text-gray-800 text-xs md:text-base 2xl:text-xl font-medium mx-[20%] md:mx-0 text-center">
              Fixture inside the tank in Schneider Electric
            </figcaption>
          </figure>
        </div>

        {/* solution */}
        <div className=" mx-2 mb-6">
          <div>
            <h2 className="font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl mb-4">
              Solution:
            </h2>
            <ul
              className=" text-[#60646C] text-xs md:text-base xl:text-lg 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6 text-justify flex flex-col gap-4"
              style={{ listStyleType: "disc" }}
            >
              <li>
                Our XYMA Analytics product PoRTS is multi-parameter measurement
                sensor to continuously monitor viscosity, density and
                temperature of a fluid with high reliability and precision using
                single ultrasonic waveguide.
              </li>
              <li>
                The edge computing unit in the XYMA Electronics Unit is capable
                of performing advanced computations to extract temperature data
                from the received ultrasonic signals. The output from the edge
                classifiers is transmitted to the dashboard using industrial
                standard, wireless (or wired) communication technology using a
                transmitting unit. The status can be monitored in the client DCS
                system and also can be displayed in XYMA's customizable
                dashboard.
              </li>
              <li>
                It can measure the viscosity from 50 cP - 15000 cP, density from
                700 kg/m³ - 1200 kg/m³, Temperature: 20°C to 400°C.
              </li>
              <li>
                The AI- Powered soft sensors can provide 3D temperature profiles
                of any asset. The dashboard gives timely alerts to safely
                maintain industrial operations.
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
            onClick={() => window.open(paintCSPdf, "_blank")}
          >
            <FaFileDownload size={20} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default PaintCS;
