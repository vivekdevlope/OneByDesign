// src/pages/Projects.jsx
import { useState, useEffect } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);


  const projects = [
    {
      title: "AMATHYST",
      location: "Gurugram",
      category: "Commercial",
    //   video: "https://www.pexels.com/download/video/3773483/",
      image: "https://images.pexels.com/photos/34990828/pexels-photo-34990828.jpeg"
    },
    {
      title: "SERENITY VILLA",
      location: "New Delhi",
      category: "Residential",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    //   video: "https://www.pexels.com/download/video/7578550/"
    }, {
      title: "SERENITY VILLA",
      location: "New Delhi",
      category: "Residential",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    //   video: "https://www.pexels.com/download/video/7578550/"
    },
    {
      title: "LUMINA OFFICE",
      location: "Mumbai",
      category: "Workspace",
      image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
     },
    {
      title: "AURELIA",
      location: "Bangalore",
      category: "Hospitality",
      image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg"
    }
  ];



   const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);


    // All Projects Data (you can move this to a separate file later)
  const allProjects = [
    { title: "Residence at Vasant Kunj", location: "New Delhi", category: "Residential", img: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg" },
    { title: "Penthouse at Mahindra Luminare", location: "Gurugram", category: "Residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90" },
    { title: "Villa at Defence Colony", location: "New Delhi", category: "Residential", img: "https://images.pexels.com/photos/7061395/pexels-photo-7061395.jpeg" },
    { title: "Residence at GK1", location: "New Delhi", category: "Residential", img: "https://images.pexels.com/photos/7061667/pexels-photo-7061667.jpeg" },
    { title: "Sky Villa at Aerocity", location: "New Delhi", category: "Residential", img: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg" },
    { title: "Farmhouse at Chattarpur", location: "New Delhi", category: "Residential", img: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg" },
    { title: "Duplex at Anant Raj Estate", location: "Gurugram", category: "Residential", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=90" },
    { title: "Heritage Residence", location: "New Delhi", category: "Residential", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90" }
  ];

  const visibleProjects = allProjects.slice(0, visibleCount);

  // Auto generate URL-friendly ID
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  // Scroll animation — plays only once on page load
  useEffect(() => {
    const cards = document.querySelectorAll('.portfolio-card');
    cards.forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.15}s`;
    });
  }, [visibleCount]);





  // Auto slide + progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

    // Reset progress fill when slide changes
  useEffect(() => {
    const fills = document.querySelectorAll('.progress-fill');
    fills.forEach((fill, i) => {
      fill.style.width = currentSlide === i ? '0%' : '0%';
      fill.style.animation = 'none';
      fill.offsetHeight; // trigger reflow
      if (currentSlide === i) {
        fill.style.animation = 'fillProgress 5s linear forwards';
      }
    });
  }, [currentSlide]);

  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <>
      {/* FULL SCREEN PROJECT SLIDER – LIKE CHALK STUDIO */}
      <section className="projects-hero-slider">
        <div className="slider-container">

          {/* Slides */}
          {/* Slides – NOW SUPPORTS BOTH IMAGE & VIDEO PERFECTLY */}
          {projects.map((project, index) => (
            <div
              key={index}
              className={`slide ${currentSlide === index ? 'active' : ''}`}
            >
              {/* VIDEO OR IMAGE */}
              {project.video ? (
                <video
                  className="slide-media"
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div
                  className="slide-media"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              )}

              <div className="slide-overlay"></div>

              {/* Content */}
              <div className="slide-content left-[15%] ">
                <p className="project-location">{project.location}</p>
                <h1 className="project-title">{project.title}</h1>
                <div className="title-line"></div>
                <p className="project-category"  >{project.category}</p>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          {/* <button className="nav-arrow left-arrow" onClick={prevSlide}>
            ←
          </button>
          <button className="nav-arrow right-arrow" onClick={nextSlide}>
            →
          </button> */}

          {/* Progress Bar */}
                {/* PROGRESS BAR – ACTIVE = 50px + FILLING, OTHERS = 10px + EMPTY */}
          {/* <div className="progress-bar-container">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`progress-segment ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <div className="progress-fill" />
              </div>
            ))}
          </div> */}


        </div>
      </section>


            {/* ==================== SELECTED WORKS – MASONRY GRID WITH FILTERS ==================== */}
    <section className="selected-works-section">
        <div className="works-container">
          <div className="section-heading scroll-trigger">
            <h2 className="works-title">Design Dossier</h2>
            <p className="works-subtitle">Curated projects that define our signature aesthetic</p>
          </div>

          <div className="filters-wrapper scroll-trigger">
            <div className="category-filters">
              {['All', 'Commercial', 'Residential', 'Workspace', 'Hospitality'].map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="masonry-grid">
            {filteredProjects.map((project, index) => (
              <div key={index} className="grid-item scroll-trigger">
                <div className="project-card">
                  {project.video ? (
                    <video src={project.video} className="project-img" loop muted />
                  ) : (
                    <img src={project.image} alt={project.title} className="project-img" />
                  )}
                  <div className="project-overlay">
                    <div className="project-info">
                      <h3 className="project-name">{project.title}</h3>
                      <p className="project-loc">{project.location} • {project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* ==================== OUR PHILOSOPHY – SPLIT LUXURY SECTION ==================== */}
      <section className="philosophy-section">
        <div className="philosophy-container">

          {/* Left – Image */}
          <div className="philosophy-image scroll-trigger">
            <img 
              src="https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg" 
              alt="Design process" 
              className="phil-img"
            />
          </div>

          {/* Right – Text */}
          <div className="philosophy-content scroll-trigger">
            <h2 className="phil-title">Crafting Timeless Spaces</h2>
            <div className="phil-line"></div>
            <p className="phil-text">
              We believe architecture and interiors should not just serve function — they must evoke emotion, 
              tell a story, and stand the test of time.
            </p>
            <p className="phil-text">
              Every project begins with deep listening. We immerse ourselves in your vision, your lifestyle, 
              and the soul of the space. From there, we sculpt environments that feel both revolutionary and eternal — 
              where modern innovation meets quiet luxury.
            </p>
            <p className="phil-text phil-highlight">
              Less trends. More legacy.
            </p>
          </div>

        </div>
      </section>



            {/* ==================== FEATURED RECOGNITION – AWARDS & PRESS ==================== */}
   <section className="portfolio-section">
        <div className="portfolio-container">

          {/* Title */}
          <div className="portfolio-header">
            <h2 className="portfolio-title">Portfoilo of Projects</h2>
            <p className="portfolio-subtitle">
              Curated collection of timeless residential masterpieces
            </p>
          </div>

          {/* Grid */}
          <div className="portfolio-grid">
          {visibleProjects.map((project, index) => {
  const slug = generateSlug(project.title); // e.g. "residence-at-vasant-kunj"

  return (
    <Link
      key={index}
      to={`/project/${slug}`}
      className="portfolio-card"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="card-image-wrapper">
        <img src={project.img} alt={project.title} className="card-image" />
        <div className="image-overlay"></div>
      </div>

      <div className="card-content">
        <h3 className="card-title text-2xl sm:text-4xl">{project.title}</h3>
        <p className="card-location">{project.location}</p>
        <span className="card-category">{project.category}</span>
        <div className="card-arrow">View Project</div>
      </div>
    </Link>
  );
})}
          </div>

          {/* Load More Button */}
          {visibleCount < allProjects.length && (
            <div className="load-more-container">
              <button 
                onClick={() => setVisibleCount(prev => Math.min(prev + 4, allProjects.length))}
                className="load-more-btn"
              >
                Load More Projects
              </button>
            </div>
          )}

        </div>
      </section>



      {/* SCROLL TRIGGER ANIMATION (ONE FOR WHOLE PAGE) */}
      <script>
        {(() => {
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('triggered');
              } else {
                entry.target.classList.remove('triggered');
              }
            });
          }, { threshold: 0.15 });

          document.querySelectorAll('.scroll-trigger').forEach(el => observer.observe(el));
        })()}
      </script>
    </>
  );
};

export default Projects;