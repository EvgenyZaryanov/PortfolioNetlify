import styles from './profile.module.css';
import { Inter } from 'next/font/google';

const inter_init = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto'
});

export default function Profile() {
  return (
    <div className={`${styles.container} ${inter_init} ${styles.inter}`}>
      <h1 className={styles.profile__title}>Обо мне</h1>
      <div className={styles.profile__content}>
        <div className={styles.profile__info}>
          <h2 className={styles.profile__header}>Евгений</h2>
          <h3 className={styles.profile__subheader}>Фронтенд-разработчик</h3>
          <p className={`${styles.profile__description} ${styles.paragraph1}`}>
            <b>Р</b>одился и живу в Москве, за плечами оконченное высшее<br></br> образование МГУ,
            программа профессиональной переподготовки по веб-разработке, дополнительные курсы по
            смежным технологиям и интерактивные тренажеры. Есть опыт коммерческой разработки.
          </p>
          <p className={`${styles.profile__description} ${styles.paragraph2}`}>
            <b>В</b> прошлом работал руководителем проектов и координатором программ в сфере
            общественной и культурной дипломатии, где выполнял обязанности project- и event-
            менеджера в области организации и проведения международных мероприятий /MICE-туризма.
            Мои обязанности также включали стратегическое планирование, внедрение новых форматов
            работы, научно-аналитическую деятельность и сопровождение грантов.
          </p>
          <p className={`${styles.profile__description} ${styles.paragraph3}`}>
            <b>С</b>пустя время ушел в веб-разработку. Сейчас занимаюсь в основном фронтендом, пишу
            код для пользовательских интерфейсов, выстраивая взаимодействие клиентской и серверной
            частей. Умею искать информацию, анализировать и применять ее в практических целях.
            Всегда стараюсь изучаю новые фреймворки и технологии. Планирую профессионально расти в
            направлении fullstack разработки.
          </p>
          <p className={`${styles.profile__description} ${styles.paragraph4}`}>
            <b>С</b>тараюсь творчески подходить к каждому проекту, писать максимально чистый код,
            создавать комфортный и интуитивно понятный интерфейс. Крайне мотивирован присоединиться
            к слаженной команде и погрузиться в работу над интересными и разноплановыми проектами.
          </p>
          <p className={`${styles.profile__description} ${styles.paragraph5}`}>
            <b>В</b> свободное время увлекаюсь фотографией, фото и видео-монтажом. Люблю активный
            отдых, спорт, музыку и путешествия.
          </p>
        </div>
        <div className={styles.profile__imageBlock}>
          <div className={styles.profile__image}></div>
        </div>
      </div>
    </div>
  );
}
