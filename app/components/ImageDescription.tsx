import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const images = [
    '/images/hero1.jpg',
    '/images/hero2.jpg',
    '/images/hero3.jpg',
    '/images/hero4.jpg',
    '/images/hero5.jpg',
];

export default function ImageDescription() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null); 
    };

    return (
        <div className="flex flex-row h-full w-full items-center justify-center">
            {images.map((image, idx) => (
                <motion.div
                    key={idx}
                    className={`relative flex h-full w-full ${idx % 2 === 0 ? 'bg-primary' : 'bg-black'}`}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                    initial={{ flex: 1 }}
                    animate={{
                        flex: hoveredIndex === idx ? 5 : 1, 
                        transition: { duration: 0.8, ease: 'easeInOut' }
                    }}
                    style={{
                        overflow: 'hidden',
                        willChange: 'flex', 
                    }}
                >
                    <motion.div
                        className="w-full h-full"
                        animate={{
                            scale: hoveredIndex === idx ? 1.1 : 1, // Zoom effect on hover
                            transition: { duration: 1, ease: 'easeInOut' }
                        }}
                    >
                        <Image 
                            src={image} 
                            alt={`Image ${idx + 1}`} 
                            fill
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
