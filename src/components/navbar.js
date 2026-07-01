"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

// 1. LÉPÉS: Elfogadjuk a layout.js-ből érkező 'user' propot
export default function Navbar({ user }) {
  const router = useRouter();

  const onSearch = (e) => {
    e.preventDefault();
    const term = e.target.searchField.value;
    
    if (term.trim()) {
      router.push(`/search?q=${encodeURIComponent(term)}`);
    }
  };

  return (
    <header>
      <Link href="/worlds" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="logo-title">Via Mundorum</div>
      </Link>
      <nav>
        <Link href="/">Kezdőlap</Link>
        <Link href="/worlds">Világok</Link>
        
        {/* 2. LÉPÉS: Feltételes megjelenítés az Auth állapottól függően */}
       {/* {user ? (
          <Link href="/dashboard" style={{ fontWeight: 'bold' }}>🔒 Fiókom</Link>
        ) : (
          <Link href="/auth">Belépés</Link>
        )} */}
        
        <Link href="/feedback">Kapcsolat</Link>
      </nav>

      <form className="search" onSubmit={onSearch}>
        <input 
          name="searchField" 
          type="text" 
          placeholder="Keresés..." 
        />
        <button type="submit">🔍</button>
      </form>
    </header>
  );
}