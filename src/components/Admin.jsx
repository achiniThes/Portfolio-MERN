import { useEffect, useState } from "react";

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: ""
  });
  const [editingId, setEditingId] = useState(null);

  const API_URL = "http://localhost:5000/api/projects";

  const fetchProjects = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await fetch(`${API_URL}/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
    }

    resetForm();
    fetchProjects();
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      githubLink: project.githubLink || ""
    });
    setEditingId(project._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchProjects();
  };

  const resetForm = () => {
    setForm({ title: "", description: "", technologies: "", githubLink: "" });
    setEditingId(null);
  };

  return (
    <section id="admin">
      <div className="section-tag">Manage</div>
      <h2 className="section-heading">
        Admin <span>Dashboard</span>
      </h2>
      <p className="section-sub">
        Add, update, or remove projects shown on your Projects page.
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "0 auto 50px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label className="info-label">Project Title</label>
          <input
            name="title"
            placeholder="Project title"
            value={form.title}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label className="info-label">Description</label>
          <textarea
            name="description"
            placeholder="Short project description"
            value={form.description}
            onChange={handleChange}
            required
            rows="4"
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label className="info-label">Technologies (comma separated)</label>
          <input
            name="technologies"
            placeholder="React, MongoDB, Express"
            value={form.technologies}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label className="info-label">Project Link (optional)</label>
          <input
            name="githubLink"
            placeholder="https://github.com/username/project"
            value={form.githubLink}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ display: "flex", gap: "15px" }}>
          <button type="submit" className="btn">
            {editingId ? "Update Project" : "Save Project"}
          </button>
          <button type="button" onClick={resetForm} className="btn" style={{ background: "#475569" }}>
            Reset
          </button>
        </div>
      </form>

      <h3 style={{ textAlign: "center", marginBottom: "20px", color: "var(--accent)" }}>
        Existing Projects
      </h3>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-stack" style={{ marginBottom: "15px" }}>
              {project.technologies.split(",").map((tech, j) => (
                <span className="p-badge" key={j}>{tech.trim()}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="btn" onClick={() => handleEdit(project)}>
                Edit
              </button>
              <button
                className="btn"
                style={{ background: "#dc2626" }}
                onClick={() => handleDelete(project._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}