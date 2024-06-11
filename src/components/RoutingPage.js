import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import Career from '../pages/Career';
import Media from '../pages/Media';
import Resource from '../pages/Resource';
import Contact from '../pages/Contact';
import CaseStudy from '../pages/CaseStudy';
import AdminLogin from '../pages/AdminLogin';
import AdminPortal from '../pages/AdminPortal';
import NotFound from '../pages/NotFound';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ProtectedRoute from '../pages/ProtectedRoute';

const RoutingPage = () => {

  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin@2k24" || location.pathname === '/admin@2k24Portal';
  const isNotFoundRoute = ![
    "/",
    "/about",
    "/products",
    "/resources",
    "/media",
    "/careers",
    "/contact",
    "/resources/casestudy",
    "/admin@2k24",
    "/admin@2k24Portal",
  ].includes(location.pathname);

  return (
    <div className="font-satoshi">
      <ScrollToTop />
      {!isAdminRoute && !isNotFoundRoute && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/media" element={<Media />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources/casestudy" element={<CaseStudy />} />
          <Route path="/admin@2k24" element={<AdminLogin />} />
          <Route path="/admin@2k24Portal" element={<ProtectedRoute />}>
            <Route path="" element={<AdminPortal />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!isAdminRoute && !isNotFoundRoute && <Footer />}
    </div>
  );
};

export default RoutingPage;
