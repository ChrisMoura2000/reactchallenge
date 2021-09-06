import React from 'react';
import { ImageSection1 } from '../images';
import styles from '../styles/main.module.css';

export default function SectionTwo() {
  return (
    <section className={ styles.secondSection }>
      <div>

        <img
          src={ ImageSection1 }
          alt="ImageSection1"
          className={ styles.imgSecondSection }
        />
      </div>
      <h2>Share your home, nanny and costs</h2>
      <p>
        {/* eslint-disable-next-line max-len */}
        You have a fantastic home, a fantastic nanny and wouldn’t cutting your
        costs in half be, well, fantastic?! If only it was easy to connect with
        other parents to share your costs? Well now it is, with Hapu.
        <a href="#hapuMeans" id="hapuMeans">
          Hapu means tribe
        </a>
        {/* eslint-disable-next-line max-len */}
        and it’s our foundational 3 tribal principles that empowers you to
        create and manage your own tribe. A tribe that together has the power to
        create new affordable solutions in childcare that work for you and your
        community.
      </p>
      <a
        href="# readyeStarted"
        id="readyeStarted"
      >
        Ready to get started?
      </a>
    </section>
  );
}
