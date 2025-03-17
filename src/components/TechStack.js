import React from "react";
import { FaNodeJs, FaPython, FaDocker, FaUbuntu, FaAws } from "react-icons/fa";
import { SiSpringboot, SiSwagger, SiMongodb, SiC, SiMysql } from "react-icons/si";
import { AiOutlineKubernetes } from "react-icons/ai";

// ✅ 올바른 CSS 경로로 수정
import "../css/TechStack.css";

const TechStack = () => {
  return (
    <div className="tech-stack">
      <div className="tech-item"><FaNodeJs className="tech-icon nodejs" /><span>Node.js</span></div>
      <div className="tech-item"><SiC className="tech-icon c" /><span>C</span></div>
      <div className="tech-item"><FaPython className="tech-icon python" /><span>Python</span></div>
      <div className="tech-item"><SiSpringboot className="tech-icon springboot" /><span>Spring</span></div>
      <div className="tech-item"><SiSwagger className="tech-icon swagger" /><span>Swagger</span></div>
      <div className="tech-item"><SiMysql className="tech-icon mysql" /><span>MySQL</span></div>
      <div className="tech-item"><SiMongodb className="tech-icon mongodb" /><span>MongoDB</span></div>
      <div className="tech-item"><FaUbuntu className="tech-icon ubuntu" /><span>Ubuntu</span></div>
      <div className="tech-item"><FaAws className="tech-icon AWS" /><span>AWS</span></div>
      <div className="tech-item"><FaDocker className="tech-icon docker" /><span>Docker</span></div>
      <div className="tech-item"><AiOutlineKubernetes className="tech-icon k8s" /><span>k8s</span></div>

    </div>
  );
};

export default TechStack;