import React from 'react';

export default function SectioThree() {
  return (
    <section>
      <h3>Are you a parent without a nanny and looking to share?</h3>
      <p>
        {/* eslint-disable-next-line max-len */}
        Leave us your name and email and we’ll update you as soon as a share becomes available in your area!
      </p>
      <input type="text" placeholder="Your name" />
      <input type="text" placeholder="Your email" />
      <button type="button">Send</button>
    </section>
  );
}
