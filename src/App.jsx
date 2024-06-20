import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'

import "./server"


function App() {
 

  return (
    <BrowserRouter>
      <div className="flex flex-col justify-start h-screen">
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>

  )
}

export default App
