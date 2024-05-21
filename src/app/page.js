import styles from './page.module.css';
import { Inter } from 'next/font/google';

const inter_init = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter'
});

export default function Home() {
  return (
    <div className={`${styles.container} ${inter_init}`}>
      <main className={styles.main}>
        <div className={styles.sign}>
          <div className={`${styles.sign_word} ${styles.title} ${styles.inter}`}>
            Прив<span>ет</span>ству<span>ю</span>
            <br></br>на&nbsp;&nbsp;гла<span>в</span>
            ной
          </div>
        </div>
      </main>
    </div>
  );
}
