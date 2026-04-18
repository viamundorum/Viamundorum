"use client";

import Link from 'next/link';

export default function SigninPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Regisztrációs kísérlet...");
  };

  return (
    <>
      {/* A cím átkerült ide, az intro szekcióba */}
      <section className="intro">
        <h2>Regisztráció</h2>
      </section>

    <section className="auth-box-sign">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Felhasználónév</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          placeholder="Fáh Zoltán" 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          placeholder="email@example.com" 
          required 
        />

        <label htmlFor="password">Jelszó</label>
        <input 
          type="password" 
          id="password" 
          name="password"
          placeholder="••••••••" 
          required 
        />

        <button type="submit">Regisztráció</button>
      </form>

      <p>
        Már van fiókod? <Link href="/login">Jelentkezz be!</Link>
      </p>
    </section>
    </>
  );
}