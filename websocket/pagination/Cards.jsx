import React from 'react';

const Cards = ({ id, tit, price, image }) => {
  return (
    <div className='cardcontent'>
      <div className='card-details'>
        <p><strong>{tit}</strong></p>
        <p>ID: {id}</p>
        <p>Price: ₹{price}</p>
      </div>
      <img className='img' src={image} alt={`Image of ${tit}`} />
    </div>
  );
};

export default Cards;
