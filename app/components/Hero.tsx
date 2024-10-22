import { motion } from "framer-motion"
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
    
    return (
        <div className="flex w-full pt-24 px-20">
            <div className="flex w-full h-[800px] relative text-white items-end">
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
                    className="absolute flex items-center justify-center w-full h-full text-[16rem]"
                    style={{
                        fontFamily: 'var(--font-palace-script)',
                    }}
                >
                    <div className="h-26 overflow-hidden">
                        <motion.h1
                            className="text-center overflow-hidden -mt-10"
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1.5,
                                ease: 'easeInOut',
                            }}
                        >
                            Nadya Ethnic Spa
                        </motion.h1>
                    </div>
                </div>         
            </div>
        </div>
    )
};
