import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <img className="footer__icon" src="cal.png" alt="cal" />
        <span className="footer__title">캘린더</span>
      </div>
      <div className="footer__box">
        <img className="footer__icon" src="stats.png" alt="stats" />
        <span className="footer__title">통계</span>
      </div>
      <div className="footer__box">
        <img className="footer__icon" src="home.png" alt="home" />
        <span className="footer__title">홈</span>
      </div>
      <div className="footer__box">
        <img className="footer__icon" src="community.png" alt="community" />
        <span className="footer__title">커뮤니티</span>
      </div>
      <div className="footer__box">
        <img className="footer__icon" src="rank.png" alt="rank" />
        <span className="footer__title">랭킹</span>
      </div>
    </footer>
  );
};

export default Footer;
