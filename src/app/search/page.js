"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react'; // 1. Ezt add hozzá

// 2. Hozz létre egy belső komponenst a tartalomnak
function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');

  return (
    <>
      <section className="intro">
        <h2>Keresési eredmények</h2>
        <p>Találatok a következőre: <strong>{query || 'minden tartalom'}</strong></p>
      </section>

      <section className="auth-box-log" style={{ maxWidth: '800px', color: '#333' }}>
        <p>A teljes körű keresés hamarosan elérhető lesz, amint minden világunk megnyitja kapuit!</p>
        <hr />
        <h4>Addig is böngéssz a főbb kategóriákban:</h4>
        <ul style={{ textAlign: 'left', marginTop: '20px' }}>
          <li><a href="/worlds">Világok felfedezése</a></li>
          <li><a href="/project">A projekt háttere</a></li>
          <li><a href="/kapcsolat">Visszajelzés küldése</a></li>
        </ul>
      </section>
    </>
  );
}

// 3. A fő exportban csomagold be a Suspense-be
export default function SearchPage() {
  return (
    <Suspense fallback={<div>Betöltés...</div>}>
      <SearchContent />
    </Suspense>
  );
}