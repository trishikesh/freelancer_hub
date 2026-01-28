'use client';

import Link from 'next/link';
import Image from 'next/image';
import '../components.css';

export default function HeroSection({ title, subtitle, ctaText = 'Get Started', showIllustration = true, imageSrc = '/images/hero.png' }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            {title.includes('digital') ? (
              <>
                We create <span className="highlight">digital solutions</span> that grow your business
              </>
            ) : (
              title
            )}
          </h1>
          <p>{subtitle || 'Our team blends creative expertise with emerging trends to craft campaigns that remain cutting-edge.'}</p>
          <div className="hero-cta">
            <Link href="/contact" className="btn btn-primary btn-large">
              {ctaText}
            </Link>
            <Link href="#services" className="btn btn-secondary">
              Explore more
            </Link>
          </div>
        </div>

        {showIllustration && (
          <div className="hero-illustration">
            {imageSrc.endsWith('.svg') || imageSrc.includes('illustration') ? (
              <img src={imageSrc} alt="Hero Illustration" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : (
              <Image
                src={imageSrc}
                alt="Hero Illustration"
                width={500}
                height={500}
                priority
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
