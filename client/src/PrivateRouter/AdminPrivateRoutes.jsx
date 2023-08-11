
import { useState, useEffect } from 'react';
import NotAuth from '../Pages/UserPages/NotAuth';
import { Outlet } from 'react-router-dom';

export const AdminPrivateRoute = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('ADMIN-JWT-TOKEN'); 
    
    if (token) {
      setIsAdminAuthenticated(true);   
    }
  },[]);

  if (isAdminAuthenticated) {
    return <Outlet/>;
  } else {
    return <NotAuth/>;
  }
};
