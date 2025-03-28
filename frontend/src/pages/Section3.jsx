import React from 'react';
import ScrollSection from "../components/ScrollSection.js";
import {
    SiNodedotjs,
    SiC,
    SiPython,
    SiSpring,
    SiSpringboot,
    SiSwagger,
    SiMysql,
    SiMongodb,
    SiLinux,
    SiUbuntu,
} from "react-icons/si";

const skills = [
    { name: "Node.js", color: "#5FA04E", icon: <SiNodedotjs size={32} /> },
    { name: "C", color: "#A9BACD", icon: <SiC size={32} /> },
    { name: "Python", color: "#A9BACD", icon: <SiPython size={32} /> },
    { name: "Spring", color: "#8BC34A", icon: <SiSpring size={32} /> },
    { name: "Springboot", color: "#5E9C76", icon: <SiSpringboot size={32} /> },
    { name: "Swagger", color: "#6D9A00", icon: <SiSwagger size={32} /> },
    { name: "Mysql", color: "#00618A", icon: <SiMysql size={32} /> },
    { name: "MongoDB", color: "#13AA52", icon: <SiMongodb size={32} /> },
    { name: "Linux", color: "#FFBF00", icon: <SiLinux size={32} /> },
    { name: "Ubuntu", color: "#DD4814", icon: <SiUbuntu size={32} /> },
];

const Section3 = () => {
    return (
        <ScrollSection>
            <section id="skills" className="bg-white min-h-screen flex flex-col items-center justify-center py-16">
                <h2 className="text-3xl font-bold text-[#0559C0] mb-8">기술 스택</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-4">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center text-white font-semibold py-4 px-4 rounded-md shadow-md text-center transform transition duration-300 hover:scale-110 hover:brightness-110 hover:shadow-xl hover:ring-4 hover:ring-white`}
                            style={{ backgroundColor: skill.color }}
                        >
                            <div className="text-3xl">{skill.icon}</div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </ScrollSection>
    );
};

export default Section3;