import SafeEmail from '@/components/safeemail';
import Link from 'next/link';

export const metadata = {
  title: "Felhasználási Feltételek | Via Mundorum",
  description: "A Via Mundorum Felhasználási Feltételek oldala.",
};

export default function ASZFPage() {
  return (
    <>
<section className="intro">
        <h1>Felhasználási feltételek</h1>
</section>   
<section className="gdpr">
    <p>Hatályos: 2026. május 15-től visszavonásig.</p>
</section>       
    <section className="gdpr">
        <h2>1. Általános rendelkezések</h2>
        <p>Jelen dokumentum a <strong>Via Mundorum</strong> interdiszciplináris oktatási platform (a továbbiakban: Weboldal) 
          használatának feltételeit szabályozza. A Weboldal látogatásával a Felhasználó ráutaló 
          magatartással elfogadja az alábbi feltételeket.
        </p>
    </section>
    <section className="gdpr">
        <h2>2. A szolgáltatás célja és jellege</h2>
        <p>A Weboldal célja az interdiszciplináris tudásmegosztás, különös tekintettel a természettudományok, 
          a matematika és a fenntarthatóság összefüggéseire. A Weboldalon közzétett tartalmak 
          (cikkek, képletgyűjtemények, interaktív elemek) tájékoztató és oktatási jellegűek.</p>
    </section>
    <section className="gdpr">
        <h2>3. Szellemi tulajdonjogok</h2>
        <p>A Weboldalon megjelenített minden tartalom – beleértve, de nem kizárólagosan: szövegek, grafikák, 
          logók, programkódok, a „Via Mundorum” elnevezés és koncepció, valamint a megújuló energiaforrások 
          matematikájára vonatkozó egyedi példatárak – <strong>Pesák Dóra Zita</strong> (a továbbiakban: Szerző) kizárólagos 
          szellemi tulajdonát képezik.</p>
        <ul className="list-disc list-inside">
            <li>Szabad felhasználás: A Felhasználó jogosult a Weboldal tartalmát saját tanulási, 
              oktatási vagy kutatási céljaira ingyenesen felhasználni, amennyiben az nem irányul közvetlen 
              vagy közvetett jövedelemszerzésre.</li>
            <li>Engedélyköteles felhasználás: A tartalmak kereskedelmi célú hasznosítása, tömeges másolása, 
              átdolgozása vagy más digitális felületen történő újraközlése kizárólag a Szerző előzetes, 
              írásos hozzájárulásával lehetséges.</li>
            <li>Idézés: A Weboldal tartalmaiból való idézés a forrás (link és név) pontos feltüntetésével, 
              a szabad felhasználás keretein belül engedélyezett.</li>
        </ul>
    </section>
    <section className="gdpr">
        <h2>4. A Felhasználó magatartása</h2>
        <p>A Felhasználó vállalja, hogy a Weboldalt rendeltetésszerűen használja. Tilos minden olyan tevékenység, 
          amely a Weboldal informatikai biztonságát veszélyezteti, vagy a Szerző szellemi tulajdonjogait sérti.</p>
    </section>
    <section className="gdpr">
        <h2>5. Felelősség korlátozása</h2>
        <p>A Szerző mindent megtesz a közzétett adatok és képletek pontosságáért, azonban:</p>
        <ul className="list-disc list-inside">
          <li>Nem vállal felelősséget a tartalmak felhasználásából eredő esetleges közvetett vagy közvetlen károkért.</li>
          <li>Nem garantálja a Weboldal folyamatos, megszakítás nélküli rendelkezésre állását, 
            és hibamentes működését.</li>
          <li>Nem felelős a Weboldalon elhelyezett külső linkeken keresztül elérhető harmadik felek tartalmáért.</li>
        </ul>
    </section>
    <section className="gdpr">
        <h2>6. Irányadó jog</h2>
        <p>Jelen feltételekben nem szabályozott kérdésekben a magyar jogszabályok, különösen a Szerzői jogról 
          szóló 1999. évi LXXVI. törvény rendelkezései az irányadóak.</p>
    </section>
    <section className="gdpr">
      <h2>7. Szerzői jogi nyilatkozat és Forrásmegjelölés</h2>
      <p>A Via Mundorum weboldal tartalma (szövegek, interaktív tananyagok, logikai összefüggések) 
        Pesák Dóra Zita szellemi tulajdona.</p>
      <ul className="list-disc list-inside">
        <li>Grafikák és Illusztrációk: Az oldalon megjelenő egyedi grafikák saját forrásból, 
          illetve jogtiszta {/*[ide írd be, ha használtál stock fotót, pl. Unsplash, Canva]*/} forrásból származnak.</li>
          <li>Tudományos háttér: A megújuló energiaforrások matematikájára vonatkozó tartalmak 
            Mika János és Oláhné Téglási Ilona szakmai mentorálása mellett készültek.</li>
      </ul>
      <p>A tulajdonos előzetes írásbeli engedélye nélkül tilos az oldal tartalmát „tükrözni” 
        (technikai úton újraközvetíteni) vagy adatbázisba kimenteni. A jogosulatlan felhasználás 
        polgári jogi következményeket von maga után.</p>
    </section>
    </>
  );
}