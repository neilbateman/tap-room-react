import React from 'react';
import Keg from './Keg';

const kegList = [
  {
    name: 'Master Brew Kombucha',
    cfu: 5,
    brand: 'Kevita',
    pints: 50,
    price: 1
  },
  {
    name: 'Lemon Ginver',
    cfu: 5,
    brand: 'Humm',
    pints: 50,
    price: 1
  },
  {
    name: 'Botanic no 7',
    cfu: 5,
    brand: 'GT enlightened Organic Raw Kombucha',
    pints: 50,
    price: 1
  },
  {
    name: 'Essence of Lemon',
    cfu: 0,
    brand: 'Kombucha Wonder Drink',
    pints: 50,
    price: 1
  },
  {
    name: 'Dr. Marigold',
    cfu: 5,
    brand: 'Tealixir',
    pints: 50,
    price: 1
  }
];

function KegList() {
  return (
    <div>
      {kegList.map((keg, index) =>
        <Keg name = {keg.name}
          cfu = {keg.cfu}
          brand = {keg.brand}
          pints = {keg.pints}
          price = {keg.price}
          key = {index} />
        )}
    </div>
  );
}

export default KegList;
