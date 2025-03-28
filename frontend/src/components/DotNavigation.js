import React, { useEffect, useState } from "react";

const DotNavigation = ({ sections = [0, 1, 2], idPrefix = "section" }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToSection = (index) => {
        const section = document.getElementById(`${idPrefix}-${index}`);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let closestIndex = 0;
            let minDistance = Infinity;

            sections.forEach((i) => {
                const section = document.getElementById(`${idPrefix}-${i}`);
                if (!section) return;

                const offsetTop = section.offsetTop;
                const distance = Math.abs(scrollPosition - offsetTop);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = i;
                }
            });

            setActiveIndex(closestIndex);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections, idPrefix]);

    return (
        <div className="fixed right-10 md:right-16 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
            {sections.map((i) => (
                <button
                    key={i}
                    aria-label={`Go to section ${i + 1}`}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 focus:outline-none ${
                        activeIndex === i ? "bg-[#6AB1FF] scale-125" : "bg-[#C3C3C3]"
                    }`}
                    onClick={() => scrollToSection(i)}
                />
            ))}
        </div>
    );
};

export default DotNavigation;