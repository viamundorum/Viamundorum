import Link from 'next/link';


export default function WorldsPage() {
  // 1. Az adatok listája (később ez jöhet adatbázisból is!)
  const worlds = [
    { id: 'via-renovabilorum', title: 'Via Renovabilorum', desc: 'A megújuló energiák világa', icon: '⚡🌿', disabled: false },
    { id: 'via-viridorum', title: 'Via Viridorum', desc: 'Az újrahasznosítás világa', icon: '♻️', disabled: false },
    { id: 'via-linguae', title: 'Via Linguae', desc: 'A nyelvek világa', icon: '🌏', disabled: true },
    { id: 'via-naturae', title: 'Via Naturae', desc: 'A természet világa', icon: '🍃', disabled: true },
    { id: 'via-domorum', title: 'Via Domorum', desc: 'Az otthon világa', icon: '🏡', disabled: true },
    { id: 'via-scaccorum', title: 'Via Scaccorum', desc: 'A sakk világa', icon: '♟️', disabled: false },
    { id: 'via-corporum', title: 'Via Corporum', desc: 'Az emberi test világa', icon: '👀', disabled: true },
    { id: 'via-astrae', title: 'Via Astrae', desc: 'A csillagok, csillagképek világa', icon: '✨', disabled: true },
    { id: 'via-historiae', title: 'Via Historiae', desc: 'Hamarosan...', icon: '📜', disabled: true },
  ];

  return (
    <>
      <section className="intro">
        <h2>Válassz világot!</h2>
      </section>

      <section className="world-grid">
        {worlds.map((world) => (
          <div 
            key={world.id} 
            className={`world-card ${world.id} ${world.disabled ? 'disabled' : ''}`}
          >
            {/* A kártya tartalma */}
            <Link href={world.disabled ? "#" : `/worlds/${world.id}`} className="card-link">
              <span className="icon">{world.icon}</span>
              <h2>{world.title}</h2>
              <p>{world.desc}</p>
            </Link>

            {/* Gombok (csak ha nem disabled) */}
            {!world.disabled && (
              <div className="card-buttons">
                <Link href={`/worlds/${world.id}/tanulas`} className="btn learn">
                  📚 TANULÁS
                </Link>
                <Link href={`/worlds/${world.id}/jatek`} className="btn game">
                  🎮 JÁTÉK
                </Link>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}