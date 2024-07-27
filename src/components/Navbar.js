import React from 'react';
import './Navbar.css';

const Navbar = ({ handleChangePage }) => {
  return (
    <div className="navbar">
      <a
        href="cal"
        className="navbar__box"
        onClick={e => handleChangePage(e, `cal`)}
      >
        <img className="navbar__box__button" src="cal.png" alt="캘린더" />
        <span className="navbar__box__text">캘린더</span>
      </a>
      <a
        href="insight"
        className="navbar__box"
        onClick={e => handleChangePage(e, `insight`)}
      >
        <img className="navbar__box__button" src="insight.png" alt="통계" />
        <span className="navbar__box__text">통계</span>
      </a>
      <a
        href="/"
        className="navbar__box"
        onClick={e => handleChangePage(e, `/`)}
      >
        <img className="navbar__box__button" src="home.png" alt="홈" />
        <span className="navbar__box__text">홈</span>
      </a>
      <a
        href="community"
        className="navbar__box"
        onClick={e => handleChangePage(e, `community`)}
      >
        <img
          className="navbar__box__button"
          src="community.png"
          alt="커뮤니티"
        />
        <span className="navbar__box__text">커뮤니티</span>
      </a>
      <a
        href="rank"
        className="navbar__box"
        onClick={e => handleChangePage(e, `rank`)}
      >
        <img className="navbar__box__button" src="rank.png" alt="랭킹" />
        <span className="navbar__box__text">랭킹</span>
      </a>
    </div>
  );
};

export default Navbar;
