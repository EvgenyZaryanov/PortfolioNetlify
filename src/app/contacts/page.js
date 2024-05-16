import styles from './contacts.module.css';
import { Inter } from 'next/font/google';

const inter_init = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter'
});

export default function Contacts() {
  return (
    <div className={`${styles.container} ${inter_init} ${styles.inter}`}>
      <h1 className={`${styles.contacts__title}`}>Как связаться</h1>
      <ul className={styles.contacts__info}>
        <li className={styles.contacts__item}>
          <picture className={`${styles.contacts__image} ${styles.image1}`}></picture>
          <p className={styles.contacts__text}>+7 (905) 500-49-52</p>
        </li>
        <li className={styles.contacts__item}>
          <picture className={`${styles.contacts__image} ${styles.image2}`}></picture>
          <p className={styles.contacts__text}>https://t.me/Eugene_Zar</p>
        </li>
        <li className={styles.contacts__item}>
          <picture className={`${styles.contacts__image} ${styles.image3}`}></picture>
          <p className={styles.contacts__text}>eugenezaryanov@yandex.ru</p>
        </li>
        <li className={`${styles.contacts__item} ${styles.item4}`}>
          <picture className={`${styles.contacts__image} ${styles.image4}`}></picture>
          <a
            className={styles.contacts__link}
            href="https://github.com/EvgenyZaryanov"
            target="_blank"
          >
            <p className={styles.contacts__text}>GitHub</p>
          </a>
        </li>
        <li className={`${styles.contacts__item} ${styles.item5}`}>
          <picture className={`${styles.contacts__image} ${styles.image5}`}></picture>
          <a
            className={styles.contacts__link}
            href="https://hh.ru/resume/323171cdff0cbaffbe0039ed1f357933504745"
            target="_blank"
          >
            <p className={styles.contacts__text}>Резюме</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
