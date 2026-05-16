"use client";

import { useState, use, useLayoutEffect } from 'react';
import { worldsData } from '@/data/worlds';
import { allLessons } from '@/data/lessons/index';
import { notFound } from 'next/navigation';

export default function StudyPage({ params }) {
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const world = worldsData[id];
  const lessonData = allLessons[id];
  
  // MÓDOSÍTVA: Az alapértelmezett kiválasztott elem most már simán a legelső főfejezet
  const [activeChapter, setActiveChapter] = useState(lessonData?.chapters[0] || null);

  useLayoutEffect(() => {
    if (world) {
      const body = document.body;
      const headerTitle = document.querySelector('header h1');
      const originalTitle = "Via Mundorum";

      body.classList.add(id);

      body.style.setProperty('--current-header-bg', world.color);
      body.style.setProperty('--current-footer-bg', world.color);
      body.style.setProperty('--current-main-bg', world.bgGradient);
      body.style.setProperty('--current-accent', world.accent);

      if (headerTitle) headerTitle.innerText = world.title;

      return () => {
        body.classList.remove(id);
        body.style.removeProperty('--current-header-bg');
        body.style.removeProperty('--current-footer-bg');
        body.style.removeProperty('--current-main-bg');
        body.style.removeProperty('--current-accent');
        if (headerTitle) headerTitle.innerText = originalTitle;
      };
    }
  }, [world, id]);

  if (!world || !lessonData) return notFound();

  return (
    <div className="study-wrapper">
      <div className="study-container">
        {/* BAL OLDAL: Tartalomjegyzék */}
        <aside className="study-sidebar">
          <div className="sidebar-inner">
            <h3>Tartalomjegyzék</h3>
            <nav className="chapters-nav">
              {lessonData.chapters.map((chapter) => (
                <div key={chapter.id} className="chapter-group">
                  
                  {/* MÓDOSÍTVA: A főfejezet újra egy kattintható GOMB, mint régen */}
                  <button
                    onClick={() => setActiveChapter(chapter)}
                    className={`main-chapter-btn ${activeChapter?.id === chapter.id ? 'active' : ''}`}
                    style={activeChapter?.id === chapter.id ? { borderLeft: `4px solid ${world.accent}`, background: 'rgba(255,255,255,0.1)', fontWeight: 'bold' } : {}}
                  >
                    {chapter.title}
                  </button>
                  
                  {/* ALFEJEZETEK LISTÁJA */}
                  {chapter.subchapters && chapter.subchapters.length > 0 && (
                    <div className="subchapters-list">
                      {chapter.subchapters.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => setActiveChapter(sub)}
                          className={activeChapter?.id === sub.id ? 'active' : ''}
                          style={activeChapter?.id === sub.id ? { borderLeft: `3px solid ${world.accent}`, background: 'rgba(255,255,255,0.1)' } : {}}
                        >
                          {sub.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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
          
        /* A teljes navigációs konténer egy szigorú függőleges oszlop legyen */
        nav {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .study-sidebar {
          width: 300px;
          flex-shrink: 0;
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
        
        .chapter-group {
          margin-bottom: 15px;
        }

        /* ÚJ STÍLUS: A főfejezet gomb egyedi kinézete */
        .main-chapter-btn {
          display: block;
          width: 100%;
          padding: 10px 12px;
          margin: 0;
          background: none;
          border: none;
          color: white;
          text-align: left;
          cursor: pointer;
          font-weight: bold;
          font-size: 1.05rem;
          border-radius: 5px;
          transition: 0.2s;
        }
        .main-chapter-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .subchapters-list {
          padding-left: 20px; /* Beljebb toljuk az alfejezeteket, hogy látszódjon a hierarchia */
          margin-top: 5px;
        }

        /* Az alfejezet gombok stílusa (kicsit kisebb és finomabb) */
        .subchapters-list button {
          display: block;
          width: 100%;
          padding: 8px 12px;
          margin: 4px 0;
          background: rgba(255, 255, 255, 0.03);
          border: none;
          color: #ccc;
          text-align: left;
          cursor: pointer;
          border-radius: 5px;
          transition: 0.2s;
          font-size: 0.95rem;
        }
        .subchapters-list button:hover { 
          background: rgba(255, 255, 255, 0.12); 
          color: white;
        }
        .subchapters-list button.active { 
          font-weight: bold; 
          color: white;
        }
        
        .study-content {
          flex-grow: 1;
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