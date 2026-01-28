'use client';

import { useState } from 'react';
import '../components.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Validation
    if (!formData.fullName.trim()) {
      setStatus({ type: 'error', message: 'Full Name is required' });
      setLoading(false);
      return;
    }

    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Email is required' });
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' });
      setLoading(false);
      return;
    }

    if (!formData.phone.trim()) {
      setStatus({ type: 'error', message: 'Phone number is required' });
      setLoading(false);
      return;
    }

    if (!formData.businessName.trim()) {
      setStatus({ type: 'error', message: 'Business Name is required' });
      setLoading(false);
      return;
    }

    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          businessName: '',
          message: ''
        });
      } else {
        setStatus({ type: 'error', message: data.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-container">
      {status && (
        <div className={`form-status ${status.type}`}>
          {status.type === 'success' ? '✓ ' : '✗ '}
          {status.message}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (234) 567-890"
          />
        </div>

        <div className="form-group">
          <label htmlFor="businessName">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Your Business Name"
          />
        </div>
      </div>

      <div className="form-group form-row-full">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your business goals and challenges..."
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
