import SafeEmail from '@/components/safeemail';
import NaihEmail from '@/components/naihemail';
import Link from 'next/link';

export const metadata = {
  title: "Adatkezelési Tájékoztató | Via Mundorum",
  description: "A Via Mundorum adatvédelmi és adatkezelési szabályzata. Ismerd meg, hogyan vigyázunk az adataidra!",
};

export default function GDPRPage() {
  return (
    <>
    <section className="intro">
        <h1>Adatkezelési Tájékoztató</h1>
    </section>  
    <section className="gdpr">
        <p>Hatályos: 2026. május 15-től visszavonásig.</p>
    </section>      
    <section className="gdpr">
        <h2>1. Általános rendelkezések</h2>
        <p>Jelen Adatkezelési Tájékoztató kiterjed a Pesák Dóra Zita (a továbbiakban: Adatkezelő) 
            által üzemeltetett viamundorum.hu weboldalra és annak összes aloldalára. 
            A honlap látogatója (a továbbiakban: Felhasználó) a honlap látogatásával egyben 
            elfogadja a jelen tájékoztatóban foglaltakat.
        </p>
    </section>
    <section className="gdpr">
        <h2>2. Az Adatkezelő adatai</h2>
        <ul className="list-disc list-inside">
            <li>Név: Pesák Dóra Zita</li>
            <li>Székhely: 2030 Érd, Szép Ilonka utca 4/A</li>
            <li>E-mail cím: <SafeEmail /></li>
            <li>Tárhelyszolgáltató: Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA)</li>
        </ul>
    </section>
    <section className="gdpr">
        <h2>3. A szolgáltatás leírása</h2>
        <p>A <strong>Via Mundorum</strong> egy interdiszciplináris oktatási platform, amely tudományos, 
            matematikai és fenntarthatósági ismereteket tesz elérhetővé interaktív formában.</p>
    </section>
    <section className="gdpr">
        <h2>4. Adatkezelés célja és jogalapja</h2>
        <p>Az Adatkezelő kizárólag olyan személyes adatokat kezel, amelyeket a Felhasználó önkéntesen ad meg 
            (például kapcsolatfelvétel során).</p>
        <ul className="list-disc list-inside">
            <li>Az adatkezelés célja: Kapcsolattartás, a Felhasználó kérdéseinek megválaszolása, 
                a szolgáltatás fejlesztése.</li>
            <li>Jogalap: Az érintett önkéntes hozzájárulása (GDPR 6. cikk (1) bek. a) pont).</li>
        </ul>
    </section>
    <section className="gdpr">
        <h2>5. Adatbiztonság</h2>
        <p>Az Adatkezelő megtesz minden technikai és szervezési intézkedést (például a korábban 
            tárgyalt e-mail titkosítás és biztonságos keretrendszer használata), hogy a 
            Felhasználók adatait védje a jogosulatlan hozzáféréstől.</p>
    </section>
    <section className="gdpr">
        <h2>6. Adatfeldolgozók</h2>
        <p>Az adatkezelés során az alábbi szolgáltatókat vesszük igénybe, akik a technikai hátteret biztosítják:</p>
        <ul className="list-disc list-inside">
            <li>Tárhelyszolgáltató: Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA)</li>
            <li>Levelezőrendszer: Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Írország) 
                – a <SafeEmail /> címre érkező üzenetek kezelése.</li>
        </ul>
    </section>
    <section className="gdpr">
        <h2>7. Sütik (Cookie-k) kezelése és a hozzájárulások kezelése</h2>
        <ol className="list-decimal list-inside">
            <li>A sütikről általában:</li>
            <ul className="list-disc list-inside">
            <li>A honlap a jobb felhasználói élmény, a weboldal biztonságos működése, valamint a látogatottsági s
                tatisztikák elemzése érdekében kis adatfájlokat, úgynevezett sütiket (cookie-kat) helyez el a 
                Felhasználó számítógépén vagy mobileszközén.</li>
            </ul>
            <li>A hozzájárulások kezelésének módja:</li>
            <ul className="list-disc list-inside">
                <li>A weboldal a sütikhez való hozzájárulások kezelésére és a sütik blokkolására egy egyedileg fejlesztett 
                süti-kezelő rendszert (Cookie Banner) és a Google Tag Manager szolgáltatást használja. Ez a rendszer biztosítja, 
                hogy a nem feltétlenül szükséges (statisztikai, marketing, funkcionális) sütik mindaddig ne töltődjenek be és 
                ne gyűjtsenek adatot, amíg a Felhasználó ehhez kifejezett hozzájárulását nem adja az oldalon megjelenő süti-sávban.</li>
                <li>Kivételt képeznek ez alól a magánélet-védő (privacy-friendly), süti-mentes analitikai eszközök (GoatCounter), 
                amelyek nem helyeznek el sütit a látogató eszközén, nem követik a Felhasználót más oldalakon, és 
                személyes adatot nem rögzítenek, így a jogszabályok értelmében előzetes hozzájárulás nélkül is működhetnek.</li>
            </ul>
            <li>A kezelt adatok köre és jogalapja:</li>
            <ul className="list-disc list-inside">
                <li>Szükséges (alapműködést biztosító) sütik: Jogalapja az elektronikus kereskedelmi szolgáltatásokról 
                    szóló törvény (Ektv.) 13/A. § (3) bekezdése (a szolgáltatás biztosításához technikailag elengedhetetlen, 
                    ideértve a Felhasználó süti-döntését elmentő helyi tárolót is).</li>
                <li>Statisztikai és felhasználói élményt követő sütik (Google Analytics, Microsoft Clarity): 
                    Jogalapja a Felhasználó önkéntes, kifejezett hozzájárulása a GDPR 6. cikk (1) bekezdés a) pontja alapján.</li>
            </ul>
            <li>A hozzájárulás módosítása és visszavonása:</li>
            <ul className="list-disc list-inside">
            <li>A Felhasználónak bármikor joga van a korábban megadott süti-hozzájárulását módosítani vagy teljesen visszavonni.</li>
            <li>Ennek érdekében az Adatkezelő a weboldal láblécében (Footer) egy állandóan elérhető „Süti beállítások” opciót biztosít. 
                Erre kattintva a süti-szabályozó ablak újra megjelenik, ahol a döntés felülbírálható.</li>
            <li>Alternatív módon a Felhasználó a saját böngészőjének beállításaiban a sütik, valamint a helyi tároló 
                (localStorage / suti_dontes kulcs) adatainak törlésével is kezdeményezheti a rendszer alaphelyzetbe állítását.</li>
            </ul>
        </ol>
    </section>
    <section className="gdpr">
        <h2>8. Mérő- és analitikai eszközök, címkekezelés (GTM, GA4, Microsoft Clarity)</h2>
        <p>A weboldal a látogatottsági statisztikák elemzése, a felhasználói élmény optimalizálása, 
            valamint a hibák felderítése érdekében külső szolgáltatók mérőkódjait és sütijeit (cookie-kat) 
            használja. Ezeket az eszközöket az Adatkezelő központosítva, a Google Tag Manager rendszeren 
            keresztül vezérli.</p>
        <ol className="list-decimal list-inside">
            <li>Google Tag Manager (GTM)</li>
            <ul className="list-disc list-inside">
                <li><strong>Szolgáltató</strong>: Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Írország).</li>
                <li><strong>Az adatkezelés célja</strong>: A weboldalba épített különböző mérőkódok (címkék) központi kezelése, 
                    aktiválása és finomhangolása. Maga a GTM rendszer sütiket nem helyez el és személyes 
                    adatokat nem gyűjt, csupán más címkék betöltődését vezérli.</li>
                <li><strong>Jogalap</strong>: Az Adatkezelő jogos érdeke a weboldal technikai, üzembiztos és 
                strukturált működtetéséhez (GDPR 6. cikk (1) bek. f) pont).</li>
            </ul>
            <li>Google Analytics 4 (GA4)</li>
            <ul className="list-disc list-inside">
                <li><strong>Szolgáltató</strong>: Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Írország).</li>
                <li><strong>Az adatkezelés célja</strong>: Anonimizált statisztikai adatok gyűjtése a weboldal látogatottságáról 
                (pl. oldalon eltöltött idő, megtekintett világok száma, kattintások, földrajzi régió). Az Adatkezelő a 
                GA4-ben az IP-cím anonimizálást aktiválta, így a látogatók közvetlen azonosítására nincs lehetőség.</li>
                <li><strong>Jogalap</strong>: A Felhasználó önkéntes és kifejezett hozzájárulása (GDPR 6. cikk (1) bek. a) pont). 
                A kód csak akkor lép működésbe, ha a Felhasználó a Cookiebot felületén jóváhagyja a „Statisztikai” sütik használatát.</li>
            </ul>
            <li>Microsoft Clarity</li>
            <ul className="list-disc list-inside">
                <li><strong>Szolgáltató</strong>: Microsoft Corporation (One Microsoft Way, Redmond, WA 98052-6399, USA).</li>
                <li><strong>Az adatkezelés célja</strong>: A felhasználói élmény és a weboldal dizájnjának javítása. A szolgáltatás 
                segít elemző hőtérképek (heatmaps) generálásában, valamint anonim módon rögzíti a képernyő-interakciókat 
                (pl. egérmozgás, görgetés), amellyel feltárhatók az esetleges fejlesztési hibák vagy az oldal nehezen kezelhető részei.</li>
                <li><strong>Jogalap</strong>: A Felhasználó önkéntes és kifejezett hozzájárulása (GDPR 6. cikk (1) bek. a) pont). 
                A kód betöltése mindaddig blokkolva van, amíg a Felhasználó a Cookiebot felületén hozzá nem járul a 
                statisztikai/funkcionális sütik futtatásához.</li>
            </ul>
            <li>GoatCounter</li>
            <ul className="list-disc list-inside">
                <li><strong>Szolgáltató</strong>: GoatCounter (üzemeltető: Martin Tournoij, Hollandia – EU). Az adatok tárolása az 
                Európai Unión belüli szervereken történik.</li>
                <li><strong>Az adatkezelés célja</strong>: A weboldal látogatottságának mérése, statisztikai elemzése és a működés optimalizálása.</li>
                <li><strong>Jogalap</strong>: Az Adatkezelő jogos érdeke [GDPR 6. cikk (1) bekezdés f) pont] a weboldal 
                működésének és látogatottságának elemzése.</li>
                <li><strong>Nem használ sütiket (cookies)</strong>: A szolgáltatás nem helyez el és nem olvas be sütiket a látogató eszközéről.</li>
                <li><strong>Személyes adatok védelme</strong>: A rendszer nem gyűjt, nem tárol és nem követ nyomon semmilyen személyes 
                adatot (például teljes IP-címet, helyadatokat vagy egyedi eszközazonosítókat). Az IP-címekből egy egyirányú hash kódot 
                generál a rendszer a napi egyedi látogatók számolásához, amelyből a valós IP-cím nem állítható vissza, és amely 8 órán 
                belül automatikusan törlődik.</li>
                <li><strong>A gyűjtött technikai adatok köre</strong>: A böngésző által küldött alapvető információk (URL cím, hivatkozó oldal/referrer, 
                képernyőfelbontás, böngésző típusa, hozzávetőleges ország a nyelv alapján). Ezen adatok alapján a látogató 
                személye nem azonosítható.</li>
            </ul>
        </ol>
    </section>

    <section className="gdpr">
        <h2>9. Jogorvoslati lehetőségek</h2>
        <p>Mindent megteszünk, hogy személyes adatait biztonságban kezeljük. Amennyiben mégis panasza 
            lenne, az alábbi módokon teheti meg:</p>
        <ul className="list-disc list-inside">
            <li>Közvetlen panasz: Írjon nekünk a <SafeEmail /> e-mail címre.</li>
            <li>Hatósági jogorvoslat: Ön jogosult eljárást kezdeményezni a Nemzeti Adatvédelmi 
                és Információszabadság Hatóságnál (Cím: 1530 Budapest, Pf.: 5., 
                e-mail: <NaihEmail />, honlap: <Link href="https://naih.hu">www.naih.hu</Link>).</li>
            <li>Bírósági út: Ön jogosult jogainak megsértése esetén bírósághoz fordulni.</li>
        </ul>

    </section>
        
    </>
  );
}