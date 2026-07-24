import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));
  }, []);

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
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <div className="project-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-stack">
              {project.technologies
                .split(",")
                .map((tech, j) => (
                  <span className="p-badge" key={j}>{tech.trim()}</span>
                ))}
            </div>
            {project.githubLink && (
              
                <a href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ marginTop: "15px", display: "inline-block" }}
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}