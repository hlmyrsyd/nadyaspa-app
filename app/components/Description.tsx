import React from 'react'
import TextScroll from './TextScroll'

export default function Description() {
    return (
        <div className='flex lg:flex-row lg:items-center flex-col justify-start items-start h-screen w-full z-10 bg-white p-20'>
            <div className='flex flex-col items-start justify-between h-full w-full md:pr-0 lg:pr-20 gap-28'>
                <div 
                    className='pt-24'
                    style={{
                        fontSize: "clamp(3rem, 14vw, 7rem)",
                        lineHeight: 1,
                    }}
                >
                    <h1>Relieved.</h1>
                    <h1>Relaxed.</h1>
                    <h1>Refreshed.</h1>
                </div>
                <div className='flex w-full h-full'>
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