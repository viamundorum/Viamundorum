"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  // Ez a függvény kezeli a keresést
  const onSearch = (e) => {
    e.preventDefault();
    // Megkeressük az input mezőt az űrlapon belül
    const term = e.target.searchField.value;
    
    if (term.trim()) {
      router.push(`/search?q=${encodeURIComponent(term)}`);
    }
  };

  return (
    <header>
      <h1>Via Mundorum</h1>
      
      <nav>
        <Link href="/">Kezdőlap</Link>
        <Link href="/worlds">Világok</Link>
        <Link href="/auth">Bejelentkezés</Link>
        <Link href="/kapcsolat">Kapcsolat</Link>
      </nav>

      {/* Fontos: a div helyett form-ot használunk, hogy az Enter gomb is működjön! */}
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
