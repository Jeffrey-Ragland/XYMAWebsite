import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const [formData, setFormData] = useState({
        Username: '',
        Password: ''
    });
    const navigate = useNavigate();

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleAdminLoginSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/backend/adminlogin',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('server response',data);
            if(data.token){
                localStorage.setItem('token',data.token);
                navigate(data.redirectUrl);
            }
            else {
                window.alert('Invalid credentials');
            }
        })
        .catch(err => console.log(err));
    };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-black flex flex-col p-4 items-center gap-4">
        <div>XYMA admin</div>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleAdminLoginSubmit}
        >
          <div>
            <input
              type="text"
              name='Username'
              value={formData.Username}
              onChange={handleFormChange}
              placeholder="Username..."
              required
              className="border border-black "
            />
          </div>
          <div>
            <input
              type="password"
              name='Password'
              value={formData.Password}
              onChange={handleFormChange}
              placeholder="Password..."
              required
              className="border border-black "
            />
          </div>
          <button type="submit" className="border border-black ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin
