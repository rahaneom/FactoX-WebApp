import React from "react";
import ContactForm from "./components/ContactForm";
import "./index.css";
import "./App.css";
import Factorial from "./components/Factorial";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <div className="">
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={<Factorial />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-300 font-extrabold text-sm md:text-base tracking-wide shadow-md animate-pulse">
        Made with 💝 by Om Rahane
      </span>
    </Router>
  );
};

export default App;
