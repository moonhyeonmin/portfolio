import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

const timelineData = [
    {
        icon: <FaGraduationCap size={20} className="text-white" />,
        title: "세종대학교 컴퓨터공학과",
        period: "20. 03. ~",
        category: "학력",
        color: "bg-blue-500",
        description: "세종대학교에서 컴퓨터공학을 전공하며 이론과 실습을 함께 공부 중입니다.",
    },
    {
        icon: <FaBriefcase size={20} className="text-white" />,
        title: "컴퓨터공학과 학생회장",
        period: "24. 01. ~ 24. 12.",
        category: "경력",
        color: "bg-green-500",
        description: "학과 내 학생회 운영과 행사를 총괄하며 리더십과 협업 능력을 키웠습니다.",
    },
    {
        icon: <FaBriefcase size={20} className="text-white" />,
        title: "앱개발 동아리 Alom Node.js 멘토",
        period: "24. 09. ~ 25. 02.",
        category: "경력",
        color: "bg-green-500",
        description: "Node.js 기반 웹 개발을 후배에게 멘토링하며 실무 경험을 공유했습니다.",
    },
    {
        icon: <FaBriefcase size={20} className="text-white" />,
        title: "카카오 부트캠프 클라우드 네이티브",
        period: "25. 01. ~ 25. 08.",
        category: "경력",
        color: "bg-green-500",
        description: "카카오테크 부트캠프에서 클라우드 기반 아키텍처를 실습하며 역량을 강화했습니다.",
    },
    {
        icon: <FaCertificate size={20} className="text-white" />,
        title: "정보처리기사",
        period: "",
        category: "자격증",
        color: "bg-yellow-500",
        description: "정보처리기사 국가 자격증을 보유하고 있습니다.",
    },
    {
        icon: <FaCertificate size={20} className="text-white" />,
        title: "Opic IH",
        period: "",
        category: "자격증",
        color: "bg-yellow-500",
        description: "Opic 시험에서 IH 성적을 받았습니다.",
    },
];

const About = () => {
    const [selectedItem, setSelectedItem] = useState(timelineData[0]);

    return (
        <div className="pt-28 pb-20 px-8 bg-white min-h-screen text-gray-800">
            <h1 className="text-4xl font-bold text-center mb-16 text-[#004395]">이력 소개</h1>

            <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
                {/* 경력 리스트 */}
                <div className="flex-1 border-l-4 border-blue-200 pl-6">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setSelectedItem(item)}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`mb-6 cursor-pointer p-3 rounded-md transition 
                  ${selectedItem.title === item.title
                                ? "bg-blue-50 border-l-4 border-blue-500"
                                : "hover:bg-gray-100"}
              `}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.period}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 우측 상세 패널 */}
                <div className="flex-1 min-h-[240px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedItem.title}
                            className="bg-gray-50 shadow-md p-6 rounded-lg"
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 60 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedItem.color}`}>
                                    {selectedItem.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">{selectedItem.title}</h2>
                                    <p className="text-sm text-gray-500">{selectedItem.period}</p>
                                </div>
                            </div>
                            <p className="text-md leading-relaxed">{selectedItem.description}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default About;