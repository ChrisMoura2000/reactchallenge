import React from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";

export default function Main() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <hr />
      <SectionThree />
      <hr />
      <SectionFour />
    </main>
  );
}
