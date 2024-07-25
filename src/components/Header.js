import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__points">
          <img className="header__points__img" alt="points" />
          <span className="header__points__text">포인트</span>
        </div>
        <div className="header__title">app name</div>
        <div className="header__empty" />
      </div>
      <hr className="header__horizontal" />
    </header>
  );
};

export default Header;
