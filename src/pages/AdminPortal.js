import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import xyma from "../Assets/xymalogo_white.png";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown, FaAngleUp, FaPencil, FaTrashCan } from "react-icons/fa6";
import { MdFileUpload } from "react-icons/md";
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

const AdminPortal = () => {

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
      [positionId]: {
        ...editedPositions[positionId],
        PositionName: e.target.value,
      },
    });
  };

   const handleEditPositionDescChange = (e, positionId) => {
     setEditedPositionDesc({
       ...editedPositionDesc,
       [positionId]: e.target.value,
     });
   };

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
        window.alert('position added to db');
        setFormData({DeptName: '',
                     PositionName: '',
                     PositionDesc: ''});
        fetchPosition();
      } 
      else {
        window.alert('adding position failed');
      }
    })
    .catch((error) => {
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
    .then(data => setPosition(data))
    .catch(error => console.log(error));
  };

  useEffect (() => {
    fetchPosition();
  },[]);
  console.log("retrieved positions from backend", position);

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
        //window.alert('position deleted');
        fetchPosition();
      } else {
        window.alert('deleting position failed');
      }
    })
    .catch((error) => {
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
          console.log('position/department deleted');
          fetchPosition();
        } else {
          window.alert('Failed to delete position/department');
        }
      })
      .catch((error) => {
        console.log(error);
      });
    });
  };

  //update position name
  const handleUpdatePositionName = (positionId) => {
    const editedName = editedPositions[positionId].PositionName;
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
        console.log('Position name updated');
        fetchPosition();
        setEditedPositions((prevState) => {
          const newState = {...prevState };
          delete newState[positionId];
          return newState; 
        });
      } else {
        window.alert('Failed to update position name');
      }
    })
    .catch((error) => {
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
        console.log('position description updated');
        fetchPosition();
        setEditedPositionDesc((prevState) => {
          const newState = {...prevState};
          delete newState[positionId];
          return newState;
        })
      } else {
        window.alert('failed to update position description');
      }
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const uniqueDepartments = [...new Set(position.map(position => position.DepartmentName))];

  return (
    <div className="md:h-screen">
      <div
        className="flex justify-between items-center relative py-2 px-4 text-white"
        style={{
          background: "linear-gradient(90deg, #00133D 0%, #01285C 100%)",
        }}
      >
        <div className="flex items-center">
          <img className="h-10" src={xyma} alt="Logo" />
        </div>
        <div className="text-lg font-medium">Admin Portal</div>
        <button
          className="py-2 px-4 rounded-full hover:scale-110 duration-200 text-sm font-medium"
          style={{
            background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
          }}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/admin@2k24");
          }}
        >
          Logout
        </button>
      </div>

      <div
        className="h-[1vh] mb-8"
        style={{
          background: "linear-gradient(90deg, #FE6F17 0%, #FE9D1C 101.48%)",
        }}
      ></div>

      <div className="md:flex gap-4 max-w-[1400px] mx-auto px-4">
        {/* add position */}
        <div
          className="border border-gray-400 w-full md:w-1/2 mb-4 md:mb-0 rounded-md bg-[#F9F9FB] shadow-lg"
          style={{
            backgroundImage: `url(${recruit})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="mb-2 font-medium py-2 px-4 rounded-t-md">
            Add Position
          </div>
          <form
            className="flex flex-col gap-4 p-4 "
            onSubmit={handleFormSubmit}
          >
            <div>
              <select
                name="DeptName"
                value={formData.DeptName}
                placeholder="Enter Department Name"
                required
                className="w-full p-1 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-600 text-gray-800 backdrop-blur-sm bg-white/50"
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
                className="w-full p-1 border border-l-gray-400 border-t-gray-400 border-b-gray-400 rounded-l-lg focus:outline-none focus:border-gray-600 text-gray-800 backdrop-blur-sm bg-white/50"
                onChange={handleFormChange}
              />
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                showIcon={true}
                required
                placeholderText="Enter Date"
                className="border border-gray-400 text-sm w-32 rounded-r-lg focus:outline-none focus:border-gray-600 text-gray-800"
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
        <div className="border border-gray-400 w-full md:w-1/2 rounded-md bg-[#F9F9FB] shadow-lg">
          {/* department name/ heading */}
          <div className="relative p-4">
            <div className="mb-4 font-medium">Added Departments</div>
            {uniqueDepartments.map((department) => (
              <div
                className="border border-gray-400 rounded-md mb-2 cursor-pointer flex bg-white"
                // style={{
                //   backgroundImage: `url(${deptTitleBackgrounds[department]})`,
                //   backgroundSize: "cover",
                //   backgroundRepeat: "no-repeat",
                //   backgroundPosition: "center"
                // }}
              >
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
                  onClick={() => handleDeleteDepartment(department)}
                  style={{
                    background: "linear-gradient(90deg, #fca192 0%, red 100%)",
                  }}
                >
                  <FaTrashCan size={15} />
                </div>
              </div>
            ))}
            {departmentPopup && (
              <div
                className="absolute inset-0 overflow-auto rounded-md p-4 bg-[#F9F9FB]"
                //style={{ scrollbarWidth: "none" }}
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
                  <div className="font-medium">
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
                <div className="">
                  {position
                    .filter((pos) => pos.DepartmentName === selectedDepartment)
                    .map((pos) => (
                      <div className=" mb-2" key={pos._id}>
                        {/* position name */}
                        <div className="border border-gray-400 rounded-t-md flex justify-between p-1 bg-[#F9F9FB]">
                          {editedPositions[pos._id] &&
                          editedPositions[pos._id].PositionName !==
                            undefined ? (
                            <input
                              type="text"
                              className="border focus:outline-none focus:border-gray-600 rounded-md px-1"
                              value={editedPositions[pos._id].PositionName}
                              onChange={(e) =>
                                handleEditPositionNameChange(e, pos._id)
                              }
                            />
                          ) : (
                            <div>{pos.Position}</div>
                          )}

                          <div className="flex gap-4 items-center">
                            {editedPositions[pos._id] &&
                            editedPositions[pos._id].PositionName !==
                              undefined ? (
                              <div
                                className="cursor-pointer text-green-500"
                                onClick={() =>
                                  handleUpdatePositionName(pos._id)
                                }
                              >
                                <MdFileUpload size={20} />
                              </div>
                            ) : (
                              <div
                                className="cursor-pointer text-blue-500"
                                onClick={() =>
                                  setEditedPositions({
                                    ...editedPositions,
                                    [pos._id]: {
                                      ...editedPositions[pos._id],
                                      PositionName: pos.Position,
                                    },
                                  })
                                }
                              >
                                <FaPencil size={15} />
                              </div>
                            )}
                            <div
                              className="cursor-pointer text-red-600"
                              onClick={() => handleDeletePosition(pos._id)}
                            >
                              <FaTrashCan size={15} />
                            </div>
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
                          <div className="flex justify-between gap-2 border border-b-gray-400 border-l-gray-400 border-r-gray-400 rounded-b-md p-2 bg-[#F9F9FB]">
                            {editedPositionDesc[pos._id] !== undefined ? (
                              <textarea
                                className="h-20 resize-none w-full bg-white border border-gray-200 p-1 text-sm rounded-md focus:outline-none focus:border-gray-600"
                                value={editedPositionDesc[pos._id]}
                                onChange={(e) =>
                                  handleEditPositionDescChange(e, pos._id)
                                }
                              />
                            ) : (
                              <div
                                className="h-20 w-full overflow-auto bg-white border border-gray-200 p-1 text-sm rounded-md"
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
                                  <MdFileUpload size={20} />
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
