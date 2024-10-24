import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TextScrollProps = {
    paragraph: string;
};

export default function TextScroll({ paragraph }: TextScrollProps) {
    const container = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "end 0.8"],
    });

    const words = paragraph.split(" "); 

    return (
        <motion.p
            className="flex flex-wrap"
            ref={container}
            style={{
                fontSize: "clamp(1.5rem, 4vw, 1.8rem)", 
                lineHeight: 1.2, 
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
    const start = index / total;
    const end = start + 1 / total;

    const opacity = useTransform(progress, [start, end], [0, 1]);
    const translateY = useTransform(progress, [start, end], [50, 0]); 

    return (
        <motion.span
            style={{
                display: "inline-block",
                marginRight: "0.5rem",
                opacity,
                transform: translateY,
                transition: "all 0.5s ease", 
            }}
        >
            {word}
        </motion.span>
    );
};
