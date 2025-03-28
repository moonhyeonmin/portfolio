import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "PROJECT 1",
        name: "HarmonAI : 사용자 감정 기반 음악 추천 서비스",
        part: "BackEnd 및 Cloud",
        description:
            "개인화된 노래 추천 시스템 'HarmonAI'는 기존 Youtube Music에서 한 단계 나아가 사용자의 위치, 날씨, 감정에 따라 사용자에게 개인화된 음악을 추천해 주는 서비스입니다.",
        github: "https://github.com/KTB-Hackerton-24Team/HarmonAI_BE",
        image: "/images/project1.png", // 🔥 public 폴더 기준 경로
    },
    {
        id: 2,
        title: "PROJECT 2",
        name: "HarmonAI : 사용자 감정 기반 음악 추천 서비스",
        part: "BackEnd 및 Cloud",
        description:
            "개인화된 노래 추천 시스템 'HarmonAI'는 기존 Youtube Music에서 한 단계 나아가 사용자의 위치, 날씨, 감정에 따라 사용자에게 개인화된 음악을 추천해 주는 서비스입니다.",
        github: "https://github.com/KTB-Hackerton-24Team/HarmonAI_BE",
        image: "/images/project1.png",
    },
    {
        id: 3,
        title: "PROJECT 3",
        name: "HarmonAI : 사용자 감정 기반 음악 추천 서비스",
        part: "BackEnd 및 Cloud",
        description:
            "개인화된 노래 추천 시스템 'HarmonAI'는 기존 Youtube Music에서 한 단계 나아가 사용자의 위치, 날씨, 감정에 따라 사용자에게 개인화된 음악을 추천해 주는 서비스입니다.",
        github: "https://github.com/KTB-Hackerton-24Team/HarmonAI_BE",
        image: "/images/project1.png",
    },
];

const DotNavigation = ({ activeIndex, onDotClick }) => {
    return (
        <div className="fixed right-12 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
            {projects.map((_, i) => (
                <button
                    key={i}
                    onClick={() => onDotClick(i)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        activeIndex === i ? "bg-[#6AB1FF] scale-125" : "bg-[#C3C3C3]"
                    }`}
                ></button>
            ))}
        </div>
    );
};

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToSection = (index) => {
        const el = document.getElementById(`project-${index}`);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            projects.forEach((_, i) => {
                const section = document.getElementById(`project-${i}`);
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom > 0) {
                    setActiveIndex(i);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="font-[Inter] scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll relative">
            <DotNavigation activeIndex={activeIndex} onDotClick={scrollToSection} />

            {projects.map((project, index) => (
                <section
                    key={project.id}
                    id={`project-${index}`}
                    className="snap-start min-h-screen w-full flex items-center justify-center bg-white px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-6xl p-10 rounded-3xl shadow-2xl bg-gray-50 border border-gray-200 flex flex-col md:flex-row gap-8 items-center"
                    >
                        <div className="flex-1 text-center md:text-left space-y-4">
                            <h2 className="text-2xl text-[#004395] font-extrabold">{project.title}</h2>
                            <h3 className="text-lg font-bold">{project.name}</h3>
                            <p className="text-sm"><strong>참여 파트</strong>: {project.part}</p>
                            <p className="text-sm leading-relaxed">{project.description}</p>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-4 py-2 bg-[#004395] text-white rounded-md shadow hover:bg-[#003170]"
                            >
                                GitHub 보기
                            </a>
                            <p className="text-xs text-gray-400 mt-2">
                                * 자세한 코드/구조는 깃허브를 통해 확인해주세요.
                            </p>
                        </div>
                        <div className="flex-1">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto max-h-[320px] object-cover rounded-xl shadow-md"
                            />
                        </div>
                    </motion.div>
                </section>
            ))}
        </div>
    );
};

export default Projects;