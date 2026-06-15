'use client'; // <-- EZ AZ ELENGEDHETETLEN ÚJ SOR!

import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link href="/gdpr">Adatkezelési Tájékoztató</Link>
        <Link href="/aszf">Felhasználási Feltételek</Link>
        <Link href="/project">Impresszum</Link>
        
        {/* A gombunk így már tökéletesen és hiba nélkül fog működni */}
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