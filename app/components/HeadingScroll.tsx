import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HeadingScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track the scroll position
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "0.4 start"], // Adjust based on when you want the animation to start/end
    });

    // Calculate different translateY for each heading with staggered delay
    const translateY1 = useTransform(scrollYProgress, [0, 0.5], [-150, 0]); // Heading 1
    const translateY2 = useTransform(scrollYProgress, [0.1, 0.6], [-150, 0]); // Heading 2 (delayed)
    const translateY3 = useTransform(scrollYProgress, [0.2, 0.7], [-150, 0]); // Heading 3 (delayed)

    // Common opacity animation for all headings
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Create a smooth transition
    const transition = { ease: 'easeInOut', duration: 5 }; // Adjust duration and easing for smoothness

    return (
        <div ref={containerRef} className="overflow-hidden">
            {/* Heading 1 */}
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
                {/* Heading 2 */}
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
                {/* Heading 3 */}
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
