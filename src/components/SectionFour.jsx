import React from 'react';
import { ImageSection3 } from '../images';
import styles from '../styles/main.module.css';

export default function SectionFour() {
  return (
    <section className={ styles.fourthSection }>
      <img src={ ImageSection3 } alt="ImageSection3" />
      <h3>Shared payments made simple</h3>
      <p>
        {/* eslint-disable-next-line max-len */}
        Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.
      </p>
      <a href="#readBridget" id="readBridget">
        Read how Bridget’s share (without Hapu) ended over $15
      </a>
    </section>
  );
}
