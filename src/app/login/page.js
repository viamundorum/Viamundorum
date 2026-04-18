"use client"; // Ez fontos, ha később kezelni akarjuk az űrlap küldését

import Link from 'next/link';

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Belépés próbálkozás...");
    // Ide jön majd a backend logika
  };

  return (
    <>
      {/* A cím átkerült ide, az intro szekcióba */}
      <section className="intro">
        <h2>Belépés</h2>
      </section>
    
    <section className="auth-box-log">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="email@example.com" 
          required 
        />

        <label htmlFor="password">Jelszó</label>
        <input 
          type="password" 
          id="password" 
          placeholder="••••••••" 
          required 
        />

        <button type="submit">Belépés</button>
      </form>

      <p>
        Még nincs fiókod? <Link href="/signin">Regisztrálj!</Link>
      </p>
    </section>
    </>
  );
}