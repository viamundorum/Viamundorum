"use client";

import Link from 'next/link';

export default function AuthPage() {
  return (
    <>
      <section className="intro">
        <h2>Csatlakozz a Világokhoz</h2>
        <p>Lépj be a fiókodba vagy hozz létre egy újat a haladásod mentéséhez.</p>
      </section>

      <section className="auth-container">
        {/* Bal oszlop: Belépés */}
        <div className="auth-column">
          <div className="auth-box-log">
            <h3>Belépés</h3>
            <form action="#" method="POST">
              <label htmlFor="login-email">Email</label>
              <input type="email" id="login-email" placeholder="email@example.com" required />
              
              <label htmlFor="login-password">Jelszó</label>
              <input type="password" id="login-password" placeholder="••••••••" required />
              
              <button type="submit">Belépés</button>
            </form>
          </div>
        </div>

        {/* Jobb oszlop: Regisztráció */}
        <div className="auth-column">
          <div className="auth-box-sign">
            <h3>Regisztráció</h3>
            <form action="#" method="POST">
              <label htmlFor="sign-name">Teljes név</label>
              <input type="text" id="sign-name" placeholder="Minta János" required />

              <label htmlFor="sign-email">Email</label>
              <input type="email" id="sign-email" placeholder="email@example.com" required />

              <label htmlFor="sign-password">Jelszó</label>
              <input type="password" id="sign-password" placeholder="••••••••" required />

              <button type="submit">Regisztráció</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}