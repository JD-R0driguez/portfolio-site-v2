import React from 'react'
import Navbar from './components/Navbar'
import LeftBar from './components/LeftBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar/>
      <LeftBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}


