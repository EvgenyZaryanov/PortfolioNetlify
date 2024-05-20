'use client';

import styles from './project.module.css';
import { Inter } from 'next/font/google';
import React, { useState } from 'react';
import Popup from '../../components/Popup.jsx';

const inter_init = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter'
});

export default function Projects() {
  const [openPopupId, setOpenPopupId] = useState(null);

  const [showMore, setShowMore] = useState(false); // Состояние для "Еще"

  const handleClick = id => {
    setOpenPopupId(id);
  };

  const handleClosePopup = () => {
    setOpenPopupId(null);
  };

  const handleShowMore = () => {
    setShowMore(true); // Показывать все элементы
  };

  return (
    <div className={`${styles.container} ${inter_init}`}>
      <h1 className={`${styles.projects__title} ${styles.inter}`}>Портфолио</h1>
      <ul className={`${styles.elements} ${styles.inter}`}>
        <li id="element1" className={`${styles.element} ${styles.element1}`}>
          <button className={styles.popup} onClick={() => handleClick('element1')}></button>
          {openPopupId === 'element1' && (
            <Popup onClose={handleClosePopup}>
              <a
                className={styles.element__link}
                href="https://github.com/EvgenyZaryanov/movies-explorer-frontend-rebased-"
                target="_blank"
              >
                Код
              </a>
              <a
                className={styles.element__link}
                href="https://movies-explorer.evgenyzaryanov.nomoredomains.icu/"
                target="_blank"
              >
                Сайт
              </a>
              <p className={styles.element__paragraph}>
                (временно недоступен, в процессе миграции на другой сервер)
              </p>
            </Popup>
          )}
          <picture className={`${styles.element__image} ${styles.image1}`}></picture>
          <h2 className={styles.element__title}>
            MPA-приложение по поиску короткометражных фильмов<br></br>
            <span className={`${styles.element__span} ${styles.span1}`}>Movies Explorer</span>
          </h2>
        </li>
        <li id="element2" className={`${styles.element} ${styles.element2}`}>
          <button className={styles.popup} onClick={() => handleClick('element2')}></button>
          {openPopupId === 'element2' && (
            <Popup onClose={handleClosePopup}>
              <a
                className={styles.element__link}
                href="https://github.com/EvgenyZaryanov/Semitex-page"
                target="_blank"
              >
                Код
              </a>
              <a
                className={styles.element__link}
                href="https://zaryanov-semitex-new-page.netlify.app/"
                target="_blank"
              >
                Сайт
              </a>
            </Popup>
          )}
          <picture className={`${styles.element__image} ${styles.image2}`}></picture>
          <h2 className={styles.element__title}>
            Рекламный лендинг<br></br> для компании{' '}
            <span className={`${styles.element__span} ${styles.span2}`}>Semitex</span>
          </h2>
        </li>
        <li id="element3" className={`${styles.element} ${styles.element3}`}>
          <button className={styles.popup} onClick={() => handleClick('element3')}></button>
          {openPopupId === 'element3' && (
            <Popup onClose={handleClosePopup}>
              <a
                className={styles.element__link}
                href="https://github.com/EvgenyZaryanov/CyberPunk_Landing_page_test"
                target="_blank"
              >
                Код
              </a>
              <a
                className={styles.element__link}
                href="https://evgenyzaryanov.github.io/CyberPunk_Landing_page_test/"
                target="_blank"
              >
                Сайт
              </a>
            </Popup>
          )}
          <picture className={`${styles.element__image} ${styles.image3}`}></picture>
          <h2 className={styles.element__title}>
            Информациоинная <br></br>веб-страница для игры<br></br>{' '}
            <span className={`${styles.element__span} ${styles.span3}`}>Cyberpunk2077</span>
          </h2>
        </li>
        <li id="element4" className={`${styles.element} ${styles.element4}`}>
          <button className={styles.popup} onClick={() => handleClick('element4')}></button>
          {openPopupId === 'element4' && (
            <Popup onClose={handleClosePopup}>
              <a
                className={styles.element__link}
                href="https://github.com/EvgenyZaryanov/BurgerHouse"
                target="_blank"
              >
                Код
              </a>
              <a
                className={styles.element__link}
                href="https://burgerhousedeploy.netlify.app/"
                target="_blank"
              >
                Сайт
              </a>
            </Popup>
          )}
          <picture className={`${styles.element__image} ${styles.image4}`}></picture>
          <h2 className={styles.element__title}>
            Веб сервис<br></br> по доставке бургеров
            <span className={`${styles.element__span} ${styles.span4}`}>BurgerHouse</span>
          </h2>
        </li>
        <li id="element5" className={`${styles.element} ${styles.element5}`}>
          <button className={styles.popup} onClick={() => handleClick('element5')}></button>
          {openPopupId === 'element5' && (
            <Popup onClose={handleClosePopup}>
              <a
                className={styles.element__link}
                href="https://github.com/EvgenyZaryanov/Chess-Club"
                target="_blank"
              >
                Код
              </a>
              <a
                className={styles.element__link}
                href="https://chess-club-zaryanov.netlify.app/"
                target="_blank"
              >
                Сайт
              </a>
            </Popup>
          )}
          <picture className={`${styles.element__image} ${styles.image5}`}></picture>
          <h2 className={styles.element__title}>
            Одностраничный лендинг<br></br> про шахматы<br></br>
            <span className={`${styles.element__span} ${styles.span5}`}>Клуб Четырех Коней</span>
          </h2>
        </li>
        <li id="element6" className={`${styles.element} ${styles.element6}`}>
          <button className={styles.popup} onClick={() => handleClick('element6')}></button>
          {openPopupId === 'element6' && (
            <Popup onClose={handleClosePopup}>
              <a
                className={styles.element__link}
                href="https://github.com/EvgenyZaryanov/PRO_kino_page"
                target="_blank"
              >
                Код
              </a>
              <a
                className={styles.element__link}
                href="https://evgenyzaryanov.github.io/PRO_kino_page/"
                target="_blank"
              >
                Сайт
              </a>
            </Popup>
          )}
          <picture className={`${styles.element__image} ${styles.image6}`}></picture>
          <h2 className={styles.element__title}>
            Веб-страница<br></br> с трейлерами сериала<br></br>
            <span className={`${styles.element__span} ${styles.span6}`}>
              Аватар: легенда об Аанге
            </span>
          </h2>
        </li>
        {showMore && (
          <>
            <li id="element7" className={`${styles.element} ${styles.element7}`}>
              <button className={styles.popup} onClick={() => handleClick('element7')}></button>
              {openPopupId === 'element7' && (
                <Popup onClose={handleClosePopup}>
                  <a
                    className={styles.element__link}
                    href="https://github.com/EvgenyZaryanov/react-mesto-api-full-gha"
                    target="_blank"
                  >
                    Код
                  </a>
                  <a
                    className={styles.element__link}
                    href="https://zaryanov.nomoredomainsmonster.ru/"
                    target="_blank"
                  >
                    Сайт
                  </a>
                  <p className={styles.element__paragraph}>
                    (временно недоступен, в процессе миграции на другой сервер)
                  </p>
                </Popup>
              )}
              <picture className={`${styles.element__image} ${styles.image7}`}></picture>
              <h2 className={styles.element__title}>
                SPA-приложение для<br></br> обмена фотографиями<br></br>
                <span className={`${styles.element__span} ${styles.span7}`}>Mesto</span>
              </h2>
            </li>
            <li id="element8" className={`${styles.element} ${styles.element8}`}>
              <button className={styles.popup} onClick={() => handleClick('element8')}></button>
              {openPopupId === 'element8' && (
                <Popup onClose={handleClosePopup}>
                  <a
                    className={styles.element__link}
                    href="https://github.com/EvgenyZaryanov/Fitness_Sale"
                    target="_blank"
                  >
                    Код
                  </a>
                  <a
                    className={styles.element__link}
                    href="https://fitness-sale.netlify.app/"
                    target="_blank"
                  >
                    Сайт
                  </a>
                </Popup>
              )}
              <picture className={`${styles.element__image} ${styles.image8}`}></picture>
              <h2 className={styles.element__title}>
                Рекламная страница для<br></br> сети фитнесс-клубов<br></br>
                <span className={`${styles.element__span} ${styles.span8}`}>Fitness Sale</span>
              </h2>
            </li>
            <li id="element9" className={`${styles.element} ${styles.element9}`}>
              <button className={styles.popup} onClick={() => handleClick('element9')}></button>
              {openPopupId === 'element9' && (
                <Popup onClose={handleClosePopup}>
                  <a
                    className={styles.element__link}
                    href="https://github.com/EvgenyZaryanov/Bio-Prost"
                    target="_blank"
                  >
                    Код
                  </a>
                  <a
                    className={styles.element__link}
                    href="https://bio-prost-z.netlify.app/"
                    target="_blank"
                  >
                    Сайт
                  </a>
                </Popup>
              )}
              <picture className={`${styles.element__image} ${styles.image9}`}></picture>
              <h2 className={styles.element__title}>
                Рекламный лендинг<br></br> лекарственного препарата
                <span className={`${styles.element__span} ${styles.span9}`}>Bio Prost</span>
              </h2>
            </li>
            <li id="element10" className={`${styles.element} ${styles.element10}`}>
              <button className={styles.popup} onClick={() => handleClick('element10')}></button>
              {openPopupId === 'element10' && (
                <Popup onClose={handleClosePopup}>
                  <a
                    className={styles.element__link}
                    href="https://github.com/EvgenyZaryanov/CRM-Ambassador"
                    target="_blank"
                  >
                    Код
                  </a>
                </Popup>
              )}
              <picture className={`${styles.element__image} ${styles.image10}`}></picture>
              <h2 className={styles.element__title}>
                CRM-система для<br></br>
                <span className={`${styles.element__span} ${styles.span10}`}>
                  Яндекс Амбассадоров
                </span>
                (в рамках Хакатона)
              </h2>
            </li>
            <li id="element11" className={`${styles.element} ${styles.element11}`}>
              <button className={styles.popup} onClick={() => handleClick('element11')}></button>
              {openPopupId === 'element11' && (
                <Popup onClose={handleClosePopup}>
                  <a
                    className={styles.element__link}
                    href="https://github.com/EvgenyZaryanov/russian-travel"
                    target="_blank"
                  >
                    Код
                  </a>
                  <a
                    className={styles.element__link}
                    href="https://evgenyzaryanov.github.io/russian-travel/index.html"
                    target="_blank"
                  >
                    Сайт
                  </a>
                </Popup>
              )}
              <picture className={`${styles.element__image} ${styles.image11}`}></picture>
              <h2 className={styles.element__title}>
                Учебный проект по<br></br> адаптивной верстке<br></br>
                <span className={`${styles.element__span} ${styles.span11}`}>
                  Путешествия по России
                </span>
              </h2>
            </li>
            <li id="element12" className={`${styles.element} ${styles.element12}`}>
              <button className={styles.popup} onClick={() => handleClick('element12')}></button>
              {openPopupId === 'element12' && (
                <Popup onClose={handleClosePopup}>
                  <a
                    className={styles.element__link}
                    href="https://github.com/EvgenyZaryanov/Animated_parallax_page"
                    target="_blank"
                  >
                    Код
                  </a>
                  <a
                    className={styles.element__link}
                    href="https://parallax-page-zaryanov.netlify.app/"
                    target="_blank"
                  >
                    Сайт
                  </a>
                </Popup>
              )}
              <picture className={`${styles.element__image} ${styles.image12}`}></picture>
              <h2 className={styles.element__title}>
                Анимация главной страницы<br></br> с применением эффекта<br></br>
                <span className={`${styles.element__span} ${styles.span12}`}>Parallax </span>
              </h2>
            </li>
            <li id="element13" className={`${styles.element} ${styles.element13}`}>
              <button className={styles.popup} onClick={() => handleClick('element13')}></button>
              {openPopupId === 'element13' && (
                <Popup onClose={handleClosePopup}>
                  <a
                    className={styles.element__link}
                    href="https://github.com/EvgenyZaryanov/how-to-learn"
                    target="_blank"
                  >
                    Код
                  </a>
                  <a
                    className={styles.element__link}
                    href="https://evgenyzaryanov.github.io/how-to-learn/index.html"
                    target="_blank"
                  >
                    Сайт
                  </a>
                </Popup>
              )}
              <picture className={`${styles.element__image} ${styles.image13}`}></picture>
              <h2 className={styles.element__title}>
                Учебный проект с применением flex & grid, iframe, @keyframes<br></br>
                <span className={`${styles.element__span} ${styles.span13}`}>
                  Научиться учиться
                </span>
              </h2>
            </li>
            <li id="element14" className={`${styles.element} ${styles.element14}`}>
              <button className={styles.popup} onClick={() => handleClick('element14')}></button>
              {openPopupId === 'element14' && (
                <Popup onClose={handleClosePopup}>
                  <a
                    className={styles.element__link}
                    href="https://github.com/EvgenyZaryanov/Parallax_header"
                    target="_blank"
                  >
                    Код
                  </a>
                  <a
                    className={styles.element__link}
                    href="https://evgenyzaryanov.github.io/Parallax_header/"
                    target="_blank"
                  >
                    Сайт
                  </a>
                </Popup>
              )}
              <picture className={`${styles.element__image} ${styles.image14}`}></picture>
              <h2 className={styles.element__title}>
                Анимация главной страницы<br></br> с применением эффекта<br></br>
                <span className={`${styles.element__span} ${styles.span14}`}>Parallax </span>
              </h2>
            </li>
          </>
        )}
      </ul>
      {!showMore && (
        <button className={styles.showMoreButton} onClick={handleShowMore}>
          Показать больше
        </button>
      )}
    </div>
  );
}
