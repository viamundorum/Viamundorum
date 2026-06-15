'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('suti_dontes');
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'granted') {
      pushToDataLayer('granted');
    }
  }, []);

  const pushToDataLayer = (status) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie_consent_update',
      cookie_consent_status: status
    });
  };

  const handleAccept = () => {
    localStorage.setItem('suti_dontes', 'granted');
    pushToDataLayer('granted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('suti_dontes', 'denied');
    pushToDataLayer('denied');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      maxWidth: '400px',
      background: '#ffffff',
      color: '#2d3748',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      zIndex: 9999,
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      <div>
        <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: 'bold', color: '#1a202c' }}>
          Süti beállítások 🍪
        </h4>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', color: '#4a5568' }}>
          A honlap megfelelő működéséhez és a látogatottsági statisztikák elemzéséhez sütiket használunk. Az „Elfogadom” gombbal hozzájárulsz a Google Analytics és Clarity használatához.
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <button 
          onClick={handleReject} 
          style={{ 
            background: 'transparent', 
            color: '#4a5568', 
            border: '1px solid #cbd5e0', 
            padding: '8px 16px', 
            borderRadius: '6px', 
            cursor: 'pointer', 
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.target.style.background = '#f7fafc'}
          onMouseOut={(e) => e.target.style.background = 'transparent'}
        >
          Elutasítom
        </button>
        <button 
          onClick={handleAccept} 
          style={{ 
            background: '#3182ce', // Szép kék gomb (átírhatod a Via Mundorum márka színére)
            color: 'white', 
            border: 'none', 
            padding: '8px 16px', 
            borderRadius: '6px', 
            cursor: 'pointer', 
            fontSize: '14px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(49, 130, 206, 0.4)'
          }}
        >
          Elfogadom
        </button>
      </div>
    </div>
  );
}