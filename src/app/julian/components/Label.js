import styles from '../page.module.css';

export default function Label({ message }) {
  return (
    <div className={styles.label}>
      <p>{message}</p>
    </div>
  );
} 