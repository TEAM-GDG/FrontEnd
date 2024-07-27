import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();

  const handleClick = location => {
    navigate(location);
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <div className="navbar__box" onClick={() => handleClick(`cal`)}>
        <img className="navbar__box__button" src="cal.png" alt="캘린더" />
        <span className="navbar__box__text">캘린더</span>
      </div>
      <div className="navbar__box" onClick={() => handleClick(`insight`)}>
        <img className="navbar__box__button" src="insight.png" alt="통계" />
        <span className="navbar__box__text">통계</span>
      </div>
      <div className="navbar__box" onClick={() => handleClick(`/`)}>
        <img className="navbar__box__button" src="home.png" alt="홈" />
        <span className="navbar__box__text">홈</span>
      </div>
      <div className="navbar__box" onClick={() => handleClick(`community`)}>
        <img
          className="navbar__box__button"
          src="community.png"
          alt="커뮤니티"
        />
        <span className="navbar__box__text">커뮤니티</span>
      </div>
      <div className="navbar__box" onClick={() => handleClick(`rank`)}>
        <img className="navbar__box__button" src="rank.png" alt="랭킹" />
        <span className="navbar__box__text">랭킹</span>
      </div>
    </div>
  );
};

export default Navbar;
