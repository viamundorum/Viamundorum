"use client";

import { useState, use } from 'react';
import { worldsData } from '../../../../data/worlds';
// Megjegyzés: a JSON-t importálhatod, vagy fetch-elheted
import lessonData from '../../../../data/lessons/via-linguae.json'; 

export default function StudyPage({ params }) {
  const { id } = use(params);
  const world = worldsData[id];
  
  // State: melyik fejezetet látjuk éppen (alapból az elsőt)
  const [activeChapter, setActiveChapter] = useState(lessonData.chapters[0]);

  return (
    <div className="study-layout">
      {/* 1. OLDALSÁV (Sidebar) */}
      <aside className="study-sidebar" style={{ backgroundColor: world.color }}>
        <h3>{world.title} fejezetek</h3>
        <nav>
          {lessonData.chapters.map((chapter) => (
            <button 
              key={chapter.id}
              onClick={() => setActiveChapter(chapter)}
              className={activeChapter.id === chapter.id ? 'active' : ''}
            >
              {chapter.title}
            </button>
          ))}
        </nav>
        
        <a href={`/worlds/${id}`} className="back-link">⬅ Vissza</a>
      </aside>

      {/* 2. TARTALMI RÉSZ (Main Content) */}
      <main className="study-content">
        <header style={{ borderBottom: `2px solid ${world.accent}` }}>
          <h1>{activeChapter.title}</h1>
        </header>
        <article>
          {/* Itt jelenik meg a tartalom */}
          <p>{activeChapter.content}</p>
        </article>
      </main>

      <style jsx>{`
        .study-layout {
          display: flex;
          min-height: 80vh;
        }
        .study-sidebar {
          width: 300px;
          padding: 20px;
          color: white;
        }
        .study-sidebar button {
          display: block;
          width: 100%;
          padding: 10px;
          margin: 5px 0;
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          text-align: left;
          cursor: pointer;
          border-radius: 5px;
        }
        .study-sidebar button.active {
          background: var(--current-accent, orange);
          font-weight: bold;
        }
        .study-content {
          flex: 1;
          background: white;
          color: #333;
          padding: 40px;
        }
      `}</style>
    </div>
  );
}