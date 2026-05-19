// /src/app/worlds/[id]/jatek/page.js
import { notFound } from 'next/navigation';
import { worldsData } from '@/data/worlds';
import { allLessons } from '@/data/lessons/index';
import JatekClientContent from './jatekclientcontent'; // Behozzuk a külön kliens fájlt

// Dinamikus metaadat generálás a világ neve alapján a szerveren
export async function generateMetadata({ params }) {
  const { id } = await params;

  const worldName = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: "${worldName} - Játék és Tesztek | Via Mundorum",
    description: "Tedd próbára a tudásod! Játékos feladatok, küldetések és kvízek várnak rád a megszerzett ismeretek elmélyítéséhez.",
  };
}

export default async function GamePage({ params }) {
  const { id } = await params;
  const world = worldsData[id];
  const lessonData = allLessons[id];

  if (!world || !lessonData) return notFound();

  // Továbbadjuk az adatokat a kliens komponensnek
  return <JatekClientContent id={id} world={world} lessonData={lessonData} />;
}