import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar  mb-4">
  <Link to='/' className="flex-1">
    <a className="btn btn-ghost text-2xl">#VanLife</a>
  </Link>
  <div className="flex-none">
  <Link to='/about' className="flex-1">
    <a className="btn btn-ghost text-lg">About</a>
  </Link>
  <Link to='/vans' className="flex-1">
    <a className="btn btn-ghost text-lg">Vans</a>
  </Link>
  </div>
</nav>
  )
}

export default Navbar