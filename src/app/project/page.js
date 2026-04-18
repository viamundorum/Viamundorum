import Link from 'next/link';

export default function HomePage() {
  return (
    <>
<section className="intro">
        {/* Az idézet mint fő elem, magyar idézőjelekkel */}
        <p className="latin-motto">
          „Non scholae, sed <span className="highlight-vitae">VITAE</span> discimus.”
        </p>
        
        {/* Alatta a többi információ kisebb méretben */}
        <h1>Üdvözlünk a Via Mundorum világában!</h1>
        <p className="hero-subtitle">
          Fedezd fel a tudás útjait, ahol a tanulás nem kényszer, hanem kaland. 
          Tanulj világokon keresztül, fedezd fel a természetet, a nyelveket vagy akár a sakk rejtelmeit.
        </p>
        
        <div className="hero-buttons">
          <a href="/worlds" className="btn-primary">Felfedezem a világokat!</a>
        </div>
      </section>
      

      {/* Itt jöhet a többi szekció, ha van */}
      <section className="intro">
        <p>Ez egy interaktív tudásalapú élményplatform. A következőkben röviden ismertetem, hogy épül fel, hogyan használható...</p>
    <p>A Via Mundorum egy nagy, sok kisebb világot összekötő platform. A Világok menüpont alatt találod a lényeget. A világkártyák a következőképpen épülnek fel: rajta van egy ikon (a könnyebb beazonosíthatóság miatt), a Világ neve, egy Tanulás, és egy Játék gomb. Rányomhatsz magára kártyára, és akkor az adott világ főoldalára ugrasz, ahol egy rövid ismretető után továbbléphetsz a TANULNI vagy JÁTSZANI. A Tanulás gomb megnyomásával egy összefoglalót tartalmazó oldalt találsz, míg a Játék gomb megnyomásával interaktív élmények által tanulhatsz.</p>
    <p>Minden világ egyedi. Más-más módon épül fel a JÁTÉK rész, de a TANULÁS mindig ugyanazon sémára támaszkodik.</p>
    <p>Próbáld ki a bemutató <Link href="https://viamundi-demo.netlify.app/">Demo</Link> oldalt, ahol betekintést nyerhetsz a világok "JÁTÉK" vázába. Vagy kattints, és nézd meg alább a sakk világát bemutató oldalt!</p>
      </section>

      <section className="world-grid">
        {/* Egy kártya példa */}
        <div className="world-card via-scaccorum">
          <Link href="/worlds/via-scaccorum" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="icon">♟️</span>
            <h2>Via Scaccorum</h2>
            <p>A sakk világa</p>
          </Link>

          <div className="card-buttons">
            <Link href="/tanulas" className="btn learn">📚 TANULÁS</Link>
            <Link href="/jatek" className="btn game">🎮 JÁTÉK</Link>
          </div>
        </div>
      </section>
    </>
  );
}