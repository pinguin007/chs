import React from 'react';

const Charity = () => (
  <div className="charity-section">
    <div className="charity-content">
      <h3>Illuminating Lives Through Giving</h3>
      <p>At CHS, our mission extends beyond business success. We believe in creating a brighter universe for all by dedicating 10% of our proceeds to empowering underprivileged communities worldwide. Through strategic partnerships with global charities, we're helping to illuminate paths out of poverty, provide access to education, and create opportunities for sustainable growth.</p>
      <div className="charity-pillars">
        <div className="pillar">
          <div className="pillar-icon education" />
          <h4>Education Access</h4>
          <p>Supporting programs that provide quality education and digital literacy training.</p>
        </div>
        <div className="pillar">
          <div className="pillar-icon community" />
          <h4>Community Development</h4>
          <p>Building sustainable infrastructure and empowering local initiatives.</p>
        </div>
        <div className="pillar">
          <div className="pillar-icon innovation" />
          <h4>Technology for Good</h4>
          <p>Bringing innovative solutions to underserved communities.</p>
        </div>
      </div>
    </div>
    <div className="charity-visual">
      <div className="impact-globe" />
    </div>
  </div>
);

export default Charity;