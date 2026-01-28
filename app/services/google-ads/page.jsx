import Link from 'next/link';
import HeroSection from '@/app/components/HeroSection';
import CTASection from '@/app/components/CTASection';
import '@/app/components.css';

export const metadata = {
  title: 'Google Ads Management - Freelancer Hub',
  description: 'Drive qualified traffic and conversions with expertly managed Google Ads campaigns optimized for ROI.',
};

export default function GoogleAdsPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Google Ads Management</h1>
            <p>
              Drive qualified traffic and conversions with expertly managed Google Ads campaigns optimized for maximum ROI.
              Our data-driven approach ensures every rupee spent delivers measurable results.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-large">
                Get Started
              </Link>
            </div>
          </div>

          <div className="hero-illustration">
            <img src="/images/google-marketing.png" alt="Google Ads Illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <h2>What's Included</h2>
          <p className="mb-xl">Our comprehensive Google Ads management service covers everything you need:</p>

          <div className="whats-included">
            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Campaign Strategy</h4>
                <p>Custom strategy tailored to your business goals and target audience.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Keyword Research</h4>
                <p>In-depth keyword analysis to capture high-intent customers.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Ad Copy Optimization</h4>
                <p>Compelling ad copy that drives clicks and conversions.</p>
              </div>
            </div>

   
            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Monthly Reporting</h4>
                <p>Transparent reports showing performance, ROI, and insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       

      <section>
        <div className="container">
          <h2 className="text-center mb-xl">Key Benefits</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
            <div className="card">
              <h3>📈 Measurable Growth</h3>
              <p>Track every metric that matters. See exactly how your investment drives business growth.</p>
            </div>

            <div className="card">
              <h3>🎯 Precision Targeting</h3>
              <p>Reach the right people at the right time with advanced audience targeting and segmentation.</p>
            </div>

            <div className="card">
              <h3>💰 Cost Efficiency</h3>
              <p>Eliminate wasted spend. Our optimization ensures maximum conversions per rupee invested.</p>
            </div>

            <div className="card">
              <h3>⚡ Quick Results</h3>
              <p>See tangible improvements in leads and sales within weeks of campaign launch.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
