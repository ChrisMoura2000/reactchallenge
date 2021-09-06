import React from 'react';
import { ImageSection5 } from '../images';
import styles from '../styles/main.module.css';

export default function SectionSix() {
  return (
    <section className={ styles.sixthSection }>
      <img src={ ImageSection5 } alt="ImageSection5" />
      <h2>Coming soon: Nanny Share Daily Diary!</h2>
      <p>
        With the Hapu daily diary your nanny will be able to update you and your
        sharers with photos and commentary of the day. You and sharers will
        receive notifications and you’ll be able to login to view the daily
        adventures fo your little ones. We can’t wait!
      </p>
    </section>
  );
}
