import React from "react";
import { useEffect, useState } from "react";
import xyma from "../Assets/xymalogo_white.png";
import { useNavigate, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { AiOutlineForm } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa6";

const AdminApplications = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [applicationData, setApplicationData] = useState([]);
  const [selectedApplicationDepartment, setSelectedApplicationDepartment] = useState(null);
  const [applicationDepartmentPopup, setApplicationDepartmentPopup] = useState(false);
  const [selectedApplicationUserId, setSelectedApplicationUserId] = useState(null);
  const [openUserApplication, setOpenUserApplication] = useState(false);
  const fetchApplicationForm = () => {
    fetch("http://34.93.162.58:4000/backend/getapplicationform")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setApplicationData(data);
        console.log("application form data", data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    fetchApplicationForm();
    // const interval = setInterval(fetchApplicationForm, 1000);
    // return () => {
    //   clearInterval(interval);
    // };
  },[]);

  const uniqueApplicationDepartments = [...new Set(applicationData.map(app => app.ApplyingForDepartment))]

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-10 2xl:text-lg">
        <div
          className="flex items-center h-[9vh] text-white px-2 md:px-4"
          style={{
            background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
          }}
        >
          <div className="flex items-center gap-4 h-full w-[35%] md:w-1/3">
            <div className="h-full flex items-center">
              <img className="h-[80%]" src={xyma} alt="Logo" />
            </div>
            <div className="text-sm md:text-xl 2xl:text-2xl font-medium">
              Admin Portal
            </div>
          </div>

          {/* routes */}
          <div className="w-[30%] md:w-1/3">
            <div className="flex gap-4 justify-center  ">
              <div>
                <NavLink
                  to="/admin@2k24Portal"
                  className={`${
                    location.pathname === "/admin@2k24Portal" &&
                    "text-orange-400"
                  }`}
                >
                  <span className="md:hidden">
                    <AiOutlineForm size={25} />
                  </span>
                  <span className="hidden md:block">Portal</span>
                </NavLink>
              </div>

              <div>
                <NavLink
                  to="/admin@2k24Applications"
                  className={`${
                    location.pathname === "/admin@2k24Applications" &&
                    "text-orange-400"
                  }`}
                >
                  <span className="md:hidden">
                    <FaWpforms size={25} />
                  </span>
                  <span className="hidden md:block">Applications</span>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="w-[35%] md:w-1/3 flex justify-end">
            <button
              className="py-2 px-4 rounded-full hover:scale-110 duration-200 text-sm 2xl:text-base font-medium"
              style={{
                background:
                  "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
              }}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/admin@2k24");
              }}
            >
              Logout
            </button>
          </div>
        </div>

        <div
          className="h-[1vh]"
          style={{
            background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
          }}
        ></div>
      </div>

      {/* content */}
      <div className="md:flex gap-4 mt-[10vh] pt-8 px-4 max-w-[1400px] mx-auto">
        {/* applications section */}
        <div className="relative border border-gray-400 w-full md:w-1/2 rounded-md bg-[#F9F9FB] shadow-lg mb-8 md:mb-0 p-4 min-h-[400px]">
          {uniqueApplicationDepartments.length === 0 ? (
            <div className="h-full flex justify-center items-center text-sm text-gray-800">
              No New Applications
            </div>
          ) : (
            <>
              <div className="mb-4 text-base md:text-lg 2xl:text-xl font-medium">
                Applications from Department
              </div>
              {uniqueApplicationDepartments.map((department, index) => (
                <div
                  key={index}
                  className="border border-gray-400 rounded-md mb-2 cursor-pointer bg-white p-1"
                  onClick={() => {
                    setSelectedApplicationDepartment(department);
                    setApplicationDepartmentPopup(true);
                  }}
                >
                  {department}
                </div>
              ))}
            </>
          )}

          {applicationDepartmentPopup && (
            <div className="absolute inset-0 overflow-auto rounded-md p-4 bg-[#F9F9FB]">
              {/* header */}
              <div className="flex justify-between items-center mb-4">
                <div className="font-medium text-base md:text-lg 2xl:text-xl">
                  {selectedApplicationDepartment} Applications
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setApplicationDepartmentPopup(false);
                    setOpenUserApplication(false);
                  }}
                >
                  <IoMdClose size={20} />
                </div>
              </div>
              {/* application list */}
              {applicationData
                .filter(
                  (app) =>
                    app.ApplyingForDepartment === selectedApplicationDepartment
                )
                .map((app) => (
                  <div key={app._id}>
                    <div
                      className="border border-gray-400 rounded-md mb-2 cursor-pointer bg-white p-1"
                      onClick={() => {
                        setSelectedApplicationUserId(app._id);
                        setOpenUserApplication(true);
                      }}
                    >
                      Application From: {app.Name}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* view section */}
        <div className="border border-gray-400 w-full md:w-1/2 rounded-md bg-[#F9F9FB] shadow-lg mb-8 md:mb-0 p-4 min-h-[400px]">
          {openUserApplication === false ? (
            <div className="h-full flex justify-center items-center">
              select an application to view
            </div>
          ) : (
            <div>
              {applicationData
                .filter((app) => app._id === selectedApplicationUserId)
                .map((app) => (
                  <div key={app._id} className="flex flex-col gap-2">
                    <div className="font-medium">
                      {app.Name}'s Application for {app.ApplyingForPosition},{" "}
                      {app.ApplyingForDepartment}
                    </div>

                    <div className="flex gap-2">
                      <div className="border border-gray-400 p-1 text-gray-800 w-1/2 bg-white rounded-md">
                        <span className="font-medium">Email:</span> {app.Email}
                      </div>
                      <div className="border border-gray-400 p-1 text-gray-800 w-1/2 bg-white rounded-md">
                        <span className="font-medium">Contact No:</span>{" "}
                        {app.Phone} 
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="border border-gray-400 p-1 text-gray-800 w-1/2 bg-white rounded-md">
                        <span className="font-medium">LinkedIn Profile:</span>{" "}
                        {app.LinkedIn}
                      </div>
                      <div className="border border-gray-400 p-1 text-gray-800 w-1/2 bg-white rounded-md">
                        <span className="font-medium">Expected Salary:</span>{" "}
                        {app.ExpectedSalary}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="border border-gray-400 p-1 text-gray-800 w-1/2 bg-white rounded-md">
                        <span className="font-medium">Previous Company:</span>{" "}
                        {app.PrevJobCompany}
                      </div>
                      <div className="border border-gray-400 p-1 text-gray-800 w-1/2 bg-white rounded-md">
                        <span className="font-medium">Previous Role:</span>{" "}
                        {app.PrevJobTitle}
                      </div>
                    </div>

                    <div className="flex gap-2 items-center font-medium">
                      <div className="w-1/2">About Them:</div>
                      <div className="w-1/2">
                        Why are they intrested in this position:
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="border border-gray-400 p-1 text-gray-800 bg-white rounded-md h-20 overflow-auto w-1/2">
                        "{app.SelfIntro}"
                      </div>
                      <div className="border border-gray-400 p-1 text-gray-800 bg-white rounded-md h-20 overflow-auto w-1/2">
                        "{app.WhyIntrested}"
                      </div>
                    </div>

                    <div className="flex gap-2 items-center font-medium">
                      <div className="w-1/2">What are their expectations:</div>
                      <div className="w-1/2">What can we expect from them:</div>
                    </div>

                    <div className="flex gap-2">
                      <div className="border border-gray-400 p-1 text-gray-800 bg-white rounded-md h-20 overflow-auto w-1/2">
                        "{app.YourExpectations}"
                      </div>

                      <div className="border border-gray-400 p-1 text-gray-800 bg-white rounded-md h-20 overflow-auto w-1/2">
                        "{app.OurExpectations}"
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="border border-gray-400 p-1 text-gray-800 w-1/2 bg-white rounded-md">
                        <span className="font-medium">
                          Willing to relocate:
                        </span>{" "}
                        {app.Relocate}
                      </div>
                      <div className="border border-gray-400 p-1 text-gray-800 w-1/2 bg-white rounded-md">
                        <span className="font-medium">Start Date:</span>{" "}
                        {app.StartDate}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        style={{
                          background:
                            "linear-gradient(180deg, #98FB98 0%, #25c916 100%)",
                        }}
                        onClick={() => {
                          const file = new Blob(
                            [new Uint8Array(app.Resume.data.data)],
                            { type: app.Resume.contentType }
                          );
                          const fileURL = URL.createObjectURL(file);
                          window.open(fileURL, "_blank");
                        }}
                        className="bg-white py-2 px-4 rounded-md text-sm font-medium text-white hover:scale-110 duration-200"
                      >
                        View Resume
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminApplications;
