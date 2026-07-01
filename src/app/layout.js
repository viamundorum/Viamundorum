import CookieBanner from '@/components/cookiebanner';
import Script from 'next/script'
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// 1. LÉPÉS: Beimportáljuk a Supabase szerver klienst
import createClient from "@/utils/supabase/server";

export const metadata = {
  title: "Via Mundorum - Digitális Oktatási Platform",
  description: "Interaktív tananyagok, feladatok és megújuló energiaforrások oktatása diákoknak.",
  metadataBase: new URL("https://viamundorum.hu"),
  appleWebApp: {
    title: "Via Mundorum",
  },
};

// 2. LÉPÉS: A függvényt async-ké tesszük
export default async function RootLayout({ children }) {

  console.log("Supabase kliens importált értéke:", createClient);
  
  // 3. LÉPÉS: Lekérjük az aktuális felhasználót a sütik alapján
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="hu">
      <head>
        {/* Ide jöhetnek az esetleges egyéb meta tadek, de a főkódot a Script komponens kezeli */}
      </head>
      <body style={{ 
        '--current-header-bg': 'var(--header-bg)',
        '--current-footer-bg': 'var(--footer-bg)',
        '--current-main-bg': 'var(--main-bg)',
        '--current-accent': 'var(--accent)'
      }}>
        
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N7KTWJB2');`}
        </Script>

        <noscript dangerouslySetInnerHTML={{ __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7KTWJB2"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}} />

        {/* 4. LÉPÉS: Átadjuk a user objektumot a Navbar-nak */}
        <Navbar user={user} />
        
        <main>{children}</main>
        <Footer />
            
        <Script
          strategy="afterInteractive"
          data-goatcounter="https://viamundorum.goatcounter.com/count"
          src="https://gc.zgo.at/count.js"
        />

        <CookieBanner />
      </body>
    </html>
  );
}
