import React from 'react'
import authLoginStore from '../../../store/Auth'
import { Navigate } from 'react-router-dom'

const Private = ({ children }) => {

  const { authenticated } = authLoginStore()  
 
  if(!authenticated) {
    return <Navigate to="/" />
  }
  
    return children;
}

export default Private