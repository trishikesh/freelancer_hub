import Link from 'next/link';
import HeroSection from '@/app/components/HeroSection';
import CTASection from '@/app/components/CTASection';
import '@/app/components.css';

export const metadata = {
  title: 'Social Media Management - Freelancer Hub',
  description: 'Build your brand presence with strategic social media management and content creation.',
};

export default function SocialMediaPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Social Media Management</h1>
            <p>
              Build authentic connections with your audience. Our social media experts craft engaging content, manage
              communities, and drive measurable results across all major platforms.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-large">
                Get Started
              </Link>
            </div>
          </div>

          <div className="hero-illustration">
            <img src="/images/socialmedia.png" alt="Social Media Illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <h2>What's Included</h2>
          <p className="mb-xl">Complete social media management to build your brand and engage your audience:</p>

          <div className="whats-included">
            
            

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Content Creation</h4>
                <p>Professional graphics, videos, and copywriting that resonates with your audience.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Community Management</h4>
                <p>Engage with followers, respond to comments, and build a loyal community.</p>
              </div>
            </div>


            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Influencer Partnerships</h4>
                <p>Connect with relevant influencers to expand your reach and credibility.</p>
              </div>
            </div>

            <div className="included-item">
              <div className="included-icon">✓</div>
              <div className="included-text">
                <h4>Analytics & Reporting</h4>
                <p>Detailed performance insights showing engagement, reach, and ROI metrics.</p>
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
              <h3>🎨 Brand Awareness</h3>
              <p>Build strong brand presence and recognition across your target audience.</p>
            </div>

            <div className="card">
              <h3>💬 Customer Connection</h3>
              <p>Create meaningful interactions that build loyalty and strengthen relationships.</p>
            </div>

            <div className="card">
              <h3>🔥 Lead Generation</h3>
              <p>Drive quality leads directly from social platforms to your sales funnel.</p>
            </div>

            <div className="card">
              <h3>🎯 Targeted Reach</h3>
              <p>Reach specific demographics and interests with precision-targeted campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
