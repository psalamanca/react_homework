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
        <Link href="/luis">
          <button className={styles.button}>Ir a la página de Luis</button>
          </Link>
        <Link href="/cristian">
          <button className={styles.button}>Ir a la página de Cristian Lopez</button>
        </Link>
      </main>
    </div>
  );
}
