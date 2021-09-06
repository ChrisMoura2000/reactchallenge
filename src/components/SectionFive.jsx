import React from 'react';
import { ImageSection4 } from '../images';
import styles from '../styles/main.module.css';

export default function SectionFive() {
  return (
    <section className={ styles.fifthSection }>
      <h2>A framework built for the long term</h2>
      <p>
        Childcare is for the long term. And you need a framework you can count
        on that gives your share long term viability and success. That’s why
        we’ve defined Hapu around our three tribal principles; clearly defined
        process, transparency over money and equality of participation.
      </p>
      <a href="#readyHapu" id="readyHapu">
        Read how Hapu’s tribal background defines our app
      </a>
      <img src={ ImageSection4 } alt="ImageSection4" className={ styles.dNone } />
    </section>
  );
}
