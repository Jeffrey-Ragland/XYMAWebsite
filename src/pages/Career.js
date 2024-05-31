import React, { useState,useRef  } from 'react';
import { useNavigate } from 'react-router-dom';
import newframe6 from "../Assets/newframecrop.png";
import framevector from '../Assets/framevector.png'
import photo from '../Assets/photo.png'
import line from "../Assets/underline.png";
import { IoChevronDown } from "react-icons/io5";
import ReactReadMoreReadLess from "react-read-more-read-less";
import useWindowSize from "react-use/lib/useWindowSize";

const Badge2 = ({ text, selected, onClick }) => {
  const badgeStyle = {
    backgroundColor: selected ? '#01285C' : '#EEF6FF',
    color: selected ? '#ffffff' : '#013872',
    padding: '5px 14px',
    borderRadius: '9999px',
    border: `1px solid ${selected ? '#01285C' : '#B4CEEC'}`,
    cursor: 'pointer'
  };

  return (
    <span style={badgeStyle} onClick={onClick}>
      {text}
    </span>
  );
};

const Career = () => {

  const [selectedBadge, setSelectedBadge] = useState(0);

  const handleBadgeClick = (index) => {
    setSelectedBadge(index);
  };

  const sectionRef = useRef(null);
  const { width } = useWindowSize();
  const isLargeScreen = width >= 768;

  const handleButtonClick = () => {
    const navbarHeight = window.innerHeight * 0.1; // 10vh to account for navbar
    const sectionTop =
      sectionRef.current.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = sectionTop - navbarHeight;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();
  const handleContactClick =()=>{
    navigate ('/contact');
  }

  return (
    <div>
      <div className="h-[10vh]"></div>
      <section className="relative h-[60vh] md:h-[70vh] xl:h-[90vh] w-full shadow-white shadow-2xl">
        <img
          src={newframe6}
          alt="Frame Image"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center">
          <div className="text-white text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-medium md:font-semibold">
            <div>"Together,</div>
            <div className="ml-6">we shine"</div>
          </div>
          <div className="text-white mt-3 md:mt-5 text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
            We help you grow along with us
          </div>
          <button
            className="text-white text-xs md:text-base lg:text-lg xl:text-xs text 2xl:text-xl font-normal md:font-medium py-2 px-3 md:px-5 mt-3 rounded-full flex items-center gap-1 hover:scale-90 duration-200"
            style={{
              background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
            }}
            onClick={handleButtonClick}
          >
            <div className="">Know More</div>
            <div className="mt-0.5">
              <IoChevronDown size={15} />
            </div>
          </button>
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
        WORK AT XYMA
      </div>

      <div className="flex items-center mb-16 mt-10">
        <div className="w-full flex flex-col items-center">
          <div>
            <img className="h-[50px] w-[65px]" src={framevector} alt="quote" />
          </div>

          <div className="text-[#60646C] font-semibold text-base md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-4xl w-[90%] md:w-[80%] text-center mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </div>

          <div>
            <img className="h-[90px] w-[90px]" src={photo} alt="photo" />
          </div>
          <div className="text-[#1C2024] font-semibold md:text-lg lg:text-xl 2xl:text-2xl">
            Dr. Nishanth Raja
          </div>
          <div className="text-[#60646C] text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-lg">
            C.E.O. and Co-founder
          </div>
        </div>
      </div>

      <section ref={sectionRef}>
        <div className="mt-10 md:mt-0 text-center flex justify-center mb-4 2xl:mb-10">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
            <div>Opportunities</div>
            <img className="w-full h-2" src={line}></img>
          </div>
        </div>
        <div
          className="mt-8 mx-[5%] xl:mx-[8%] flex gap-2 md:gap-4 overflow-auto text-sm lg:text-lg xl:text-sm 2xl:text-xl font-medium lg:justify-center"
          style={{ scrollbarWidth: "none" }}
        >
          <Badge2
            text="All"
            selected={selectedBadge === 0}
            onClick={() => handleBadgeClick(0)}
          />
          <Badge2
            text="Department&nbsp;Name"
            selected={selectedBadge === 1}
            onClick={() => handleBadgeClick(1)}
          />
          <Badge2
            text="Department&nbsp;Name"
            selected={selectedBadge === 2}
            onClick={() => handleBadgeClick(2)}
          />
          <Badge2
            text="Department&nbsp;Name"
            selected={selectedBadge === 3}
            onClick={() => handleBadgeClick(3)}
          />
          <Badge2
            text="Department&nbsp;Name"
            selected={selectedBadge === 4}
            onClick={() => handleBadgeClick(4)}
          />
        </div>

        <div className="mx-[5%] xl:mx-[8%]">
          <div className="mt-4 md:mt-12 border border-gray-200 p-4 rounded-xl">
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              Department Name
            </div>
            <div className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>

          <div className="mt-4 border border-gray-200 p-4 rounded-xl">
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              Department Name
            </div>
            <div className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>

          <div className="mt-4 border border-gray-200 p-4 rounded-xl">
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              Department Name
            </div>
            <div className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>

          <div className="mt-4 border border-gray-200 p-4 rounded-xl">
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              Department Name
            </div>
            <div className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>

          <div className="mt-4 border border-gray-200 p-4 rounded-xl">
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              Department Name
            </div>
            <div className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>

          <div className="mt-4 border border-gray-200 p-4 rounded-xl">
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              Department Name
            </div>
            <div className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>

          <div className="mt-4 border border-gray-200 p-4 rounded-xl">
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              Department Name
            </div>
            <div className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold">
              Sr. UI/UX Designer
            </div>
            <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
              {isLargeScreen ? (
                <>
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </>
              ) : (
                <ReactReadMoreReadLess
                  charLimit={212}
                  readMoreText={"Read More+"}
                  readLessText={"Read Less-"}
                  readMoreStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                  readLessStyle={{
                    color: "#013872",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Integer ultrices id
                  lobortis et in lorem. Metus arcu hac placerat sagittis velit
                  pellentesque velit sed diam. Nascetur duis nec ipsum viverra
                  pharetra. Ultricies id gravida in ultricies donec scelerisque
                  tincidunt vulputate viverra. Egestas integer ligula faucibus
                  sem mauris. In pellentesque lectus integer sagittis mauris
                  cursus. Quisque in imperdiet dolor quis fames mauris turpis.
                  Sollicitudin nunc id a ornare mattis quis vitae amet dolor.
                </ReactReadMoreReadLess>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4 w-full flex justify-center">
        <p className="text-[#60646C] w-[80%] font-semibold text-base md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-4xl text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </div>
    </div>
  ); 
}

export default Career
