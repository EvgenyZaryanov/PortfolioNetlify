import styles from './tech-stack.module.css';
import { Inter } from 'next/font/google';

const inter_init = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter'
});

export default function Stack() {
  return (
    <div className={`${styles.container} ${inter_init}`}>
      <div className={`${styles.main} ${styles.inter}`}>
        <h1 className={styles.stack__title}>Навыки</h1>
        <div className={styles.info}>
          <div className={styles.description}>
            <div className={styles.frontend__image}></div>
            <h1 className={styles.title}>frontend</h1>
            <ul className={styles.list}>
              <li className={`${styles.list__item} ${styles.item1__front}`}>HTML5</li>
              <li className={`${styles.list__item} ${styles.item2__front}`}>CSS3</li>
              <li className={`${styles.list__item} ${styles.item3__front}`}>JavaScript</li>
              <li className={`${styles.list__item} ${styles.item4__front}`}>ReactJS</li>
              <li className={`${styles.list__item} ${styles.item5__front}`}>NextJS</li>
              <li className={`${styles.list__item} ${styles.item6__front}`}>Angular</li>
              <li className={`${styles.list__item} ${styles.item7__front}`}>jQuery</li>
              <li className={`${styles.list__item} ${styles.item8__front}`}>Vite</li>
              <li className={`${styles.list__item} ${styles.item9__front}`}>Webpack</li>
              <li className={`${styles.list__item} ${styles.item10__front}`}>NPM</li>
              <li className={`${styles.list__item} ${styles.item11__front}`}>DevTools</li>
              <li className={`${styles.list__item} ${styles.item12__front}`}>Git</li>
              <li className={`${styles.list__item} ${styles.item13__front}`}>Figma</li>
              <li className={`${styles.list__item} ${styles.item14__front}`}>Pixelperfect</li>
              <li className={`${styles.list__item} ${styles.item15__front}`}>MediaQueries</li>
              <li className={`${styles.list__item} ${styles.item16__front}`}>MaterialUI</li>
              <li className={`${styles.list__item} ${styles.item17__front}`}>NextUI</li>
              <li className={`${styles.list__item} ${styles.item18__front}`}>Tilda</li>
              <li className={`${styles.list__item} ${styles.item19__front}`}>1C-Bitrix</li>
              <li className={`${styles.list__item} ${styles.item20__front}`}>WordPress</li>
              <li className={`${styles.list__item} ${styles.item21__front}`}>W3C</li>
            </ul>
            <p className={styles.text}></p>
          </div>
          <div className={styles.description}>
            <div className={styles.backend__image}></div>
            <h2 className={styles.title}>backend</h2>
            <ul className={styles.list}>
              <li className={`${styles.list__item} ${styles.item1__back}`}>NodeJS</li>
              <li className={`${styles.list__item} ${styles.item2__back}`}>Express</li>
              <li className={`${styles.list__item} ${styles.item3__back}`}>MongoDB</li>
              <li className={`${styles.list__item} ${styles.item5__back}`}>RestAPI</li>
              <li className={`${styles.list__item} ${styles.item4__back}`}>Postman</li>
              <li className={`${styles.list__item} ${styles.item6__back}`}>Nginx</li>
              <li className={`${styles.list__item} ${styles.item7__back}`}>Ubuntu</li>
              <li className={`${styles.list__item} ${styles.item7__back}`}>SQL</li>
              <li className={`${styles.list__item} ${styles.item8__back}`}>Docker</li>
              <li className={`${styles.list__item} ${styles.item9__back}`}>загрузка...</li>
              <li></li>
            </ul>
            <p className={styles.text}></p>
          </div>
        </div>
        <ul className={styles.article}>
          <p className={`${styles.paragraph} ${styles.paragraph1}`}>
            <span className={styles.checkmark}>&#10004;</span> &nbsp;Занимаюсь разработкой
            интерактивных UI для веб-сервисов и приложений на React, Next, Angular. Пишу SPA & MPA
            сайты, применяю REST API для интеграции с бэком. Использую Node.js для серверной
            разработки.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraph2}`}>
            <span className={styles.checkmark}>&#10004;</span> &nbsp;Хорошо владею HTML5, CSS3,
            JavaScript, создаю адаптивную, резиновую вёрстку, применяю анимацию при помощи CSS
            Transition, CSS Animation, keyframes + немного параллакса, соблюдаю семантику и
            БЭМ-структуру.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraph3}`}>
            <span className={styles.checkmark}>&#10004;</span> &nbsp;Выстраиваю окружение и
            настраиваю виртуальный хост Nginx на серверах Ubuntu. Знаю необходимые консольные
            команды (git bash, windows powershell и др.). Умею работать в команде, пониманию
            gitflow, pull-request и review.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraph4}`}>
            <span className={styles.checkmark}>&#10004;</span> &nbsp;Использую Chrome DevTools, W3C
            Markup Validation Service, BEM-validator, Pixel perfect, BrowserStack, Postman для
            отладки и тестирования приложений.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraph5}`}>
            <span className={styles.checkmark}>&#10004;</span> &nbsp;Умею создавать базовые SQL
            запросы, пользоваться styled components и библиотекой MaterialUI. Знаю как работает
            Docker (поднимал контейнеры с проектами и развертывал простенькие таблицы).
          </p>
          <p className={`${styles.paragraph} ${styles.paragraph6}`}>
            <span className={styles.checkmark}>&#10004;</span> &nbsp;Периодически изучаю новые
            актуальные фреймворки и технологии для саморазвития.
          </p>
        </ul>
      </div>
    </div>
  );
}
