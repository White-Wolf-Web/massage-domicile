import styles from './BoutonCTA.module.css';
import Link from 'next/link';

export function BoutonCTA  () {
  return (
    <div className={styles.boutonCTAContainer}>
      <Link href="/contact" className={styles.boutonCTA}>
          Contactez-nous  <br />    0477131993
      </Link>
    </div>
  );
};
