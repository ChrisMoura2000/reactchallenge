import React from 'react';
import SectionOne from '../../components/SectionOne';
import SectionTwo from '../../components/SectionTwo';
import SectionThree from '../../components/SectionThree';
import SectionFour from '../../components/SectionFour';
import SectionFive from '../../components/SectionFive';
import SectionSix from '../../components/SectionSix';
import styles from '../../styles/main.module.css';

export default function Main() {
  return (
    <main className={ styles.allSections }>
      <SectionOne />
      <SectionTwo />
      <hr />
      <SectionThree />
      <hr />
      <SectionFour />
      <hr />
      <SectionFive />
      <hr />
      <SectionSix />
    </main>
  );
}
