import React from 'react'
import Navbar from './components/NavBar/navbar'
import Intro from './components/intro/intro'
import Skills from './components/skills/skill'
import Works from './components/works/works'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro  />
      <Skills />
      <Works />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
