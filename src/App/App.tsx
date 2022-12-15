import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Idea } from "./Idea/Idea";
import { Resources } from "./Resources/Resources";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/idea" element={<Idea />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
