import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter_init = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter'
});

export const metadata = {
  title: 'EZ portfolio',
  description: 'Frontend developer',
  icons: [{ rel: 'icon', url: '/icon.png' }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter_init.variable}>
        <header className="header inter">
          <div className="header__container">
            <nav className="header__nav">
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
              </ul>
              <Link href="/">
                <div className="header__logo"></div>
              </Link>
              <ul className="header__items">
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
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer inter">
          <div className="footer__container">
            <p className="footer__title">Copyright© Eugene Zaryanov 2024</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
