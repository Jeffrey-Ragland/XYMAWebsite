import React, { useState,useRef, useEffect } from 'react';
import newframe6 from "../Assets/newframecrop.png";
import framevector from '../Assets/framevector.png'
import photo from '../Assets/photo.png'
import line from "../Assets/underline.png";
import { IoChevronDown } from "react-icons/io5";
import noData from '../Assets/noData.jpg';
import { IoMdClose } from "react-icons/io";
// import ReactReadMoreReadLess from "react-read-more-read-less";
// import useWindowSize from "react-use/lib/useWindowSize";

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

  //application form -> resume
  const handleResumeChange = (e) => {
    // setResume(e.target.files[0]);
    const file = e.target.files[0];
    if(file.type === 'application/pdf') {
      setResume(file);
    } else {
      alert('please upload only pdf file');
      e.target.value = null;
      setResume(null);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", handleProgressScroll);
    return () => window.removeEventListener("scroll", handleProgressScroll);
  }, []);

  //getting position details from db
  const fetchPosition = () => {
    fetch("http://localhost:4000/backend/getposition", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPosition(data))
      .catch((error) => console.log(error));
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

     console.log('backend form data',formData)

     fetch("http://localhost:4000/backend/uploadapplicationform", {
      method: 'POST',
      body: formData
     })
     .then(response => {
      if(!response.ok) {
        throw new Error('Error uploading application form')
      } else {
        alert("Application form sent succssfully");
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

        const fileInput = document.getElementById('resumeInput');
        if(fileInput) {
          fileInput.value = null;
        }

        setApplicationFormOpen(false);
      }
     })
     .catch(error => {
      console.error(error);
     });
  };

  const uniqueDepartments = ['All', ...new Set(position.map(position => position.DepartmentName))];

  return (
    <div>
      <div className="h-[10vh]"></div>
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

      <section ref={sectionRef} className=" mb-12 2xl:mb-16">
        <div className="mt-10 md:mt-0 text-center flex justify-center">
          <div className="mx-[8%] md:mx-0 flex flex-col items-center text-[#1C2024] text-xl md:text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
            <div>Opportunities</div>
            <img className="w-full h-2" src={line}></img>
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
                  className={`cursor-pointer rounded-full  py-1.5 px-4 border ${
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
                  <>
                    <div className="relative border border-gray-300 p-4 rounded-xl mb-4 flex flex-col gap-2">
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
                  </>
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
                  className={`cursor-pointer rounded-full  py-1.5 px-4 border ${
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
                <div className="text-[#60646C] text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl">
                  Sorry, No openings available at the moment.
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* application form */}
      {applicationFormOpen && selectedPosition && (
        <div className="fixed inset-0 h-full bg-black/40 flex justify-center items-center">
          <div
            className="bg-white h-[75%] max-w-[90%] border border-gray-400 rounded-md p-4 overflow-auto"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-2 justify-between items-center mb-2 font-semibold">
              <div>
                Applying for {selectedPosition.Position},{" "}
                {selectedPosition.DepartmentName}
              </div>
              <div
                className="cursor-pointer rounded-full hover:bg-gray-400 duration-200"
                onClick={() => setApplicationFormOpen(false)}
              >
                <IoMdClose size={20} />
              </div>
            </div>
            <form
              className="flex flex-col gap-2 text-sm md:text-base lg:text-lg xl:text-base 2xl:text-xl"
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
                <div className="border border-gray-400 rounded-lg p-1 text-gray-800 focus:outline-none focus:border-gray-600 mt-1">
                  <input
                    id="resumeInput"
                    type="file"
                    accept=".pdf"
                    onChange={handleResumeChange}
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
