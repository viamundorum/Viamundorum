import SafeEmail from '@/components/safeemail';
import NaihEmail from '@/components/naihemail';
import Link from 'next/link';

export default function GDPRPage() {
  return (
    <>
<section className="intro">
        <h1>Adatkezelési tájékoztató</h1>
</section>  
<section className="gdpr">
    Hatályos: 2026. május 11-től visszavonásig.
</section>      
    <section className="gdpr">
        <h2>1. Általános rendelkezések</h2>
        <p>Jelen Adatkezelési Tájékoztató kiterjed a Pesák Dóra Zita (a továbbiakban: Adatkezelő) 
            által üzemeltetett viamundorum.vercel.app weboldalra és annak összes aloldalára. 
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
        <h2>7. Jogorvoslati lehetőségek</h2>
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