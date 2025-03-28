// src/pages/Home.jsx
import React from 'react';
import Section1 from '../pages/Section1.jsx';
import Section2 from '../pages/Section2.jsx';
import Section3 from '../pages/Section3.jsx';
import DotNavigation from '../components/DotNavigation.js';

const Home = () => {
    return (
        <div className="font-[Inter] scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll">
            <DotNavigation sections={[0, 1, 2]} idPrefix="section" />
            <section id="section-0" className="snap-start">
                <Section1 />
            </section>
            <section id="section-1" className="snap-start">
                <Section2 />
            </section>
            <section id="section-2" className="snap-start">
                <Section3 />
            </section>
        </div>
    );
};

export default Home;