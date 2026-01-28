'use client';

import Link from 'next/link';
import { useState } from 'react';
import '../components.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="navbar-logo">
          <div className="navbar-logo-icon">🚀</div>
          <span>Freelancer Hub</span>
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link href="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="dropdown">
            <div className="dropdown-trigger">
              <span>Services</span>
              <span>▼</span>
            </div>
            <ul className="dropdown-menu">
              <li>
                <Link href="/services/google-ads" className="dropdown-item">
                  Google Ads Management
                </Link>
              </li>
              <li>
                <Link href="/services/gmb-management" className="dropdown-item">
                  GMB Management
                </Link>
              </li>
              <li>
                <Link href="/services/local-seo" className="dropdown-item">
                  Local SEO
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="dropdown-item">
                  Social Media Management
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/portfolio" className="navbar-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="navbar-link">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="navbar-cta">
          <Link href="/contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
}
