import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link href="/gdpr">Adatkezelési tájékoztató</Link>
        <Link href="/aszf">Felhasználási Feltételek</Link>
        <Link href="/project">Impresszum</Link>
      {/*  <Link href="/qr_code">QR kód</Link> */}
      </div>
      <p>© {new Date().getFullYear()} Via Mundorum</p>
    </footer>
  );
}