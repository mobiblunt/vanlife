import React from 'react'
import backImageUrl from '../assets/images/about-hero.png'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
    <img
  src={backImageUrl}
  alt="Image"
  className="object-cover object-center h-[400px] w-screen"
/>
<div className="hero-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
      <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      
    </div>
    
  </div>
  <div className="m-4 text-center">
  <div className="card glass bg-primary text-primary-content">
  <div className="card-body ">
    <h1 className="text-lg card-title justify-center">Your destination is waiting.<br />Your van is ready.</h1>
   <br/>
    <div className="card-actions justify-center">
    <Link to="/vans" className="btn btn-primary">Explore our vans</Link>
    </div>
  </div>
</div>
  </div>
  
</>

  )
}

export default About