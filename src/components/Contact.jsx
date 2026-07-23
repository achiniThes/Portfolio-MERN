import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('Thank you! Your message has been received')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="hidden">
      <div className="section-tag">Get In Touch</div>
      <h2 className="section-heading">
        Contact <span>Me</span>
      </h2>
      <p className="section-sub">
        Feel free to reach out for projects, collaborations, or just a chat.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let&apos;s talk 👋</h3>
          <p>Email: achini.thesanya@gmail.com</p>
          <p>Phone: +94 761347936</p>
          <p>Location: Nugegoda, Sri Lanka</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          />
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}
