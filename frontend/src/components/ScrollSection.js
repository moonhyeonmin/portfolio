// src/components/ScrollSection.js
import { motion } from "framer-motion";

const ScrollSection = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // 아래에서 위로 등장
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollSection;