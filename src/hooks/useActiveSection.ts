"use client";

import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));

    if (sections.length === 0) return;

    const getActiveByScroll = () => {
      const headerOffset = 120;
      const currentPosition = window.scrollY + headerOffset;

      let currentSection = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= currentPosition) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    const onHashChange = () => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId) {
        setActiveSection(hashId);
      }
    };

    getActiveByScroll();
    window.addEventListener("scroll", getActiveByScroll, { passive: true });
    window.addEventListener("resize", getActiveByScroll);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", getActiveByScroll);
      window.removeEventListener("resize", getActiveByScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return activeSection;
}
