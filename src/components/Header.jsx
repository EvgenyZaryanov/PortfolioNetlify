'use client';

import Link from 'next/link';
import React from 'react';
import './header.css';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  function closeNav() {
    setIsNavOpen(false);
  }

  return (
    <header className="header inter">
      <div className="header__container">
        <nav className={`header__nav ${isNavOpen ? 'active' : ''}`}>
          <ul className="header__items">
            <li className="header__item">
              <Link href="/profile">
                <p className="header__about">Профиль</p>
              </Link>
            </li>
            <li className="header__item">
              <Link href="/tech-stack">
                <p className="header__profile">Стек</p>
              </Link>
            </li>
            <Link href="/">
              <li className="header__logo"></li>
            </Link>
            <li className="header__item">
              <Link href="/projects">
                <p className="header__projects">Проекты</p>
              </Link>
            </li>
            <li className="header__item">
              <Link href="/contacts">
                <p className="header__contacts">Контакты</p>
              </Link>
            </li>
          </ul>
          <button className="header__close-button" onClick={closeNav}>
            &times;
          </button>
        </nav>
        {isNavOpen && <div className="overlay" onClick={closeNav}></div>}
        <button className="header__burger" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link className="header__link" href="/">
          <div className="header__logo2"></div>
        </Link>
      </div>
    </header>
  );
}
