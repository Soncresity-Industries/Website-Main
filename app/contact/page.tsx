'use client';

import { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    setForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="page-overlay">
      <section className="content-section">
        <div className="container">
          <h3 style={{ textAlign: 'center', color: '#fff', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '3rem' }}>
            Contact Us
          </h3>

          <div className="contact-content">
            {/* Contact Information */}
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <p>
                Have a question, want to collaborate, or need support with one of our projects?
                We'd love to hear from you. Reach out through any of <a href="/about#connect">our channels</a> or
                use the contact form.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <h4>Email</h4>
                  <p>info@soncresity.com</p>
                </div>

                <div className="contact-item">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>

                <div className="contact-item">
                  <h4>Response Time</h4>
                  <p>We typically respond within 24-48 hours during business days.</p>
                </div>

                <div className="contact-item">
                  <h4>Project Inquiries</h4>
                  <p>
                    For custom development projects or collaboration opportunities,
                    please include detailed requirements in your message.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={form.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
