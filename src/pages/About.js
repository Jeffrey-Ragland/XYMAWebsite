import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import iit from '../Assets/Frameiit.png';
import group1 from '../Assets/Framegroup.png';
import frame1 from '../Assets/Frame1.png';
import frame21 from '../Assets/Frame21.png';
import frame3 from '../Assets/Frame3.png';
import frame4 from '../Assets/Frame4.png';
import c1 from '../Assets/Framec1.png';
import c2 from '../Assets/Framec2.png';
import c3 from '../Assets/Framec3.png';
import c4 from '../Assets/Framec4.png';
import c5 from '../Assets/Framec5.png';
import c6 from '../Assets/Framec6.png';
import a1 from '../Assets/a1.jpg';
import a2 from "../Assets/a2.png";
import a3 from "../Assets/a3.png";
import framevector from '../Assets/framevector.png'
import photo from '../Assets/photo.png'
import Xarrow from "react-xarrows";
import useWindowSize from "react-use/lib/useWindowSize";
import line from "../Assets/underline.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  
 const navigate = useNavigate();

  const { width } = useWindowSize();
  const isLargeScreen = width >= 768;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <div>
      <div className=" relative mt-[10vh] h-[60vh] md:h-[70vh] xl:h-[90vh] shadow-white shadow-2xl">
        <img
          className="h-full w-full object-cover"
          src={iit}
          alt="Frame Image"
        />
        <div className="absolute h-full w-full inset-0 p-8 md:p-16 text-white">
          <div className="w-full h-full xl:flex">
            <div className="w-full xl:w-[90%] h-[70%] xl:h-full flex flex-col gap-4 justify-center text-center xl:text-left">
              <div className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold">
                2019
              </div>
              <div className="text-lg md:text-3xl lg:text-4xl 2xl:text-6xl font-normal">
                Founded through the CNDE, IIT <br /> Madras, and incubated at
                IIT Madras <br /> Incubation Cell
              </div>
            </div>
            <div className="w-full xl:w-[10%] h-[30%] xl:h-full flex xl:flex-col justify-evenly">
              <div>
                <div className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold mb-2">
                  20+
                </div>
                <div className="text-xs md:text-lg lg:text-xxl xl:text-base 2xl:text-2xl font-normal md:font-medium">
                  Years&nbsp;of&nbsp;R&D
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold mb-2">
                  18+
                </div>
                <div className="text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
                  Intellectual
                  <br />
                  Properties
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold md:font-bold mb-2">
                  35+
                </div>
                <div className="text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
                  Publications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom text */}
      <div
        className="text-center font-semibold text-[40px] md:text-[90px] 2xl:text-[120px] -mt-[20px] md:-mt-[50px] 2xl:-mt-[65px] mb-[20px] md:mb-[70px]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white, rgb(209, 213, 219))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        ABOUT US
      </div>

      <div className="mt-8 mx-[5%] mb-8 md:mb-12">
        <div className="text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
            <div>About XYMA</div>
            <img className="w-full h-2" src={line}></img>
          </div>
        </div>
        <div className="text-[#60646C] text-center text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl mt-2">
          "XYMA Analytics is a deep-tech company started from IIT Madras,
          serving 15+ MNCs globally now to provide them with accurate
          multi-point temperature and multi-parameter measurements through
          patented ultrasonic waveguide technology."
        </div>
      </div>

      {/* arrow box */}
      <div className="mx-[5%] mb-8 md:mb-12 2xl:mb-16">
        {isLargeScreen ? (
          <>
            <Xarrow
              start="box1"
              end="box2"
              dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
              color="gray"
              strokeWidth={1}
              headSize={10}
              curveness={1.2}
              showTail={true}
              tailShape="circle"
            />
            <Xarrow
              start="box3"
              end="box4"
              dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
              color="gray"
              strokeWidth={1}
              headSize={10}
              curveness={1.2}
              showTail={true}
              tailShape="circle"
            />
          </>
        ) : (
          <>
            <Xarrow
              start="box5"
              end="box6"
              startAnchor="bottom"
              endAnchor="top"
              dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
              color="gray"
              strokeWidth={1}
              headSize={10}
              curveness={1.2}
              showTail={true}
              tailShape="circle"
            />
            <Xarrow
              start="box7"
              end="box8"
              startAnchor="bottom"
              endAnchor="top"
              dashness={{ strokeLen: 10, nonStrokeLen: 5 }}
              color="gray"
              strokeWidth={1}
              headSize={10}
              curveness={1.2}
              showTail={true}
              tailShape="circle"
            />
          </>
        )}

        <div className=" md:flex justify-between mb-2">
          {/* box 1 */}
          <div
            className="relative border border-[#CDCED6] w-full md:w-[35%] p-4 rounded-2xl mb-4 md:mb-0"
            id="box1"
          >
            <div className=" w-full h-full">
              <div className=" flex items-center mb-2">
                <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                  2020
                </span>
              </div>
              <div className="font-semibold lg:text-lg xl:text-base 2xl:text-xl mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </div>
              <div className=" text-xs lg:text-sm xl:text-xs 2xl:text-base text-[#60646C] mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the make a type specimen book.
              </div>
              <div className=" flex items-center mb-2">
                <span
                  className="text-xs lg:text-sm xl:text-xs 2xl:text-sm rounded-full p-2 text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                >
                  View More
                </span>
              </div>
            </div>
            {/* empty div for arrow 1 - small screen*/}
            <div className=" absolute w-4 bottom-0 right-[10%]" id="box5" />
          </div>

          {/* text 1 */}
          <div className=" relative w-[60%] md:w-[30%] text-sm lg:text-base xl:text-sm 2xl:text-lg font-medium flex items-center text-left mb-4 md:mb-0">
            Lorem Ipsum has been the industry's standard dummy text when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </div>
        </div>

        <div className=" flex flex-col-reverse md:flex-row justify-between mb-2">
          {/* text 2 */}
          <div className="w-[60%] md:w-[30%] text-sm lg:text-base xl:text-sm 2xl:text-lg font-medium flex items-center text-left mb-4 md:mb-0">
            Lorem Ipsum has been the industry's standard dummy text when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </div>
          {/* box 2 */}
          <div className="relative border border-[#CDCED6] w-full md:w-[35%] rounded-2xl mb-4 md:mb-0 py-4">
            <div className=" w-full">
              <div className="flex items-center px-4 mb-2">
                <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                  2020
                </span>
              </div>
              <div className="font-semibold lg:text-lg xl:text-base 2xl:text-xl px-4 mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
                {/* empty div for arrow */}
                <div className="-ml-4 mt-2 h-1" id="box2"></div>
              </div>
              {/* empty div for arrow */}
              <div className="" id="box3"></div>
              <div className="text-xs lg:text-sm xl:text-xs 2xl:text-base text-[#60646C] px-4 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the make a type specimen book.
              </div>
              <div className="flex items-center px-4 mb-2">
                <span
                  className="text-xs lg:text-sm xl:text-xs 2xl:text-sm rounded-full p-2 text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                >
                  View More
                </span>
              </div>
            </div>
            {/* empty div for arrow 1 - small screen*/}
            <div className="absolute w-4 top-[10%] right-[30%]" id="box6" />
            {/* empty div for arrow 2 - small screen */}
            <div className="absolute w-4 bottom-0 right-[10%]" id="box7" />
          </div>
        </div>
        <div className=" md:flex justify-between">
          {/* box 3 */}
          <div
            className="relative border border-[#CDCED6] w-full md:w-[35%] p-4 rounded-2xl mb-4 md:mb-0"
            id="box4"
          >
            <div className=" w-full">
              <div className="flex items-center mb-2">
                <span className="rounded-full px-2 py-1 text-xs lg:text-sm xl:text-xs 2xl:text-sm bg-[#FEE1B7] font-medium">
                  2020
                </span>
              </div>
              <div className="font-semibold lg:text-lg xl:text-base 2xl:text-xl mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </div>
              <div className="text-xs lg:text-sm xl:text-xs 2xl:text-base text-[#60646C] mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the make a type specimen book.
              </div>
              <div className="flex items-center mb-2">
                <span
                  className="text-xs lg:text-sm xl:text-xs 2xl:text-sm rounded-full p-2 text-white"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                >
                  View More
                </span>
              </div>
            </div>
            {/* empty div for arrow 2 - small screen*/}
            <div className="absolute w-4 top-[10%] right-[30%]" id="box8" />
          </div>
          {/* text 3 */}
          <div className="w-full md:w-[30%] text-sm lg:text-base xl:text-sm 2xl:text-lg font-medium flex items-center text-left mb-4 md:mb-0">
            Lorem Ipsum has been the industry's standard dummy text when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </div>
        </div>
      </div>

      <section className="mx-[5%] mb-8 md:mb-12 2xl:mb-16">
        <div className="text-center flex justify-center mb-4 md:mb-6 2xl:mb-8">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
            <div>The Team</div>
            <img className="w-full h-2" src={line}></img>
          </div>
        </div>
        <img className="mt-4" src={group1} data-aos="zoom-in-up"></img>
      </section>

      <section className="mx-[5%] mb-8 md:mb-12 2xl:mb-16">
        <div className="text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold mb-4 md:mb-6 2xl:mb-8">
            <div>The Vision</div>
            <img className="w-full h-2" src={line}></img>
          </div>
        </div>
        <div className="mb-4 md:mb-6 2xl:mb-8 text-[#60646C] text-center text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
          Our vision is to provide reliable measurements at the most unreliable
          times. Democratize sensor-based process efficiency in Industries by
          enabling them with rich data sets of process parameters. Provide
          plant-wide distributed and concurrent sensing solutions for disruptive
          data-driven decision making with enhanced sustainability.
        </div>
        <div className="grid grid-cols-2 md:flex gap-4 py-2">
          <img
            className="w-[100%] md:w-[24%] md:h-[50%]"
            src={frame1}
            alt="Frame 1"
            data-aos="fade-up"
          />
          <img
            className="w-[100%] md:w-[24%] md:h-[50%]"
            src={frame21}
            alt="Frame 2"
            data-aos="fade-up"
          />
          <img
            className="w-[100%] md:w-[24%] md:h-[50%]"
            src={frame3}
            alt="Frame 3"
            data-aos="fade-up"
          />
          <img
            className="w-[100%] md:w-[24%] md:h-[50%]"
            src={frame4}
            alt="Frame 4"
            data-aos="fade-up"
          />
        </div>
      </section>

      <section className="mx-[5%] mt-10 mb-8 md:mb-12 2xl:mb-16">
        <div className="text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold mb-4 md:mb-6 2xl:mb-8">
            <div>Key Values</div>
            <img className="w-full h-2" src={line}></img>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:flex justify-evenly mx-[15%] md:mx-0 text-center lg:text-lg xl:text-base 2xl:text-xl mb-4 md:mb-6 2xl:mb-8">
          <div className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c1}></img>
            <div className="font-semibold mt-2">Key Value</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c2}></img>
            <div className="font-semibold mt-2">Key Value</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c3}></img>
            <div className="font-semibold mt-2">Key Value</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c4}></img>
            <div className="font-semibold mt-2">Key Value</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c5}></img>
            <div className="font-semibold mt-2">Key Value</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-auto md:w-[60%]" src={c6}></img>
            <div className="font-semibold mt-2">Key Value</div>
          </div>
        </div>

        <div className="md:flex mt-4">
          {/* react slick carousel */}
          <div className="  w-full md:w-1/2 p-8 lg:p-16">
            <Slider {...settings}>
              <div className="text-center">
                <img
                  className="max-h-[400px] 2xl:max-h-[450px] w-full rounded-2xl"
                  src={a1}
                  alt="a1"
                />
                <div className="text-[#1C2024] font-semibold md:text-lg lg:text-xl 2xl:text-2xl mt-2">
                  Dr. Nishanth Raja
                </div>
                <div className="text-[#60646C] text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-lg">
                  C.E.O. and Co-founder
                </div>
              </div>
              <div className="text-center">
                <img
                  className="max-h-[400px] 2xl:max-h-[450px] w-full rounded-2xl"
                  src={a2}
                  alt="a2"
                />
                <div className="text-[#1C2024] font-semibold md:text-lg lg:text-xl 2xl:text-2xl mt-2">
                  Prof. Krishnan Balasubramaniam
                </div>
                <div className="text-[#60646C] text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-lg">
                  Founder & Advisor
                </div>
              </div>
              <div className="text-center">
                <img
                  className="max-h-[400px] 2xl:max-h-[450px] w-full rounded-2xl"
                  src={a3}
                  alt="a3"
                />
                <div className="text-[#1C2024] font-semibold md:text-lg lg:text-xl 2xl:text-2xl mt-2">
                  Prof. Prabhu Rajagopal
                </div>
                <div className="text-[#60646C] text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-lg">
                  Founder & Advisor
                </div>
              </div>
            </Slider>
          </div>

          <div className=" w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-16">
            <div className="text-center font-semibold text-lg md:text-2xl lg:text-3xl 2xl:text-4xl text-[#1C2024]">
              The Mission
            </div>
            <div className="text-center text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl mt-2">
              Our mission is to increase efficiency in operations through
              IIoT-enabled process parameter monitoring and AI-based predictive
              maintenance to enhance asset life and prevent unplanned downtime
              with Ultrasonic Waveguide Technology.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-[5%]">
        <div className="flex justify-center">
          <img className="h-12" src={framevector}></img>
        </div>
        <div className="text-[#60646C] text-center px-1 md:px-24 text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl font-semibold mb-4 md:mb-6 2xl:mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </div>

        <div className="flex flex-col items-center">
          <img className="w-20" src={photo} alt="Photo" />
          <div className="text-[#1C2024] font-semibold md:text-lg lg:text-xl 2xl:text-2xl mt-2">
            Dr. Nishanth Raja
          </div>
          <div className="text-[#60646C] text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-lg">
            C.E.O. and Co-founder
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
