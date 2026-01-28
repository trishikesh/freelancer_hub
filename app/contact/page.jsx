import ContactForm from '@/app/components/ContactForm';
import '@/app/components.css';

export const metadata = {
  title: 'Contact Us - Freelancer Hub',
  description: 'Get in touch with our team to discuss your digital marketing needs and business goals.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ marginBottom: '24px' }}>Let's Work Together</h1>
          <p style={{ fontSize: '18px', color: '#7f8c8d', marginBottom: '0' }}>
            Ready to grow your business? Get in touch with our team and let's create a digital strategy that drives results.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start', marginBottom: '64px' }}>
            <div>
              <h2>Get In Touch</h2>
              <p style={{ marginBottom: '32px' }}>
                Have questions about our services? Want to discuss your project? Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ marginBottom: '8px' }}>📧 Email</h4>
                <a href="mailto:tanya.24.rishikesh@gmail.com" style={{ color: '#ff6b35', textDecoration: 'none' }}>
                  tanya.24.rishikesh@gmail.com
                </a>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ marginBottom: '8px' }}>📱 Phone</h4>
                <a href="tel:+1234567890" style={{ color: '#ff6b35', textDecoration: 'none' }}>
                  +1 (234) 567-890
                </a>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h4 style={{ marginBottom: '8px' }}>🕐 Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p style={{ marginTop: '4px' }}>Saturday & Sunday: By Appointment</p>
              </div>

           
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2>What Happens Next?</h2>
            <p>Simple process, transparent communication, real results.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #ffc857 0%, #ffc857 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  margin: '0 auto 16px'
                }}
              >
                1
              </div>
              <h4>You Submit Your Info</h4>
              <p>Tell us about your business and goals through our contact form.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #4ecdc4 0%, #4ecdc4 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  margin: '0 auto 16px'
                }}
              >
                2
              </div>
              <h4>We Schedule a Call</h4>
              <p>Within 24 hours, we'll reach out to discuss your needs and opportunities.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #8e44ad 0%, #8e44ad 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  margin: '0 auto 16px'
                }}
              >
                3
              </div>
              <h4>Custom Strategy</h4>
              <p>We create a tailored strategy specific to your business goals and budget.</p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #ff5e78 0%, #ff5e78 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  margin: '0 auto 16px'
                }}
              >
                4
              </div>
              <h4>We Get To Work</h4>
              <p>Implementation begins, and you start seeing results within weeks.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
