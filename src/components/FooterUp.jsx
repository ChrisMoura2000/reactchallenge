import React from 'react';
import { Union } from '../images';

export default function FooterUp() {
  return (
    <div>
      <h2>Become a nanny share host</h2>
      <p>Takes less than 5 minutes to get started</p>
      <button type="button">
        <img src={ Union } alt="Union" />
        <p>Create Your Nanny Share</p>
        <p>Takes less than 5 minutes</p>
      </button>
      <a href="#browseLocal" id="browseLocal">Or browse local nanny-shares</a>
    </div>
  );
}
