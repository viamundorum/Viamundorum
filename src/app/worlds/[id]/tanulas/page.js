// /src/app/worlds/[id]/tanulas/page.js
import { notFound } from 'next/navigation';
import { worldsData } from '@/data/worlds';
import { allLessons } from '@/data/lessons/index';
import TanulasClientContent from './tanulasclientcontent'; // Behozzuk a kliens oldali fájlt

// 1. Ez a függvény generálja a dinamikus metaadatokat a SZERVEREN
export async function generateMetadata({ params }) {
  const { id } = await params;

  const worldName = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const metadata = {
  title: `Tanulás | ${worldName}`,
  description: `Ismerd meg a ${worldName} digitális tudástér világát, egy interdiszciplináris oktatási univerzumon keresztül!`,
};

return {
    title: `${worldName} - Tanulás | Via Mundorum`,
    description: `Fedezd fel a(z) ${worldName} világot, sajátítsd el a megújuló energiák alapjait az interaktív tananyagokkal!`,
  };
}

// 2. A főoldal komponens továbbadja az adatokat a kliensnek
export default async function StudyPage({ params }) {
  const { id } = await params;
  const world = worldsData[id];
  const lessonData = allLessons[id];

  if (!world || !lessonData) return notFound();

  return <TanulasClientContent id={id} world={world} lessonData={lessonData} />;
}