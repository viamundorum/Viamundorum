"use client";

import { useState, use, useEffect } from 'react';
import { worldsData } from '@/data/worlds'; // Ha ez is hibát dob, írd át erre: '../../../../data/worlds'

export default function StudyPage({ params }) {
  const { id } = use(params);
  const world = worldsData[id];
  
  const [lessonData, setLessonData] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dinamikus import: megpróbáljuk betölteni a fájlt a pontos relatív útvonalon
    // Mivel a page.js mélyen van, 4-et kell visszalépni az src-ig
    import(`../../../../app/data/lessons/${id}.json`)
      .then((data) => {
        setLessonData(data.default);
        setActiveChapter(data.default.chapters[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Hiba a JSON betöltésekor:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={{padding: '100px', textAlign: 'center'}}>Betöltés...</div>;
  if (!lessonData) return <div style={{padding: '100px', textAlign: 'center'}}>Hiba: Nem található tananyag ehhez a világhoz.</div>;

  return (
    <div className="study-layout">
      <aside className="study-sidebar" style={{ backgroundColor: world?.color || '#333' }}>
        <h3>{world?.title} fejezetek</h3>
        <nav>
          {lessonData.chapters.map((chapter) => (
            <button 
              key={chapter.id}
              onClick={() => setActiveChapter(chapter)}
              className={activeChapter?.id === chapter.id ? 'active' : ''}
            >
              {chapter.title}
            </button>
          ))}
        </nav>
        <a href={`/worlds/${id}`} className="back-link" style={{display: 'block', marginTop: '20px', color: 'white'}}>⬅ Vissza</a>
      </aside>

      <main className="study-content">
        <h1>{activeChapter?.title}</h1>
        <article style={{ whiteSpace: 'pre-wrap' }}>
          {activeChapter?.content}
        </article>
      </main>

      <style jsx>{`
        .study-layout { display: flex; min-height: 100vh; }
        .study-sidebar { width: 300px; padding: 20px; color: white; }
        .study-sidebar button { 
          display: block; width: 100%; padding: 10px; margin: 5px 0; 
          background: rgba(255,255,255,0.1); border: none; color: white; 
          text-align: left; cursor: pointer; border-radius: 5px; 
        }
        .study-sidebar button.active { background: rgba(255,255,255,0.3); font-weight: bold; }
        .study-content { flex: 1; padding: 40px; background: #f9f9f9; color: #333; }
      `}</style>
    </div>
  );
}