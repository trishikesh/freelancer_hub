'use client';

import Link from 'next/link';
import '../components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">🚀</div>
              <span style={{ fontSize: '20px', fontWeight: '700' }}>Freelancer Hub</span>
            </div>
            <p className="footer-description">
              We create digital solutions that grow your business. Data-driven strategies, transparent reporting,
              and proven results.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link" title="Facebook">
                f
              </a>
              <a href="#" className="footer-social-link" title="Twitter">
                𝕏
              </a>
              <a href="#" className="footer-social-link" title="LinkedIn">
                in
              </a>
              <a href="https://www.instagram.com/freelancerhub08?igsh=NnJ4YW02bnd4enQy&utm_source=qr" className="footer-social-link" title="Instagram">
                📷
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <Link href="/services/google-ads">Google Ads</Link>
              </li>
              <li>
                <Link href="/services/gmb-management">GMB Management</Link>
              </li>
              <li>
                <Link href="/services/local-seo">Local SEO</Link>
              </li>
              <li>
                <Link href="/services/social-media">Social Media</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <strong>Email:</strong>
              <br />
              <a href="mailto:tanya.24.rishikesh@gmail.com">tanya.24.rishikesh@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <strong>Phone:</strong>
              <br />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className="footer-contact-item">
              <strong>Hours:</strong>
              <br />
              Mon - Fri: 9AM - 6PM IST
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Freelancer Hub. All rights reserved. | Crafted with ❤️ for your digital success.</p>
        </div>
      </div>
    </footer>
  );
}
