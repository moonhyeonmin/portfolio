import React, { useState } from "react";
import {
    FaEnvelope,
    FaInstagram,
    FaGithub,
    FaPhone,
    FaBlogger,
} from "react-icons/fa";

const LinkPage = () => {
    const [copied, setCopied] = useState("");

    const handleCopy = async (text, label) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(label);
            setTimeout(() => setCopied(""), 2000); // 2초 후 복사 상태 리셋
        } catch (err) {
            console.error("복사 실패:", err);
        }
    };

    const contacts = [
        {
            label: "E-Mail",
            value: "angsusals0627@naver.com",
            icon: <FaEnvelope className="text-blue-600 mr-2" />,
            color: "border-blue-600",
            bgHover: "hover:bg-blue-50",
            copy: true,
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/hyuunminn",
            icon: <FaInstagram className="text-pink-500 mr-2" />,
            color: "border-pink-500",
            bgHover: "hover:bg-pink-50",
        },
        {
            label: "Github",
            href: "https://github.com/moonhyeonmin",
            icon: <FaGithub className="text-gray-700 mr-2" />,
            color: "border-gray-700",
            bgHover: "hover:bg-gray-100",
        },
        {
            label: "Tistory",
            href: "https://angsusals0627.tistory.com/",
            icon: <FaBlogger className="text-orange-600 mr-2" />,
            color: "border-orange-600",
            bgHover: "hover:bg-orange-50",
        },
        {
            label: "Phone",
            value: "010-9666-8808",
            icon: <FaPhone className="text-green-500 mr-2" />,
            color: "border-green-500",
            bgHover: "hover:bg-green-50",
            copy: true,
        },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-20">
            <h1 className="text-3xl font-bold text-gray-800 mb-10">📎 연락처 및 링크</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                {contacts.map((item, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl shadow-sm border-2 ${item.color} transition-all duration-300 ${item.bgHover} flex items-center justify-between text-lg font-semibold text-gray-800`}
                    >
                        <div className="flex items-center">
                            {item.icon}
                            {item.label}
                        </div>
                        {item.copy ? (
                            <button
                                onClick={() => handleCopy(item.value, item.label)}
                                className={`px-3 py-1 rounded transition-all duration-300 ${
                                    copied === item.label
                                        ? "bg-green-500 text-white"
                                        : "text-blue-600 hover:underline"
                                }`}
                            >
                                {copied === item.label ? (
                                    <span className="flex items-center gap-1">
        <span className="text-lg">✔</span> 복사 완료
      </span>
                                ) : (
                                    "복사하기"
                                )}
                            </button>
                        ) : (
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                바로가기 →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LinkPage;