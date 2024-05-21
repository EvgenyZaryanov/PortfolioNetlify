import './globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import Header from '../components/Header';

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
        <Header />
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
