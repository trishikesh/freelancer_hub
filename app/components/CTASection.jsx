'use client';

import Link from 'next/link';
import '../components.css';

export default function CTASection() {
  return (
    <section>
      <div className="container">
        <div className="cta-section">
          <h2>Ready to get started?</h2>
          <p>Let's transform your digital presence and drive real business growth.</p>
          <Link href="/contact" className="btn btn-secondary">
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
