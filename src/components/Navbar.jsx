import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar  mb-4">
  <NavLink to='/' className="flex-1">
    <a className="btn btn-ghost text-2xl">#VanLife</a>
  </NavLink>
  <div className="flex-none">
  <NavLink to='/about' className={`btn btn-ghost text-lg flex-1`} isActive={(match) => match !== null ? "bg-green-300" : null}>
    About
  </NavLink>
  <NavLink to='/host' className={`flex-1 ${({isActive}) => isActive ? "bg-green-300" : null }`}>
    <a className="btn btn-ghost text-lg">Host</a>
  </NavLink>
  <NavLink to='/vans' className={`flex-1 ${({isActive}) => isActive ? "bg-green-300" : null }`}>
    <a className="btn btn-ghost text-lg">Vans</a>
  </NavLink>
  <NavLink to='/login' className={`flex-1 ${({isActive}) => isActive ? "bg-green-300" : null }`}>
    <FaUser className='m-4'/>
  </NavLink>
  </div>
</nav>
  )
}

export default Navbar