'use client';

import '../components.css';

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: 'Contact Us',
      description: 'Reach out to discuss your business goals and digital marketing needs.'
    },
    {
      id: 2,
      title: 'Consultation',
      description: 'We dive deep to understand your business, target audience, and challenges.'
    },
    {
      id: 3,
      title: 'Strategy & Execution',
      description: 'Custom strategies crafted and executed to deliver maximum impact and results.'
    },
    {
      id: 4,
      title: 'Growth & Reporting',
      description: 'Continuous optimization, transparent reporting, and measurable growth guaranteed.'
    }
  ];

  return (
    <section className="section-peach">
      <div className="container">
        <div className="process-container">
          <div>
            <h2>Simple Solutions!</h2>
            <p>We understand that no two businesses are alike. That's why we take time to understand your unique needs, and develop tailored solutions to drive real, measurable results.</p>

            <ul className="process-list">
              {steps.map((step) => (
                <li key={step.id} className="process-item">
                  <div className="process-number">{step.id}</div>
                  <div className="process-text">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary">
              Get Started
            </a>
          </div>

          <div className="process-illustration">
            <img src="/images/process.png" alt="Process Illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
