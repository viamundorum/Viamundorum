// /src/app/worlds/[id]/WorldClientContent.js
"use client";

import Link from 'next/link';
import { useLayoutEffect } from 'react';

export default function WorldClientContent({ id, world }) {
  
  // Pontosan a te meglévő logikád a háttér és a fejléc átírására:
  useLayoutEffect(() => {
    if (world) {
      const body = document.body;
      const headerTitle = document.querySelector('.logo-title');
      const originalTitle = "Via Mundorum";

      // Az adott világ osztályának hozzáadása (pl. .via-renovabilorum)
      body.classList.add(id);

      // Cím átírása a fejlécben
      if (headerTitle) headerTitle.innerText = world.title;

      // Takarítás az oldal elhagyásakor (visszaállítjuk az alaphelyzetet)
      return () => {
        body.classList.remove(id);
        if (headerTitle) headerTitle.innerText = originalTitle;
      };
    }
  }, [world, id]);

  return (
    <div className="inner-world-view">
      <section className="intro">
        <p className="tanulas-title">Fedezd fel a tudás különböző útjait!</p>
        <h1>Válassz utat: klasszikus olvasgatás vagy játékos felfedezés!</h1>
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