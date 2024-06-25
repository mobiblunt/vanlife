import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AuthReq = () => {
    const authenticated = true
    const location = useLocation()
    
    if (!authenticated) {
        return <Navigate to="/login" state={{message: "You must log in first" ,
        from: location.pathname
    }} replace />
    }
    return <Outlet />
}

export default AuthReq