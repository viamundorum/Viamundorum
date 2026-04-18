import Link from "next/link";

// 1. A függvény neve nagybetűvel kezdődjön (konvenció)
export default function DemoPage() {
  return (
    
    <>
        <section className="intro">
          <h2>Demo</h2>
        </section>

        <section className="auth-box-log">
          <p>
            A projekt folyamatos fejlesztés alatt áll.
          </p>
          <br />
          <p>Ha most olvasod ezt, akkor még az építés fázisában vagy.</p>
          <br />
          <p>Próbáld ki magad: 👉<Link href="https://viamundi-demo.netlify.app"> Demo oldal</Link></p>
        </section>

    
    </>
  );
}