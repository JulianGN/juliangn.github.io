import React, { useState } from 'react'
import './App.css'
import About from './components/About'
import BackTop from './components/BackTop'
import Courses from './components/Courses'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Habilities from './components/Habilities'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <About />
      <Habilities />
      <Experiences />
      <Courses />
      <Footer />
      <BackTop />
    </>
  )
}

export default App
