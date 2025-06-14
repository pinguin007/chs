import './App.css';

function App() {
  return (
    <div className="main-wrapper">
      <nav className="navbar">
        <div className="logo">CHS</div>
        <ul className="nav-links">
          <li>Solutions</li>
          <li>Industries</li>
          <li>Portfolio</li>
          <li>About Us</li>
        </ul>
        <div className="nav-actions">
          <button className="btn small">Contact Us</button>
        </div>
      </nav>
      <header className="hero">
        <div className="hero-content">
          <h1>Bridging Innovation with Human Connection</h1>
          <p>Clear Human Solutions empowers global businesses through seamless communication, cutting-edge technology, and innovative food & beverage solutions—creating meaningful connections in an interconnected world.</p>
          <div className="hero-actions">
            <button className="btn">Connect With Us</button>
            <button className="btn outline">Our Solutions</button>
          </div>
        </div>
        <div className="hero-image" />
      </header>
      <section className="cards-section">
        <h2>Our Solutions</h2>
        <div className="section-intro">
          <p>At CHS, we deliver transformative solutions across three key domains, each designed to meet the evolving needs of modern businesses and consumers. Our integrated approach combines cutting-edge technology with deep industry expertise to create lasting impact.</p>
        </div>
        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-visual"></div>
            <div className="solution-content">
              <h3>Communication</h3>
              <p>Breaking language barriers with innovative translation solutions.</p>
            </div>
          </div>
          <div className="solution-card">
            <div className="solution-visual"></div>
            <div className="solution-content">
              <h3>Technology</h3>
              <p>Empowering businesses with cutting-edge digital transformation.</p>
            </div>
          </div>
          <div className="solution-card">
            <div className="solution-visual"></div>
            <div className="solution-content">
              <h3>Food & Beverage</h3>
              <p>Creating inclusive and innovative consumer products.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="trusted-by">
        <h2>Trusted By Leading Organizations</h2>
        <div className="section-intro">
          <p>Our solutions power innovation across diverse industries, serving organizations that shape the future. From government agencies to Fortune 500 companies, we're proud to partner with leaders who trust us to deliver transformative results.</p>
        </div>
        <div className="partners-showcase">
          <div className="partner-category">
            <div className="partner-icon"></div>
            <h3>Public Sector</h3>
            <p>Government agencies and public institutions leveraging our solutions.</p>
          </div>
          <div className="partner-category">
            <div className="partner-icon"></div>
            <h3>Financial Services</h3>
            <p>Banks and financial institutions enhancing customer communication.</p>
          </div>
          <div className="partner-category">
            <div className="partner-icon"></div>
            <h3>Healthcare</h3>
            <p>Healthcare providers improving patient engagement and care delivery.</p>
          </div>
          <div className="partner-category">
            <div className="partner-icon"></div>
            <h3>Education</h3>
            <p>Educational institutions breaking down language barriers in learning.</p>
          </div>
          <div className="partner-category">
            <div className="partner-icon"></div>
            <h3>Retail</h3>
            <p>Retail chains enhancing customer experience across markets.</p>
          </div>
          <div className="partner-category">
            <div className="partner-icon"></div>
            <h3>Hospitality</h3>
            <p>Hotels and restaurants delivering exceptional guest experiences.</p>
          </div>
        </div>
      </section>
      <section className="content-speed">
        <h2>About CHS</h2>
        <div className="section-intro">
          <p>Clear Human Solutions is more than a company—we're a global catalyst for change. With a unique blend of innovation and expertise, we bridge cultural gaps and technological horizons to create meaningful connections in today's interconnected world.</p>
        </div>
        <div className="features-row">
          <div className="feature-card">
            <h3>Global Reach</h3>
            <p>Head offices in Toronto with strategic hubs across North America and Europe.</p>
            <div className="feature-visual"></div>
          </div>
          <div className="feature-card">
            <h3>Integrated Solutions</h3>
            <p>Best-in-class subsidiaries united under one roof.</p>
            <div className="feature-visual"></div>
          </div>
          <div className="feature-card">
            <h3>Local Expertise</h3>
            <p>Leveraging local insights with international expertise.</p>
            <div className="feature-visual"></div>
          </div>
        </div>
      </section>
      <section className="testimonials">
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
            <div className="testimonial-visual featured"></div>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-visual"></div>
              <div className="testimonial-content">
                <h4>Ease Tech Services</h4>
                <p>A three-phase engagement model—Diagnose, Build, Grow—turning technology investments into competitive advantages.</p>
                <div className="testimonial-tag">Technology</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-visual"></div>
              <div className="testimonial-content">
                <h4>IceBuddy</h4>
                <p>Innovative frozen fruit enhancers revolutionizing beverage experiences with patented technology.</p>
                <div className="testimonial-tag">Food & Beverage</div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-visual"></div>
              <div className="testimonial-content">
                <h4>HalalGoBox</h4>
                <p>Halal-certified snack kits with social impact, connecting cultures through curated food experiences.</p>
                <div className="testimonial-tag">Food & Beverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="universe">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="universe-content">
          <h2>Reaching for the Stars, Grounded in Humanity</h2>
          <p>Like stars illuminating the cosmos, Clear Human Solutions connects the dots across the business universe. We're pioneering new frontiers in communication, technology, and innovation—creating constellations of solutions that bring people closer in our vast global space.</p>
          <div className="impact-stats">
            <div className="stat-item">
              <span className="stat-number">10%</span>
              <span className="stat-label">Of All Proceeds</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Charities Supported</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100K+</span>
              <span className="stat-label">Lives Impacted</span>
            </div>
          </div>
          <div className="universe-visual" />
        </div>
        <div className="charity-section">
          <div className="charity-content">
            <h3>Illuminating Lives Through Giving</h3>
            <p>At CHS, our mission extends beyond business success. We believe in creating a brighter universe for all by dedicating 10% of our proceeds to empowering underprivileged communities worldwide. Through strategic partnerships with global charities, we're helping to illuminate paths out of poverty, provide access to education, and create opportunities for sustainable growth.</p>
            <div className="charity-pillars">
              <div className="pillar">
                <div className="pillar-icon education"></div>
                <h4>Education Access</h4>
                <p>Supporting programs that provide quality education and digital literacy training.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon community"></div>
                <h4>Community Development</h4>
                <p>Building sustainable infrastructure and empowering local initiatives.</p>
              </div>
              <div className="pillar">
                <div className="pillar-icon innovation"></div>
                <h4>Technology for Good</h4>
                <p>Bringing innovative solutions to underserved communities.</p>
              </div>
            </div>
          </div>
          <div className="charity-visual">
            <div className="impact-globe"></div>
          </div>
        </div>
      </section>
      <section className="roadmap-section">
        <h2>Strategic Growth Roadmap</h2>
        <div className="roadmap-container">
          <div className="roadmap-timeline">
            <div className="roadmap-step">
              <div className="step-content">
                <div className="step-marker">1</div>
                <h4>Phase 1: Global Foundation</h4>
                <p>Building Cross-Cultural Bridges</p>
                <ul className="step-details">
                  <li>Cultural and market research across regions</li>
                  <li>Development of multilingual platforms</li>
                  <li>Establishment of international partnerships</li>
                </ul>
              </div>
              <div className="step-visual"></div>
            </div>
            <div className="roadmap-step">
              <div className="step-content">
                <div className="step-marker">2</div>
                <h4>Phase 2: Innovation Integration</h4>
                <p>Connecting Technology with Humanity</p>
                <ul className="step-details">
                  <li>Launch of AI-powered communication tools</li>
                  <li>Development of cultural adaptation systems</li>
                  <li>Integration of sustainable food technologies</li>
                </ul>
              </div>
              <div className="step-visual"></div>
            </div>
            <div className="roadmap-step">
              <div className="step-content">
                <div className="step-marker">3</div>
                <h4>Phase 3: Market Expansion</h4>
                <p>Scaling Global Impact</p>
                <ul className="step-details">
                  <li>Expansion into emerging markets</li>
                  <li>Launch of cross-cultural food products</li>
                  <li>Enhancement of digital transformation services</li>
                </ul>
              </div>
              <div className="step-visual"></div>
            </div>
            <div className="roadmap-step">
              <div className="step-content">
                <div className="step-marker">4</div>
                <h4>Phase 4: Sustainable Future</h4>
                <p>Creating Lasting Connections</p>
                <ul className="step-details">
                  <li>Implementation of sustainable practices</li>
                  <li>Development of next-gen communication solutions</li>
                  <li>Expansion of cultural innovation programs</li>
                </ul>
              </div>
              <div className="step-visual"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section">
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
                <div className="member-overlay"></div>
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
                <div className="member-overlay"></div>
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
                <div className="member-overlay"></div>
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
      <section className="contact-section">
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
                <textarea placeholder="Tell us about your needs"></textarea>
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
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">CHS</div>
            <p>Transforming businesses through innovative solutions.</p>
            <div className="social-links">
              <span>LinkedIn</span>
              <span>Twitter</span>
              <span>GitHub</span>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Solutions</h4>
              <ul>
                <li>ClearSpeak</li>
                <li>Ease Tech Services</li>
                <li>IceBuddy</li>
                <li>HalalGoBox</li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                <li>Documentation</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Clear Human Solutions. All rights reserved.</p>
          <div className="legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

