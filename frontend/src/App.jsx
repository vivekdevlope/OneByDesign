// import Navbar from './components/layouts/Navbar';
// import Footer from './components/layout/Footer';
import { useEffect } from 'react';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import AppRoutes from './routes/AppRoutes';

import "@fontsource/roboto";        // Defaults to weight 400
import "@fontsource/roboto/700.css"; // Bold
import "./App.css"

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.main-navbar');
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;