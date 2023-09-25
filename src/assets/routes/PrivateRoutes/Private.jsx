import React from 'react'
import authLoginStore from '../../../store/Auth'
import { Navigate } from 'react-router-dom'

const Private = ({ children }) => {

  const { authenticated } = authLoginStore()  
 
  if(!authenticated) {
    console.log('return do navigate', authenticated)
    return <Navigate to="/" />
  } else {
    console.log(authenticated, 'authenticated do children')
    return children;
  }
}

export default Private