
import { useState, useEffect } from 'react';
import NotAuth from '../Pages/UserPages/NotAuth';
import { Outlet } from 'react-router-dom';

export const UserPrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('USER-JWT-TOKEN');     
    if (token) {
      setIsAuthenticated(true);   
    }
  },[]);

  if (isAuthenticated) {
    return <Outlet/>;
  } else {
    return <NotAuth/>;
  }
};
