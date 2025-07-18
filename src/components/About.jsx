import React from 'react';

const About = () => (
  <section className="content-speed" id="about">
    <h2>About CHS</h2>
    <div className="section-intro">
      <p>Clear Human Solutions is more than a company—we're a global catalyst for change. With a unique blend of innovation and expertise, we bridge cultural gaps and technological horizons to create meaningful connections in today's interconnected world.</p>
    </div>
    <div className="features-row">
      <div className="feature-card">
        <h3>Global Reach</h3>
        <p>Head offices in Toronto with strategic hubs across North America and Europe.</p>
        <div className="feature-visual" />
      </div>
      <div className="feature-card">
        <h3>Integrated Solutions</h3>
        <p>Best-in-class subsidiaries united under one roof.</p>
        <div className="feature-visual" />
      </div>
      <div className="feature-card">
        <h3>Local Expertise</h3>
        <p>Leveraging local insights with international expertise.</p>
        <div className="feature-visual" />
      </div>
    </div>
  </section>
);

export default About;