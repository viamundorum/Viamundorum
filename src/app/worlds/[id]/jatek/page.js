"use client";

import { useState, use, useEffect } from 'react';
import { worldsData } from '@/data/worlds';
import { allLessons } from '@/data/lessons/index';
import { notFound } from 'next/navigation';

export default function StudyPage({ params }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const world = worldsData[id];
  const lessonData = allLessons[id];
  
  const [activeChapter, setActiveChapter] = useState(lessonData?.chapters[0] || null);

  useEffect(() => {
    if (world) {
      const body = document.body;
      const headerTitle = document.querySelector('.logo-title');
      const originalTitle = "Via Mundorum";

      // 1. Ugyanazt az osztályt adjuk hozzá, mint a Világ oldalon!
      body.classList.add(id);

      // Opcionális: Ha mégis kellenek az egyedi változók, maradhatnak, 
      // de az osztály hozzáadása a kulcs a global.css miatt.
      body.style.setProperty('--current-header-bg', world.color);
      body.style.setProperty('--current-footer-bg', world.color);
      body.style.setProperty('--current-main-bg', world.bgGradient);
      body.style.setProperty('--current-accent', world.accent);

      if (headerTitle) headerTitle.innerText = world.title;

      return () => {
        // Takarítás kilépéskor
        body.classList.remove(id);
        
        body.style.removeProperty('--current-header-bg');
        body.style.removeProperty('--current-footer-bg');
        body.style.removeProperty('--current-main-bg');
        body.style.removeProperty('--current-accent');
        if (headerTitle) headerTitle.innerText = originalTitle;
      };
    }
  }, [world, id]); // Fontos: az id-t is vedd fel a függőségi listába!

  if (!world || !lessonData) return notFound();

  return (
    <section className="intro">
      <h1>Fejlesztés alatt...</h1>
    </section>
  );
}