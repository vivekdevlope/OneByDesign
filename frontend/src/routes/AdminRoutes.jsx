// src/AppRoutes.jsx  (or wherever your routes are)
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import AdminLogin from '../pages/AdminLogin';
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
    

        {/* Add more routes later */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;