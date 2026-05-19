export default function robots() {
  return {
    rules: [
      {
        userAgent: '*', // Minden létező keresőrobotra vonatkozik
        allow: '/',     // Alapvetően az egész oldalt indexelhetik (főoldal, világok, tanulás, játék)
        disallow: [
          '/api/',      // Belső API útvonalak elrejtése
          '/_next/',    // A Next.js saját rendszerfájljai (ezeket felesleges indexelni)
          '/login',     // Ha van/lesz bejelentkezési oldalad, a Google-nek nincs ott keresnivalója
          '/register',  // Regisztrációs oldal elrejtése
          '/admin',     // Ha később lesz belső admin felületed, azt is tiltjuk
        ],
      },
    ],
    // Megadjuk a robotoknak a pontos utat a zöld, sikeres oldaltérképedhez!
    sitemap: 'https://viamundorum.hu/sitemap.xml',
  };
}