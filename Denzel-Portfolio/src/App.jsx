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
        <section id="home"><Intro /></section>
        <section id="about"><Skills /></section>
        <section id="portfolio"><Works /></section>
        <section id="contact"><Contact /></section>
        <Footer />


    </div>
  )
}

export default App
