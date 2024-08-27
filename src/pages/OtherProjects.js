import React from 'react';
import { useState, useEffect } from 'react';
import otherCover from '../Assets/otherCover.png';
import heatStressMonitor from '../Assets/heatStressMonitor.png';
import thermalCamera from '../Assets/thermalCamera.png';
import AOS from "aos";
import "aos/dist/aos.css";

const OtherProjects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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

  //animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
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
      <section className="relative h-[60vh] md:h-[70vh] xl:h-[90vh] shadow-white shadow-2xl">
        <img
          src={otherCover}
          alt="cover"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl md:text-3xl 2xl:text-5xl font-medium md:font-semibold text-center">
          Discover More of Our Exciting Projects Below!
        </div>
      </section>
      {/* bottom text */}
      <h3
        className="text-center font-semibold text-[40px] md:text-[90px] 2xl:text-[120px] -mt-[25px] md:-mt-[50px] 2xl:-mt-[65px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white, rgb(209, 213, 219))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        OTHER&nbsp;PROJECTS
      </h3>

      {/* product cards */}
      <div className="mx-[5%] xl:mx-[8%] flex flex-col items-center gap-4 2xl:gap-8">
        {/* product 1 */}
        <div
          className="flex flex-col gap-2 md:flex-row p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg"
          data-aos="flip-up"
        >
          <div
            className="border border-black w-full md:w-1/2 flex items-center justify-center px-4 py-8 rounded-lg"
            style={{
              background:
                "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
            }}
          >
            <img
              className="object-cover max-w-[100px] md:max-w-[150px] 2xl:max-w-[200px]"
              src={heatStressMonitor}
              alt="heatStressMonitor"
            />
          </div>
          <div className="w-full md:w-1/2 p-0 md:p-4">
            <h1 className=" mb-4 text-lg lg:text-2xl 2xl:text-4xl font-semibold">
              Thermal Work Limit Monitoring Device
            </h1>
            {/* description */}
            <p className=" text-[#60646C] text-sm lg:text-base 2xl:text-2xl mb-2 font-medium flex flex-col gap-4">
              <p>
                To install an Al-enabled, smart, and cost-effective solution for
                continuous TWL monitoring & providing customers with the
                following indexes:
              </p>
              <p className="flex flex-col gap-2 px-2 md:px-4">
                <p>
                  •{" "}
                  <span className="font-semibold text-gray-800">
                    WBGT Index
                  </span>{" "}
                  (as per ISO 7243)
                </p>
                <p>
                  •{" "}
                  <span className="font-semibold text-gray-800">
                    PMV-PPD Index
                  </span>{" "}
                  (as per ISO 7730){" "}
                </p>
                <p>
                  •{" "}
                  <span className="font-semibold text-gray-800">
                    Predicted Heat Strain (PHS)
                  </span>{" "}
                  (as per ISO 7933){" "}
                </p>
              </p>
              <p>
                Implement a predictive data analysis model for heat stress
                monitoring, featuring a centralized alarm unit to ensure
                immediate and effective response to critical heat stress levels
              </p>
            </p>
          </div>
        </div>

        {/* product 2 */}
        <div
          className="flex flex-col gap-2 md:flex-row p-4 border border-[#E0E1E6] rounded-lg bg-[#F9F9FB] shadow-lg"
          data-aos="flip-up"
        >
          <div
            className="border border-black w-full md:w-1/2 flex items-center justify-center px-4 py-12 rounded-lg"
            style={{
              background:
                "radial-gradient(49.48% 49.48% at 50% 34.03%, #808080 0%, #808080 0%, #1A1A1A 100%)",
            }}
          >
            <img
              className="object-cover max-w-[200px] md:max-w-[300px] 2xl:max-w-[400px]"
              src={thermalCamera}
              alt="thermal camera"
            />
          </div>
          <div className="w-full md:w-1/2 p-0 md:p-4">
            <h1 className=" mb-4 text-lg lg:text-2xl 2xl:text-4xl font-semibold">
              Thermal and Acoustic Camera
            </h1>
            {/* description */}
            <p className=" text-[#60646C] text-sm lg:text-base 2xl:text-2xl mb-2 font-medium flex flex-col gap-4">
              <p>
                The Thermal and Acoustic Camera is an advanced safety product
                designed to enhance workplace safety by monitoring environmental
                conditions. It offers customizable functionalities to meet
                diverse industry needs. Key features include:
              </p>
              <p className="flex flex-col gap-2 px-2 md:px-4">
                <p>
                  •{" "}
                  <span className="font-semibold text-gray-800">
                    Temperature Monitoring:
                  </span>{" "}
                  Detects maximum, minimum, and average environmental
                  temperatures.
                </p>
                <p>
                  •{" "}
                  <span className="font-semibold text-gray-800">
                    Contactless Human Body Temperature Detection:
                  </span>{" "}
                  Monitors body temperature without physical contact.
                </p>
                <p>
                  •{" "}
                  <span className="font-semibold text-gray-800">
                    Heat Asset Temperature Detection:
                  </span>{" "}
                  Measures the temperature of customizable assets.
                </p>
              </p>
              <p>
                The Thermal and Acoustic Camera is an all-in-one solution
                engineered to keep your workplace safe, efficient, and compliant
                with safety regulations.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherProjects
