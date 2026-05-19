import Link from 'next/link';
import { worldsData } from '../../data/worlds';

export const metadata = {
  title: "Világok | Via Mundorum",
  description: "Tanulás világokon keresztül, interdiszciplináris oktatási univerzum, digitális tudástér.",
};

export default function WorldsPage() {
  return (
    <>
      <section className="intro">
        <h1>Válassz világot!</h1>
      </section>

      <section className="world-grid">
        {Object.entries(worldsData).map(([id, world]) => (
          /* Itt az id-t adjuk át osztályként (pl. className="world-card via-finn") */
          <div 
            key={id} 
            className={`world-card ${id} ${world.disabled ? 'disabled' : ''}`}
          >
            {/* A kártya felső része (ikon, cím, leírás) */}
            <Link href={world.disabled ? "#" : `/worlds/${id}`} className="card-link">
              <span className="icon">{world.icon || '🌍'}</span>
              <h2>{world.title}</h2>
              <p>{world.description}</p>
            </Link>

            {/* Gombok (csak ha nem disabled) */}
            {!world.disabled && (
              <div className="card-buttons">
                <Link href={`/worlds/${id}/tanulas`} className="btn learn">📚 TANULÁS</Link>
                <Link href={`/worlds/${id}/jatek`} className="btn game">🎮 JÁTÉK</Link>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}