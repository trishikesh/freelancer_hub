import Link from 'next/link';
import CTASection from '@/app/components/CTASection';
import '@/app/components.css';

export const metadata = {
  title: 'Local SEO Services - Freelancer Hub',
  description: 'Boost your online visibility and rank higher in local searches to capture customers in your service area.',
};

export default function LocalSEOPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Local SEO</h1>
            <p>
              Boost your online visibility and rank higher in local searches to capture customers in your service area.
              Get found by customers actively searching for what you offer right now.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-large">
                Get Started
              </Link>
            </div>
          </div>

          <div className="hero-illustration">
            <img src="/images/seo-keyword-optimization.png" alt="Local SEO Illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <h2>What's Included</h2>
          <p className="mb-xl">Our comprehensive local SEO service includes:</p>

          <div className="whats-included">
            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Local Keyword Research</h4>
                <p>Identify high-intent keywords your target customers are searching for locally.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>On-Page Optimization</h4>
                <p>Optimize title tags, meta descriptions, headers, and content for local search.</p>
              </div>
            </div>

    

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Schema Markup</h4>
                <p>Implement structured data for better local search visibility.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Monthly Tracking</h4>
                <p>Monitor rankings, traffic, and customer acquisition from local search.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="text-center mb-xl">Local SEO Benefits</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
            <div className="card">
              <h3>👥 Qualified Local Customers</h3>
              <p>Attract customers actively searching for your services in your geographic area.</p>
            </div>

            <div className="card">
              <h3>🏆 Higher Rankings</h3>
              <p>Dominate local search results and beat your competition where it matters most.</p>
            </div>

            <div className="card">
              <h3>💡 Less Competitive</h3>
              <p>Local SEO is less saturated than national SEO, making it easier to win top positions.</p>
            </div>

            <div className="card">
              <h3>📍 Geographic Targeting</h3>
              <p>Target specific cities, neighborhoods, or service areas with precision.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
