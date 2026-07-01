import Link from 'next/link';

export const metadata = {
  title: "Bemutatkozás | Via Mundorum",
  description: "A Szerző bemutatkozó oldala. Olvashatsz a weboldal (és a Szerző) szakmai hátteréről, világlátásáról.",
};

export default function PresentPage() {
  return (
    <div className="present-container">
      
      {/* 1. SZEKCIÓ: Cím és a teljes Bemutatkozó szöveg */}
      <header className="present-header">
        <h1 className="present-title">Bemutatkozás & Háttér</h1>
        <p className="present-subtitle">A reál és a humán tudományok találkozása</p>
      </header>

      <div className="intro-text-wrapper">
        <div className="welcome-title">
          <h4>Üdvözöllek!</h4>
        </div>

        <p>
          A <strong>Via Mundorum</strong> koncepciója abból a felismerésből született, hogy a különböző 
          tudományterületek – legyen szó a nyelvtan logikájáról, a természet törvényszerűségeiről 
          vagy a matematika elvont világáról – közös nyelven beszélnek, ha azokat rendszerszinten 
          és interaktívan közelítjük meg. A célom egy olyan <strong>interdiszciplináris oktatási univerzum</strong> létrehozása, 
          ahol a tudás nem tantárgyakra szabdalt, hanem egy összefüggő, felfedezhető hálózat.
        </p>

        <p>
          A platform tudományos alapjait az Eszterházy Károly Katolikus Egyetemen folytatott 
          tanulmányaim és az Óbudai Egyetem (ÓE RKK) 2026 Projektkonferenciáján publikált munkám adják: 
          <em> „Matematikai képletek és példatár a megújuló energiaforrások témakörében”</em>. A kutatás során 
          <strong> Mika János</strong> és <strong>Oláhné Téglási Ilona</strong> szakmai mentorálása segítette a tartalom elmélyítését.
        </p>

        <p>
          A projekt a konferencia hitvallásához csatlakozva a fenntarthatóságot <strong>élő kompetenciaként</strong> kezeli, 
          lebontva a <strong>falakat az oktatási szintek</strong> között. Bár a publikált képletgyűjtemény a megújuló energiaforrások matematikájára fókuszál, 
          a Via Mundorum világa ennél jóval tágabb: a természettudományoktól a sakk logikáján át 
          a humán ismeretekig több „út” (Via) nyílik meg a látogatók előtt.
        </p>

        <p>
          A célom egy olyan tudástér felépítése, ahol a fenntartható jövő technológiái 
          mindenki számára átláthatóvá és tanulhatóvá válnak. A Via Mundorum digitális univerzuma egy folyamatosan bővülő 
          tudományos igényű játéktér, ahol a tudás megszerzése <strong>valódi kaland</strong>.
        </p>

        <div className="closing-quote">
          <p>Hiszem, hogy a <strong>jövőt nemcsak tanítani kell, hanem közösen felépíteni</strong>.</p>
          <p className="join-me">Tarts velem a felfedezésben!</p>
        </div>

        {/* Aláírás */}
        <div className="signature-block">
          <p className="signature-name">Pesák Dóra Zita</p>
          <p className="signature-title">A <strong>Via Mundorum</strong> megálmodója és fejlesztője</p>
        </div>
      </div>


      {/* 2. SZEKCIÓ: Egyetemi munkák (3 kártya egymás mellett) */}
      <section className="portfolio-section">
        <h3 className="section-heading">Egyetemi munkák & Kutatási anyagok</h3>
        
        <div className="cards-row-3">
          
          {/* 1. Kártya: Szóéletrajz */}
          <div className="portfolio-card badge-teal">
            <div className="card-content">
              <span className="card-badge">Szemináriumi Dolgozat</span>
              <h4 className="card-title">A hívatlan szó etimológiája, értelmezése és jelentése a magyar nyelvben</h4>
              <p className="card-institution">Eszterházy Károly Egyetem</p>
              <p className="card-description">
                Matematika szakos szemlélettel készült nyelvtörténeti kutatás. A dolgozat részletesen feltérképezi a 
                „hívatlan” szó és morfémái fejlődését az uráli gyökerektől, bemutatva a ritka határozószói jelentéseit 
                és olyan kulturális ritkaságokat, mint a Szamoshát vidékének népszokásaiból ismert „hívatlanok tánca”.
              </p>
            </div>
            <div className="card-action">
              <a 
                href="https://dbcteiabfokprbmhrhef.supabase.co/storage/v1/object/public/egyetemi_anyagok/Szoeletrajz.pdf" 
                className="btn-portfolio btn-dark" 
                download="A_hívatlan_szó_etimológiája.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Letöltés (PDF)
              </a>
            </div>
          </div>

          {/* 2. Kártya: Königsbergi töredék projekt */}
          <div className="portfolio-card badge-purple">
            <div className="card-content">
              <span className="card-badge">Oktatási Mintaprojekt</span>
              <h4 className="card-title">Königsbergi töredék és szalagjai – Interaktív csomag</h4>
              <p className="card-institution">Magyar nyelvtörténeti korszakok</p>
              <p className="card-description">
                Egy konkrét tanórára kidolgozott, élményalapú oktatási módszertan, amely közelebb hozza a kódexek világát 
                a mai diákokhoz. Tartalmazza a teljes szakmai hátteret, a vizuális óratervező prezentációt, valamint játékos, 
                logikai feladatlapokat és rejtvényeket.
              </p>
            </div>
            <div className="card-action">
              <a 
                href="https://dbcteiabfokprbmhrhef.supabase.co/storage/v1/object/public/egyetemi_anyagok/Konigsbergi_projektcsomag.zip" 
                className="btn-portfolio btn-dark" 
                download="Konigsbergi_toredek_projektcsomag.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Projektcsomag letöltése (ZIP)
              </a>
            </div>
          </div>

          {/* 3. Kártya: Önkéntes segédlet */}
          <div className="portfolio-card badge-amber">
            <div className="card-content">
              <span className="card-badge">Hallgatói Segédlet</span>
              <h4 className="card-title">A magyar nyelv szabályos hangváltozásainak logikai rendszere</h4>
              <p className="card-institution">Önkéntes egyéni kezdeményezés</p>
              <p className="card-description">
                A csoporttársak támogatására, szabadidőben készített tanulmányi segédlet. A matematika strukturált logikáját és 
                folyamatábráit alkalmazva magyarázza el a korai magyar hangváltozásokat (zöngésülés, dezaffrikáció), bebizonyítva 
                a „fokozatosság elvét”, miszerint egyszerre csak egy képzési mozzanat módosulhat.
              </p>
            </div>
            <div className="card-action">
              <a 
                href="https://dbcteiabfokprbmhrhef.supabase.co/storage/v1/object/public/egyetemi_anyagok/Nyelvi_valtozasok.pdf" 
                className="btn-portfolio btn-dark" 
                download="Magyar_hangvaltozasok_logikai_rendszere.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Letöltés (PDF)
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* 3. SZEKCIÓ: Publikáció (2 kártya egymás mellett) */}
      <section className="portfolio-section">
        <h3 className="section-heading">Publikációk & Diplomamunkák</h3>
        
        <div className="cards-row-2">
          
          {/* 1. Kártya: Absztrakt */}
          <div className="portfolio-card badge-blue">
            <div className="card-content">
              <span className="card-badge">Kutatási Absztrakt</span>
              <h4 className="card-title">Matematikai képletek és példatár a megújuló energiaforrások témakörében</h4>
              <p className="card-institution">Kutatási összefoglaló</p>
              <p className="card-description">
                A projekt elméleti és tudományos magja. A fenntarthatóság kérdéskörét matematikai modelleken keresztül megközelítő 
                tanulmány, amely a tiszta energiaforrások hatékonysági számításai és az oktatásba integrálható gyakorlati feladatokat rendszerezi.
              </p>
            </div>
            <div className="card-action">
              <a 
                href="#" 
                className="btn-portfolio btn-blue"
                target="_blank" 
                rel="noopener noreferrer"
              >
              Absztrakt megtekintése az ÓE oldalán ↗ Hamarosan...
              </a>
            </div>
          </div>

          {/* 2. Kártya: Kiadványkötet */}
          <div className="portfolio-card badge-indigo">
            <div className="card-content">
              <span className="card-badge">Konferencia & Kiadvány</span>
              <h4 className="card-title">Óbudai Egyetem (ÓE RKK) 2026 Projektkonferencia</h4>
              <p className="card-institution">Hivatalos Megjelenés</p>
              <p className="card-description">
                A kutatómunka hivatalos megjelenési helye és szakmai közege. A konferencia kötete hivatalos formában rögzíti az 
                elért eredményeket, támogatva a fenntarthatóság élő kompetenciaként való átültetését az oktatási szintek között.
              </p>
            </div>
            <div className="card-action">
              <a 
                href="#" 
                className="btn-portfolio btn-indigo"
                target="_blank" 
                rel="noopener noreferrer"
              >
              Hivatalos kiadványkötet megtekintése ↗ Hamarosan...
              </a>
            </div>
          </div>

          {/* ÚJ 3. KÁRTYA: EKKE Példatár és Képletgyűjtemény (Szakdolgozat) */}
          <div className="portfolio-card badge-teal">
            <div className="card-content">
              <span className="card-badge">Szakdolgozat</span>
              <h4 className="card-title">Példatár és Képletgyűjtemény a Megújuló Energiaforrásokhoz</h4>
              <p className="card-institution">Eszterházy Károly Katolikus Egyetem</p>
              <p className="card-description">
                A szakdolgozat alapjául szolgáló, komplex oktatási segédanyag és digitális feladatgyűjtemény. A kiadvány célja, hogy 
                a tiszta energiatechnológiák működését kézzelfogható matematikai modelleken és számítási példákon keresztül hozza közelebb a hallgatókhoz.
              </p>
            </div>{/* Itt a két gomb egymás alatt a flex-col segítségével */}
            <div className="card-action btn-stack-vertical">
              <a 
                href="https://uni-eszterhazy.hu/matinf/m/e-jegyzet/tamop-e-jegyzetek-75/e-jegyzetek-matematika-tanaroknak" 
                className="btn-portfolio btn-teal"
                target="_blank" 
                rel="noopener noreferrer"
                style={{ marginBottom: '8px' }}
              >
                Szakdolgozat megtekintése az EKKE oldalán ↗
              </a>
              <a 
                href="https://uni-eszterhazy.hu/api/media/file/df0a711981ff53773281732d1afc61b57a3490d0" 
                className="btn-portfolio btn-dark" 
                download="Pesak_Dora_Megujulo_Energia_Peldatar.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Közvetlen letöltés (PDF)
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}