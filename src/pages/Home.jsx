import React from 'react'
import backImageUrl from '../assets/images/home-hero.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="hero min-h-screen" style={{backgroundImage: `url(${backImageUrl})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">You got the travel plans, we got the travel vans.</h1>
      <p className="mb-5">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Link className="btn btn-primary">Find your van</Link>
    </div>
  </div>
</div>
</>
  )
}

export default Home