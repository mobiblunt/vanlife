import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar  mb-4">
  <NavLink to='/' className="flex-1">
    <a className="btn btn-ghost text-2xl">#VanLife</a>
  </NavLink>
  <div className="flex-none">
  <NavLink to='/about' className={`flex-1 ${({isActive}) => isActive ? "bg-green-300" : null }`}>
    <a className="btn btn-ghost text-lg">About</a>
  </NavLink>
  <NavLink to='/host' className={`flex-1 ${({isActive}) => isActive ? "bg-green-300" : null }`}>
    <a className="btn btn-ghost text-lg">Host</a>
  </NavLink>
  <NavLink to='/vans' className={`flex-1 ${({isActive}) => isActive ? "bg-green-300" : null }`}>
    <a className="btn btn-ghost text-lg">Vans</a>
  </NavLink>
  </div>
</nav>
  )
}

export default Navbar