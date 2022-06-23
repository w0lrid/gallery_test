import React from 'react';
import { pages } from '../utils';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__navigation">
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
            <div className="logo__text">Agency</div>
          </div>
          <div className="pages onlyForDesktop">
            {pages.map((page) => (
              <span>{page}</span>
            ))}
          </div>
          <div className="button onlyForDesktop">
            <span className="button__text">Contact</span>
          </div>
        </div>
        <div className="info">
          <span className="info__title">Portfolio</span>
          <span className="info__text">
            Agency provides a full service range including technical skills, design, business understanding.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
