import { useEffect } from 'react'

const skills = [
  { icon: 'devicon-html5-plain colored', label: 'HTML', percent: '90%', cls: 'html' },
  { icon: 'devicon-css3-plain colored', label: 'CSS', percent: '80%', cls: 'css' },
  { icon: 'devicon-javascript-plain colored', label: 'JavaScript', percent: '75%', cls: 'js' },
  { icon: 'devicon-python-plain colored', label: 'Python', percent: '75%', cls: 'git' },
  { icon: 'devicon-csharp-plain colored', label: 'C#', percent: '70%', cls: 'cSharp' },
  { icon: 'devicon-java-plain colored', label: 'Java', percent: '80%', cls: 'java' },
  { icon: 'devicon-mysql-plain colored', label: 'SQL', percent: '75%', cls: 'sql' },
  { icon: 'devicon-git-plain colored', label: 'Git & GitHub', percent: '75%', cls: 'git' },
  { icon: 'fa-solid fa-gears', label: 'GitHub Actions', percent: '70%', cls: 'actions', style: { color: '#6e40c9' } },
]

const widthMap = {
  html: '90%',
  css: '80%',
  js: '75%',
  python: '75%',
  cSharp: '70%',
  java: '80%',
  sql: '75%',
  git: '75%',
  actions: '70%',
}

export default function Skills() {
  useEffect(() => {
    const bars = document.querySelectorAll('.progress')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target
            const cls = [...el.classList].find(c => widthMap[c])
            if (cls) el.style.width = widthMap[cls]
          }
        })
      },
      { threshold: 0.5 }
    )
    bars.forEach(bar => observer.observe(bar))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="hidden">
      <div className="section-tag">My Expertise</div>
      <h2 className="section-heading">
        Technical <span>Skills</span>
      </h2>
      <p className="section-sub">
        Technologies and tools I use for software development,
        web development and DevOps practices.
      </p>

      <div className="skills-container">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <div className="skill-header">
              <span>
                <i className={skill.icon} style={skill.style || {}}></i>
                {' '}{skill.label}
              </span>
              <span>{skill.percent}</span>
            </div>
            <div className="progress-bar">
              <div className={`progress ${skill.cls}`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
