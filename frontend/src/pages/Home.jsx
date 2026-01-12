// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
    "https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg",
    "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg",
    "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // SCROLL ANIMATION (MUST BE HERE)
 // FINAL SCROLL ANIMATION — Works when scrolling DOWN and BACK UP
useEffect(() => {
  const items = document.querySelectorAll('.service-item[data-animate]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        } else {
          entry.target.classList.remove('animate-in');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
  );

  items.forEach((item) => observer.observe(item));
  return () => items.forEach((item) => observer.unobserve(item));
}, []);



    // AUTO SLIDE EVERY 4 SECONDS + ARROW CONTROL (100% WORKING)
  // INFINITE SEAMLESS AUTO-SLIDE EVERY 4 SECONDS (NO JUMP!)
  useEffect(() => {
    const inner = document.getElementById('reviewsInner');
    if (!inner || inner.children.length === 0) return;

    const slides = inner.children;
    const totalSlides = slides.length;

    // Duplicate first slide at the end for seamless loop
    const firstClone = slides[0].cloneNode(true);
    inner.appendChild(firstClone);

    let currentIndex = 0;
    let autoSlide;

    const goToSlide = (index) => {
      inner.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      inner.style.transform = `translateX(-${index * 100}%)`;
    };

    const nextSlide = () => {
      currentIndex++;

      if (currentIndex === totalSlides) {
        // Reached the cloned slide → jump back instantly
        goToSlide(currentIndex);

        setTimeout(() => {
          inner.style.transition = 'none';
          inner.style.transform = 'translateX(0%)';
          currentIndex = 0;
          // Force reflow + re-enable transition
          requestAnimationFrame(() => {
            inner.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          });
        }, 820); // Match animation duration
      } else {
        goToSlide(currentIndex);
      }
    };

    // Auto slide every 4 seconds
    const startAutoSlide = () => {
      autoSlide = setInterval(nextSlide, 4000);
    };

    // Manual controls
    document.querySelector('.left-arrow')?.addEventListener('click', () => {
      clearInterval(autoSlide);
      currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
      goToSlide(currentIndex);
      startAutoSlide();
    });

    document.querySelector('.right-arrow')?.addEventListener('click', () => {
      clearInterval(autoSlide);
      nextSlide();
      startAutoSlide();
    });

    // Start auto sliding
    startAutoSlide();

    // Initial position
    inner.style.transform = 'translateX(0%)';

    return () => {
      clearInterval(autoSlide);
    };
  }, []);



  return (
    <>
      {/* HERO */}
   <div className="hero-container w-full">
  <div className="hero-slider">
    {images.map((img, i) => (
      <div
        key={i}
        className="slide"
        style={{
          backgroundImage: `url(${img})`,
          opacity: currentImage === i ? 1 : 0
        }}
      />
    ))}
  </div>

  <div className="overlay"></div>

  {/* PERFECT CENTERED CONTENT */}
  <div className='w-full relative top-[50%] '>
  <div className="hero-content1 sm:left-[14%] left-7 top-20">
    <div className="text-[6vw] sm:text-5xl ">
      <h1>Luxury Living | Commercial <br/> Workspaces | Curated <br/> Furniture and Styling</h1>
      {/* <button className="enquire-btn">Enquire Now</button> */}
    </div>
  </div> 
  <button className=' absolute font-[#a9bcd0] flex items-center z-2 rounded-sm sm:top-75 top-50 sm:left-[14%] left-7'>
  <div data-aos="fade-up" data-aos-delay="600">
        <Link to="/contact" className="about-cinematic-btn">
          Enquire Now
          <span className="btn-arrow">→</span>
        </Link>
      </div>
  </button>
  </div>
</div>

      {/* OUR SERVICES - ONE ROW (EXACTLY LIKE YOUR IMAGE) */}
      <section className="services-one-row">
        <div className="services-container">

          <div className="services-title-wrapper">
            <h2 className="services-title">Our Services</h2>
            <div className="services-underline"></div>
          </div>

          <div className="services-row">

            {/* Architecture - Image → Text */}
            <div className="service-item" data-animate>
              <div className="service-img">
                <img src="https://res.cloudinary.com/dwhpmxsyf/image/upload/q_auto,f_auto/v1768210056/architecture_f6wiqh.jpg" alt="Architecture" />
              </div>
              <div className="service-text">
                <h3>Architecture</h3>
                <p>Team of skilled, Experienced and Professional Architects, who can help Ideate and Build your dreams.</p>
              </div>
            </div>

            {/* Interiors - Text → Image */}
            <div className="service-item reverse" data-animate>
              <div className="service-img">
                <img src="https://res.cloudinary.com/dwhpmxsyf/image/upload/v1768210318/Interiors_sovjkf.jpg" alt="Interiors" />
              </div>
              <div className="service-text">
                <h3>Interiors</h3>
                <p className=''>Shaping spaced through "Timeless Designs". A professional Design Studio providing solutions in the field of High end workspaces, hospitality and Luxury Living.</p>
              </div>
            </div>

            {/* Bespoke Furniture - Image → Text */}
            <div className="service-item" data-animate>
              <div className="service-img">
                <img src="https://res.cloudinary.com/dwhpmxsyf/image/upload/q_auto,f_auto/v1768210216/furniture_u5iotq.jpg" alt="Furniture" />
              </div>
              <div className="service-text">
                <h3>Bespoke Furniture</h3>
                <p>Handcrafted Bespoke Furniture range to cater to all aspects of Design as required.</p>
              </div>
            </div>

          </div>
        </div>
      </section>







            {/* ==================== FINAL ABOUT US – 100% SAME AS YOUR IMAGE ==================== */}
     {/* ==================== ULTRA PREMIUM ABOUT US – CINEMATIC & ANIMATED ==================== */}
<section className="about-home-cinematic">
  <div className="about-cinematic-container">

    {/* Background Decorative Element */}
    <div className="about-bg-accent"></div>

    {/* Main Content */}
    <div className="about-cinematic-content">
      <p className="about-estimate" data-aos="fade-up">Est. 2023</p>

      <h2 className="about-cinematic-title" data-aos="fade-up" data-aos-delay="200"> 
              <span className="highlight-gradient text-4xl sm:text-8xl mb-5">We Craft Legacies</span>
      </h2>

      <div className="about-cinematic-text sm:text-[2.5vh] text-sm" data-aos="fade-up" data-aos-delay="400">
        <p>
          1 by Design is where vision meets flawless execution. We create timeless interiors 
          and architectural masterpieces — from private residences to boutique hotels and 
          iconic workspaces — all delivered turnkey with uncompromising quality.
        </p>
        <p className="text-bold">
          Less trends. More forever.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="600">
        <Link to="/about" className="about-cinematic-btn">
          Explore Our Journey
          <span className="btn-arrow">→</span>
        </Link>
      </div>
    </div>

  </div>
</section>

{/* ==================== CLIENT REVIEWS - EXACTLY LIKE YOUR IMAGE ==================== */}
<section className="client-reviews-clean">
        <div className="reviews-wrapper">

          {/* Left Arrow */}
        <button className="nav-arrow left-arrow">‹</button>
        <button className="nav-arrow right-arrow">›</button>

          {/* Sliding Reviews */}
          <div className="reviews-slider">
            <div className="reviews-inner" id="reviewsInner">

              {/* Review 1 */}
              <div className="review-slide">
                <h3>Trendy Designs</h3>
                <p className="review-quote">
                  Gaurika is very sweet and makes sure that all your needs are accommodated in the best possible way. Trendy designs and practical solutions.
                </p>
                <p className="client-name">Disha Shroff</p>
                <div className="stars">★★★★★</div>
              </div>

              {/* Review 2 */}
              <div className="review-slide">
                <h3>Exceptional Craftsmanship</h3>
                <p className="review-quote">
                  The team delivered beyond expectations. Our home now feels like a luxury resort.
                </p>
                <p className="client-name">Mr. & Mrs. Kapoor</p>
                <div className="stars">★★★★★</div>
              </div>

              {/* Review 3 */}
              <div className="review-slide">
                <h3>Timeless Elegance</h3>
                <p className="review-quote">
                  Professional, creative, and always on time. Couldn’t have asked for better.
                </p>
                <p className="client-name">Rohan Malhotra</p>
                <div className="stars">★★★★★</div>
              </div>

              {/* Review 4 */}
              <div className="review-slide">
                <h3>Perfect Execution</h3>
                <p className="review-quote">
                  From design to final touch — flawless. Highly recommend Design!
                </p>
                <p className="client-name">Priya Singh</p>
                <div className="stars">★★★★★</div>
              </div>

            </div>
          </div>
        </div>
      </section>



      
    </>
  );
};

export default Home;