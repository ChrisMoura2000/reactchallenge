import React from 'react';
import { ProfileImage } from '../images';

export default function SectionOne() {
  return (
    <section>
      <img src={ ProfileImage } alt="ProfileImage" />
      <a href="#depoiment" id="depoiment">
        Sarah’s day care available now in North Sydney
      </a>
      <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
    </section>
  );
}
