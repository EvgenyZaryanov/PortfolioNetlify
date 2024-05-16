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
              <li className={`${styles.list__item} ${styles.item1}`}>HTML5</li>
              <li className={`${styles.list__item} ${styles.item2}`}>CSS3</li>
              <li className={`${styles.list__item} ${styles.item3}`}>JavaScript</li>
              <li className={`${styles.list__item} ${styles.item4}`}>ReactJS</li>
              <li className={`${styles.list__item} ${styles.item5}`}>NextJS</li>
              <li className={`${styles.list__item} ${styles.item6}`}>Angular</li>
            </ul>
            <p className={styles.text}></p>
          </div>
          <div className={styles.description}>
            <div className={styles.backend__image}></div>
            <h2 className={styles.title}>backend</h2>
            <ul className={styles.list}>
              <li className={`${styles.list__item} ${styles.item1}`}>NodeJS</li>
              <li className={`${styles.list__item} ${styles.item2}`}>Express</li>
              <li className={`${styles.list__item} ${styles.item3}`}>MongoDB</li>
              <li className={`${styles.list__item} ${styles.item4}`}>Postman</li>
              <li className={`${styles.list__item} ${styles.item5}`}>RestAPI</li>
              <li className={`${styles.list__item} ${styles.item6}`}>Nginx</li>
              <li></li>
            </ul>
            <p className={styles.text}></p>
          </div>
        </div>
        <article className={styles.article}>
          <p className={`${styles.paragraph} ${styles.paragraph1}`}>
            &#10070; Занимаюсь разработкой интерактивных UI для веб-сервисов и приложений на React,
            Next, Angular. Пишу SPA & MPA сайты, применяю REST API для интеграции с бэком. Использую
            Node.js для серверной разработки.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraph2}`}>
            &#10070; Хорошо владею HTML5, CSS3, JavaScript, создаю адаптивную, резиновую вёрстку,
            применяю анимацию при помощи CSS Transition, CSS Animation, keyframes + немного
            параллакса, соблюдаю семантику и БЭМ-структуру.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraph3}`}>
            &#10070; Выстраиваю окружение и настраиваю виртуальный хост Nginx на серверах Ubuntu.
            Знаю необходимые консольные команды (git bash, windows powershell и др.). Умею работать
            в команде, пониманию gitflow, pull-request и review.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraph4}`}>
            &#10070; Использую Chrome DevTools, W3C Markup Validation Service, BEM-validator, Pixel
            perfect, BrowserStack, Postman для отладки и тестирования приложений.
          </p>
          <p className={`${styles.paragraph} ${styles.paragraph5}`}>
            &#10070; Умею создавать базовые SQL запросы, пользоваться styled components и
            библиотекой MaterialUI. Знаю как работает Docker (поднимал контейнеры с проектами и
            развертывал простенькие таблицы).
          </p>
          <p className={`${styles.paragraph} ${styles.paragraph6}`}>
            &#10070; Периодически изучаю новые актуальные фреймворки и технологии для саморазвития.
          </p>
        </article>
      </div>
    </div>
  );
}
