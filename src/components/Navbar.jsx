import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isLight, setIsLight] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleTheme = () => {
    document.body.classList.toggle('light-mode')
    setIsLight(prev => !prev)
  }

  const handleSectionClick = (e, id) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <div className="logo">Achini.</div>
      <ul className="nav-links">
        <li><a href="#home" onClick={(e) => handleSectionClick(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleSectionClick(e, 'about')}>About</a></li>
        <li><a href="#education" onClick={(e) => handleSectionClick(e, 'education')}>Education</a></li>
        <li><a href="#skills" onClick={(e) => handleSectionClick(e, 'skills')}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => handleSectionClick(e, 'projects')}>Projects</a></li>
        <li><a href="#certificates" onClick={(e) => handleSectionClick(e, 'certificates')}>Achievements</a></li>
        <li><a href="#contact" onClick={(e) => handleSectionClick(e, 'contact')}>Contact</a></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
      <button id="theme-toggle" onClick={toggleTheme}>
        {isLight ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}