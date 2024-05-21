'use client';

import styles from './contacts.module.css';
import { Inter } from 'next/font/google';
import AccordionDemo from '../../components/Accordion';

const inter_init = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
});

export default function Contacts() {
  return (
    <div className={`${styles.container} ${inter_init} ${styles.inter}`}>
      <h1 className={styles.contacts__title}>Как связаться</h1>
      <AccordionDemo />
    </div>
  );
}
