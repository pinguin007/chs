import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => (
  <footer className="footer" id="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <div className="footer-logo">CHS</div>
        <p>Bridging Innovation with Human Connection.</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Clear Human Solutions. All Rights Reserved.</p>
      <div className="legal-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;