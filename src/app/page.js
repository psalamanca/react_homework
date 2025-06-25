import Link from "next/link";
import styles from "./page.module.css";
import Button from './juanCa/components/Button';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Página Principal</h1>
        <Link href="/julian">
          <button className={styles.button}>Ir a la página de Julian</button>
        </Link>
        <Button />
      </main>
    </div>
  );
}
