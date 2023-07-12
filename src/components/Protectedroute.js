import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseAuth } from '../context/AuthContext'

const Protectedroute = ({children}) => {
    const {user} = UseAuth()
    if(!user){
        return <Navigate to="/" />
    }
    else{
        return children;
    }
}

export default Protectedroute