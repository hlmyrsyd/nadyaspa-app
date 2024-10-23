import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TextScrollProps = {
    paragraph: string;
};

export default function TextScroll({ paragraph }: TextScrollProps) {
    const container = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.95", "start 0.7"],
    });

    const words = paragraph.split(" "); // Split paragraph into words

    return (
        <motion.p
            className="flex flex-wrap"
            ref={container}
            style={{
                fontSize: "clamp(1.5rem, 4vw, 1.8rem)", // Responsive font size
                lineHeight: 1.2, // Slightly larger line height for readability
                height: "1vh",
                wordBreak: "keep-all",
                textAlign: "left",
            }}
        >
            {words.map((word, index) => (
                <Word
                    key={index}
                    word={word}
                    index={index}
                    total={words.length}
                    progress={scrollYProgress}
                />
            ))}
        </motion.p>
    );
}

type WordProps = {
    word: string;
    index: number;
    total: number;
    progress: MotionValue<number>;
};

const Word = ({ word, index, total, progress }: WordProps) => {
    // Calculate delay for staggered animation of words
    const start = index / total;
    const end = start + 1 / total;

    // Use transform for opacity and translateY (staggered entry)
    const opacity = useTransform(progress, [start, end], [0, 1]);
    const translateY = useTransform(progress, [start, end], [50, 0]); // Animate from lower position to normal

    return (
        <motion.span
            style={{
                display: "inline-block",
                marginRight: "0.5rem", // Spacing between words
                opacity,
                transform: translateY,
                transition: "all 0.5s ease", // Smooth transition
            }}
        >
            {word}
        </motion.span>
    );
};
