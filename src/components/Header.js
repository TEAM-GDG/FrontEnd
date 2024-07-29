import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__points">
        <img className="header__points__img" src="points.png" alt="points" />
        <span className="header__points__text">1,385,968</span>
      </div>
      <div className="header__title">
        <span className="header__title__text">app name</span>
      </div>
      <div className="header__empty" />
    </header>
  );
};

export default Header;
