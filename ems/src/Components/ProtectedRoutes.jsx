import React from 'react'
import {jwtDecode} from "jwt-decode";
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({role , element}) {

  const token = localStorage.getItem('token');
  if(!token) return <Navigate to={'/'} replace />
  try{
    const decode = jwtDecode(token);
    if(decode.role != role) return <Navigate to={'/'} replace />

    return element
  }
  catch(err){
    return <Navigate to={'/'} replace />
  }
}

export default ProtectedRoutes