import React from 'react'
import { Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <>
    <div>HostLayout</div>
    <Outlet />
    </>
  )
}

export default HostLayout