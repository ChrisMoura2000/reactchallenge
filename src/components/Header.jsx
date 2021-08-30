import React from "react";
import { Badge, Playbutton } from "../images/";

export default function Header() {
  return (
    <header>
      <div>
        <img src={Badge} alt="Badge" />
        <nav>
          <ul>
            <li>
              <h5>Create Your Nanny Share</h5>
            </li>
            <li>
              <h5>Browse Shares</h5>
            </li>
            <li>
              <h5>Our Story</h5>
            </li>
            <li>
              <h5>Become a Nanny Share Host</h5>
            </li>
            <li>
              <h5>Sign In</h5>
            </li>
          </ul>
        </nav>
      </div>
      <h2>Easily create or join a local nanny share with Hapu </h2>
      <span>
        Hapu is Airbnb for nanny share. Share your home, nanny and costs and
        create new flexible, affordable solutions in childcare.
      </span>
      <div>
        <img src={Playbutton} alt="Playbutton" />
        <a href="#link" id="link">
          See hapu in action (27 seconds)
        </a>
      </div>
    </header>
  );
}
