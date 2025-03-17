import React from "react";
import { Link } from "react-router-dom";
import "./../css/App.css"; // 스타일 적용
import TechStack from "../components/TechStack.js";

const Home = () => {
  return (
    <div className="home-container">
      {/* 프로필 섹션 */}
      <div className="profile-section">
        <img src={process.env.PUBLIC_URL + "/images/Me.jpeg"} alt="Profile" className="profile-img" />
        <h1 className="profile-name">문현민</h1>
        <h3 className="profile-title">Cloud Engineer</h3>
      </div>

      {/* 소개 섹션 */}
      <div className="intro-section">
        <p>
          안녕하세요! 저는 클라우드 엔지니어로서 안정적이고 효율적인 배포와 <br />
          확장 가능한 클라우드 아키텍처 구축에 집중하고 있습니다. <br />
          최신 기술을 활용하여 안정적이고 성능이 뛰어난 서버를 구축하는 것이 목표입니다.
        </p>
      </div>

      {/* 버튼 섹션 */}
      <div className="button-section">
        <a href="https://github.com/moonhyeonmin" target="_blank" rel="noopener noreferrer" className="btn github-btn">
          GitHub
        </a>
        <a href="mailto:your-email@example.com" className="btn contact-btn">
          Contact
        </a>
      </div>

    {/* ✅ 기술 스택 추가 */}
    <TechStack />
      {/* 하단 Dock Bar */}
      <div className="dock-container">
        <Link to="/" className="dock-item">
          <span className="dock-icon">🏠</span>
          <span className="dock-text">Home</span>
        </Link>
        <Link to="/projects" className="dock-item">
          <span className="dock-icon">📂</span>
          <span className="dock-text">Projects</span>
        </Link>
        <Link to="/about" className="dock-item">
          <span className="dock-icon">👤</span>
          <span className="dock-text">About</span>
        </Link>
        <Link to="/contact" className="dock-item">
          <span className="dock-icon">💬</span>
          <span className="dock-text">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;