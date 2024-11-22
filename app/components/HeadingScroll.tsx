import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HeadingScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "0.3 start"], 
    });

    const translateY1 = useTransform(scrollYProgress, [0, 0.5], [-150, 0]); 
    const translateY2 = useTransform(scrollYProgress, [0.1, 0.6], [-150, 0]); 
    const translateY3 = useTransform(scrollYProgress, [0.2, 0.7], [-150, 0]); 

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const transition = { ease: 'easeInOut', duration: 5 };

    return (
        <div 
            ref={containerRef} 
            className="overflow-hidden"
        >
            <div className="overflow-hidden">
                <motion.h1
                    style={{
                        translateY: translateY1,
                        opacity,
                    }}
                    transition={transition}
                >
                    Relieved.
                </motion.h1>
            </div>
            <div className="overflow-hidden">
                <motion.h1
                    style={{
                        translateY: translateY2,
                        opacity,
                    }}
                    transition={transition}
                >
                    Relaxed.
                </motion.h1>
            </div>
            <div className="overflow-hidden">
                <motion.h1
                    style={{
                        translateY: translateY3,
                        opacity,
                    }}
                    transition={transition}
                >
                    Refreshed.
                </motion.h1>
            </div>
        </div>
    );
};
