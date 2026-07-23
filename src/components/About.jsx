export default function About() {
  return (
    <section id="about" className="hidden">
      <div className="section-tag">Get To Know Me</div>

      <h2 className="section-heading">
        About<span> Me</span>
      </h2>
      <p className="section-sub">
        Passionate Software Engineering student with a strong interest in
        web development, software architecture, and DevOps practices.
      </p>

      <div className="about-grid">
        <div className="about-para">
          <p>
            Hello! I&apos;m <strong>Achini Thesanya</strong>, a Software
            Engineering student who enjoys building modern applications
            and learning new technologies. My passion lies in creating
            solutions that combine functionality, creativity and efficiency.
          </p>
          <p>
            Throughout my academic journey I have gained experience in
            programming, database management, software design and web
            development. I enjoy working on projects that challenge my
            problem-solving abilities and allow me to improve my technical skills.
          </p>
          <p>
            Currently I am expanding my knowledge in Git, GitHub,
            CI/CD pipelines and modern development practices while
            pursuing my goal of becoming a professional Software Engineer.
          </p>

          <div className="about-info">
            <div className="info-item">
              <span className="info-label">Name</span>
              <span className="info-value">Achini Thesanya</span>
            </div>
            <div className="info-item">
              <span className="info-label">Role</span>
              <span className="info-value">Software Engineering Student</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">Nugegoda, Sri Lanka</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">achini.thesanya@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Languages</span>
              <span className="info-value">Sinhala, English</span>
            </div>
          </div>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-value">2+</div>
            <div className="about-card-label">Projects Completed</div>
          </div>
          <div className="about-card">
            <div className="about-card-value">10+</div>
            <div className="about-card-label">Technologies Learned</div>
          </div>
          <div className="about-card">
            <div className="about-card-value">3+</div>
            <div className="about-card-label">Programming Languages</div>
          </div>
          <div className="about-card">
            <div className="about-card-value">100%</div>
            <div className="about-card-label">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  )
}
