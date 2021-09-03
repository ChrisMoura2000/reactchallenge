import React from 'react';
import { ProfileImage } from '../images';
import styles from '../styles/main.module.css';

export default function SectionOne() {
  return (
    <section className={ styles.firstSection }>
      <img src={ ProfileImage } alt="ProfileImage" className={ styles.imgfirstSection } />
      <a href="#depoiment" id="depoiment">
        Sarah’s day care available now in North Sydney
      </a>
      <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
    </section>
  );
}
