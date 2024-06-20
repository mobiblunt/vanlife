import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from './components/Navbar'

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
      </Routes>
      </main>
   
    </div>
    </BrowserRouter>

  )
}

export default App
