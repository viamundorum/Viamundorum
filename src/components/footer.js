import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link href="/gdpr">Adatkezelési Tájékoztató</Link>
        <Link href="/aszf">Felhasználási Feltételek</Link>
        <Link href="/project">Impresszum</Link>
        
        {/* ÚJ GOMB: Erre kattintva bárhonnan újra felugrik a sütibanner */}
        <button 
          onClick={() => window.dispatchEvent(new Event('open-cookie-banner'))}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'inherit',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            cursor: 'pointer',
            padding: 0
          }}
        >
          Süti beállítások
        </button>

        {/* <Link href="/qr_code">QR kód</Link> */}
      </div>
      <p>© {new Date().getFullYear()} Via Mundorum</p>
    </footer>
  );
}