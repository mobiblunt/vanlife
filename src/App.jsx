import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from './components/Layout'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostLayout from './pages/host/HostLayout'
import "./server"


function App() {
 

  return (
    <BrowserRouter>
      <div className="flex flex-col justify-start h-screen">
    
    <main>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />

        <Route path='host' element={<HostLayout/>}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        </Route >

        </Route>
      </Routes>
      </main>
      
    </div>
    </BrowserRouter>

  )
}

export default App
