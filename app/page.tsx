'use client'

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { 
  // Navigation, 
  Hero, Description, Menu } from "./components";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const lenis = new Lenis({
          smoothWheel: true,
          wrapper: document.body,
      });

      const raf = (time: number) => {
          lenis.raf(time);
          requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      // Add an observer for snapping to Menu
      const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Cast entry.target to HTMLElement
                    const targetElement = entry.target as HTMLElement;
                    lenis.scrollTo(targetElement, {
                        duration: 1, // Smooth snap duration
                        easing: (t) => 1 - Math.pow(1 - t, 3), // Ease-out cubic
                    });
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the section is visible
        }
    );

      if (heroRef.current) observer.observe(heroRef.current);
      if (descriptionRef.current) observer.observe(descriptionRef.current);
      if (menuRef.current) observer.observe(menuRef.current);

      return () => {
          lenis.destroy();
          observer.disconnect();
      };
  }, []);

  return (
    <div className="flex flex-col w-full">      
      {/* <Navigation /> */}
      <div ref={heroRef}>
        <Hero />
      </div>
      <div className="flex w-full h-full bg-white" ref={descriptionRef}>
        <Description />
      </div>
      <div ref={menuRef}>
        <Menu />
      </div>
    </div>
  );
}
