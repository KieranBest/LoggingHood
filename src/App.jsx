import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './Pages/Home'
import { Services } from './Pages/Services'
import { Contact } from './Pages/Contact'
import { NotFound } from './Pages/NotFound'

import { Header } from './Components/Header'
import { Footer } from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
