// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from "../../assets/logo/Logo2.png"
const Footer = () => {
  return (
    <footer className="pro-footer">
      <div className="pro-footer-inner">

        {/* Left – Navigation */}
        <nav className="footer-nav ">
          <Link to="/" className="footer-nav-link">Home</Link>
          <Link to="/about" className="footer-nav-link">About</Link>
          <Link to="/projects" className="footer-nav-link">Projects</Link>
          <Link to="/contact" className="footer-nav-link">Contact</Link>
        </nav>

        {/* Center – Logo */}
        <div className="footer-brand flex-col items-center justify-center ">
          <div className="footer-logo-text flex items-center justify-center"><img className='w-[50%]' src={logo} alt="" /></div>
          <span className="footer-est">Est. 2023</span>
        </div>

        {/* Right – Copyright */}
        <div className="footer-copyright">
          <p>© 2023 Design. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;