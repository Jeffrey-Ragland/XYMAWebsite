import React, {useEffect} from 'react';
import { HiChevronLeft } from 'react-icons/hi2';
import second from '../Assets/secondline.png';
import aluminum from '../Images/al1.png';
import aluminum2 from '../Images/aluminum2.png';
import alum from '../Images/alum3.png';
import copy from '../Images/copy.png';
import share from '../Assets/share.png';
import tube1 from '../Images/tube1.png';
import oil1 from '../Images/oil1.png';
import steel1 from '../Images/steel1.png';
import line from "../Assets/underline.png";
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";


const CaseStudy = () => {

  const navigate = useNavigate();
  const handleBack =()=>{
    navigate ('/resources');
  } 

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className=" mx-[5%]">
      <div className="h-[10vh]">{/* navbar space */}</div>
      <div className="mt-10 md:mt-16">
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
            <div>Case&nbsp;Studies</div>
            <img className="w-full h-2" src={line}></img>
          </div>
        </div>
      </div>

      <div className="md:flex ">
        <div className=" w-full md:w-1/2 p-4 md:p-8">
          <img src={aluminum} alt="Aluminum Image" data-aos="zoom-out" />
        </div>

        <div className=" w-full md:w-1/2 p-4 md:p-8">
          <span className="bg-gray-200 text-xs 2xl:text-sm text-gray-500 rounded-2xl p-1 px-2">
            4 Min Read
          </span>
          <div className="text-sm lg:text-xl xl:text-2xl 2xl:text-3xl mt-4 font-medium">
            A 10°C temperature deviation diminishes efficiency, intensifies
            anode effect, and raises PFC emissions, underscoring the
            significance of meticulous temperature control in industrial
            processes to optimize performance and reduce environmental impact
          </div>
        </div>
      </div>

      <div className="border border-gray-200 md:mx-[10%] mt-4 mb-4" />

      <div className="md:flex ">
        <div className=" w-full md:w-[70%]">
          {/* points */}
          <div className=" mx-2">
            {/* 1st point */}
            <div>
              <div className="font-semibold text-lg md:text-xl lg:text-3xl xl:text-2xl 2xl:text-4xl mb-2">
                1. Temperature Sensitivity:
              </div>
              <ul
                className=" text-[#60646C] text-sm md:text-base lg:text-xl xl:text-base 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  Industrial processes are highly sensitive to temperature
                  changes.
                </li>
                <li>
                  Even a minor deviation, such as 10°C, can significantly impact
                  process performance.
                </li>
                <li>
                  Precise temperature control is essential to maintain optimal
                  efficiency and productivity.
                </li>
              </ul>
              <div className=" p-2 md:p-8">
                <img src={aluminum2} data-aos="zoom-out" />
              </div>
            </div>

            {/* 2nd point */}
            <div className="mb-4">
              <div className="font-semibold text-lg md:text-xl lg:text-3xl xl:text-2xl 2xl:text-4xl mb-2">
                2. Efficiency Reduction:
              </div>
              <ul
                className="text-[#60646C] text-sm md:text-base lg:text-xl xl:text-base 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  A 10°C temperature deviation leads to a reduction in process
                  efficiency.
                </li>
                <li>
                  This reduction implies decreased productivity, increased
                  production costs, or longer processing times.
                </li>
                <li>
                  Maintaining stable temperatures is critical to ensure
                  consistent and efficient operations.{" "}
                </li>
              </ul>
            </div>

            {/* 3rd point */}
            <div className="mb-4">
              <div className="font-semibold text-lg md:text-xl lg:text-3xl xl:text-2xl 2xl:text-4xl mb-2">
                3. Promotion of Anode Effect:
              </div>
              <ul
                className=" text-[#60646C] text-sm md:text-base lg:text-xl xl:text-base 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  Temperature fluctuations can promote the occurrence of the
                  anode effect within industrial processes.
                </li>
                <li>
                  The anode effect is an undesirable phenomenon that can lead to
                  increased energy consumption and equipment degradation.
                </li>
                <li>
                  It is essential to control temperature variations to prevent
                  or minimize the occurrence of the anode effect and its
                  associated negative impacts.
                </li>
              </ul>
            </div>

            {/* 4th point */}
            <div>
              <div className="font-semibold text-lg md:text-xl lg:text-3xl xl:text-2xl 2xl:text-4xl mb-2">
                4. Promotion of Anode Effect:
              </div>
              <ul
                className=" text-[#60646C] text-sm md:text-base lg:text-xl xl:text-base 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  Temperature fluctuations can promote the occurrence of the
                  anode effect within industrial processes.
                </li>
                <li>
                  Any rise in PFC emissions due to temperature fluctuations
                  poses significant environmental concerns.
                </li>
              </ul>
              <div className="p-2 md:p-8">
                <img src={alum} data-aos="zoom-out" />
              </div>
            </div>

            {/* 5th point */}
            <div className="mb-4">
              <div className="font-semibold text-lg md:text-xl lg:text-3xl xl:text-2xl 2xl:text-4xl mb-2">
                5. Environmental Implications:
              </div>
              <ul
                className="text-[#60646C] text-sm md:text-base lg:text-xl xl:text-base 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  The increase in PFC emissions highlights the environmental
                  implications of temperature variations in industrial
                  processes.
                </li>
                <li>
                  Industrial activities play a significant role in environmental
                  pollution and climate change.
                </li>
                <li>
                  Temperature regulation is crucial not only for process
                  efficiency but also for reducing the environmental footprint
                  of industrial operations.
                </li>
              </ul>
            </div>

            {/* 6th point */}
            <div className="mb-4">
              <div className="font-semibold text-lg md:text-xl lg:text-3xl xl:text-2xl 2xl:text-4xl mb-2">
                6. Importance of Temperature Control:
              </div>
              <ul
                className=" text-[#60646C] text-sm md:text-base lg:text-xl xl:text-base 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  Precise temperature control is vital for maintaining optimal
                  process performance and sustainability.
                </li>
                <li>
                  Precise temperature control is vital for maintaining optimal
                  process performance and sustainability.
                </li>
                <li>
                  Implementing effective temperature control measures is
                  essential for the long-term success and sustainability of
                  industrial operations.
                </li>
              </ul>
            </div>
          </div>

          {/* conclusion */}
          <div className=" text-[#60646C] text-sm md:text-base lg:text-xl xl:text-base 2xl:text-2xl ml-4 lg:ml-5 2xl:ml-6  mb-4 mr-2">
            In conclusion, the impact of temperature fluctuations on industrial
            processes is multifaceted, affecting efficiency, environmental
            sustainability, and overall performance. Addressing temperature
            sensitivity through precise control measures is essential for
            optimizing operations and mitigating environmental impact. Through
            innovation, collaboration, and proactive management, industries can
            navigate the challenges posed by temperature variability and strive
            towards more sustainable and efficient industrial practices.
          </div>
          <div className="flex justify-end gap-2 mr-2">
            <img className="h-8" src={share}></img>
            <img className="h-8" src={copy}></img>
          </div>
        </div>

        <div className="border border-gray-200 mt-2 mb-2 md:my-[15%]" />

        <div className=" w-full md:w-[30%] md:px-6">
          <div className=" mb-4">
            <div className="text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-3xl font-semibold mb-2">
              Reformer Tube
            </div>
            <div className="relative  mb-2">
              <img className="w-full h-full" src={tube1} data-aos="zoom-out" />
              <span className="absolute bottom-2 right-2 bg-white text-xs rounded-full p-1 px-2 cursor-pointer">
                Read More
              </span>
            </div>
            <div className="font-semibold text-sm lg:text-base 2xl:text-lg">
              A 20°C increase in temperature reduces the lifespan of reformer
              tubes by half
            </div>
          </div>

          <div className=" mb-4">
            <div className="text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-3xl font-semibold mb-2">
              Lubricant
            </div>
            <div className="relative  mb-2">
              <img className="w-full h-full" src={oil1} data-aos="zoom-out" />
              <span className="absolute bottom-2 right-2 bg-white text-xs rounded-full p-1 px-2 cursor-pointer">
                Read More
              </span>
            </div>
            <div className="font-semibold text-sm lg:text-base 2xl:text-lg">
              30% of maintenance budget influenced by lubricants, highlighting
              their significant role in operational expenses
            </div>
          </div>

          <div className="">
            <div className="text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-3xl font-semibold mb-2">
              Steel
            </div>
            <div className="relative  mb-2">
              <img className="w-full h-full" src={steel1} data-aos="zoom-out" />
              <span className="absolute bottom-2 right-2 bg-white text-xs rounded-full p-1 px-2 cursor-pointer">
                Read More
              </span>
            </div>
            <div className="font-semibold text-sm lg:text-base 2xl:text-lg">
              Extending ladle life for one cycle yields steel worth $5.1M
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
