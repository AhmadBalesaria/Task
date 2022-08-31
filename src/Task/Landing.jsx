import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Man } from "./Man";
import { Nav } from "./Nav";
import { Women } from "./Women";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/man" element={<Man />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
