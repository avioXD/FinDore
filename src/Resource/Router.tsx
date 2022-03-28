import React from "react";
import FooterBar from "./Pages/Components/FooterBar";
import NavigationBar from "./Pages/Components/NavigationBar";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Pricing from "./Pages/Pricing";
import PricingDetailed from "./Pages/InnerPages/PricingDetailed";
import Contact from "./Pages/Contact";
import Resource from "./Pages/Resource";
import Login from "./Pages/Login";
export const RouteComponent = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="resource" element={<Resource />} />
        <Route path="login" element={<Login />} />
        <Route path="pricing/category/:_id" element={<PricingDetailed />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <FooterBar />
    </>
  );
};
