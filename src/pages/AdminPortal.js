import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AdminPortal = () => {

  const [formData, setFormData] = useState({
    DeptName: '',
    PositionName: '',
    PositionDesc: '',
    date: null
  });
  const [position, setPosition] = useState([]);
  const [departmentPopup, setDepartmentPopup] = useState(false);
  const [openPositionID, setOpenPositionId] = useState(null);
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
    <div className="p-4">
      <div className="flex justify-center mb-8 relative">
        <div className="">Admin Portal</div>
        <button
          className="border border-black absolute right-0 p-1"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/admin@2k24");
          }}
        >
          Logout
        </button>
      </div>
      <div className="md:flex gap-4">
        {/* add position */}
        <div className="border border-black p-8 w-full md:w-1/2 mb-4 md:mb-0">
          <div className="mb-4">Add Position</div>
          <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
            <div>
              <select
                name="DeptName"
                value={formData.DeptName}
                placeholder="Enter Department Name"
                required
                className="border border-black w-full"
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
                className="border border-black w-full"
                onChange={handleFormChange}
              />
              <DatePicker
                selected={formData.date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                showIcon={true}
                required
                className="border border-black text-sm w-28"
              />
            </div>
            <div>
              <textarea
                name="PositionDesc"
                value={formData.PositionDesc}
                placeholder="Enter Position Description"
                required
                className="border border-black w-full h-20 resize-none"
                onChange={handleFormChange}
              />
            </div>
            <div className="flex justify-end items-center">
              <button className="border border-black p-1" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
        {/* display position */}
        <div className="border border-black p-8 w-full md:w-1/2">
          {/* department name/ heading */}
          <div
            className="relative"
            //style={{ scrollbarWidth: "none" }}
          >
            <div className="mb-4">Added Departments</div>
            {uniqueDepartments.map((department) => (
              <div className="border border-black rounded-md mb-2 cursor-pointer flex">
                <div
                  className="border border-black w-[90%] p-1"
                  onClick={() => {
                    setSelectedDepartment(department);
                    setDepartmentPopup(true);
                  }}
                >
                  {department}
                </div>
                <div
                  className="border border-black w-[10%] p-1 flex justify-center"
                  onClick={() => handleDeleteDepartment(department)}
                >
                  x
                </div>
              </div>
            ))}
            {departmentPopup && (
              <div className="absolute inset-0 border border-black bg-white p-2">
                {/* header */}
                <div className="flex justify-between">
                  <div>{selectedDepartment} Openings</div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setDepartmentPopup(false)}
                  >
                    X
                  </div>
                </div>
                {/* content */}
                <div className="p-2">
                  {position
                    .filter((pos) => pos.DepartmentName === selectedDepartment)
                    .map((pos) => (
                      <div className=" mb-2" key={pos._id}>
                        {/* position name */}
                        <div className="border border-black rounded-md flex justify-between cursor-pointer p-1 ">
                          {editedPositions[pos._id] &&
                          editedPositions[pos._id].PositionName !==
                            undefined ? (
                            <input
                              type="text"
                              value={editedPositions[pos._id].PositionName}
                              onChange={(e) =>
                                handleEditPositionNameChange(e, pos._id)
                              }
                            />
                          ) : (
                            <div>{pos.Position}</div>
                          )}

                          <div className="flex gap-2">
                            {editedPositions[pos._id] &&
                            editedPositions[pos._id].PositionName !==
                              undefined ? (
                              <div
                                className="cursor-pointer"
                                onClick={() =>
                                  handleUpdatePositionName(pos._id)
                                }
                              >
                                Update
                              </div>
                            ) : (
                              <div
                                className="cursor-pointer"
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
                                Edit
                              </div>
                            )}
                            <div
                              className="cursor-pointer"
                              onClick={() => handleDeletePosition(pos._id)}
                            >
                              x
                            </div>
                            <div
                              className="cursor-pointer"
                              onClick={() => setOpenPositionId(pos._id)}
                            >
                              more
                            </div>
                          </div>
                        </div>
                        {/* position description */}
                        {openPositionID === pos._id && (
                          <div className="flex justify-between border border-black p-1">
                            {editedPositionDesc[pos._id] !== undefined ? (
                              <textarea
                                value={editedPositionDesc[pos._id]}
                                onChange={(e) =>
                                  handleEditPositionDescChange(e, pos._id)
                                }
                              />
                            ) : (
                              <div>{pos.PositionDescription}</div>
                            )}

                            <div className="flex gap-2">
                              {editedPositionDesc[pos._id] !== undefined ? (
                                <div
                                  className="cursor-pointer"
                                  onClick={() =>
                                    handleUpdatePositionDesc(pos._id)
                                  }
                                >
                                  Update
                                </div>
                              ) : (
                                <div
                                  className="cursor-pointer"
                                  onClick={() =>
                                    setEditedPositionDesc({
                                      ...editedPositionDesc,
                                      [pos._id]: pos.PositionDescription,
                                    })
                                  }
                                >
                                  edit
                                </div>
                              )}
                              <div
                                className="cursor-pointer"
                                onClick={() => {
                                  setOpenPositionId(null);
                                  setEditedPositionDesc({
                                    ...editedPositionDesc,
                                    [pos._id]: undefined,
                                  });
                                }}
                              >
                                less
                              </div>
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
