import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Section from './components/Section'

function App() {
  
  return (
    <div className=' flex flex-col min-h-screen'>
      <Navbar/>
      <div className="flex-grow [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Main/>
        <Section/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
