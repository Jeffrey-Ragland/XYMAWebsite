import React from 'react'
import { useState } from 'react';

const AdminPortal = () => {

  const [addFormData, setAddFormData] = useState({
    DeptName: '',
    PositionName: '',
    PositionDesc: ''
  });

  const handleAddFormChange = (e) => {
    const {name, value} = e.target;
    setAddFormData({...addFormData, [name]: value});
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    console.log(addFormData);
  };

  return (
    <div className="p-4">
      <center className="mb-4">Admin Portal</center>
      <div className="flex justify-center">
        <div className="flex gap-2">
          {/* add */}
          <div className="border border-black p-8">
            <div className="mb-4">Add Position</div>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleAddFormSubmit}
            >
              <div>
                <input
                  type="text"
                  name="DeptName"
                  value={addFormData.DeptName}
                  placeholder="Enter Department Name"
                  required
                  className="border border-black"
                  onChange={handleAddFormChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="PositionName"
                  value={addFormData.PositionName}
                  placeholder="Enter Position Name"
                  required
                  className="border border-black"
                  onChange={handleAddFormChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="PositionDesc"
                  value={addFormData.PositionDesc}
                  placeholder="Enter Position Description"
                  required
                  className="border border-black"
                  onChange={handleAddFormChange}
                />
              </div>
              <div className="flex justify-end">
                <button className="border border-black p-2" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          {/* delete */}
          <div className="border border-black p-8">
            <div className="mb-4">Delete Position</div>
            <form className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  name="department2"
                  placeholder="Enter Department Name"
                  required
                  className="border border-black"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="position2"
                  placeholder="Enter Position Name"
                  required
                  className="border border-black"
                />
              </div>
              <div className="flex justify-end">
                <button className="border border-black p-2">Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPortal
