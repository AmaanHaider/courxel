
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NotAuth from '../Pages/NotAuth';

export const UserPrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('USER-JWT-TOKEN'); // Retrieve token from localStorage
    if (token) {
      setIsAuthenticated(true); // Set isAuthenticated to true if token is present
    } else {
      setIsAuthenticated(false); // Set isAuthenticated to false if token is absent
    }
  },[]);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <NotAuth/>;
  }
};
