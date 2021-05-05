import React from 'react';

// Component
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  const img9 = 'https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller.jpg';
  const img2 = 'https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-13.jpg';
  const img3 = 'https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-12.jpg';
  const img4 = 'https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-21.jpg';
  const img8 = 'https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-16.jpg';

  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem src={img9} text='Explore the hidden waterfall deep inside the Amazon Jungle' label='Adventure' path='/services' />
            <CardItem src={img2} text='Travel through the Islands of Bali in a Private Cruise' label='Luxury' path='/services' />
          </ul>
          <ul className='cards__items'>
            <CardItem src={img3} text='Set Sail in the Atlantic Ocean visiting Uncharted Waters' label='Mystery' path='/services' />
            <CardItem src={img4} text='Experience Skiing on Top of the Himilayan Mountains' label='Adventure' path='/products' />
            <CardItem src={img8} text='Ride through the Grand Canyon on a guided camel tour' label='Adrenaline' path='/sign-up' />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
