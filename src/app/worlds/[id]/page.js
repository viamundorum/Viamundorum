// /src/app/worlds/[id]/page.js
import { notFound } from 'next/navigation';
import { worldsData } from '../../../data/worlds';
// Cseréld ki ezt a sort a /src/app/worlds/[id]/page.js fájlban:
import WorldClientContent from './worldclientcontent'; // Behozzuk a kliens oldali párunkat

// 1. Ez a függvény felel a dinamikus metaadatokért (Szerver oldalon fut le)
export async function generateMetadata({ params }) {
  const { id } = await params;

  const worldName = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

return {
    title: `${worldName} | Via Mundorum`,
    description: `Fedezd fel a(z) ${worldName} világot a Via Mundorum oktatási platformon! Ismerd meg a témakörhöz kapcsolódó interaktív feladatokat és tananyagokat.`,
  };
}

// 2. A fő oldal komponens, ami továbbadja a paramétereket
export default async function WorldPage({ params }) {
  const { id } = await params;
  const world = worldsData[id];

  if (!world) return notFound();

  // Átadjuk az id-t és a world objektumot a kliens komponensnek
  return <WorldClientContent id={id} world={world} />;
}