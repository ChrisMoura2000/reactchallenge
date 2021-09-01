import React from "react";
import { ImageSection1 } from "../images";

export default function SectionTwo() {
  return (
    <section>
      <div>
        <h2>Share your home, nanny and costs</h2>
        <p>
        You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a href="#hapuMeans" id="hapuMeans">Hapu means tribe</a> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.
        </p>
        <a href="# readyeStarted" id="readyeStarted">Ready to get started?</a>
      </div>
      <div>
        <img src={ImageSection1} alt="ImageSection1" />
      </div>
    </section>
  );
}
