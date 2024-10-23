'use client'

import Lenis from "lenis";
import { useEffect } from "react";
import { Navigation, Hero, Description } from "./components";

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="flex flex-col w-full">
      {/* Page In */}
      
      <Navigation />
      <Hero />
      <Description />
      <div className="h-screen">
        
      </div>
    </div>
  );
}
