import React from 'react';
import ScrollSection from "../components/ScrollSection.js";

const Section1 = () => {
    return (
        <ScrollSection>
            <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-white pt-24">
                <div className="bg-white shadow-2xl rounded-3xl p-10 w-[90%] max-w-xl text-center">
                    <img src="/images/profile.png" alt="me" className="w-40 h-40 rounded-full mx-auto mb-6 shadow-md" />
                    <h1 className="text-5xl font-bold">문현민</h1>
                    <h2 className="text-2xl text-[#004395] font-semibold mt-2">Cloud Engineer</h2>
                    <p className="text-base mt-4">
                        안녕하세요!<br />
                        저는 <span className="font-semibold">클라우드 엔지니어</span>로서 <br />
                        안정적이고 효율적인 배포와 확장 가능한 클라우드 아키텍처 구축에 집중하고 있습니다.<br />
                        최신 기술을 활용하여 안정적이고 성능이 뛰어난 서버를 구축하는 것이 목표입니다.
                    </p>
                </div>
            </section>
        </ScrollSection>
    );
};

export default Section1;