import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
 

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
