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
import HostVans from './pages/host/HostVans'
import HostVanDetail from './pages/host/HostVanDetail'
import HostVanInfo from './pages/host/HostVanInfo'
import HostVanPhotos from './pages/host/HostVanPhotos'
import HostVanPricing from './pages/host/HostVanPricing'
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
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetail />} >
          <Route index element={<HostVanInfo />} />
          <Route path="photos" element={<HostVanPhotos />} />
          <Route path="pricing" element={<HostVanPricing />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
        </Route >
        <Route path="*" element={<h1>Page Not Found</h1>}/>
        </Route>
      </Routes>
      </main>
      
    </div>
    </BrowserRouter>

  )
}

export default App
