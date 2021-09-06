import React from 'react';
import { Logo, Socialmedia } from '../images';
import styles from '../styles/footer.module.css';

export default function FooterDown() {
  return (
    <div className={ styles.footerDown }>
      <img src={ Logo } alt="Logo" />
      <ul>
        <li>Share Your Nanny</li>
        <li>Our Story</li>
        <li>Blog</li>
        <li>Terms & Privacy</li>
      </ul>
      <img src={ Socialmedia } alt="Socialmedia" />
      <p className={ styles.copyRight }>
        Copyright &copy; 2017 Hapu PTY Limited All rights reserved
      </p>
    </div>
  );
}
