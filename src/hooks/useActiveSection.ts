"use client";

import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleSections.length === 0) return;

        // Pick the section closest to the top of the viewport
        const activeEntry = visibleSections.reduce((closest, current) => {
          return Math.abs(current.boundingClientRect.top) <
            Math.abs(closest.boundingClientRect.top)
            ? current
            : closest;
        });

        setActiveSection(activeEntry.target.id);
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return activeSection;
}
