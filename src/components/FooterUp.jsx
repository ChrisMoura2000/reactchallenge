import React from 'react';
import { Union } from '../images';
import styles from '../styles/footer.module.css';

export default function FooterUp() {
  return (
    <div className={ styles.footerUp }>
      <h2>Become a nanny share host</h2>
      <p>Takes less than 5 minutes to get started</p>
      <button type="button">
        <img src={ Union } alt="Union" />
        <div>
          <p className={ styles.btnCreateNanny }>Create Your Nanny Share</p>
          <p>Takes less than 5 minutes</p>
        </div>
      </button>
      <a href="#browseLocal" id="browseLocal">Or browse local nanny-shares</a>
    </div>
  );
}
