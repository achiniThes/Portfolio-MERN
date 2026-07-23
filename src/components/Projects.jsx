const projects = [
  {
    icon: 'fas fa-calendar-alt',
    title: 'Part-Time Class Session Organizer',
    desc: 'Desktop application developed using C# to manage student records, schedules and class sessions efficiently.',
    stack: ['C#', '.NET', 'Windows Form', 'SQL Server'],
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Sales Management System',
    desc: 'Desktop application designed to manage products, customers, inventory and sales transactions while generating useful reports for business operations.',
    stack: ['Java', 'Netbeans', 'SQL'],
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Personal Portfolio Website',
    desc: 'Responsive portfolio website showcasing my skills, projects, education and DevOps implementation with automated deployment using GitHub Actions and GitHub Pages.',
    stack: ['HTML', 'CSS', 'JavaScript', 'GitHub Actions'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="hidden">
      <div className="section-tag">My Work</div>
      <h2 className="section-heading">
        Latest <span>Projects</span>
      </h2>
      <p className="section-sub">
        Academic and personal projects that demonstrate my technical skills
        and passion for software development.
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-icon">
              <i className={project.icon}></i>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-stack">
              {project.stack.map((tech, j) => (
                <span className="p-badge" key={j}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
