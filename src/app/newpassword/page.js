"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';

export default function NewPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Szem ikonok stílusa (ugyanaz, mint az előbb)
  const eyeButtonStyle = {
    position: 'absolute', right: '12px', left: 'auto', top: '50%', transform: 'translateY(-50%)',
    background: 'none', border: 'none', color: '#6e839c', cursor: 'pointer', zIndex: '10'
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('A két jelszó nem egyezik meg!');
      return;
    }

    setLoading(true);
    setError('');

    // Itt frissítjük a bejelentkezett felhasználó adatait az új jelszóval
    const { error } = await supabase.auth.updateUser({
      password: password
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => {
        // 3 másodperc múlva visszadobjuk a sima oldalra
        router.push('/auth'); 
      }, 3000);
    }
  };

  return (
    <>
      <section className="intro">
        <h2>Új jelszó beállítása</h2>
        <p>Kérjük, add meg az új, biztonságos jelszavadat.</p>
        
        {error && <p style={{ color: '#ff6b6b', marginTop: '10px', fontWeight: 'bold' }}>{error}</p>}
        {success && <p style={{ color: '#51cf66', marginTop: '10px', fontWeight: 'bold' }}>✓ Jelszó sikeresen megváltoztatva! Átirányítás a belépéshez...</p>}
      </section>

      {!success && (
        <section className="auth-container" style={{ display: 'flex', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
          <div className="auth-column" style={{ maxWidth: '450px', width: '100%' }}>
            <div className="auth-box-log">
              <h3>Biztonságos jelszó</h3>
              <form onSubmit={handlePasswordUpdate}>
                
                <label htmlFor="new-pass">Új jelszó</label>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="new-pass" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', paddingRight: '42px' }}
                    required 
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} style={eyeButtonStyle}>
                    {showPassword ? '👁️' : '👁️‍🗨️'} {/* Ide rakhatod az előző SVG ikonokat is */}
                  </button>
                </div>

                <label htmlFor="confirm-pass" style={{ marginTop: '15px', display: 'block' }}>Új jelszó megerősítése</label>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    id="confirm-pass" 
                    placeholder="••••••••" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{ width: '100%', paddingRight: '42px' }}
                    required 
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={eyeButtonStyle}>
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>

                <button type="submit" style={{ marginTop: '20px' }} disabled={loading}>
                  {loading ? 'Mentés...' : 'Jelszó mentése'}
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}