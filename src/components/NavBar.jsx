import React from 'react';
import { Badge } from '../images';
import styles from '../styles/header.module.css';

export default function NavBar() {
  return (
    <div className={ styles.allNavBar }>
      <img src={ Badge } alt="Badge" className={ styles.imgBadge } />
      <ul className={ styles.ulNavBar }>
        <div className={ styles.dNone }>
          <li>
            Create Your Nanny Share
          </li>
          <li>
            Browse Shares
          </li>
          <li>
            Our Story
          </li>
        </div>
        <div>
          <li className={ styles.becomeNannyNavBar }>
            Become a Nanny Share Host
          </li>
          <li className={ styles.dNone }>
            Sign In
          </li>
        </div>
      </ul>
    </div>
  );
}
