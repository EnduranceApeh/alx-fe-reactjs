import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'

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
