import { useEffect, useState } from "react";
import { projectsEndpoint } from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      fetch(projectsEndpoint())
        .then((res) => {
          if (!res.ok) throw new Error("Could not load projects.");
          return res.json();
        })
        .then((data) => setProjects(data))
        .catch(() => setError("Projects are currently unavailable. Please try again later."));
    } catch (err) {
      setError(err.message);
    }
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
      {error && <p className="section-sub">{error}</p>}
    </section>
  );
}
