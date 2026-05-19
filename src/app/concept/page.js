import Link from 'next/link';

export const metadata = {
  title: "Koncepció | Via Mundorum",
  description: "Hogyan jött létre az platform ötlete, illetve hogyan kell használni a világkártyákat.",
};
export default function ConceptPage() {
  return (
    <>
<section className="intro">
        <h1>Bemutatjuk a Via Mundorum "használatát"!</h1>
</section>

    <section className="gdpr">
      <h2>Mi a Via Mundorum? – A Koncepció</h2>

      <p>A <strong>Via Mundorum</strong> (Világok Útja) egy olyan interdiszciplináris oktatási univerzum, 
         amely szakít a tantárgyak hagyományos, éles elkülönítésével. Hiszünk abban, hogy a 
         tudás nem egymástól elzárt dobozok összessége: a matematika elvont logikája, a megújuló 
         energiaforrások működése, a nyelvek történelmi változásai vagy éppen a sakk stratégiai lépései mind 
         egyetlen, közös hálózat részei.</p>

      <p>A platform célja, hogy ezt az összefüggő hálózatot kézzelfoghatóvá, vizuálissá és 
         élményszerűvé tegye minden tanulni vágyó számára.</p>
    </section>

    <section className="gdpr">
      <h2>Hogyan épül fel az univerzum?</h2>

      <p>Az oldalon való navigáció egy tudatosan felépített, többrétegű struktúrát követ, amely 
        szabadságot ad a felfedezésre, de stabil vezető kezet nyújt a megértéshez.</p>
                <ol className="list-decimal list-inside">
                    <li>A Világok (A főoldali kártyák)</li>
                    <p>A főoldalra érkezve különböző „Világokkal” (mint például a fenntarthatóságot 
                        bemutató <em>Via Renovabilorum</em>, vagy a nyelvtörténeti <em>Via Linguae</em>) fogsz találkozni. 
                        Minden egyes kártya egy-egy önálló tudományterületet vagy tematikát testesít meg. A kártyákra 
                        kattintva beléphetsz az adott világ központjába, ahol átláthatod annak egyedi témaköreit és belső logikáját.</p>
                    <li>A kétféle út: Tanulás és Játék</li>
                    <p>Minden világ kapujában két különböző megközelítési mód, két külön gomb közül választhatsz, 
                        attól függően, hogy éppen milyen formában szeretnéd befogadni az ismereteket:</p>
                        <ul className="list-disc list-inside">
                            <li>A Tanulás gomb (Strukturált tudásbázis): Ez az út egy tiszta, logikusan felépített, 
                                vizuálisan jól tagolt digitális jegyzethez és enciklopédiához vezet. Kiválóan alkalmas arra, 
                                hogy ha egy konkrét összefüggésre, hangváltozási törvényre vagy matematikai képletre vagy kíváncsi, 
                                azt azonnal, sallangok nélkül, rendszerezve megtaláld és átlásd.</li>
                            <li>A Játék gomb (Élményalapú felfedezés): Ez az út a gamification (játékosítás) módszertanára épít. 
                                Itt a tudás megszerzése egy interaktív, kalandos utazássá válik. Rejtvényeken, kriptográfiai 
                                (titkosírási) feladatokon, logikai kirakósokon és történeteken keresztül magad fedezheted fel a 
                                szabályszerűségeket – így a tanulás nem száraz magolás, hanem valódi, belső sikerélmény lesz.</li>
                        </ul>
                </ol>
    </section>

    <section className="gdpr">
        <h2>Miért működik a rendszer?</h2>

      <p>A háttérben a reál és a humán látásmód szoros fúziója áll. A nyelvtani vagy környezeti folyamatokat 
        mérnöki és matematikai precizitású logikai mátrixokba és folyamatábrákba rendezzük át. Ezáltal a 
        nehezen emészthető elméletek vizuálisan követhető, logikus algoritmusokká válnak, amelyek a fokozatosság 
        elvét követve bárki számára könnyen elsajátíthatóak.</p>

      <p>A jövőt nemcsak tanítani kell, hanem közösen felépíteni. Lépj be a Világokba, és 
        indulj el az összefüggések útján!</p>
    </section>
<div className="hero-cta-group">
  <Link href="/worlds" className="cta-primary">
    🌍 Belépés a Világokba
  </Link>
</div>
    <section className="gdpr">
       <h2>💡 Szakmai háttér</h2>
       <p>Ha kíváncsi vagy a projekt mögött álló egyetemi kutatásokra, az Óbudai Egyetemen bemutatott prezentációkra, 
        vagy a nyelvészeti és matematikai mintaprojektekre, ismerd meg a [Szerzői hátteret és publikációkat].</p>
    </section>
<div className="hero-cta-group">
  <Link href="/present" className="cta-secondary">
    ℹ️ Ki vagyok én?
  </Link>
</div>

    </>
  );
}