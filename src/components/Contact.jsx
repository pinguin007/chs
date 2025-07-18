import React from 'react';

const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="section-intro">
      <h2>Partner with Us in Global Innovation</h2>
      <p>Ready to break down barriers and create meaningful connections across cultures? Let's explore how CHS can transform your global business landscape.</p>
    </div>
    <div className="contact-container">
      <div className="contact-form">
        <div className="contact-card">
          <h4>Start Your Global Journey</h4>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Business Email" />
            <input type="text" placeholder="Company Name" />
            <select>
              <option value="">Select Industry</option>
              <option value="tech">Technology</option>
              <option value="finance">Financial Services</option>
              <option value="healthcare">Healthcare</option>
              <option value="retail">Retail</option>
            </select>
            <textarea placeholder="Tell us about your needs" />
            <button type="submit" className="btn">Connect With Our Team</button>
          </form>
        </div>
      </div>
      <div className="contact-info">
        <div className="contact-card">
          <h4>Global Partnership</h4>
          <p>Join our network of international partners and access cross-cultural expertise.</p>
          <button className="btn">Partner With Us</button>
        </div>
        <div className="contact-card">
          <h4>Strategic Consultation</h4>
          <p>Discover how our integrated solutions can drive your global success.</p>
          <button className="btn">Schedule Meeting</button>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;