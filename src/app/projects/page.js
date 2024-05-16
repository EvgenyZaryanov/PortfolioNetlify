import styles from './project.module.css';
import { Inter } from 'next/font/google';

const inter_init = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter'
});

export default function Projects() {
  return (
    <div className={`${styles.container} ${inter_init}`}>
      <h1 className={`${styles.projects__title} ${styles.inter}`}>Портфолио</h1>
      <ul className={`${styles.elements} ${styles.inter}`}>
        <li className={`${styles.element} ${styles.element1}`}>
          <div className={`${styles.element__image} ${styles.image1}`}></div>
          <h2 className={styles.element__title}>
            MPA-приложение по поиску короткометражных фильмов<br></br>
            <span className={`${styles.element__span} ${styles.span1}`}>Movies Explorer</span>
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element2}`}>
          <div className={`${styles.element__image} ${styles.image2}`}></div>
          <h2 className={styles.element__title}>
            Рекламный лендинг<br></br> для компании{' '}
            <span className={`${styles.element__span} ${styles.span2}`}>Semitex</span>
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element3}`}>
          <div className={`${styles.element__image} ${styles.image3}`}></div>
          <h2 className={styles.element__title}>
            Информациоинная <br></br>веб-страница для игры<br></br>{' '}
            <span className={`${styles.element__span} ${styles.span3}`}>Cyberpunk2077</span>
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element4}`}>
          <div className={`${styles.element__image} ${styles.image4}`}></div>
          <h2 className={styles.element__title}>
            Веб сервис<br></br> по доставке бургеров
            <span className={`${styles.element__span} ${styles.span4}`}>BurgerHouse</span>
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element5}`}>
          <div className={`${styles.element__image} ${styles.image5}`}></div>
          <h2 className={styles.element__title}>
            Одностраничный лендинг<br></br> про шахматы<br></br>
            <span className={`${styles.element__span} ${styles.span5}`}>Клуб Четырех Коней</span>
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element6}`}>
          <div className={`${styles.element__image} ${styles.image6}`}></div>
          <h2 className={styles.element__title}>
            Веб-страница<br></br> с трейлерами сериала<br></br>
            <span className={`${styles.element__span} ${styles.span6}`}>
              Аватар: легенда об Аанге
            </span>
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element7}`}>
          <div className={`${styles.element__image} ${styles.image7}`}></div>
          <h2 className={styles.element__title}>
            SPA-приложение для<br></br> обмена фотографиями<br></br>
            <span className={`${styles.element__span} ${styles.span7}`}>Mesto</span>
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element8}`}>
          <div className={`${styles.element__image} ${styles.image8}`}></div>
          <h2 className={styles.element__title}>
            Рекламная страница для<br></br> сети фитнесс-клубов<br></br>
            <span className={`${styles.element__span} ${styles.span8}`}>Fitness Sale</span>
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element9}`}>
          <div className={`${styles.element__image} ${styles.image9}`}></div>
          <h2 className={styles.element__title}>
            Рекламный лендинг<br></br> лекарственного препарата
            <span className={`${styles.element__span} ${styles.span9}`}>Bio Prost</span>
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element10}`}>
          <div className={`${styles.element__image} ${styles.image10}`}></div>
          <h2 className={styles.element__title}>
            CRM-система для<br></br>
            <span className={`${styles.element__span} ${styles.span10}`}>Яндекс Амбассадоров</span>
            (в рамках Хакатона)
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element11}`}>
          <div className={`${styles.element__image} ${styles.image11}`}></div>
          <h2 className={styles.element__title}>
            Учебный проект по<br></br> адаптивной верстке<br></br>
            <span className={`${styles.element__span} ${styles.span11}`}>
              Путешествия по России
            </span>
          </h2>
        </li>
        <li className={`${styles.element} ${styles.element12}`}>
          <div className={`${styles.element__image} ${styles.image12}`}></div>
          <h2 className={styles.element__title}>
            Анимация главной страницы<br></br> с применением эффекта<br></br>
            <span className={`${styles.element__span} ${styles.span12}`}>Parallax </span>
          </h2>
        </li>
      </ul>
    </div>
  );
}
