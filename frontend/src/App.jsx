import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from "./pages/home.jsx";
import Link from './pages/link.jsx'; // 🔥 경로 주의
import About from './pages/about.jsx';
import Project from './pages/project.jsx';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Nav 페이지 */}
                <Route path="/" element={<Home />} />
                <Route path="/link" element={<Link />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
            </Routes>
        </Router>
    );
}

export default App;