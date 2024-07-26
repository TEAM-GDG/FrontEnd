import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  let navigate = useNavigate();

  const handleClick = location => {
    navigate(location);
  };

  return (
    <footer className="footer">
      <div className="footer__box" onClick={() => handleClick(`cal`)}>
        <img className="footer__box__button" src="cal.png" alt="캘린더" />
        <span className="footer__box__text">캘린더</span>
      </div>
      <div className="footer__box" onClick={() => handleClick(`insight`)}>
        <img className="footer__box__button" src="insight.png" alt="통계" />
        <span className="footer__box__text">통계</span>
      </div>
      <div className="footer__box" onClick={() => handleClick(`/`)}>
        <img className="footer__box__button" src="home.png" alt="홈" />
        <span className="footer__box__text">홈</span>
      </div>
      <div className="footer__box" onClick={() => handleClick(`community`)}>
        <img
          className="footer__box__button"
          src="community.png"
          alt="커뮤니티"
        />
        <span className="footer__box__text">커뮤니티</span>
      </div>
      <div className="footer__box" onClick={() => handleClick(`rank`)}>
        <img className="footer__box__button" src="rank.png" alt="랭킹" />
        <span className="footer__box__text">랭킹</span>
      </div>
    </footer>
  );
};

export default Footer;
