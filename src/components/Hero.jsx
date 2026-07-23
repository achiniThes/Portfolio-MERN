import { useEffect, useState } from 'react'

const typingTexts = [
  'Undergraduate',
  'Software Engineering Student',
  'Web Developer',
  'Devops Learner',
  'Content Creator',
]

export default function Hero() {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let count = 0
    let index = 0
    let timer

    function typeEffect() {
      const currentText = typingTexts[count]
      const letter = currentText.slice(0, ++index)
      setDisplayed(letter)
      if (letter.length === currentText.length) {
        count = (count + 1) % typingTexts.length
        index = 0
        timer = setTimeout(typeEffect, 1500)
      } else {
        timer = setTimeout(typeEffect, 100)
      }
    }

    typeEffect()
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hello, I&apos;m <span>Achini Thesanya</span></h1>
        <h3><span id="typing-text">{displayed}</span></h3>
        <p>
          Passionate about software development, web technologies,
          problem solving, and dedicated to continuous learning and creating
          impactful applications that enhance user experiences.
        </p>

        <a href="#contact" className="btn">Contact Me</a>
        &nbsp;&nbsp;
        <a href="/portfolio-website/P.A.A.Thesanya CV.pdf" className="btn" download>
          Download CV
        </a>

        <div className="hero-socials">
          <a href="https://github.com/achiniThes/" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/achini-pandipperuma-ab14ab411/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://medium.com/@achini.thesanya/following" target="_blank" rel="noreferrer">
            <i className="fab fa-medium"></i>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/portfolio-website/images/Photograph.jpeg" alt="Profile Photo" />
      </div>
    </section>
  )
}
