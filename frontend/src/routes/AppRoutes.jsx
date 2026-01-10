// src/AppRoutes.jsx  (or wherever your routes are)
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import Contact from '../pages/Contact';
import AdminLogin from '../pages/AdminLogin';
import Blog from "../pages/Blog";
import AdminDashboard from '../pages/AdminDashboard';

const AppRoutes = () => {
  const location = useLocation(); // ← THIS WAS MISSING!

  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        {/* HOME */}
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Home />
            </motion.div>
          } 
        />

        {/* ABOUT */}
        <Route 
          path="/about" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <About />
            </motion.div>
          } 
        />

        {/* PROJECTS */}
        <Route 
          path="/projects" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Projects />
            </motion.div>
          } 
        />

        {/* PROJECT DETAIL */}
        <Route 
          path="/project/:projectId" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectDetail />
            </motion.div>
          } 
        />
        {/* {blog} */}
        <Route 
          path="/Blog" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Blog/>
            </motion.div>
          } 
        />


         <Route 
          path="/contact" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Contact />
            </motion.div>
          } 
        />

        {/* Add more routes later */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;