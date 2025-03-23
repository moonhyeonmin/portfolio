import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import DockBar from "./components/DockBar.js";
import { Transitiongroup, CSSTransition } from "react-transition-group";
import "./css/App.css"; // CSS 추가

function App() {
  return (
    <Router>
      <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <DockBar />
      </div>
    </Router>
  );
}

export default App;