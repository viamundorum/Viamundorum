"use client";

import Link from 'next/link';
import { useState, use , useLayoutEffect} from 'react'; // useEffect helyett
import { worldsData } from '../../../data/worlds';
import { notFound } from 'next/navigation';


// 1. Ez a függvény felel a dinamikus metaadatokért
export async function generateMetadata({ params }) {
  // Megvárjuk a paramétereket (Next.js 15+ esetén kötelező az await, korábbi verzióknál elhagyható)
  const { id } = await params;

  // Itt egy kicsit szépíthetjük az ID-t a címhez (pl. "via-renovabilorum" -> "Via Renovabilorum")
  // Első betű nagybetű, kötőjelek szóközre cserélése
  const worldName = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: "${worldName} | Via Mundorum",
    description: "Fedezd fel a(z) ${worldName} világot a Via Mundorum oktatási platformon! Ismerd meg a témakörhöz kapcsolódó interaktív feladatokat és tananyagokat.",
    // Opcionálisan beállíthatsz egyedi képet is a megosztásokhoz, ha van minden világhoz külön képed:
    // openGraph: {
    //   images: [`/images/worlds/${id}-og.png`],
    // },
  };
}

// 2. Az eredeti oldal komponensed változatlan marad
export default function WorldPage({ params }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const world = worldsData[id];

  useLayoutEffect(() => {
    if (world) {
      const root = document.documentElement; // A html elem
      const body = document.body;
      body.classList.add(id);
      const headerTitle = document.querySelector('.logo-title');
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
        <h1>Válassz utat!</h1>
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