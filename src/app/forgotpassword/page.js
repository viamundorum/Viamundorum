"use client";

import { useState } from 'react';
import Link from 'next/navigation'; // vagy ahogy a routert kezeled
import LinkComponent from 'next/link';
import { supabase } from '@/utils/supabase/client';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    // A redirectTo megmondja a Supabase-nek, hogy miután a felhasználó 
    // rákattintott a kapott e-mailben a linkre, hova irányítsa vissza a weboldaladon!
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/newpassword`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setMessage('A jelszóvisszaállítási linket elküldtük az e-mail címedre! Ellenőrizd a fiókod (és a spam mappát is).');
      setEmail('');
    }
  };

  return (
    <>
      <section className="intro">
        <h2>Elfelejtett jelszó</h2>
        <p>Add meg az e-mail címed, és küldünk egy linket, amivel új jelszót állíthatsz be!</p>
        
        {error && <p style={{ color: '#ff6b6b', marginTop: '10px', fontWeight: 'bold' }}>{error}</p>}
        {message && <p style={{ color: '#51cf66', marginTop: '10px', fontWeight: 'bold' }}>{message}</p>}
      </section>

      <section className="auth-container" style={{ display: 'flex', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
        <div className="auth-column" style={{ maxWidth: '450px', width: '100%' }}>
          <div className="auth-box-log">
            <h3>Új jelszó kérése</h3>
            <form onSubmit={handleResetRequest}>
              <label htmlFor="reset-email">E-mail címed</label>
              <input 
                type="email" 
                id="reset-email" 
                placeholder="email@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              
              <button type="submit" style={{ marginTop: '10px' }}>
                {loading ? 'Küldés...' : 'Visszaállító link küldése'}
              </button>
              
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <LinkComponent href="/auth" style={{ fontSize: '13px', color: '#6e839c', textDecoration: 'underline' }}>
                  Vissza a bejelentkezéshez
                </LinkComponent>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}