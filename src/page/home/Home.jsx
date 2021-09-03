/* eslint-disable max-len */
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import postAPI from '../../services/newsletterAPI';

export default function Home() {
  const getAorBtext = () => {
    const probalility = 0.5;
    const isAtext = Math.random() < probalility; // Código baseado no site:https://stackoverflow.com/questions/36756331/js-generate-random-boolean
    if (isAtext) {
      return {
        title: 'Easily create or join a local nanny share with Hapu',
        description: 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.',
      };
    }
    return {
      title: 'Create the childcare you need at a price you can afford',
      description: 'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.',
    };
  };

  const contentText = getAorBtext();

  return (
    <div>
      <Header contentText={ contentText } />
      <Main />
      <Footer />
    </div>
  );
}
