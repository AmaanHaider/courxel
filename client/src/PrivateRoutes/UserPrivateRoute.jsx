import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserPrivateRoute = (props) => {
    const { Component } =  props
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('accessToken')
        if(!login){
            navigate('/login')
        }
    },)
  return (
    <div>
       
        <Component/>
    </div>
  )
}

export default UserPrivateRoute