import Link from 'next/link';
import SafeEmail from '@/components/safeemail'; // Feltételezve, hogy külön fájlba tetted

export default function ProjectPage() {
  return (
    <>
      <section className="intro">
        <h2>Impresszum</h2>
      </section>

      <section className="info-about-container">

        {/* Bal oszlop: Adatok */}
        {/* Bal oszlop: Hivatalos adatok (Szemantikus DL használatával) */}
        <aside className="info-box" style={{ flex: 1 }}>
          <section className="info-about">
            <h3>Üzemeltető adatai</h3>
            <dl>
              <dt><strong>Név:</strong></dt>
              <dd>Pesák Dóra Zita</dd>
              
              <dt><strong>Székhely:</strong></dt>
              <dd>2030 Érd, Szép Ilonka utca 4/A</dd>
              
              <dt><strong>E-mail:</strong></dt>
              <dd><SafeEmail /></dd> {/* Itt a biztonságos megoldás */}
            </dl>
          </section>

          <section className="info-about">
            <h3>Tárhelyszolgáltató adatai</h3>
            <dl>
              <dt><strong>Név:</strong></dt>
              <dd>Vercel Inc.</dd>
              
              <dt><strong>Cím:</strong></dt>
              <dd>440 N Barranca Ave #4133, Covina, CA 91723, USA</dd>
              
              <dt><strong>E-mail:</strong></dt>
              <dd>support@vercel.com</dd>
              
              <dt><strong>Web:</strong></dt>
              <dd>
                <Link href="https://vercel.com" target="_blank">https://vercel.com</Link>
              </dd>
            </dl>
          </section>

          <p className="server-info">
            <em>A tárhelyszolgáltató szerverei az Amerikai Egyesült Államokban találhatóak.</em>
          </p>
        </aside>

        {/* Jobb oszlop: Rólam */}
        <aside className="about-box" style={{ flex: 2 }}>
          <h3>Bemutatkozás</h3>
          
          <section className="info-item">
            <h4>Üdvözöllek!</h4>
          </section>

          <section className="info-item">
            <p>A <strong>Via Mundorum</strong> koncepciója abból a felismerésből született, hogy a különböző 
              tudományterületek – legyen szó a nyelvtan logikájáról, a természet törvényszerűségeiről 
              vagy a matematika elvont világáról – közös nyelven beszélnek, ha azokat rendszerszinten 
              és interaktívan közelítjük meg. A célom egy olyan <strong>interdiszciplináris oktatási univerzum</strong> létrehozása, 
              ahol a tudás nem tantárgyakra szabdalt, hanem egy összefüggő, felfedezhető hálózat.</p>
          </section>

          <section className="info-item">
            <p>A platform tudományos alapjait az Eszterházy Károly Katolikus Egyetemen folytatott 
              tanulmányaim és az Óbudai Egyetem (ÓE RKK) konferenciáján publikálandó munkám adják: 
              <em>„A megújuló energiaforrások matematikája: képletgyűjtemény és példatár”</em>. A kutatás során 
              <strong> Mika János</strong> és <strong>Oláhné Téglási Ilona</strong> szakmai mentorálása segítette a tartalom elmélyítését. 
              Bár a publikált képletgyűjtemény a megújuló energiaforrások matematikájára fókuszál, 
              a Via Mundorum világa ennél jóval tágabb: a természettudományoktól a sakk logikáján át 
              a humán ismeretekig több „út” (Via) nyílik meg a látogatók előtt.</p>
          </section>

          <section className="info-item">
            <p>A célom egy olyan digitális univerzum felépítése, ahol a fenntartható jövő technológiái 
              mindenki számára átláthatóvá és tanulhatóvá válnak. A Via Mundorum jelenleg egy „egyszemélyes hadsereg” 
              fejlesztéseként épül: egy folyamatosan bővülő, tudományos igényű játéktér, 
              ahol a tudás megszerzése valódi kaland.</p>
          </section>

          <section className="info-item">
            <p>Tarts velem a felfedezésben!</p>
          </section>

          <section className="info-item signature">
            <p>Pesák Dóra Zita</p>
            <p>A <strong>Via Mundorum</strong> megálmodója és fejlesztője</p>
          </section>
        
        </aside>

      </section>
    </>
  );
}