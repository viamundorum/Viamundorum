import Link from 'next/link';
import SafeEmail from '@/components/safeemail';
import VercelEmail from '@/components/vercelemail';
import Rackhost from '@/components/rackhost';

export const metadata = {
  title: "Impresszum | Via Mundorum",
  description: "A Via Mundorum oktatási platform hivatalos impresszuma, az üzemeltető és a szolgáltatók adatai.",
};

export default function ProjectPage() {
  return (
    <>
      <section className="intro">
        <h1>Impresszum</h1>
      </section>

      <section className="info-about-container">
        {/* Ez az info-box a fő rács (grid), ami összefogja a 3 kártyát */}
        <aside className="info-box">
          
          {/* 1. KÁRTYA */}
          <section className="info-about">
            <h3>1. Üzemeltető adatai</h3>
            <dl>
              <div>
                <dt><strong>Név:</strong></dt>
                <dd>Pesák Dóra Zita</dd>
              </div>
              <div>
                <dt><strong>Székhely:</strong></dt>
                <dd>2030 Érd, Szép Ilonka <span style={{ whiteSpace: 'nowrap' }}>utca 4/A</span></dd>
              </div>
              <div>
                <dt><strong>E-mail cím:</strong></dt>
                <dd><SafeEmail /></dd>
              </div>
            </dl>
          </section>

          {/* 2. KÁRTYA */}
          <section className="info-about">
            <h3>2. Tárhelyszolgáltató adatai</h3>
            <dl>
              <div>
                <dt><strong>Név:</strong></dt>
                <dd>Vercel Inc.</dd>
              </div>
              <div>
                <dt><strong>Székhely:</strong></dt>
                <dd>440 N Barranca Ave #4133, Covina, CA 91723, USA</dd>
              </div>
              <div>
                <dt><strong>E-mail cím:</strong></dt>
                <dd><VercelEmail /></dd>
              </div>
              <div>
                <dt><strong>Weboldal:</strong></dt>
                <dd>
                  <Link href="https://vercel.com" target="_blank">https://vercel.com</Link>
                </dd>
              </div>
            </dl>
            <p className="server-info">
              <em>A tárhelyszolgáltató szerverei az Amerikai Egyesült Államokban találhatóak.</em>
            </p>
          </section>

          {/* 3. KÁRTYA */}
          <section className="info-about">
            <h3>3. Domainszolgáltató adatai</h3>
            <dl>
              <div>
                <dt><strong>Név:</strong></dt>
                <dd>Rackhost Zrt.</dd>
              </div>
              <div>
                <dt><strong>Székhely:</strong></dt>
                <dd>6722 Szeged, Tisza Lajos körút 41.</dd>
              </div>
              <div>
                <dt><strong>E-mail cím:</strong></dt>
                <dd><Rackhost /></dd>
              </div>
              <div>
                <dt><strong>Weboldal:</strong></dt>
                <dd>
                  <Link href="https://www.rackhost.hu" target="_blank">https://www.rackhost.hu</Link>
                </dd>
              </div>
            </dl>
          </section>

        </aside>
      </section>
    </>
  );
}