'use client';

import '../components.css';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'E-commerce Manager',
      quote: 'Freelancer Hub transformed our Google Ads strategy. We saw a 150% increase in conversions within 3 months!',
      rating: 5
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Local Business Owner',
      quote: 'Their GMB optimization got us to the top of local search. More foot traffic, more customers, more revenue. Highly recommend!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Martinez',
      role: 'Digital Marketing Director',
      quote: 'Professional, transparent, and results-driven. They delivered exactly what they promised and exceeded expectations.',
      rating: 5
    },
    
  ];

  return (
    <section>
      <div className="container">
        <div className="text-center mb-xl">
          <h2>What Clients Say</h2>
          <p>Don't just take our word for it—hear from the businesses we've helped achieve remarkable growth.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card card-testimonial">
              <div className="testimonial-avatar">Avatar</div>
              <div className="testimonial-stars">{'⭐'.repeat(testimonial.rating)}</div>
              <p className="testimonial-text">"{testimonial.quote}"</p>
              <div className="testimonial-name">{testimonial.name}</div>
              <div className="testimonial-role">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
