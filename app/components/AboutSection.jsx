'use client';

import '../components.css';

export default function AboutSection() {
  return (
    <section>
      <div className="container">
        <div className="about-container">
          <div>
            <h2>Our Agency</h2>
            <p>
              We believe in the power of data. Our analytics-driven approach allows us to make informed decisions that maximize
              your marketing performance and deliver sustainable results.
            </p>
            <p>
              Every campaign is custom-designed, thoroughly tested, and optimized for your specific goals. We focus on transparency,
              regular communication, and measurable outcomes so you always know where your investment is going and what returns it's generating.
            </p>
            <p style={{ marginBottom: '24px' }}>
              At Freelancer Hub, we're not just a service provider—we're your growth partner, committed to your long-term success
              in the digital landscape.
            </p>
            <a href="/portfolio" className="btn btn-secondary">
              Read More
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="/images/aboutus.png" alt="About Us Illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
