import React from 'react';
import { Badge } from '../images';

export default function NavBar() {
  return (
    <div>
      <img src={ Badge } alt="Badge" />
      <ul>
        <div>
          <li>
            <h5>Create Your Nanny Share</h5>
          </li>
          <li>
            <h5>Browse Shares</h5>
          </li>
          <li>
            <h5>Our Story</h5>
          </li>
        </div>
        <div>
          <li>
            <h5>Become a Nanny Share Host</h5>
          </li>
          <li>
            <h5>Sign In</h5>
          </li>
        </div>
      </ul>
    </div>
  );
}
