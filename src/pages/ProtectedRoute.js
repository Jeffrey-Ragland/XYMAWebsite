import React, { useEffect, useState } from 'react'
import {Navigate, Outlet} from 'react-router-dom';

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            // fetch('http://localhost:4000/backend/validateToken',{
            fetch("http://34.93.162.58:4000/backend/validateToken", {
              method: "POST",
              headers: {
                "Contnt-Type": "application/json",
                Authorization: token,
              },
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.valid) {
                 // console.log(data.valid)
                  setIsAuthenticated(true);
                } else {
                  localStorage.removeItem("token");
                }
                setLoading(false);
              })
              .catch((err) => {
                console.log(err);
                setLoading(false);
              });
        }
        else {
            setLoading(false);
        }
    },[]);

    if (loading) {
        return <div>Loading...</div>;
    }

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin@2k24" /> ;

};

export default ProtectedRoute
