import React from 'react';
import { ImageSection3 } from '../images';

export default function SectionFour() {
  return (
    <section>
      <img src={ ImageSection3 } alt="ImageSection3" />
      <h2>Shared payments made simple</h2>
      <p>
        {/* eslint-disable-next-line max-len */}
        Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.
      </p>
      <a href="#readBridget" id="readBridget">
        Read how Bridget’s share (without Hapu) ended over $15
      </a>
    </section>
  );
}
