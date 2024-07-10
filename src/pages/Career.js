import React, { useState,useRef, useEffect } from 'react';
import newframe6 from "../Assets/newframecrop.png";
import framevector from '../Assets/framevector.png'
import photo from '../Assets/photo.png'
import line from "../Assets/underline.png";
import { IoChevronDown } from "react-icons/io5";
import noData from '../Assets/noData.jpg';
import { IoMdClose } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as pdfjsLib from 'pdfjs-dist/webpack';

const Career = () => {
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [position, setPosition] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedDummyContent, setSelectedDummyContent] = useState('Software\u00A0Development');
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [applicationFormData, setApplicationFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    LinkedIn: "",
    ExpectedSalary: "",
    PrevJobCompany: "",
    PrevJobTitle: "",
    SelfIntro: "",
    WhyIntrested: "",
    YourExpectations: "",
    OurExpectations: "", 
    Relocate: "",
    StartDate: null,
    ApplyingForDepartment: "",
    ApplyingForPosition: "",
  });
  const [resume, setResume] = useState(null);

  const sectionRef = useRef(null);
  //const { width } = useWindowSize();
  //const isLargeScreen = width >= 768;

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

  // progress scroll bar
  const handleProgressScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  //dummy content when no data in db
  const dummyContent = [
    "Software\u00A0Development",
    "Electronics",
    "Ultrasonic",
    "Mechanical\u00A0Designing",
    "Software\u00A0Backend\u00A0and\u00A0Operations",
    "Sensor\u00A0Development",
    "Finance",
    "Admin\u00A0Department",
  ];

  // application form
  const handleApplicationFormChange = (e) => {
    const {name, value} = e.target;
    setApplicationFormData({...applicationFormData, [name]: value});
  }
  //console.log('application form data',applicationFormData);

  const checkPdfPages = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    return pdf.numPages;
  };

  //application form -> resume
  // const handleResumeChange = (e) => {
  //   const file = e.target.files[0];
  //   if(file && file.type === 'application/pdf') {
  //     setResume(file);
  //   } else {
  //     toast.warning('Please upload only PDF file!');
  //     e.target.value = null;
  //     setResume(null);
  //   };
  // };

  const handleResumeChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const numPages = await checkPdfPages(file);
      if (numPages <= 5) {
        setResume(file);
      } else {
        toast.warning("Please upload a PDF file with less than 5 pages!");
        e.target.value = null;
        setResume(null);
      }
    } else {
      toast.warning("Please upload only a PDF file!");
      e.target.value = null;
      setResume(null);
    }
  };

   const handleResumeKeyDown = (e) => {
     if (e.key === "Enter") {
       e.preventDefault(); 
       e.stopPropagation();
     }
   };

  useEffect(() => {
    window.addEventListener("scroll", handleProgressScroll);
    return () => window.removeEventListener("scroll", handleProgressScroll);
  }, []);

  //getting position details from db
  const fetchPosition = () => {
    // fetch("http://localhost:4000/backend/getposition",{
      fetch("http://34.93.162.58:4000/backend/getposition", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setPosition(data))
        .catch((error) => {
          // console.log(error)
        });
  };

  useEffect(() => {
    fetchPosition();
    const interval = setInterval(fetchPosition, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  //console.log("retrieved positions from backend", position);

  //uploading appllication form to db
  const handleApplicationFormSubmit = (e) => {
    e.preventDefault();
     const formData = new FormData();

     formData.append("Name", applicationFormData.Name);
     formData.append("Email", applicationFormData.Email);
     formData.append("Phone", applicationFormData.Phone);
     formData.append("LinkedIn", applicationFormData.LinkedIn);
     formData.append("ExpectedSalary", applicationFormData.ExpectedSalary);
     formData.append("PrevJobCompany", applicationFormData.PrevJobCompany);
     formData.append("PrevJobTitle", applicationFormData.PrevJobTitle);
     formData.append("SelfIntro", applicationFormData.SelfIntro);
     formData.append("WhyIntrested", applicationFormData.WhyIntrested);
     formData.append("YourExpectations", applicationFormData.YourExpectations);
     formData.append("OurExpectations", applicationFormData.OurExpectations);
     formData.append("Relocate", applicationFormData.Relocate);
     formData.append("StartDate", applicationFormData.StartDate);
     formData.append("ApplyingForDepartment",selectedPosition.DepartmentName);
     formData.append("ApplyingForPosition",selectedPosition.Position);
     formData.append("file", resume);

    // console.log('backend form data',formData)

    fetch("http://34.93.162.58:4000/backend/uploadapplicationform", {
    // fetch("http://localhost:4000/backend/uploadapplicationform", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          //throw new Error('Error uploading application form')
        } else {
          toast.success("We have received your response!");
          setApplicationFormData({
            Name: "",
            Email: "",
            Phone: "",
            LinkedIn: "",
            ExpectedSalary: "",
            PrevJobCompany: "",
            PrevJobTitle: "",
            SelfIntro: "",
            WhyIntrested: "",
            YourExpectations: "",
            OurExpectations: "",
            Relocate: "",
            StartDate: null,
            ApplyingForDepartment: "",
            ApplyingForPosition: "",
          });
          setResume(null);

          const fileInput = document.getElementById("resumeInput");
          if (fileInput) {
            fileInput.value = null;
          }

          setApplicationFormOpen(false);
        }
      })
      .catch((error) => {
        //console.error(error);
      });
  };

  const uniqueDepartments = ['All', ...new Set(position.map(position => position.DepartmentName))];

  return (
    <div className="overflow-hidden">
      <div className="h-[10vh]"></div>
      <ToastContainer />
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
      <section className="relative h-[60vh] md:h-[70vh] xl:h-[90vh] w-full shadow-white shadow-2xl">
        <img
          src={newframe6}
          alt="Frame"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center">
          <div className="text-white text-3xl md:text-5xl xl:text-6xl 2xl:text-8xl font-medium md:font-semibold">
            <h1>"Together,</h1>
            <h1 className="ml-6">we shine"</h1>
          </div>
          <p className="text-white mt-3 md:mt-5 text-xs md:text-lg lg:text-xl xl:text-base 2xl:text-2xl font-normal md:font-medium">
            We help you grow along with us
          </p>
          <button
            className="text-white text-xs md:text-base lg:text-lg xl:text-xs text 2xl:text-xl font-normal md:font-medium py-2 px-3 md:px-5 mt-3 rounded-full flex items-center gap-1 hover:scale-90 duration-200"
            style={{
              background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
            }}
            onClick={handleButtonClick}
          >
            <div>Know More</div>
            <div className="mt-0.5">
              <IoChevronDown size={15} />
            </div>
          </button>
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
        WORK AT XYMA
      </h3>

      <div className="flex items-center mb-16 mt-10">
        <div className="w-full flex flex-col items-center">
          <div>
            <img className="h-[50px] w-[65px]" src={framevector} alt="quote" />
          </div>

          <p className="text-[#60646C] font-semibold text-base md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-4xl w-[90%] md:w-[80%] text-center mb-12">
            XYMA Analytics stands as a Beacon of Innovation. We don't just talk
            Tech, we prove it. Our Technology has transformed multiple
            Industries. We as a Community, work relentlessly towards new
            Horizons in Deep Tech, Innovation and Excellence.
          </p>

          <div>
            <img className="h-[90px] w-[90px]" src={photo} alt="line" />
          </div>
          <p className="text-[#1C2024] font-semibold md:text-lg lg:text-xl 2xl:text-2xl">
            Dr. Nishanth Raja
          </p>
          <p className="text-[#60646C] text-xs md:text-sm lg:text-base xl:text-sm 2xl:text-lg">
            C.E.O. and Co-founder
          </p>
        </div>
      </div>

      <section ref={sectionRef} className=" mb-12 2xl:mb-16">
        <div className="mt-10 md:mt-0 text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
            <h1>Opportunities</h1>
            <img className="w-full h-2" src={line} alt="line"></img>
          </div>
        </div>

        {position.length !== 0 ? (
          <div>
            {/* department badges */}
            <div
              className="mt-8 mx-[5%] xl:mx-[8%] flex gap-2 2xl:gap-4 overflow-auto text-sm lg:text-lg xl:text-sm 2xl:text-xl font-medium"
              style={{ scrollbarWidth: "none" }}
            >
              {uniqueDepartments.map((department) => (
                <div
                  key={department}
                  className={`cursor-pointer rounded-full  py-1.5 px-4 border hover:bg-[#01285C] hover:text-white hover:border-[#01285C] duration-200 ${
                    selectedDepartment === department
                      ? "bg-[#01285C] text-white border-[#01285C]"
                      : "bg-[#EEF6FF] text-[#013872] border-[#B4CEEC]"
                  }`}
                  onClick={() => setSelectedDepartment(department)}
                >
                  {department.replace(/ /g, "\u00A0")}
                </div>
              ))}
            </div>

            {/* department content */}
            <div className="mt-8 mx-[5%] xl:mx-[8%] mb-8">
              {position
                .filter(
                  (pos) =>
                    selectedDepartment === "All" ||
                    pos.DepartmentName === selectedDepartment
                )
                .map((pos) => (
                  <div
                    key={pos._id}
                    className="relative border border-gray-300 p-4 rounded-xl mb-4 flex flex-col gap-2"
                  >
                    {selectedDepartment === "All" && (
                      <div className="text-lg md:text-xl 2xl:text-3xl font-semibold">
                        {pos.DepartmentName}
                      </div>
                    )}
                    <div className="text-lg md:text-xl 2xl:text-2xl font-medium">
                      {pos.Position}
                    </div>
                    <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
                      {pos.PositionDescription}
                    </div>
                    <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
                      Apply Before:
                      {new Date(pos.LastDate).toLocaleDateString("en-GB")}
                    </div>
                    <button
                      className="absolute right-4 top-4 rounded-full px-3 py-1.5 text-white text-sm 2xl-text-base"
                      style={{
                        background:
                          "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                      }}
                      onClick={() => {
                        setSelectedPosition(pos);
                        setApplicationFormOpen(true);
                      }}
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          // dummy content for no positions
          <div className="mt-8 mx-[5%] xl:mx-[8%] text-sm lg:text-lg xl:text-sm 2xl:text-xl font-medium">
            <div
              className="flex gap-2 overflow-auto mb-6"
              style={{ scrollbarWidth: "none" }}
            >
              {dummyContent.map((dep, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-full  py-1.5 px-4 border hover:bg-[#01285C] hover:text-white hover:border-[#01285C] duration-200 ${
                    selectedDummyContent === dep
                      ? "bg-[#01285C] text-white border-[#01285C]"
                      : "bg-[#EEF6FF] text-[#013872] border-[#B4CEEC]"
                  }`}
                  onClick={() => setSelectedDummyContent(dep)}
                >
                  {dep}
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center px-8 py-20 border border-gray-400 rounded-xl">
              <div>
                <div className="mb-4 flex justify-center">
                  <img src={noData} alt="noData" className=" h-20" />
                </div>
                <p className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl text-center">
                  Sorry, No openings available at the moment.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* application form */}
      {applicationFormOpen && selectedPosition && (
        <div className="fixed inset-0 h-full bg-black/40 flex justify-center items-center">
          <div
            className="bg-white h-[75%] max-w-[90%] border border-gray-400 rounded-md overflow-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div
              className="flex gap-2 justify-between items-center font-semibold p-2 sticky top-0 text-white"
              style={{
                background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
              }}
            >
              <div>
                Applying for {selectedPosition.Position},{" "}
                {selectedPosition.DepartmentName}
              </div>
              <div
                className="cursor-pointer rounded-full hover:bg-gray-400 duration-200 bg-orange-400 p-0.5"
                onClick={() => {
                  setApplicationFormOpen(false);
                  setApplicationFormData({
                    Name: "",
                    Email: "",
                    Phone: "",
                    LinkedIn: "",
                    ExpectedSalary: "",
                    PrevJobCompany: "",
                    PrevJobTitle: "",
                    SelfIntro: "",
                    WhyIntrested: "",
                    YourExpectations: "",
                    OurExpectations: "",
                    Relocate: "",
                    StartDate: null,
                    ApplyingForDepartment: "",
                    ApplyingForPosition: "",
                  });
                  setResume(null);
                }}
              >
                <IoMdClose size={20} />
              </div>
            </div>

            <div
              className="h-1"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
            />

            <form
              className="flex flex-col gap-2 text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl p-4"
              onSubmit={handleApplicationFormSubmit}
            >
              <div>
                <label htmlFor="Name" className="font-medium">
                  Name <span className="text-[#CE2C31]">*</span>
                </label>
                <input
                  className="w-full mt-1 border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600"
                  type="text"
                  id="Name"
                  name="Name"
                  value={applicationFormData.Name}
                  required
                  autoComplete="off"
                  placeholder="Enter your Name"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div>
                <label htmlFor="Email" className="font-medium">
                  Email <span className="text-[#CE2C31]">*</span>
                </label>
                <input
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 w-full mt-1"
                  type="email"
                  id="Email"
                  name="Email"
                  value={applicationFormData.Email}
                  required
                  autoComplete="off"
                  placeholder="Enter your Email"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div>
                <label htmlFor="Phone" className="font-medium">
                  Phone <span className="text-[#CE2C31]">*</span>
                </label>
                <input
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 w-full mt-1"
                  type="tel"
                  id="Phone"
                  name="Phone"
                  value={applicationFormData.Phone}
                  required
                  autoComplete="off"
                  placeholder="Enter your Contact Number"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div>
                <label htmlFor="LinkedIn" className="font-medium">
                  LinkedIn <span className="text-[#CE2C31]">*</span>
                </label>
                <input
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 w-full mt-1"
                  type="text"
                  id="LinkedIn"
                  name="LinkedIn"
                  value={applicationFormData.LinkedIn}
                  required
                  autoComplete="off"
                  placeholder="Enter your LinkedIn Profile"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div>
                <label htmlFor="ExpectedSalary" className="font-medium">
                  Expected Salary <span className="text-[#CE2C31]">*</span>
                </label>
                <input
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 w-full mt-1"
                  type="text"
                  id="ExpectedSalary"
                  name="ExpectedSalary"
                  value={applicationFormData.ExpectedSalary}
                  required
                  autoComplete="off"
                  placeholder="Entern your Expected Salary"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div>
                <div className="font-medium">
                  Previous Work Experience (if any)
                </div>
                <label htmlFor="PrevJobCompany" className="font-medium">
                  What company you worked for before
                </label>
                <input
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 w-full mt-1"
                  id="PrevJobCompany"
                  type="text"
                  name="PrevJobCompany"
                  value={applicationFormData.PrevJobCompany}
                  autoComplete="off"
                  placeholder="Enter previous Company Name"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div>
                <label htmlFor="PrevJobTitle" className="font-medium">
                  What was your job title
                </label>
                <input
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 w-full mt-1"
                  type="text"
                  id="PrevJobTitle"
                  name="PrevJobTitle"
                  value={applicationFormData.PrevJobTitle}
                  autoComplete="off"
                  placeholder="Enter previous Job Role"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div className="md:flex gap-2 items-center mt-2">
                <div>
                  <label htmlFor="resumeInput" className="font-medium">
                    Upload&nbsp;your&nbsp;resume{" "}
                    <span className="text-[#CE2C31]">*</span>
                  </label>
                </div>
                <div
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 mt-1 overflow-auto"
                  style={{ scrollbarWidth: "none" }}
                >
                  <input
                    id="resumeInput"
                    type="file"
                    accept=".pdf"
                    onChange={handleResumeChange}
                    onKeyDown={handleResumeKeyDown}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="SelfIntro" className="font-medium">
                  Tell us about yourself{" "}
                  <span className="text-[#CE2C31]">*</span>
                </label>
                <textarea
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 w-full h-20 resize-none mt-1"
                  name="SelfIntro"
                  id="SelfIntro"
                  value={applicationFormData.SelfIntro}
                  required
                  autoComplete="off"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div>
                <label htmlFor="WhyIntrested" className="font-medium">
                  Why are you intrested in this position{" "}
                  <span className="text-[#CE2C31]">*</span>
                </label>
                <textarea
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 w-full h-20 resize-none mt-1"
                  name="WhyIntrested"
                  id="WhyIntrested"
                  value={applicationFormData.WhyIntrested}
                  required
                  autoComplete="off"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div>
                <label htmlFor="YourExpectations" className="font-medium">
                  What are your expectations from this role{" "}
                  <span className="text-[#CE2C31]">*</span>
                </label>
                <textarea
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 w-full h-20 resize-none mt-1"
                  name="YourExpectations"
                  id="YourExpectations"
                  value={applicationFormData.YourExpectations}
                  required
                  autoComplete="off"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div>
                <label htmlFor="OurExpectations" className="font-medium">
                  What can we expect from you{" "}
                  <span className="text-[#CE2C31]">*</span>
                </label>
                <textarea
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 w-full h-20 resize-none mt-1"
                  name="OurExpectations"
                  id="OurExpectations"
                  value={applicationFormData.OurExpectations}
                  required
                  autoComplete="off"
                  onChange={handleApplicationFormChange}
                />
              </div>

              <div className="md:flex items-center gap-2">
                <div>
                  <label className="font-medium">
                    Are you willing to relocate to Chennai{" "}
                    <span className="text-[#CE2C31]">*</span>
                  </label>
                </div>
                <div className="flex">
                  <input
                    className="cursor-pointer mr-1"
                    id="relocateYes"
                    type="radio"
                    name="Relocate"
                    value="Yes"
                    checked={applicationFormData.Relocate === "Yes"}
                    required
                    onChange={handleApplicationFormChange}
                  />
                  <label htmlFor="relocateYes" className="cursor-pointer">
                    Yes
                  </label>
                  <input
                    className="cursor-pointer ml-2 mr-1"
                    id="relocateNo"
                    type="radio"
                    name="Relocate"
                    value="No"
                    checked={applicationFormData.Relocate === "No"}
                    required
                    onChange={handleApplicationFormChange}
                  />
                  <label htmlFor="relocateNo" className="cursor-pointer">
                    No
                  </label>
                </div>
              </div>

              <div className="md:flex gap-2">
                <div className="mb-1">
                  <label htmlFor="StartDate" className="font-medium">
                    When will you be available to join with us{" "}
                    <span className="text-[#CE2C31]">*</span>
                  </label>
                </div>
                <input
                  type="date"
                  name="StartDate"
                  id="StartDate"
                  className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600"
                  value={applicationFormData.StartDate}
                  required
                  onChange={handleApplicationFormChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
                  }}
                  className="text-white py-1 px-4 rounded-full focus:outline-none focus:shadow-outline mt-4 font-medium"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div
        className="mt-4 flex items-center justify-center font-semibold text-base md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-4xl hover:scale-105 duration-200 cursor-pointer mx-[5%] text-center"
        style={{
          background:
            "linear-gradient(93.85deg, #FFF346 -0.32%, #EE5853 133.89%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
        onClick={() =>
          window.open(
            "https://www.linkedin.com/company/xyma-analytics?original_referer=https%3A%2F%2Fwww.xyma.in%2F",
            "_blank"
          )
        }
      >
        For exciting news please visit our LinkedIn page ➯
      </div>
    </div>
  );
}

export default Career
