const certificates = [
  {
    img: `${import.meta.env.BASE_URL}images/Python_for_Beginners_E-Certificate.png`,
    alt: 'Python Certificate',
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    pending: false,
  },
  {
    img: `${import.meta.env.BASE_URL}images/cybersecuritypending.png`,
    alt: 'Cyber Security Certificate',
    title: 'Certificate in Cyber Security-SLIIT',
    issuer: 'Certificate Pending',
    pending: true,
  },
  {
    img: `${import.meta.env.BASE_URL}images/practical english pending.png`,
    alt: 'Practical English Certificate',
    title: 'Certificate in Practical English-SLIIT',
    issuer: 'Certificate Pending',
    pending: true,
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="hidden">
      <div className="section-tag">Achievements</div>
      <h2 className="section-heading">
        My <span>Certificates</span>
      </h2>
      <p className="section-sub">
        Professional certifications and completed courses.
        More certificates will be added as I continue learning.
      </p>

      <div className="certificates-grid">
        {certificates.map((cert, i) => (
          <div className={`certificate-card${cert.pending ? ' pending' : ''}`} key={i}>
            <img src={cert.img} alt={cert.alt} />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
