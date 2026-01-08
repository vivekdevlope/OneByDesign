// src/pages/ProjectDetail.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import projectsData from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Find project by slug
  const project = projectsData.find(p => p.slug === projectId);
const [showAllImages, setShowAllImages] = useState(false);


  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    }
  }, [project, navigate]);

  if (!project) return null;

  const currentIndex = projectsData.findIndex(p => p.slug === projectId);
  const prev = projectsData[currentIndex - 1];
  const next = projectsData[currentIndex + 1];

const scrollRef = useRef(null);
const [isAutoScroll, setIsAutoScroll] = useState(true);

const handleViewAll = (e) => {
    e.preventDefault();
    setShowAllImages(true);
    
    // Smooth scroll to full gallery after a tiny delay
    setTimeout(() => {
      document.getElementById('full-gallery-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let scrollAmount = 0;
  const speed = 0.6; // Adjust speed

  const autoScroll = () => {
    if (isAutoScroll && container) {
      scrollAmount += speed;
      container.scrollLeft += speed;

      // Seamless reset
      if (scrollAmount >= container.scrollWidth / 3) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      }
    }
    requestAnimationFrame(autoScroll);
  };

  requestAnimationFrame(autoScroll);

  return () => {};
}, [isAutoScroll]);

// Manual scroll functions
const scrollNext = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: 700, behavior: 'smooth' });
  }
};

const scrollPrev = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: -700, behavior: 'smooth' });
  }
};



  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.detail-hero-cinematic').forEach(el => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);



useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  );

  document.querySelectorAll('.title-reveal, .project-paragraph').forEach(el => {
    observer.observe(el);
  });


  return () => observer.disconnect();
}, []);


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.gallery-title-reveal, .gallery-masonry-item').forEach(el => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.gallery-title-reveal, .gallery-slide').forEach(el => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);






useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.features-title-reveal, .feature-card').forEach(el => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);



useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.features-minimal-title, .feature-line-item').forEach(el => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);



useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.nav-cinematic-inner, .nav-main-cta, .nav-secondary').forEach(el => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);




useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.final-cta-reveal, .final-nav-bar').forEach(el => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);









  return (
    <div className="project-detail-premium">
      {/* HERO */}
      <div 
        className="detail-hero-cinematic" 
        style={{ backgroundImage: `url(${project.images[0]})` }}
      >
        <div className="hero-gradient-overlay"></div>
        <div className="hero-content-premium">
          <p className="detail-location-premium">{project.location} • {project.year}</p>
          <h1 className="detail-title-premium">{project.title}</h1>
          <div className="title-accent-line"></div>
          <p className="detail-meta-premium">{project.category} • {project.area}</p>
        </div>
      </div>

  {/* DESCRIPTION — CINEMATIC PREMIUM */}
<section className="detail-description-cinematic">
  <div className="description-wrapper">
    <div className="description-container">
      
      {/* Title — fades in + line reveal */}
      <div className="title-reveal">
        <h2 className="section-heading-cinematic">About This Project</h2>
        <div className="reveal-line"></div>
      </div>

      {/* Description — paragraph-by-paragraph fade-up */}
      <div className="description-text">
        {project.description.split('\n').map((paragraph, i) => (
          <p 
            key={i} 
            className="project-paragraph" 
            data-delay={i * 200}
          >
            {paragraph || <br />}
          </p>
        ))}
      </div>
    </div>
  </div>
</section>


   {/* GALLERY — CINEMATIC GALLERY OF DREAMS */}
{/* GALLERY — INFINITE CINEMATIC CAROUSEL WITH CONTROLS */}
<section className="gallery-cinematic">
  <div className="gallery-inner">
    
    {/* Title */}
    <div className="gallery-title-reveal">
      <h2 className="gallery-title">Portfolio Masterpiece</h2>
      <div className="title-line-reveal"></div>
    </div>

    {/* Carousel Container */}
    <div className="carousel-container">
      {/* <button className="carousel-btn prev-btn" onClick={scrollPrev}>
        ←
      </button>
      <button className="carousel-btn next-btn" onClick={scrollNext}>
        →
      </button> */}

      

      <div 
        className="gallery-slideshow"
        ref={scrollRef}
        onMouseEnter={() => setIsAutoScroll(false)}
        onMouseLeave={() => setIsAutoScroll(true)}
      >
        {/* Triple images for seamless infinite loop */}
        {[...project.images, ...project.images, ...project.images].map((img, i) => (
          <div
            key={i}
            className={`gallery-slide gallery-slide-${(i % 4) + 1}`}
          >
            <div className="image-frame">
              <img
                src={img}
                alt={`${project.title} — ${i + 1}`}
                className="gallery-slide-img"
                loading="lazy"
              />
              <div className="image-shine"></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* View All Button */}
    <div className="gallery-cta-wrapper">
            <button onClick={handleViewAll} className="view-all-btn">
              View All Images
              <span className="btn-arrow-right">↓</span>
            </button>
          </div>
        
  </div>
</section>

{/* FULL GALLERY — HIDDEN UNTIL CLICKED */}
      {showAllImages && (
        <section id="full-gallery-section" className="full-gallery-reveal">
          <div className="full-gallery-container">
            <h2 className="full-gallery-title">Complete Visual Journey</h2>
            <div className="full-gallery-grid">
              {project.images.map((img, i) => (
                <div key={i} className="full-gallery-item">
                  <img 
                    src={img} 
                    alt={`${project.title} full ${i + 1}`}
                    className="full-gallery-img"
                  />
                </div>
              ))}
            </div>
            <button 
              onClick={() => setShowAllImages(false)}
              className="close-full-gallery"
            >
              ✕ Close
            </button>
          </div>
        </section>
      )}


{/* FEATURES — PURE LUXURY MINIMALISM */}
<section className="features-minimal-cinematic">
  <div className="features-minimal-inner">
    
    {/* Title */}
    <div className="features-minimal-title">
      <h2 className="features-title-clean">Crafted to Perfection</h2>
      <p className="features-subtitle-clean">
        Every element tells a story of intention and excellence
      </p>
    </div>

    {/* Ultra-clean feature list */}
    <div className="features-list-clean">
      {project.features.map((feat, i) => (
        <div 
          key={i} 
          className="feature-line-item"
          style={{ '--index': i }}
        >
          <span className="feature-index">0{i + 1}</span>
          <span className="feature-text">{feat}</span>
        </div>
      ))}
    </div>

  </div>
</section>



{/* FINAL NAVIGATION — CINEMATIC MASTERPIECE ENDING */}
<section className="final-navigation-cinematic">
  <div className="final-nav-inner">

    {/* Main Dramatic CTA */}
    <div className="final-cta-reveal">
      <h2 className="final-title">
        Your Vision<br />
        <span className="final-gradient">Deserves This</span>
      </h2>
      <p className="final-subtitle">
        Let’s create something that will be remembered forever.
      </p>
      <Link 
        to="/contact" 
        className="final-primary-cta"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Start Your Legacy
      </Link>
    </div>

    {/* Perfectly Balanced Navigation */}
    <div className="final-nav-bar">
      <div className="final-nav-left">
        {prev && (
          <Link 
            to={`/project/${prev.slug}`} 
            className="final-nav-link prev-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ← Previous Project
          </Link>
        )}
      </div>

      <div className="final-nav-center">
        <Link 
          to="/projects" 
          className="final-nav-link center-link"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          All Projects
        </Link>
      </div>

      <div className="final-nav-right">
        {next && (
          <Link 
            to={`/project/${next.slug}`} 
            className="final-nav-link next-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Next Project →
          </Link>
        )}
      </div>
    </div>

  </div>
</section>


    </div>
  );
};

export default ProjectDetail;