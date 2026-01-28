import Link from 'next/link';
import HeroSection from '@/app/components/HeroSection';
import CTASection from '@/app/components/CTASection';
import '@/app/components.css';

export const metadata = {
  title: 'GMB Management - Freelancer Hub',
  description: 'Optimize your Google Business Profile to attract local customers and dominate local search results.',
};

export default function GMBPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Google Business Profile Management</h1>
            <p>
              Optimize your online presence and attract local customers. Our GMB management service ensures your business is
              visible, credible, and easy to find when customers search for your services.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-large">
                Get Started
              </Link>
            </div>
          </div>

          <div className="hero-illustration">
            <img src="/images/gmb.png" alt="GMB Illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <h2>What's Included</h2>
          <p className="mb-xl">Complete Google Business Profile optimization and management:</p>

          <div className="whats-included">
            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Profile Optimization</h4>
                <p>Complete setup and optimization of your Google Business Profile for maximum visibility.</p>
              </div>
            </div>



   

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Local SEO Integration</h4>
                <p>Seamless integration with local SEO strategy to boost rankings and visibility.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Q&A Management</h4>
                <p>Proactive management of customer questions to provide instant information.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Monthly Performance Reports</h4>
                <p>Detailed insights into views, actions, and customer engagement metrics.</p>
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
              <h3>🎯 Local Visibility</h3>
              <p>Appear at the top of local search results when customers look for your services.</p>
            </div>

            <div className="card">
              <h3>⭐ Trust & Credibility</h3>
              <p>Build authority with authentic customer reviews, high ratings, and social proof.</p>
            </div>

            <div className="card">
              <h3>💬 Direct Engagement</h3>
              <p>Respond to reviews and questions directly, showing you care about customer feedback.</p>
            </div>

            <div className="card">
              <h3>📊 Actionable Insights</h3>
              <p>Understand customer behavior through detailed analytics and performance data.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
