import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar  mb-4">
  <Link to='/' className="flex-1">
    <a className="btn btn-ghost text-xl">#VanLife</a>
  </Link>
  <div className="flex-none">
  <Link to='/about' className="flex-1">
    <a className="btn btn-ghost text-xl">About</a>
  </Link>
  </div>
</nav>
  )
}

export default Navbar