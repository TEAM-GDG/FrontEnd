import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ naviState }) => {
  let calImg = '/img/navIcon/inactive/cal.png';
  let insightImg = '/img/navIcon/inactive/insight.png';
  let homeImg = '/img/navIcon/inactive/home.png';
  let communityImg = '/img/navIcon/inactive/community.png';
  let rankImg = '/img/navIcon/inactive/rank.png';

  useEffect(() => {
    switch (naviState) {
      case 'cal':
        calImg = '/img/navIcon/active/cal.png';
        insightImg = '/img/navIcon/inactive/insight.png';
        homeImg = '/img/navIcon/inactive/home.png';
        communityImg = '/img/navIcon/inactive/community.png';
        rankImg = '/img/navIcon/inactive/rank.png';
        break;
      case 'insight':
        calImg = '/img/navIcon/inactive/cal.png';
        insightImg = '/img/navIcon/active/insight.png';
        homeImg = '/img/navIcon/inactive/home.png';
        communityImg = '/img/navIcon/inactive/community.png';
        rankImg = '/img/navIcon/inactive/rank.png';
        break;
      case '/':
        calImg = '/img/navIcon/inactive/cal.png';
        insightImg = '/img/navIcon/inactive/insight.png';
        homeImg = '/img/navIcon/active/home.png';
        communityImg = '/img/navIcon/inactive/community.png';
        rankImg = '/img/navIcon/inactive/rank.png';
        break;
      case 'community':
        calImg = '/img/navIcon/inactive/cal.png';
        insightImg = '/img/navIcon/inactive/insight.png';
        homeImg = '/img/navIcon/inactive/home.png';
        communityImg = '/img/navIcon/active/community.png';
        rankImg = '/img/navIcon/inactive/rank.png';
        break;
      case 'rank':
        calImg = '/img/navIcon/inactive/cal.png';
        insightImg = '/img/navIcon/inactive/insight.png';
        homeImg = '/img/navIcon/inactive/home.png';
        communityImg = '/img/navIcon/inactive/community.png';
        rankImg = '/img/navIcon/active/rank.png';
        break;
      default:
        calImg = '/img/navIcon/inactive/cal.png';
        insightImg = '/img/navIcon/inactive/insight.png';
        homeImg = '/img/navIcon/inactive/home.png';
        communityImg = '/img/navIcon/inactive/community.png';
        rankImg = '/img/navIcon/inactive/rank.png';
        break;
    }
  }, [naviState, calImg, insightImg, homeImg, communityImg, rankImg]);

  return (
    <div className="navbar">
      <Link to="cal" className="navbar__box">
        <img
          id="cal"
          className="navbar__box__button"
          src={calImg}
          alt="캘린더"
        />
        <span className="navbar__box__text">챌린지</span>
      </Link>
      <Link to="insight" className="navbar__box">
        <img
          id="insight"
          className="navbar__box__button"
          src={insightImg}
          alt="통계"
        />
        <span className="navbar__box__text">통계</span>
      </Link>
      <Link to="/" className="navbar__box">
        <img id="home" className="navbar__box__button" src={homeImg} alt="홈" />
        <span className="navbar__box__text">홈</span>
      </Link>
      <Link to="community" className="navbar__box">
        <img
          id="community"
          className="navbar__box__button"
          src={communityImg}
          alt="커뮤니티"
        />
        <span className="navbar__box__text">커뮤니티</span>
      </Link>
      <Link to="rank" className="navbar__box">
        <img
          id="rank"
          className="navbar__box__button"
          src={rankImg}
          alt="랭킹"
        />
        <span className="navbar__box__text">랭킹</span>
      </Link>
    </div>
  );
};

export default Navbar;
