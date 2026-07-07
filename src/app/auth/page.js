"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// 1. VÁLTOZTATÁS: createClient helyett magát a kész 'supabase' kapcsolatot importáljuk
import { supabase } from "../../utils/supabase/client";

export default function AuthPage() {
  const router = useRouter();
  
  // 2. VÁLTOZTATÁS: A "const supabase = createClient();" sort teljesen kitöröltük innen,
  // mert a fenti importnak köszönhetően a 'supabase' változó már készen áll a használatra!

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Form állapotok a belépéshez
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Form állapotok a regisztrációhoz
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Állapotok a jelszavak láthatóságához
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ... innen jön a kódod többi része (handleSubmit, return, stb.) teljesen változatlanul!
  // Szem ikon SVG komponens
  const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>
  );

  // Áthúzott szem ikon SVG komponens
  const EyeOffIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a19.08 19.08 0 0 1 4.39-4.39M1 1l22 22M22 12s-3-7-10-7a10.07 10.07 0 0 0-4.11.89M9.88 9.88a3 3 0 1 0 4.24 4.24"></path></svg>
  );

  // Közös stílus a szem ikonok gombjaihoz
  const eyeButtonStyle = {
    position: 'absolute',
    right: '12px',
    left: 'auto',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#6e839c',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    width: '24px',
    height: '24px',
    zIndex: '10'
  };

  // --- ÚJ STÍLUSOK AZ OAUTH GOMBOKHOZ ÉS ELVÁLASZTÓHOZ ---
  const separatorContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
    color: '#6e839c'
  };

  const separatorLineStyle = {
    flexGrow: 1,
    border: 'none',
    borderTop: '1px solid #dce4ec',
    margin: '0'
  };

  const separatorTextStyle = {
    padding: '0 10px',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 'bold',
    color: '#6e839c'
  };

  const googleButtonStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#ffffff',
    color: '#2c3e50',
    border: '1px solid #dce4ec',
    padding: '11px',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    marginBottom: '10px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
  };

  const facebookButtonStyle = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: '#1877F2',
    color: '#ffffff',
    border: 'none',
    padding: '11px',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
  };


  // 1. BELÉPÉS KEZELÉSE
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message === 'Invalid login credentials' ? 'Hibás e-mail cím vagy jelszó!' : error.message);
    } else {
      router.push('/auth/callback?next=/dashboard');
    }
  };

  // --- ÚJ LOGIKÁK AZ OAUTH BEJELENTKEZÉSHEZ ---
  const handleGoogleLogin = async () => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const handleFacebookLogin = async () => {
  setLoading(true);
  setErrorMessage('');
  setSuccessMessage('');

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
    options: {
      // Ez pontosan ugyanoda irányítja a felhasználót, ahova a Google is
      redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
    },
  });

  if (error) {
    setErrorMessage(error.message);
    setLoading(false);
  }
};


  // 2. REGISZTRÁCIÓ KEZELÉSE
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    if (registerPassword !== registerConfirmPassword) {
      setErrorMessage('A két megadott jelszó nem egyezik meg!');
      setLoading(false);
      return;
    }

    if (!acceptTerms) {
      setErrorMessage('A regisztrációhoz el kell fogadnod az ÁSZF-et és az Adatkezelési tájékoztatót!');
      setLoading(false);
      return;
    }

    const { data, error: authError } = await supabase.auth.signUp({
      email: registerEmail,
      password: registerPassword,
    });

    if (authError) {
      setErrorMessage(authError.message);
      setLoading(false);
      return;
    }

    if (data?.user) {
      const { error: profileError } = await supabase
      .from('profiles')
      .insert([
      { 
        id: data.user.id,
        full_name: registerName,
        username: registerName.split(' ')[0], // Mivel a username nem lehet üres (NULL)
        role: 'free' // 'subscription_status' helyett 'role'
      }
    ]);

      if (profileError) {
        setErrorMessage(profileError.message);
      } else {
        setSuccessMessage('Sikeres regisztráció! Most már beléphetsz a bal oldali űrlapon.');
        setRegisterName('');
        setRegisterEmail('');
        setRegisterPassword('');
        setRegisterConfirmPassword('');
        setAcceptTerms(false);
      }
    }

    setLoading(false);
  };

  return (
    <>
      <section className="intro">
        <h2>Csatlakozz a Világokhoz!</h2>
        <p>Lépj be a fiókodba vagy hozz létre egy újat a haladásod mentéséhez!</p>
        
        {errorMessage && <p style={{ color: '#ff6b6b', marginTop: '10px', fontWeight: 'bold' }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: '#51cf66', marginTop: '10px', fontWeight: 'bold' }}>{successMessage}</p>}
      </section>

      <section className="auth-container" style={{ opacity: loading ? 0.7 : 1, pointerEvents: loading ? 'none' : 'auto' }}>
        {/* Bal oszlop: Belépés */}
        <div className="auth-column">
          <div className="auth-box-log">
            <h3>Bejelentkezés</h3>
            <form onSubmit={handleLogin}>
              <label htmlFor="login-email">E-mail cím</label>
              <input 
                type="email" 
                id="login-email" 
                placeholder="email@example.com" 
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required 
              />
              
              <label htmlFor="login-password">Jelszó</label>
              <div style={{ position: 'relative', width: '100%' }}>
                <input 
                  type={showLoginPassword ? "text" : "password"} 
                  id="login-password" 
                  placeholder="••••••••" 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  style={{ width: '100%', paddingRight: '42px' }}
                  required 
                />
                <button 
                  type="button" 
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  style={eyeButtonStyle}
                >
                  {showLoginPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
              
              <div style={{ textAlign: 'right', marginBottom: '15px', marginTop: '5px' }}>
                <Link href="/forgotpassword" style={{ fontSize: '13px', color: '#6e839c', textDecoration: 'underline' }}>
                  Elfelejtetted a jelszavad?
                </Link>
              </div>
              
              <button type="submit">{loading ? 'Betöltés...' : 'Belépés'}</button>

              {/* --- VAGY ELVÁLASZTÓ VONAL --- */}
              <div style={separatorContainerStyle}>
                <hr style={separatorLineStyle} />
                <span style={separatorTextStyle}>vagy</span>
                <hr style={separatorLineStyle} />
              </div>

              {/* --- GOOGLE GOMB --- */}
              <button 
                type="button" 
                onClick={handleGoogleLogin} 
                style={googleButtonStyle}
              >
                 <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.83z"/>
                   <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.76-2.11-6.71-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
                   <path fill="#FBBC05" d="M5.29 14.24A7.18 7.18 0 0 1 4.92 12c0-.79.13-1.57.37-2.31V6.54H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.37l4.08-3.13z"/>
                   <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.46l4.08 3.13c.95-2.85 3.59-4.96 6.71-4.96z"/>
                 </svg>
                Belépés Google-fiókkal
              </button>

              {/* --- FACEBOOK GOMB --- */}
              <button 
                type="button" 
                onClick={handleFacebookLogin} 
                style={facebookButtonStyle}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Belépés Facebook-fiókkal
              </button>
            </form>
          </div>
        </div>

        {/* Jobb oszlop: Regisztráció */}
        <div className="auth-column">
          <div className="auth-box-sign">
            <h3>Regisztráció</h3>
            <form onSubmit={handleRegister}>
              <label htmlFor="sign-name">Teljes név</label>
              <input 
                type="text" 
                id="sign-name" 
                placeholder="Minta János" 
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required 
              />

              <label htmlFor="sign-email">E-mail cím</label>
              <input 
                type="email" 
                id="sign-email" 
                placeholder="email@example.com" 
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required 
              />

              <label htmlFor="sign-password">Jelszó</label>
              <div style={{ position: 'relative', width: '100%' }}>
                <input 
                  type={showRegisterPassword ? "text" : "password"} 
                  id="sign-password" 
                  placeholder="••••••••" 
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  style={{ width: '100%', paddingRight: '42px' }}
                  required 
                />
                <button 
                  type="button"
                  onClick={() => setShowRegisterPassword(!showRegisterPassword)}
                  style={eyeButtonStyle}
                >
                  {showRegisterPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>

              <label htmlFor="sign-confirm-password">Jelszó megerősítése</label>
              <div style={{ position: 'relative', width: '100%' }}>
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  id="sign-confirm-password" 
                  placeholder="••••••••" 
                  value={registerConfirmPassword}
                  onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                  style={{ width: '100%', paddingRight: '42px' }}
                  required 
                />
              </div>

              {/* Valós idejű jelszó-egyezés visszajelzés */}
              {registerConfirmPassword && (
                <p style={{ 
                  fontSize: '13px', 
                  marginTop: '5px', 
                  fontWeight: 'bold',
                  color: registerPassword === registerConfirmPassword ? '#51cf66' : '#ff6b6b' 
                }}>
                  {registerPassword === registerConfirmPassword ? '✓ A jelszavak megegyeznek' : '✗ A jelszavak nem egyeznek'}
                </p>
              )}

              {/* ÁSZF és Adatkezelési checkbox */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '15px', marginBottom: '15px' }}>
                <input 
                  type="checkbox" 
                  id="accept-terms" 
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  style={{ marginTop: '4px', cursor: 'pointer' }}
                  required 
                />
                <label htmlFor="accept-terms" style={{ fontSize: '13px', color: '#0a1424', lineHeight: '1.4', cursor: 'pointer' }}>
                  Elfogadom az <Link href="/aszf" style={{ textDecoration: 'underline', color: '#4682b4' }}>Általános Szerződési Feltételeket</Link> és az <Link href="/adatkezelesi-tajekoztato" style={{ textDecoration: 'underline', color: '#4682b4' }}>Adatkezelési tájékoztatót</Link>.
                </label>
              </div>

              <button type="submit">{loading ? 'Regisztráció...' : 'Regisztráció'}</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}