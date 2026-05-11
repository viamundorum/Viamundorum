"use client";

export default function NaihEmail() {
  const user = "ugyfelszolgalat";
  const domain = "naih.hu";

  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${user}@${domain}`;
      }}
      style={{ cursor: 'pointer', textDecoration: 'underline' }}
    >
      {/* A botok számára értelmezhetetlen, de az embernek olvasható */}
      {user}<span style={{ display: 'none' }}>-antispam-</span>&#64;{domain}
    </a>
  );
}