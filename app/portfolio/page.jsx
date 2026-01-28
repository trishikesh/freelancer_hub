import CTASection from '@/app/components/CTASection';
import '@/app/components.css';

export const metadata = {
  title: 'Portfolio - Freelancer Hub',
  description: 'View our successful projects and case studies showcasing our digital marketing expertise.',
};

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      name: 'E-Commerce Store',
      description: 'Increased Google Ads ROI by 150% through campaign optimization and strategic bidding.',
      testimonial: 'They transformed our ad performance in just 3 months!'
    },
    {
      id: 2,
      name: 'Local Service Business',
      description: 'Ranked #1 for 12 local keywords and increased foot traffic by 200%.',
      testimonial: 'More customers walking through the door than ever before.'
    },
    {
      id: 3,
      name: 'SAAS Company',
      description: 'Built social media presence from 0 to 15K followers with 8% engagement rate.',
      testimonial: 'Incredible growth in brand awareness and lead quality.'
    },
    {
      id: 4,
      name: 'Dental Practice',
      description: 'Optimized GMB profile, increased patient inquiries by 180% within 4 months.',
      testimonial: 'Our appointment book is now fully booked every week.'
    },
    {
      id: 5,
      name: 'Real Estate Agency',
      description: 'Multi-channel campaign generating 50+ qualified leads per month.',
      testimonial: 'Best marketing investment we\'ve ever made.'
    },
    {
      id: 6,
      name: 'Beauty Salon Chain',
      description: 'Expanded from 1 to 5 locations through data-driven marketing and local SEO.',
      testimonial: 'Gave us the blueprint for scaling our business.'
    }
  ];

  return (
    <main>
      <section className="hero">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '24px' }}>Our Portfolio</h1>
          <p style={{ fontSize: '18px', color: '#7f8c8d', marginBottom: '0' }}>
            Proven results across diverse industries. Real clients, real growth, real success.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-card">
                <div className="portfolio-image">📸 Client Project</div>
                <div className="portfolio-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div style={{ background: '#f9f9f9', padding: '12px', borderRadius: '8px', marginTop: '12px' }}>
                    <p style={{ fontStyle: 'italic', margin: 0, fontSize: '14px', color: '#7f8c8d' }}>
                      "{item.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2>Why They Trust Us</h2>
            <p>Our clients see consistent, measurable results because we combine expertise, strategy, and dedication.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#ff6b35', fontSize: '36px', marginBottom: '8px' }}>500+</h3>
              <p>Clients Successfully Served</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#ff6b35', fontSize: '36px', marginBottom: '8px' }}>₹50M+</h3>
              <p>Client Revenue Generated</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#ff6b35', fontSize: '36px', marginBottom: '8px' }}>95%</h3>
              <p>Client Retention Rate</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#ff6b35', fontSize: '36px', marginBottom: '8px' }}>10 Years</h3>
              <p>Industry Experience</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
