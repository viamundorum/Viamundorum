"use client";

import Link from 'next/link';
import { worldsData } from '../../../data/worlds';
import { notFound } from 'next/navigation';
import { useEffect, use } from 'react';

export default function WorldPage({ params }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const world = worldsData[id];

  useEffect(() => {
    if (world) {
      const root = document.body;
      const headerTitle = document.querySelector('header h1');
      const originalTitle = "Via Mundorum"; // Az alapértelmezett név

      // 1. Színek átállítása
      root.style.setProperty('--current-header-bg', world.color);
      root.style.setProperty('--current-footer-bg', world.color);
      root.style.setProperty('--current-main-bg', world.bgGradient);
      root.style.setProperty('--current-accent', world.accent);

      // 2. Cím átírása a fejlécben
      if (headerTitle) headerTitle.innerText = world.title;

      // Takarítás, amikor kilépünk a világból
      return () => {
        root.style.removeProperty('--current-header-bg');
        root.style.removeProperty('--current-footer-bg');
        root.style.removeProperty('--current-main-bg');
        root.style.removeProperty('--current-accent');
        if (headerTitle) headerTitle.innerText = originalTitle;
      };
    }
  }, [world]);

  if (!world) return notFound();

  return (
    <div className="inner-world-view">
      <section className="intro">
        <h2>Válassz utat!</h2>
        <p>Fedezd fel a tudás különböző útjait.</p>
      </section>

      <div className="big-button-container">
        {/* TANULÁS GOMB LINKKEL */}
        <Link href={`/worlds/${id}/tanulas`} className="big-card-link">
          <div className="big-card learn" style={{ backgroundColor: world.color }}>
            <span className="big-icon">📚</span>
            <h3>TANULÁS</h3>
            <p>Rendszerezett tananyag és magyarázatok.</p>
          </div>
        </Link>

        {/* JÁTÉK GOMB LINKKEL */}
        <Link href={`/worlds/${id}/jatek`} className="big-card-link">
          <div className="big-card game" style={{ backgroundColor: world.accent }}>
            <span className="big-icon">🎮</span>
            <h3>JÁTÉK</h3>
            <p>Fedezd fel a világot és oldd fel a helyszíneket.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}