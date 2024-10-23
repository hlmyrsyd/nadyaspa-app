import React from 'react'
import { HeadingScroll } from '.'
import TextScroll from './TextScroll'

export default function Description() {
    return (
        <div className='flex lg:flex-row lg:items-center flex-col justify-start items-start h-full w-full z-10 bg-white p-4 lg:p-20'>
            <div className='flex flex-col items-start justify-between h-full w-full md:pr-0 lg:pr-20 gap-28'>
                <div 
                    className='pt-24 text-primary'
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
            <div className='flex w-full'>
                right
            </div>
        </div>
    )
}