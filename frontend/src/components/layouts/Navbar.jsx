// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo2.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`main-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
{/* FINAL PERFECT LOGO */}
<Link to="/" className=" w-[40%] p-2 ">
  <img
    src={logo} 
    alt="OneByDesign" 
    className="sm:h-[30%] sm:w-[30%]"
  />
</Link>



        {/* Desktop Menu */}
        <div className='w-[60%]'>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link to="/Blog" onClick={() => setIsMobileMenuOpen(false)} className='nav-link' >Blog</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          
          <a href="tel:+919811428296" className="">
            <span className="navbar-phone rounded-md">+91 9818826296</span>
          </a>

          {/* Optional CTA Button */}
          {/* <Link to="/contact" className="enquire-btn" onClick={() => setIsMobileMenuOpen(false)}>
            Enquire Now
          </Link> */}
        </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;