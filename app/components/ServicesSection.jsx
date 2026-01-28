'use client';

import '../components.css';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      name: 'Google Ads Management',
      description: 'Drive qualified traffic and conversions with expertly managed Google Ads campaigns optimized for ROI.',
      icon: '📱',
      color: 'yellow'
    },
    {
      id: 2,
      name: 'GMB Management',
      description: 'Dominate local search results and attract nearby customers with strategic Google Business Profile optimization.',
      icon: '📍',
      color: 'green'
    },
    {
      id: 3,
      name: 'Local SEO',
      description: 'Boost your online visibility and rank higher in local searches to capture customers in your service area.',
      icon: '🔍',
      color: 'purple'
    },
    {
      id: 4,
      name: 'Social Media Management',
      description: 'Build meaningful connections with your audience and grow engagement across all social platforms.',
      icon: '📊',
      color: 'red'
    }
  ];

  return (
    <section id="services" className="section-light">
      <div className="container">
        <div className="text-center mb-xl">
          <h2>We Provide The Best Services</h2>
          <p>Comprehensive digital marketing solutions tailored to elevate your brand and drive real business results.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="card card-service">
              <div className={`service-icon ${service.color}`}>{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
