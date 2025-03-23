import React from "react";
import "../css/About.css"; // 스타일 추가

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>👤 기본 정보</h2>
          <ul>
            <li><strong>이름 :</strong> 문현민</li>
            <li><strong>나이 :</strong> 25세</li>
            <li><strong>학교 :</strong> 세종대학교</li>
            <li><strong>전공 :</strong> 컴퓨터공학</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🏆 수상 경력</h2>
          <ul>
            <li>2024 광진구 장학생 선정</li>
            <li>2024 세종 SW/AI 교육 봉사 공모전 대상</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>💼 이력</h2>
          <ul>
            <li>2020.03 ~ : 세종대학교 컴퓨터공학과 입학</li>
            <li>2024.01 ~ 2024.12: 제36대 컴퓨터공학과 학생회장</li>
            <li>2025.02 ~ 2025.08: 카카오테크 부트캠프 클라우드 네이티브 2기</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;