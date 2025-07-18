import React from 'react';

const Team = () => (
  <section className="team-section" id="team">
    <h2>Global Leadership</h2>
    <div className="team-container">
      <div className="team-intro">
        <h3>Visionaries in Cross-Cultural Innovation</h3>
        <p>Our diverse leadership team combines expertise in cultural communication, technological innovation, and sustainable food solutions to drive global transformation.</p>
      </div>
      <div className="team-grid">
        <div className="team-member">
          <div className="member-image">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team member" />
            <div className="member-overlay" />
          </div>
          <div className="member-info">
            <h4>Global Communications Director</h4>
            <p>Toronto HQ</p>
            <div className="member-description">Leading our innovative translation and cultural adaptation solutions</div>
            <div className="member-social">
              <span>LinkedIn</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="member-image">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team member" />
            <div className="member-overlay" />
          </div>
          <div className="member-info">
            <h4>Technology Innovation Lead</h4>
            <p>London Office</p>
            <div className="member-description">Spearheading digital transformation and AI integration</div>
            <div className="member-social">
              <span>LinkedIn</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="member-image">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Team member" />
            <div className="member-overlay" />
          </div>
          <div className="member-info">
            <h4>Food & Beverage Innovation Director</h4>
            <p>New York Office</p>
            <div className="member-description">Driving sustainable and culturally-conscious food solutions</div>
            <div className="member-social">
              <span>LinkedIn</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Team;