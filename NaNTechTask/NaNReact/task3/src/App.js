import React from 'react'
import Nav from "./Main/Nav"
import Home from './Main/Home'
import About from './Main/About'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import More from './Main/More';
export default function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="More" element={<More />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
