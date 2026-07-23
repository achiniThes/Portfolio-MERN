import { useState } from 'react'

export default function Navbar() {
  const [isLight, setIsLight] = useState(false)

  const toggleTheme = () => {
    document.body.classList.toggle('light-mode')
    setIsLight(prev => !prev)
  }

  return (
    <nav>
      <div className="logo">Achini.</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button id="theme-toggle" onClick={toggleTheme}>
        {isLight ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}
