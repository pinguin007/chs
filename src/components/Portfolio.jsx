import React from 'react';

const Portfolio = () => (
  <section className="testimonials" id="portfolio">
    <h2>Our Portfolio Success Stories</h2>
    <div className="section-intro">
      <p>Discover how our innovative solutions have transformed businesses and communities worldwide. Each project represents our commitment to excellence and our passion for creating meaningful impact through technology and cultural understanding.</p>
    </div>
    <div className="testimonials-showcase">
      <div className="testimonial-featured">
        <div className="testimonial-content">
          <div className="testimonial-header">
            <h3>ClearSpeak</h3>
            <div className="testimonial-badge">Featured Project</div>
          </div>
              <p>A voice-centric translation app tailored for low-literacy and multilingual user segments. Seamlessly integrates with public sector and financial institutions.</p>
              <div className="testimonial-stats">
                <div className="stat">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Daily Users</span>
                </div>
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Languages</span>
                </div>
              </div>
            </div>
            <div className="testimonial-visual featured" />
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-visual" />
              <div className="testimonial-content">
                <h4>Ease Tech Services</h4>
                <p>A three-phase engagement model—Diagnose, Build, Grow—turning technology investments into competitive advantages.</p>
                <div className="testimonial-tag">Technology</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-visual" />
              <div className="testimonial-content">
                <h4>IceBuddy</h4>
                <p>Innovative frozen fruit enhancers revolutionizing beverage experiences with patented technology.</p>
                <div className="testimonial-tag">Food & Beverage</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-visual" />
              <div className="testimonial-content">
                <h4>HalalGoBox</h4>
                <p>Halal-certified snack kits with social impact, connecting cultures through curated food experiences.</p>
                <div className="testimonial-tag">Food & Beverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
);

export default Portfolio;