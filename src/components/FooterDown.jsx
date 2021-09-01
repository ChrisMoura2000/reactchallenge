import React from "react";
import { Logo, Socialmedia } from "../images";

export default function FooterDown() {
  return (
    <div>
      <img src={Logo} alt="Logo" />
      <ul>
        <li>
          <h5>Share Your Nanny</h5>
        </li>
        <li>
          <h5>Our Story</h5>
        </li>
        <li>
          <h5>Blog</h5>
        </li>
        <li>
          <h5>Terms & Privacy</h5>
        </li>
      </ul>
      <img src={Socialmedia} alt="Socialmedia" />
      <p>Copyright &copy; 2017 Hapu PTY Limited All rights reserved</p>
    </div>
  );
}
