import Link from 'next/link';

export default function HomePage() {
  return (
    <>
<section className="intro">
        {/* Az idézet mint fő elem, magyar idézőjelekkel */}
        <p className="latin-motto">
          „Non scholae, sed <span className="highlight-vitae">VITAE</span> discimus.”
        </p>
        
        {/* Alatta a többi információ kisebb méretben */}
        <h1>Üdvözlünk a Via Mundorum világában!</h1>
        <p className="hero-subtitle">
          Fedezd fel a tudás útjait, ahol a tanulás nem kényszer, hanem kaland. 
          Tanulj világokon keresztül, fedezd fel a természetet, a nyelveket vagy akár a sakk rejtelmeit.
        </p>
        
      </section>

<div className="hero-cta-group">
  <Link href="/worlds" className="cta-primary">
    🌍 Belépés a Világokba
  </Link>
  
  <Link href="/project" className="cta-secondary">
    ℹ️ Mi ez az egész?
  </Link>
</div>

    </>
  );
}