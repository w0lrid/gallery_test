import React from 'react';
import './Category.css';

const Category = ({ name }) => {
  return (
    <div className="category">
      <span className="category__text">{name}</span>
    </div>
  );
};

export default Category;
