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
      const root = document.documentElement; // A html elem
      const body = document.body;
      const headerTitle = document.querySelector('header h1');
      const originalTitle = "Via Mundorum";

      // 1. Az adott világ osztályának hozzáadása (pl. .via-linguae)
      // Ez aktiválja a global.css-ben megírt változókat
      body.classList.add(id);

      // 2. Cím átírása
      if (headerTitle) headerTitle.innerText = world.title;

      // Takarítás kilépéskor
      return () => {
        body.classList.remove(id);
        if (headerTitle) headerTitle.innerText = originalTitle;
      };
    }
  }, [world, id]);

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