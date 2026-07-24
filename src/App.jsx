import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Admin from "./components/Admin"

function MainPage() {
  // Scroll reveal for .hidden sections
  useEffect(() => {
    const hiddenEls = document.querySelectorAll('.hidden')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      { threshold: 0.2 }
    )
    hiddenEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  // Custom cursor 
  useEffect(() => {
    const cursor = document.querySelector('.cursor')
    const dot = document.querySelector('.cursor-dot')
    const onMove = e => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
      }
      if (dot) {
        dot.style.left = e.clientX + 'px'
        dot.style.top = e.clientY + 'px'
      }
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <BrowserRouter basename="/portfolio-website">
      <div className="cursor"></div>
      <div className="cursor-dot"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}