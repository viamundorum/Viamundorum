import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link href="/project">Rólunk</Link>
        <Link href="/demo">Demo</Link>
        <Link href="/qr_code">QR kód</Link>
      </div>
      <p>© {new Date().getFullYear()} Via Mundorum</p>
    </footer>
  );
}