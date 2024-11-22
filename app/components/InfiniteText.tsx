import { motion } from "framer-motion";

interface InfiniteTextProp {
    Component: React.FC;
}

export default function InfiniteText({ Component }: InfiniteTextProp) {
    const motionProperties = {
        style: { display: 'flex', minWidth: '100%' },
        animate: { x: ['0%', '-100%'] },
        transition: {
            repeat: Infinity,
            duration: 15,
            ease: 'linear',
        },
    };

    return (
        <div className="flex overflow-hidden md:text-4xl text-md border-y-2 border-black">
            {[0, 1].map((_, index) => (
                <motion.div key={index} {...motionProperties}>
                    <Component />
                </motion.div>
            ))}
        </div>
    );
}