import React from "react";
import NavBar from "../components/NavBar";
import { Playbutton, ImageHeader } from "../images";

export default function Header() {
  return (
    <header className="head">
      <NavBar />
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
      <img src={ImageHeader} alt="ImageHeader"/>
    </header>
  );
}
