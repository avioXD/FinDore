import React from "react";
import FooterBar from "./Pages/Components/FooterBar";
import NavigationBar from "./Pages/Components/NavigationBar";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import { truncate } from "fs";
export const RouteComponent = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <FooterBar />
    </>
  );
};
