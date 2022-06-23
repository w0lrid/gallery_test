import React from 'react';
import './Card.css';

const Card = ({ title, category, img }) => {
  const handleClick = (key) => {
    localStorage.removeItem(key);
  };

  return (
    <div
      onClick={() => {
        console.log(title);
        localStorage.removeItem(title.toLocaleLowerCase());
      }}
      className="card"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="category">
        <span className="category__text">{category}</span>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Card;
