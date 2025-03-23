import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa"; // 아이콘 추가
import "../css/DockBar.css";

const DockBar = () => {
  return (
    <div className="dock-container">
      <Link to="/" className="dock-item">
        <FaHome className="dock-icon" />
        <span>Home</span>
      </Link>
      <Link to="/about" className="dock-item">
        <FaUser className="dock-icon" />
        <span>About</span>
      </Link>
      <Link to="/projects" className="dock-item">
        <FaProjectDiagram className="dock-icon" />
        <span>Project</span>
      </Link>
    </div>
  );
};

export default DockBar;