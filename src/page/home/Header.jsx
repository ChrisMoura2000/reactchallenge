import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar';
import { Playbutton, ImageHeader } from '../../images';
import styles from '../../styles/header.module.css';

export default function Header({ contentText: { title, description } }) {
  console.log(`Titulo: ${title}, description:${description}`);
  return (
    <header className={ styles.bgImg }>
      <NavBar />
      <div className={ styles.headerTitle }>
        <h2>Easily create or join a local nanny share with Hapu </h2>
        <span>
          Hapu is Airbnb for nanny share. Share your home, nanny and costs and
          create new flexible, affordable solutions in childcare.
        </span>
      </div>
      <div className={ styles.playbutton }>
        <img src={ Playbutton } alt="Playbutton" />
        <a href="#link" id="link">
          See hapu in action (27 seconds)
        </a>
      </div>
      <img className={ styles.dNone } src={ ImageHeader } alt="ImageHeader" />
    </header>
  );
}

Header.propTypes = {
  contentText: PropTypes.objectOf(PropTypes.string).isRequired,
};
