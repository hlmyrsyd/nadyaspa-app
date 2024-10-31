import React from 'react'
import { TextScroll, HeadingScroll, ImageDescription } from '.'

export default function Description() {
    return (
        <div className='flex lg:flex-row lg:items-center flex-col justify-start items-start h-screen w-full z-10 bg-white py-4 lg:py-20 lg:gap-0 gap-12'>
            <div className='flex flex-col items-start justify-between h-full w-full md:pr-0 lg:pr-20 px-4 lg:px-20'>
                <div 
                    className='flex h-full text-primary'
                    style={{
                        fontFamily: 'var(--font-italiana)',
                        fontSize: "clamp(4.7rem, 14vw, 7.5rem)",
                        lineHeight: 1,
                    }}
                >
                    <HeadingScroll />
                </div>
                <div className='flex w-full h-56'>
                    <TextScroll 
                        paragraph = "Experience such a gentle touches to restore all of emotional, and physical pleasure. Unwind and savor every touch for a period of time that you will always remember."
                    />
                </div>
            </div>
            <ImageDescription />
        </div>
    )
}