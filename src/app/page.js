import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Página Principal</h1>
        <Link href="/julian">
          <button className={styles.button}>Ir a la página de Julian</button>
 
        </Link>
      </main>

    <div>button felipe 
     <Link href="/foronda">
          <button className={styles.button}>Ir a la pagina react</button>
 
        </Link>

    </div>
    </div>
    

  );
}
