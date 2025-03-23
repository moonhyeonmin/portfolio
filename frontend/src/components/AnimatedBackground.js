import React from "react";
import Particles from "react-tsparticles";

const AnimatedBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: "#A4C4EE", // 기본 배경색
        },
        particles: {
          number: { value: 50 }, // 입자 개수
          size: { value: 3 }, // 입자 크기
          move: { enable: true, speed: 2 }, // 움직임 설정
          links: { enable: true, color: "#ffffff", opacity: 0.5 }, // 선 연결
        },
      }}
    />
  );
};

export default AnimatedBackground;