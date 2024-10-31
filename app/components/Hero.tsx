import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react";

export default function Hero() {
    const [imagePosition, setImagePosition] = useState("top");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setImagePosition("bottom");
        }, 1000); // Change object-position after 0.5 seconds
        return () => clearTimeout(timeout);
    }, []);
    
    const { scrollYProgress } = useScroll({
        offset: ['start start', 'end start']

    })

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", '150vh'])

    return (
        <div className="flex w-full pt-12 sm:px-20">
            <motion.div 
                className="flex w-full h-[800px] relative text-white items-end"
                style={{y}}
            >
                <Image
                    src='/images/hero2.jpg'
                    alt='nadya spa logo'
                    fill
                    quality={100}
                    priority={true}
                    style={{ 
                        filter: 'brightness(0.7)',
                        objectFit: "cover",
                        objectPosition: imagePosition,
                        transition: 'object-position 2s ease-in-out'
                    }}
                    className="image-transition"
                />
                
                <div
                    className="absolute flex items-center justify-center w-full h-full"
                    style={{
                        fontFamily: 'var(--font-palace-script)',
                    }}
                >
                    <motion.div 
                        className="flex flex-col border-b overflow-hidden"
                        initial={{ y: '200% '}}
                        animate={{ y: 0}}
                        transition={{
                            delay: 1.5,
                            duration: 1.5,
                            ease: 'circInOut',
                        }}
                    >
                        <div className="h-26 overflow-hidden">
                            <motion.h1
                                className="text-center"
                                style={{
                                    fontSize: 'clamp(4.5rem, 12vw, 16rem)',
                                    whiteSpace: 'nowrap'                 
                                }}
                                initial={{ opacity: 0, y: '100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 2,
                                    duration: 2,
                                    ease: 'circInOut',
                                }}
                            >
                                Nadya Ethnic Spa
                            </motion.h1>
                        </div>
                        <motion.div 
                            className="flex w-full justify-evenly border-t bg-white/5 backdrop-blur-sm"
                            style={{
                                fontSize: 'clamp(1rem, 5vw, 2rem)',
                                fontFamily: 'var(--font-italiana)'
                            }}
                            initial={{ opacity: 0, y: '100%' }}
                            animate={{ opacity: 1, y: 0}}
                            transition={{
                                delay: 3,
                                duration: 2,
                                ease: 'circInOut',
                            }}
                        >
                            <p>Spa</p>
                            <p>Salon</p>
                            <p>Sauna</p>
                            <p>PoundFit</p>
                            <p>Yoga</p>
                        </motion.div>
                    </motion.div>
                </div>         
            </motion.div>
        </div>
    )
};
