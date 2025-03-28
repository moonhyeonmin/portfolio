import React from 'react';
import ScrollSection from '../components/ScrollSection.js';

const Section2 = () => {
    return (
        <ScrollSection>
            <section id="slogan" className="min-h-screen bg-[#0559C0] text-white flex flex-col justify-center items-center px-4">
                <h1 className="text-6xl md:text-7xl font-bold mb-8">
                    ‘ 안정적인 서비스 ’
                </h1>
                <p className="text-center text-xl md:text-2xl max-w-3xl">
                    대규모 트래픽을 견딜 수 있는<br />
                    <span className="font-semibold">견고하고 안정적인</span> 서비스를 만들고자 하며<br />
                    효율적인 클라우드 리소스와 구성을 통해 더 나은 방법을 찾고 있습니다.
                </p>
            </section>
        </ScrollSection>
    );
};

export default Section2;