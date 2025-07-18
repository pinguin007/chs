import React from 'react';

const Solutions = () => (
  <section className="cards-section" id="solutions">
    <h2>Our Solutions</h2>
    <div className="section-intro">
      <p>At CHS, we deliver transformative solutions across three key domains, each designed to meet the evolving needs of modern businesses and consumers. Our integrated approach combines cutting-edge technology with deep industry expertise to create lasting impact.</p>
    </div>
    <div className="solutions-grid">
      <div className="solution-card">
        <div className="solution-visual" />
        <div className="solution-content">
          <h3>Communication</h3>
          <p>Breaking language barriers with innovative translation solutions.</p>
        </div>
      </div>
      <div className="solution-card">
        <div className="solution-visual" />
        <div className="solution-content">
          <h3>Technology</h3>
          <p>Empowering businesses with cutting-edge digital transformation.</p>
        </div>
      </div>
      <div className="solution-card">
        <div className="solution-visual" />
        <div className="solution-content">
          <h3>Food & Beverage</h3>
          <p>Creating inclusive and innovative consumer products.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Solutions;