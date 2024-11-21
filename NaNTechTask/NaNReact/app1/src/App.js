import React from 'react'
import Nav from "./Vews/Nav.js";
import Home from './Vews/Home.js';
import About from './Vews/About.js';
import More from './Vews/More.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Vews/Contact.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="More" element={<More />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
