import "./App.css";
import React from "react"; 
import Header from "./components/header";
import Footer from "./components/footer"; 
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Skills from "./components/pages/skills";
import Contact from "./components/pages/contact";
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
