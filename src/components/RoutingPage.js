import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import Career from '../pages/Career';
import Media from '../pages/Media';
import Resource from '../pages/Resource';
import Contact from '../pages/Contact';
import AluminumCS from "../pages/AluminumCS";
import SteelCS from '../pages/SteelCS';
import OilAndGasCS from '../pages/OilAndGasCS';
import PaintCS from '../pages/PaintCS';
import MarineCS from '../pages/MarineCS';
import SemiconductorCS from '../pages/SemiconductorCS';
import MiningCS from '../pages/MiningCS';
import AdminLogin from '../pages/AdminLogin';
import AdminPortal from '../pages/AdminPortal';
import AdminApplications from '../pages/AdminApplications';
import NotFound from '../pages/NotFound';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ProtectedRoute from '../pages/ProtectedRoute';

const RoutingPage = () => {

  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin@2k24" || location.pathname === '/admin@2k24Portal' || location.pathname === '/admin@2k24Applications';
  const isNotFoundRoute = ![
    "/",
    "/about",
    "/products",
    "/industries",
    "/media",
    "/careers",
    "/contact",
    "/industries/aluminum",
    "/industries/steel",
    "/industries/OilAndGas",
    "/industries/SpecialtyChemicals",
    "/industries/marine",
    "/industries/semiconductor",
    "/industries/mining",
    "/admin@2k24",
    "/admin@2k24Portal",
    "/admin@2k24Applications",
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
          <Route path="/industries" element={<Resource />} />
          <Route path="/industries/aluminum" element={<AluminumCS />} />
          <Route path="/industries/steel" element={<SteelCS />} />
          <Route path="/industries/OilAndGas" element={<OilAndGasCS />} />
          <Route path="/industries/SpecialtyChemicals" element={<PaintCS />} />
          <Route path="/industries/marine" element={<MarineCS />} />
          <Route path="/industries/semiconductor" element={<SemiconductorCS />} />
          <Route path="/industries/mining" element={<MiningCS />} />
          <Route path="/media" element={<Media />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin@2k24" element={<AdminLogin />} />
          <Route path="/admin@2k24Portal" element={<ProtectedRoute />}>
            <Route path="" element={<AdminPortal />} />
          </Route>
          <Route path="/admin@2k24Applications" element={<ProtectedRoute />}>
            <Route path="" element={<AdminApplications />} />
          </Route>
          <Route path="*" element={<div>
            <Navbar />
            <Home />
            <Footer />
          </div>} />
        </Routes>
      </div>
      {!isAdminRoute && !isNotFoundRoute && <Footer />}
    </div>
  );
};

export default RoutingPage;
