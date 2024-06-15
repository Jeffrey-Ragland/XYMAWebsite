import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import xyma from "../Assets/xymalogo_white.png";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown, FaAngleUp, FaPencil, FaTrashCan, FaBell } from "react-icons/fa6";
import { FaUpload } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import software from '../Assets/software.jpg';
import electronics from '../Assets/electronics.jpg'
import ultrasonic from '../Assets/ultrasonic.jpg';
import mechanical from '../Assets/mechanical.jpg';
import backend from '../Assets/backend.jpg';
import sensor from '../Assets/sensordept.jpeg';
import finance from '../Assets/finance.jpg';
import admin from '../Assets/admin.jpg';
import recruit from '../Assets/recruit.jpg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPortal = () => {

   const location = useLocation();

   const adminPaths = [
     {
       title: "Portal",
       path: "/admin@2k24Portal",
     },
     {
       title: "Applications",
       path: "/admin@2k24Applications",
     },
   ];

  const [formData, setFormData] = useState({
    DeptName: '',
    PositionName: '',
    PositionDesc: '',
    date: null
  });
  const [position, setPosition] = useState([]);
  const [departmentPopup, setDepartmentPopup] = useState(false);
  const [openPositions, setOpenPositions] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [editedPositions, setEditedPositions] = useState({});
  const [editedPositionDesc, setEditedPositionDesc] = useState({});
  const [editedDates, setEditedDates] = useState({});
  const [confirmDepartmentToDelete, setConfirmDepartmentToDelete] = useState(null);
  const [confirmPositionToDelete, setConfirmPositionToDelete] = useState(null);
  //const [alertOpen, setAlertOpen] = useState(false);
 
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleDateChange = (date) => {
    setFormData({...formData, date: date})
  }

  const toggleOpenPosition = (positionId) => {
    if (openPositions.includes(positionId)) {
      setOpenPositions(openPositions.filter(id => id !== positionId));
    } 
    else {
      setOpenPositions([...openPositions, positionId]);
    }
  };

  const handleEditPositionNameChange = (e, positionId) => {
    setEditedPositions({
      ...editedPositions,
      [positionId]: e.target.value,
    });
  };

   const handleEditPositionDescChange = (e, positionId) => {
     setEditedPositionDesc({
       ...editedPositionDesc,
       [positionId]: e.target.value,
     });
   };

   const handleEditDateChange = (date, positionId) => {
    setEditedDates({
      ...editedDates,
      [positionId] : date,
    });
   };
   console.log('edited dates',editedDates);

   const deptBackgrounds = {
    'Software Development' : software,
    'Electronics' : electronics,
    'Ultrasonic' : ultrasonic,
    'Mechanical Designing' : mechanical,
    'Software Backend and Operations' : backend,
    'Sensor Development' : sensor,
    'Finance' : finance,
    'Admin Department' : admin
   }

  //posting position details to db
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:4000/backend/addposition", {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then((response) => {
      if(response.ok) {
        toast.success('Position added!');
        setFormData({DeptName: '',
                     PositionName: '',
                     PositionDesc: '',
                     date: null});
        fetchPosition();
      } 
      else {
        toast.error('Adding position failed');
      }
    })
    .catch((error) => {
      toast.error("Adding position failed");
      console.log(error);
    });
  };

  //getting position details from db
  const fetchPosition = () => {
    fetch("http://localhost:4000/backend/getposition", {
      method: "GET",
      headers: {
        'Content-Type' : 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => {
      setPosition(data);
      handleExpiredPositions(data);
    })
    .catch(error => console.log(error));
  };

  useEffect (() => {
    fetchPosition();
  },[]);
  console.log("retrieved positions from backend", position);

  //handling expired positions
  const handleExpiredPositions = (positions) => {
    const currentDate = new Date();
    positions.forEach(pos => {
      const lastDate = new Date(pos.LastDate);
      lastDate.setDate(lastDate.getDate() + 1);
      console.log("last date", lastDate);
      console.log("current date", currentDate);
      if(lastDate < currentDate) {
        handleDeletePosition(pos._id);
      }
    });
    
  };

  //deleting position from db
  const handleDeletePosition = (positionId) => {
    fetch(`http://localhost:4000/backend/deleteposition/${positionId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json',
      },
    })
    .then((response) => {
      if(response.ok) {
        toast.success('Position deleted!');
        fetchPosition();
        setConfirmPositionToDelete(null);
      } else {
        toast.error('Deleting position failed');
      }
    })
    .catch((error) => {
      toast.error("Deleting position failed");
      console.log(error);
    });
  };

  //deleting department from db
  const handleDeleteDepartment = (department) => {
    const positionsToDelete = position.filter(pos => pos.DepartmentName === department);

    positionsToDelete.forEach(pos => {
      fetch(`http://localhost:4000/backend/deleteposition/${pos._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type' : 'application/json',
        },
      })
      .then((response) => {
        if(response.ok) {
          toast.success('Department deleted!');
          fetchPosition();
          setConfirmDepartmentToDelete(null);
        } else {
          toast.error('Failed to delete department');
        }
      })
      .catch((error) => {
        toast.error("Failed to delete department");
        console.log(error);
      });
    });
  };

  //update position name
  const handleUpdatePositionName = (positionId) => {
    const editedName = editedPositions[positionId];
    fetch(`http://localhost:4000/backend/updateposition/${positionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        PositionName: editedName,
      }),
    })
    .then((response) => {
      if(response.ok) {
        toast.success('Position title updated!');
        fetchPosition();
        setEditedPositions((prevState) => {
          const newState = {...prevState };
          delete newState[positionId];
          return newState; 
        });
      } else {
        toast.error('Failed to update position title');
      }
    })
    .catch((error) => {
      toast.error("Failed to update position title");
      console.log(error);
    });
  };

  // update position description
  const handleUpdatePositionDesc = (positionId) => {
    const editedDesc = editedPositionDesc[positionId];
    fetch(`http://localhost:4000/backend/updateposition/${positionId}`, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        PositionDesc: editedDesc,
      }),
    })
    .then((response) => {
      if(response.ok) {
        toast.success('Position description updated!');
        fetchPosition();
        setEditedPositionDesc((prevState) => {
          const newState = {...prevState};
          delete newState[positionId];
          return newState;
        });
      } else {
        toast.error('Failed to update position description');
      }
    })
    .catch((error) => {
      toast.error("Failed to update position description");
      console.log(error);
    });
  };

  // update last date
  const handleUpdateDate = (positionId) => {
    const editedDate = editedDates[positionId];
    fetch(`http://localhost:4000/backend/updateposition/${positionId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        LastDate:editedDate,
      }),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Last Date updated!");
          fetchPosition();
          setEditedDates((prevState) => {
            const newState = { ...prevState };
            delete newState[positionId];
            return newState;
          });
        } else {
          toast.error("Failed to update last date");
        }
      })
      .catch((error) => {
        toast.error("Failed to update last date");
        console.log(error);
      });
  };

  const uniqueDepartments = [...new Set(position.map(position => position.DepartmentName))];

  return (
    <div className="md:h-screen 2xl:text-lg">
      {/* navbar */}
      <div className="fixed top-0 left-0 w-full z-10">
        <div
          className="flex items-center h-[9vh] text-white px-4"
          style={{
            background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
          }}
        >
          <div className="flex items-center gap-4 h-full  w-1/3">
            <div className="h-full flex items-center">
              <img className="h-[80%]" src={xyma} alt="Logo" />
            </div>
            <div className="text-base md:text-xl 2xl:text-2xl font-medium">
              Admin Portal
            </div>
          </div>

          {/* routes */}
          <div className="flex gap-4 justify-center  w-1/3">
            {adminPaths.map((item, index) => (
              <div key={index} className="">
                <NavLink
                  to={item.path}
                  className={`${
                    location.pathname === item.path && "text-orange-400"
                  }`}
                >
                  <span>{item.title}</span>
                </NavLink>
              </div>
            ))}
          </div>

          <div className=" w-1/3 flex justify-end">
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

      <ToastContainer />
      <div className="md:flex gap-4 max-w-[1400px] mx-auto px-4 pt-8 mt-[10vh]">
        {/* add position */}
        <div className="border border-gray-400 w-full md:w-1/2 mb-4 md:mb-0 rounded-md bg-[#F9F9FB] shadow-lg pb-24 p-4 ">
          <div className="mb-4 text-base md:text-lg 2xl:text-xl font-medium">
            Add Position
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
            <div>
              <select
                name="DeptName"
                value={formData.DeptName}
                placeholder="Enter Department Name"
                required
                className="w-full p-1 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600 text-gray-800 backdrop-blur-sm bg-white/50 cursor-pointer"
                onChange={handleFormChange}
              >
                <option value="" disabled>
                  Select Department
                </option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Ultrasonic">Ultrasonic</option>
                <option value="Mechanical Designing">
                  Mechanical Designing
                </option>
                <option value="Software Backend and Operations">
                  Software Backend and Operations
                </option>
                <option value="Sensor Development">Sensor Development</option>
                <option value="Finance">Finance</option>
                <option value="Admin Department">Admin Department</option>
              </select>
            </div>
            <div className="flex">
              <input
                type="text"
                name="PositionName"
                value={formData.PositionName}
                placeholder="Enter Position Name"
                required
                autoComplete="off"
                className="w-full p-1 border border-l-gray-400 border-t-gray-400 border-b-gray-400 rounded-l-lg focus:outline-none focus:border-gray-600 text-gray-800 backdrop-blur-sm bg-white/50"
                onChange={handleFormChange}
              />
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                showIcon={true}
                required
                placeholderText="Enter Last Date"
                className="border border-gray-400 text-sm w-36 rounded-r-lg focus:outline-none focus:border-gray-600 text-gray-800"
              />
            </div>
            <div>
              <textarea
                name="PositionDesc"
                value={formData.PositionDesc}
                placeholder="Enter Position Description"
                required
                className=" w-full h-20 resize-none p-1 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600 text-gray-800 backdrop-blur-sm bg-white/50"
                onChange={handleFormChange}
              />
            </div>
            <div className="flex justify-end items-center">
              <button
                className="py-2 px-4 rounded-md text-sm font-medium text-white hover:scale-110 duration-200"
                type="submit"
                style={{
                  background:
                    "linear-gradient(180deg, #98FB98 0%, #25c916 100%)",
                }}
              >
                Add
              </button>
            </div>
          </form>
        </div>
        {/* display position */}
        <div className="border border-gray-400 w-full md:w-1/2 rounded-md bg-[#F9F9FB] shadow-lg mb-8 md:mb-0">
          {/* department name/ heading */}
          <div className="relative p-4 md:h-full min-h-[400px]">
            {uniqueDepartments.length === 0 ? (
              <div className="h-full flex justify-center items-center text-sm text-gray-800">
                No Positions Added
              </div>
            ) : (
              <>
                <div className="mb-4 text-base md:text-lg 2xl:text-xl font-medium">
                  Added Positions
                </div>
                {uniqueDepartments.map((department) => (
                  <div className="border border-gray-400 rounded-md mb-2 cursor-pointer flex bg-white">
                    <div
                      className="w-[90%] p-1 rounded-md"
                      onClick={() => {
                        setSelectedDepartment(department);
                        setDepartmentPopup(true);
                      }}
                    >
                      {department}
                    </div>
                    <div
                      className="rounded-r-md w-[10%] p-1 flex justify-center items-center text-white"
                      // onClick={() => handleDeleteDepartment(department)}
                      onClick={() => setConfirmDepartmentToDelete(department)}
                      style={{
                        background:
                          "linear-gradient(90deg, #fca192 0%, red 100%)",
                      }}
                    >
                      <FaTrashCan size={15} />
                    </div>
                    {/* delete confirmation */}
                    {confirmDepartmentToDelete === department && (
                      // overlay
                      <div className="absolute inset-0 h-full bg-black/25 flex justify-center items-center rounded-md">
                        <div className="bg-white rounded-md px-2 py-3 flex flex-col gap-4">
                          <div className="font-medium">Confirm Delete</div>
                          <div className="text-xs md:text-sm text-gray-700">
                            Are you sure you want to delete this DEPARTMENT ?
                          </div>
                          <div className="flex justify-end gap-4 text-sm font-medium">
                            <button
                              className="py-1 px-2 rounded-md bg-stone-200 hover:scale-110 duration-200"
                              onClick={() => setConfirmDepartmentToDelete(null)}
                            >
                              Cancel
                            </button>
                            <button
                              className="py-1 px-2 rounded-md text-white bg-red-500 hover:scale-110 duration-200"
                              onClick={() => handleDeleteDepartment(department)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}

            {departmentPopup && (
              <div
                className="absolute inset-0 overflow-auto rounded-md p-4 bg-[#F9F9FB]"
                style={{
                  backgroundImage: `url(${deptBackgrounds[selectedDepartment]})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  scrollbarWidth: "none",
                }}
              >
                {/* header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="font-medium text-base md:text-lg 2xl:text-xl">
                    {selectedDepartment} Openings
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setDepartmentPopup(false)}
                  >
                    <IoMdClose size={20} />
                  </div>
                </div>
                {/* content */}
                <div>
                  {position
                    .filter((pos) => pos.DepartmentName === selectedDepartment)
                    .map((pos) => (
                      <div className=" mb-2" key={pos._id}>
                        {/* position name */}
                        <div className="border border-gray-300 rounded-t-md flex gap-2 justify-between py-1 px-2 bg-[#F9F9FB]">
                          {editedPositions[pos._id] !== undefined ? (
                            <input
                              type="text"
                              className="border focus:outline-none focus:border-gray-600 rounded-md px-1 w-full"
                              value={editedPositions[pos._id]}
                              onChange={(e) =>
                                handleEditPositionNameChange(e, pos._id)
                              }
                            />
                          ) : (
                            <div>{pos.Position}</div>
                          )}

                          <div className="flex gap-4 items-center">
                            {editedPositions[pos._id] !== undefined ? (
                              <div
                                className="cursor-pointer text-green-500"
                                onClick={() =>
                                  handleUpdatePositionName(pos._id)
                                }
                              >
                                <FaUpload size={15} />
                              </div>
                            ) : (
                              <div
                                className="cursor-pointer text-blue-500"
                                onClick={() =>
                                  setEditedPositions({
                                    ...editedPositions,
                                    [pos._id]: pos.Position,
                                  })
                                }
                              >
                                <FaPencil size={15} />
                              </div>
                            )}
                            <div
                              className="cursor-pointer text-red-600"
                              onClick={() =>
                                setConfirmPositionToDelete(pos._id)
                              }
                            >
                              <FaTrashCan size={15} />
                            </div>
                            {/* delete confirmation */}
                            {confirmPositionToDelete === pos._id && (
                              // overlay
                              <div className="absolute inset-0 bg-black/25 flex justify-center items-center rounded-md z-10">
                                <div className="bg-white rounded-md px-2 py-3 flex flex-col gap-4">
                                  <div className="font-medium">
                                    Confirm Delete
                                  </div>
                                  <div className="text-xs md:text-sm text-gray-700">
                                    Are you sure you want to delete this
                                    POSITION ?
                                  </div>
                                  <div className="flex justify-end gap-4 text-sm font-medium">
                                    <button
                                      className="py-1 px-2 rounded-md bg-stone-200 hover:scale-110 duration-200"
                                      onClick={() =>
                                        setConfirmPositionToDelete(null)
                                      }
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      className="py-1 px-2 rounded-md text-white bg-red-500 hover:scale-110 duration-200"
                                      onClick={() =>
                                        handleDeletePosition(pos._id)
                                      }
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                            <div
                              className="cursor-pointer"
                              onClick={() => toggleOpenPosition(pos._id)}
                            >
                              {openPositions.includes(pos._id) ? (
                                <FaAngleUp size={15} />
                              ) : (
                                <FaAngleDown size={15} />
                              )}
                            </div>
                          </div>
                        </div>
                        {/* position description */}
                        {openPositions.includes(pos._id) && (
                          <>
                            <div className=" border border-b-gray-300 border-l-gray-300 border-r-gray-300 rounded-b-md p-2 bg-[#F9F9FB]">
                              <div className="flex justify-between items-center gap-2 mb-2">
                                <div className="text-sm 2xl:text-lg">
                                  Description:
                                </div>
                                {editedPositionDesc[pos._id] !== undefined ? (
                                  <textarea
                                    className="h-20 resize-none w-full bg-white border border-gray-200 p-1 text-sm 2xl:text-base rounded-md focus:outline-none focus:border-gray-600"
                                    value={editedPositionDesc[pos._id]}
                                    onChange={(e) =>
                                      handleEditPositionDescChange(e, pos._id)
                                    }
                                  />
                                ) : (
                                  <div
                                    className="h-20 w-full overflow-auto bg-white border border-gray-300 p-1 text-sm 2xl:text-base rounded-md"
                                    style={{ scrollbarWidth: "none" }}
                                  >
                                    {pos.PositionDescription}
                                  </div>
                                )}

                                <div className="">
                                  {editedPositionDesc[pos._id] !== undefined ? (
                                    <div
                                      className="cursor-pointer text-green-500"
                                      onClick={() =>
                                        handleUpdatePositionDesc(pos._id)
                                      }
                                    >
                                      <FaUpload size={15} />
                                    </div>
                                  ) : (
                                    <div
                                      className="cursor-pointer text-blue-500"
                                      onClick={() =>
                                        setEditedPositionDesc({
                                          ...editedPositionDesc,
                                          [pos._id]: pos.PositionDescription,
                                        })
                                      }
                                    >
                                      <FaPencil size={15} />
                                    </div>
                                  )}
                                </div>
                              </div>
                              {/* last date */}
                              <div className="flex gap-2 items-center text-sm 2xl:text-base">
                                <div className="text-sm 2xl:text-lg mr-[11px] 2xl:mr-[15px]">
                                  Last&nbsp;Date:
                                </div>
                                {editedDates[pos._id] !== undefined ? (
                                  <div className="border border-gray-300 w-full rounded-md bg-white">
                                    <DatePicker
                                      selected={editedDates[pos._id]}
                                      onChange={(date) =>
                                        handleEditDateChange(date, pos._id)
                                      }
                                      dateFormat="dd/MM/yyyy"
                                      showIcon={true}
                                      toggleCalendarOnIconClick
                                      className="rounded-md px-1 focus:outline-none"
                                    />
                                  </div>
                                ) : (
                                  <div className="border border-gray-300 bg-white w-full rounded-md px-1 py-1.5">
                                    {pos.LastDate &&
                                      new Date(pos.LastDate).toLocaleDateString(
                                        "en-GB"
                                      )}
                                  </div>
                                )}

                                {editedDates[pos._id] !== undefined ? (
                                  <div
                                    className="cursor-pointer text-green-500"
                                    onClick={() => handleUpdateDate(pos._id)}
                                  >
                                    <FaUpload size={15} />
                                  </div>
                                ) : (
                                  <div
                                    className="cursor-pointer text-blue-500"
                                    onClick={() =>
                                      setEditedDates({
                                        ...editedDates,
                                        [pos._id]: pos.LastDate,
                                      })
                                    }
                                  >
                                    <FaPencil size={15} />
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPortal
