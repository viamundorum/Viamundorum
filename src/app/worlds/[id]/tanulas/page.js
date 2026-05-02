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
      const root = document.body;
      const headerTitle = document.querySelector('header h1');
      const originalTitle = "Via Mundorum";

      root.style.setProperty('--current-header-bg', world.color);
      root.style.setProperty('--current-footer-bg', world.color);
      root.style.setProperty('--current-main-bg', world.bgGradient);
      root.style.setProperty('--current-accent', world.accent);

      if (headerTitle) headerTitle.innerText = world.title;

      return () => {
        root.style.removeProperty('--current-header-bg');
        root.style.removeProperty('--current-footer-bg');
        root.style.removeProperty('--current-main-bg');
        root.style.removeProperty('--current-accent');
        if (headerTitle) headerTitle.innerText = originalTitle;
      };
    }
  }, [world]);

  if (!world || !lessonData) return notFound();

  return (
    <div className="study-wrapper">
      <div className="study-container">
        {/* BAL OLDAL: Tartalomjegyzék */}
        <aside className="study-sidebar">
          <div className="sidebar-inner">
            <h3>Fejezetek</h3>
            <nav>
              {lessonData.chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setActiveChapter(chapter)}
                  className={activeChapter?.id === chapter.id ? 'active' : ''}
                  style={activeChapter?.id === chapter.id ? { borderLeft: `4px solid ${world.accent}`, background: 'rgba(255,255,255,0.1)' } : {}}
                >
                  {chapter.title}
                </button>
              ))}
            </nav>
            <a href={`/worlds/${id}`} className="back-link">⬅ Vissza a kapuhoz</a>
          </div>
        </aside>

        {/* JOBB OLDAL: Tényleges tartalom */}
        <main className="study-content">
          <div className="content-card">
            {activeChapter ? (
              <>
                <h1 style={{ color: world.color }}>{activeChapter.title}</h1>
                <hr style={{ borderColor: world.accent, margin: '20px 0' }} />
                <div className="article-body">
                  {activeChapter.content}
                </div>
              </>
            ) : (
              <p>Válassz egy fejezetet a listából.</p>
            )}
          </div>
        </main>
      </div>

      <style jsx>{`
        .study-wrapper {
          width: 100%;
          min-height: 80vh;
          display: flex;
          justify-content: center;
          padding: 20px;
        }
        .study-container {
          display: flex;
          width: 100%;
          max-width: 1200px;
          gap: 30px;
          align-items: flex-start;
        }
        .study-sidebar {
          width: 300px;
          flex-shrink: 0; /* Ne hagyjuk, hogy összenyomódjon */
          position: sticky;
          top: 100px;
        }
        .sidebar-inner {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          padding: 25px;
          border-radius: 20px;
          color: white;
        }
        nav button {
          display: block;
          width: 100%;
          padding: 12px 15px;
          margin: 10px 0;
          background: rgba(255, 255, 255, 0.05);
          border: none;
          color: white;
          text-align: left;
          cursor: pointer;
          border-radius: 5px;
          transition: 0.2s;
        }
        nav button:hover { background: rgba(255, 255, 255, 0.15); }
        nav button.active { font-weight: bold; }
        
        .study-content {
          flex-grow: 1; /* Töltse ki a maradék helyet */
        }
        .content-card {
          background: white;
          padding: 50px;
          border-radius: 25px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          color: #222;
          min-height: 600px;
        }
        .article-body {
          font-size: 1.2rem;
          line-height: 1.7;
          white-space: pre-wrap;
        }
        .back-link {
          display: block;
          margin-top: 20px;
          color: #aaa;
          text-decoration: none;
          font-size: 0.9rem;
        }
        .back-link:hover { color: white; }

        @media (max-width: 900px) {
          .study-container { flex-direction: column; }
          .study-sidebar { width: 100%; position: static; }
        }
      `}</style>
    </div>
  );
}