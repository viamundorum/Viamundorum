import StaticEmail from '@/components/staticemail';
import Link from 'next/link';

export const metadata = {
  title: "Adattörlési Útmutató | Via Mundorum",
  description: "Útmutató a Via Mundorum platformon tárolt személyes adatok törléséhez, valamint a Facebook- és Google-kapcsolat megszüntetéséhez.",
};

export default function UserDataDeletionPage() {
  return (
    <>
      <section className="intro">
        <h1>Adattörlési Útmutató</h1>
      </section>  

      <section className="gdpr">
        <p>Hatályos: 2026. május 15-től visszavonásig.</p>
        <p>A Facebook (Meta) és a Google platform szabályzatainak, valamint a GDPR előírásainak megfelelően a <strong>Via Mundorum</strong> 
        felhasználóinak bármikor joguk van kérni a rendszerünkben tárolt személyes adataik végleges törlését, illetve visszavonhatják a 
        közösségi fiókokkal való összekapcsolást.</p>
      </section>      

      <section className="gdpr">
        <h2>1. Adattörlés kezdeményezése e-mailben</h2>
        <p>A legegyszerűbb módja az adatai törlésének, ha közvetlenül felveszi velünk a kapcsolatot:</p>
        <ul className="list-disc list-inside">
          <li>Küldjön egy elektronikus levelet a hivatalos e-mail címünkre: <StaticEmail /></li>
          <li>A levél tárgyaként kérjük, adja meg: <strong>„Adattörlési kérelem – Via Mundorum”</strong></li>
          <li>Az üzenetben tüntesse fel a játékban használt felhasználónevét vagy a fiókhoz tartozó e-mail címet.</li>
        </ul>
        <p>Az igénylés beérkezését követően a kérést maximálisan <strong>72 órán belül</strong> feldolgozzuk, és az adatokat véglegesen töröljük az adatbázisunkból.</p>
      </section>

      <section className="gdpr">
        <h2>2. Facebook-alkalmazás leválasztása</h2>
        <p>Amennyiben a bejelentkezéshez a Facebook-fiókját használta, a hozzáférést Ön is bármikor megszüntetheti a Facebook felületén:</p>
        <ol className="list-decimal list-inside">
          <li>Lépjen be a Facebook-fiókjába, majd nyissa meg a <strong>Beállítások és adatvédelem ➡️ Beállítások</strong> menüpontot.</li>
          <li>A bal oldali menüben görgessen le az <strong>Alkalmazások és webhelyek</strong> opcióhoz.</li>
          <li>Keresse meg a listában a <strong>Via Mundorum</strong> alkalmazást, és kattintson az <strong>Eltávolítás</strong> gombra.</li>
        </ol>
      </section>

      <section className="gdpr">
        <h2>3. Google-fiók hozzáférésének visszavonása</h2>
        <p>Amennyiben a bejelentkezéshez a Google-fiókját használta, a kapcsolatot az alábbi módon szüntetheti meg:</p>
        <ol className="list-decimal list-inside">
          <li>Nyissa meg a <Link href="https://myaccount.google.com" target="_blank" style={{ textDecoration: 'underline' }}>Google Fiókom</Link> oldalt, és jelentkezzen be.</li>
          <li>A bal oldali menüben válassza a <strong>Biztonság</strong> (Security) menüpontot.</li>
          <li>Görgessen le a <strong>Kapcsolatban álló harmadik felek alkalmazásai és szolgáltatásai</strong> részhez.</li>
          <li>Kattintson a <strong>Via Mundorum</strong> névre, majd válassza a <strong>Összes kapcsolat törlése</strong> lehetőséget.</li>
        </ol>
      </section>

      <section className="gdpr">
        <h2>4. A törlésre kerülő adatok köre</h2>
        <p>Az adattörlési folyamat végrehajtásakor a Supabase alapú biztonságos adatbázisunkból az alábbi információk kerülnek visszaállíthatatlanul törlésre:</p>
        <ul className="list-disc list-inside">
          <li>A felhasználó egyedi belső azonosítója (ID).</li>
          <li>A regisztrált teljes név és e-mail cím.</li>
          <li>A közösségi fiókokból (Facebook, Google) származó hitelesítési tokenek.</li>
          <li>A játékban elért minden eddigi haladás, mentés, feloldott világok és karakterstatisztikák.</li>
        </ul>
      </section>

      <section className="gdpr">
        <h2>5. Megerősítés</h2>
        <p>Miután a háttérrendszerünkből sikeresen eltávolítottuk az összes személyes adatát, az Adatkezelő (Pesák Dóra Zita) egy megerősítő e-mailt küld Önnek a folyamat lezárásáról.</p>
      </section>
    </>
  );
}