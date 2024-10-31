import { motion } from "framer-motion";

export default function Menu() {
    return (
        <div className="flex h-full w-full p-4 lg:p-20 flex-col">
            <div
                className="flex overflow-hidden text-6xl"
            >
                <motion.div
                style={{ display: 'flex', minWidth: '100%' }}
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: 'linear',
                }}
                >
                This text keeps moving across the screen!
                </motion.div>
                <motion.div
                style={{ display: 'flex', minWidth: '100%' }}
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: 'linear',
                }}
                >
                This text keeps moving across the screen!
                </motion.div>
            </div>
        </div>
    );
};
