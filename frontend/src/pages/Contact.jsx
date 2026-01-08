// src/pages/Contact.jsx
import { useEffect } from 'react';
import axios from 'axios';
import './Contact.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Contact = () => {
const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await axios.post('http://localhost:5000/api/contact/submit', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


useEffect(() => {
  const elements = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          const animation = entry.target.getAttribute('data-animation');

          setTimeout(() => {
            entry.target.classList.add('animated');
            entry.target.classList.add(`animate-${animation}`);
          }, delay);
        } else {
          // Re-enable animation when scrolling back up
          entry.target.classList.remove('animated');
          entry.target.classList.remove('animate-fade-down', 'animate-fade-up', 'animate-slide-left');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
  );

  elements.forEach(el => observer.observe(el));

  return () => elements.forEach(el => observer.unobserve(el));
}, []);



  return (
    <>
      {/* ==================== CONTACT HERO – PURE LUXURY ==================== */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-main-title">
            Let’s Create<br />
            Something Timeless
          </h1>
          <p className="contact-main-subtitle">
            Every exceptional space begins with a conversation.<br />
            We’re ready when you are.
          </p>
        </div>

        <div className="contact-hero-scroll">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Next sections will come below this */}

      {/* ==================== SECTION 2 – WITH PREMIUM SCROLL ANIMATIONS ==================== */}
<section className="contact-section-2">
  <div className="contact-grid">

    {/* Left – Studio Details */}
    <div className="contact-info-side">
      <h2 className="info-title scroll-animate" data-animation="fade-down">Begin Your Journey</h2>
      <p className="info-text scroll-animate" data-animation="fade-up" data-delay="200">
        We craft spaces that reflect who you are and how you want to live. 
        Share your vision — we’ll bring it to life with precision and soul.
      </p>

      <div className="info-details">
        <div className="info-block scroll-animate" data-animation="fade-up" data-delay="400">
          <p className="block-label">Email</p>
          <a href="mailto:studio@1bydesign.in" className="block-value">
            studio@1bydesign.in
          </a>
        </div>

        <div className="info-block scroll-animate" data-animation="fade-up" data-delay="600">
          <p className="block-label">Phone</p>
          <a href="tel:+919818826296" className="block-value">
            +91 9818826296
          </a>
        </div>

        <div className="info-block scroll-animate" data-animation="fade-up" data-delay="800">
          <p className="block-label">Studio</p>
          <p className="block-value address">
            1108, Basement<br />
            Sector 35, Gurgaon<br />
            Haryana 122002, India
          </p>
        </div>
      </div>
    </div>

    {/* Right – Contact Form */}
    <div className="contact-form-side scroll-animate" data-animation="slide-right" data-delay="400">
     <form className="clean-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="input-wrapper">
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label>Name</label>
        </div>
      </div>

      <div className="form-row">
        <div className="input-wrapper">
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label>Email</label>
        </div>
      </div>

      <div className="form-row">
        <div className="input-wrapper">
          <textarea name="message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
          <label>Your Message</label>
        </div>
      </div>

      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p style={{color: 'green', marginTop: '1rem'}}>Thank you! We'll get back to you soon.</p>}
      {status === 'error' && <p style={{color: 'red'}}>Something went wrong. Try again.</p>}
    </form>
    </div>

  </div>
</section>





      {/* ==================== DESIGN CONSULTATION – ULTRA PREMIUM ==================== */}
           {/* ==================== DESIGN CONSULTATION – PURE CINEMATIC LUXURY ==================== */}
              {/* ==================== DESIGN CONSULTATION – PURE LUXURY & PERFECT HEIGHT ==================== */}
      <section className="design-consultation-luxury">
        <div className="consultation-luxury-container">

          <div className="consultation-luxury-content scroll-animate" data-animation="fade-up">
            
            <div className="section-header">
              <h2 className="consultation-luxury-title">Design Consultation</h2>
              <div className="luxury-line"></div>
            </div>

            <p className="consultation-luxury-lead">
              Design consultations are the beginning of every extraordinary journey.
            </p>

            <div className="consultation-luxury-text">
              <p>
                These are intimate, interactive <strong>30-minute virtual sessions</strong> where 
                we dive deep into your vision — discussing your most pressing design challenges, 
                project aspirations, and desired outcomes.
              </p>
              <p>
                You’ll receive personalized insights, expert recommendations, and a clear path forward — 
                all tailored specifically to your space and style.
              </p>
            </div>

            <p className="consultation-luxury-cta">
              Are you ready to begin something timeless?
            </p>

            <a href="#contact-form" className="consultation-luxury-btn">
              Book Your Consultation
              <span className="btn-arrow">→</span>
            </a>
          </div>

        </div>
      </section>

      {/* Next sections will come below this */}
      {/* ==================== SECTION 3 – STUDIO MAP + CLOSING ==================== */}


      {/* ==================== SECTION 3 – LOCATION & FINAL CTA ==================== */}
      <section className="location-section">
        <div className="location-container">

          {/* Left – Location Text */}
          <div className="location-content">
            <h2 className="location-title">Our Studio</h2>
            <p className="location-desc">
              Nestled in the heart of Gurgaon, our studio is where ideas take shape and 
              visions become reality. Visit us to discuss your project in person.
            </p>
            <div className="location-address">
              <p className="address-line">D-11/3 Exclusive Floors</p>
              <p className="address-line">DLF Phase 5, Gurgaon</p>
              <p className="address-line">Haryana 122009, India</p>
            </div>
          </div>

          {/* Right – Map & CTA */}
          <div className="location-map-cta">
            <div className="map-wrapper">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.933473825996!2d77.08987067564929!3d28.43650467576752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23e4c4c1f801%3A0xa6a2f8d2da52d58e!2s1108%2C%20Basement%2C%20Sector%2057%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1733467200000!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0, borderRadius: "20px" }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Office Location"
/>
            </div>

            {/* CTA Button */}
            <div className="cta-block">
              <button className="schedule-btn">
                Schedule a Visit
              </button>
            </div>
          </div>

        </div>
      </section>
      
      {/* Next sections will come below this */}

            {/* ==================== SECTION 4 – FINAL CLOSING & FOOTER ==================== */}
      <section className="closing-section">
        <div className="closing-container">

          {/* Closing Statement */}
          <div className="closing-content">
            <h2 className="closing-main-title">
              Begin Your<br />
              Extraordinary Story
            </h2>
            <p className="closing-subtitle">
              We don’t follow trends.<br /> We set them.
              Let’s create something <br />that will be admired for generations.
            </p>
          </div>

          {/* Minimal Footer */}
         

        </div>
      </section>
      
      
      
      {/* Next sections will come below this */}



    </>
  );
};

export default Contact;