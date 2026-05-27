// /src/app/worlds/[id]/jatek/jatekclientcontent.js
"use client";

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function JatekClientContent({ id, world, lessonData }) {
  // Megtartjuk az activeChapter állapotot, amit később a kvízeknél/játékoknál használhatsz
  const [activeChapter, setActiveChapter] = useState(lessonData?.chapters[0] || null);

  // A dizájnt és a színeket dinamikusan állító logikád
  useEffect(() => {
    if (world) {
      const body = document.body;
      const headerTitle = document.querySelector('.logo-title');
      const originalTitle = "Via Mundorum";

      body.classList.add(id);

      body.style.setProperty('--current-header-bg', world.color);
      body.style.setProperty('--current-footer-bg', world.color);
      body.style.setProperty('--current-main-bg', world.bgGradient);
      body.style.setProperty('--current-accent', world.accent);

      if (headerTitle) headerTitle.innerText = world.title;

      return () => {
        body.classList.remove(id);
        body.style.removeProperty('--current-header-bg');
        body.style.removeProperty('--current-footer-bg');
        body.style.removeProperty('--current-main-bg');
        body.style.removeProperty('--current-accent');
        if (headerTitle) headerTitle.innerText = originalTitle;
      };
    }
  }, [world, id]);

  return (
    <section className="intro">
      <h1>Játék - Fejlesztés alatt...</h1>
      <br />
      <p>Próbáld ki magad: 👉<Link href="https://viamundi-demo.netlify.app"> Demo oldal</Link></p>
    </section>
  );
}