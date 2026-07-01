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
        <h1>Általános Szerződési Feltételek</h1>
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
       <h2>4. Regisztráció és Felhasználói Fiókok</h2>
       <p>A Weboldal bizonyos funkcióinak (így a játékmenet mentése, világok látogatása) igénybevétele regisztrációhoz és felhasználói fiók létrehozásához kötött. A regisztráció történhet közvetlenül e-mail cím megadásával, vagy harmadik fél által biztosított azonosító szolgáltatással (Google, Facebook Login).</p>
       <ul className="list-disc list-inside">
           <li>A Felhasználó köteles a regisztráció során valós adatokat megadni, és azokat szükség esetén frissíteni.</li>
           <li>A hozzáférési adatok (jelszavak) titokban tartásáért és a fiókon keresztül végzett minden tevékenységért kizárólag a Felhasználó felel.</li>
           <li>Az Üzemeltető fenntartja a jogot, hogy azon felhasználói fiókokat, amelyek sértik a jelen ÁSZF-et, vagy amelyekkel visszaélést (pl. csalást, illetéktelen adatkinyerést) kíséreltek meg, előzetes értesítés nélkül korlátozza, felfüggessze vagy véglegesen törölje.</li>
       </ul>
    </section>
    <section className="gdpr">
       <h2>5. Előfizetések és Prémium tartalmak</h2>
       <p>A Weboldalon elérhető interaktív világok és tananyagok egy része ingyenesen elérhető ("free" státusz), míg bizonyos prémium tartalmak vagy specifikus világok hozzáférése előfizetéshez vagy eseti díjfizetéshez ("premium" státusz) kötött.</p>
       <ul className="list-disc list-inside">
           <li>Az Üzemeltető fenntartja a jogot, hogy a szabadon hozzáférhető és a prémium kategóriába tartozó világok és funkciók körét, valamint az előfizetési díjakat bármikor egyoldalúan módosítsa.</li>
           <li>A már kifizetett, digitális és azonnal hozzáférhető tartalom jellegéből adódóan a sikeres feloldást vagy előfizetést követően a Felhasználót a jogszabályok értelmében nem illeti meg az elállási jog, kivéve, ha a szolgáltatás bizonyíthatóan technikai hiba miatt nem vált elérhetővé.</li>
       </ul>
    </section>
    <section className="gdpr">
        <h2>6. A Felhasználó magatartása</h2>
        <p>A Felhasználó vállalja, hogy a Weboldalt rendeltetésszerűen használja. Tilos minden olyan tevékenység, 
          amely a Weboldal informatikai biztonságát veszélyezteti, vagy a Szerző szellemi tulajdonjogait sérti.</p>
    </section>
    <section className="gdpr">
        <h2>7. Felelősség korlátozása</h2>
        <p>A Szerző mindent megtesz a közzétett adatok és képletek pontosságáért, azonban:</p>
        <ul className="list-disc list-inside">
          <li>Nem vállal felelősséget a tartalmak felhasználásából eredő esetleges közvetett vagy közvetlen károkért.</li>
          <li>Nem garantálja a Weboldal folyamatos, megszakítás nélküli rendelkezésre állását, 
            és hibamentes működését.</li>
          <li>Nem felelős a Weboldalon elhelyezett külső linkeken keresztül elérhető harmadik felek tartalmáért.</li>
        </ul>
    </section>
    <section className="gdpr">
        <h2>8. Irányadó jog</h2>
        <p>Jelen feltételekben nem szabályozott kérdésekben a magyar jogszabályok, különösen a Szerzői jogról 
          szóló 1999. évi LXXVI. törvény rendelkezései az irányadóak.</p>
    </section>
    <section className="gdpr">
      <h2>9. Szerzői jogi nyilatkozat és Forrásmegjelölés</h2>
      <p>A Via Mundorum weboldal tartalma (szövegek, interaktív tananyagok, logikai összefüggések) 
        Pesák Dóra Zita szellemi tulajdona.</p>
      <ul className="list-disc list-inside">
        <li>Grafikák és Illusztrációk: Az oldalon megjelenő egyedi grafikák saját forrásból, 
          illetve jogtiszta saját{/*[ide írd be, ha használtál stock fotót, pl. Unsplash, Canva]*/} forrásból származnak.</li>
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