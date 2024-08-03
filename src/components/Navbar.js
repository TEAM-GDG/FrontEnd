import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ naviState }) => {
  let calImg = useRef('/img/navIcon/inactive/cal.png');
  let insightImg = useRef('/img/navIcon/inactive/insight.png');
  let homeImg = useRef('/img/navIcon/inactive/home.png');
  let communityImg = useRef('/img/navIcon/inactive/community.png');
  let rankImg = useRef('/img/navIcon/inactive/rank.png');

  useEffect(() => {
    switch (naviState) {
      case 'cal':
        calImg.current = '/img/navIcon/active/cal.png';
        insightImg.current = '/img/navIcon/inactive/insight.png';
        homeImg.current = '/img/navIcon/inactive/home.png';
        communityImg.current = '/img/navIcon/inactive/community.png';
        rankImg.current = '/img/navIcon/inactive/rank.png';
        break;
      case 'insight':
        calImg.current = '/img/navIcon/inactive/cal.png';
        insightImg.current = '/img/navIcon/active/insight.png';
        homeImg.current = '/img/navIcon/inactive/home.png';
        communityImg.current = '/img/navIcon/inactive/community.png';
        rankImg.current = '/img/navIcon/inactive/rank.png';
        break;
      case '/':
        calImg.current = '/img/navIcon/inactive/cal.png';
        insightImg.current = '/img/navIcon/inactive/insight.png';
        homeImg.current = '/img/navIcon/active/home.png';
        communityImg.current = '/img/navIcon/inactive/community.png';
        rankImg.current = '/img/navIcon/inactive/rank.png';
        break;
      case 'community':
        calImg.current = '/img/navIcon/inactive/cal.png';
        insightImg.current = '/img/navIcon/inactive/insight.png';
        homeImg.current = '/img/navIcon/inactive/home.png';
        communityImg.current = '/img/navIcon/active/community.png';
        rankImg.current = '/img/navIcon/inactive/rank.png';
        break;
      case 'rank':
        calImg.current = '/img/navIcon/inactive/cal.png';
        insightImg.current = '/img/navIcon/inactive/insight.png';
        homeImg.current = '/img/navIcon/inactive/home.png';
        communityImg.current = '/img/navIcon/inactive/community.png';
        rankImg.current = '/img/navIcon/active/rank.png';
        break;
      default:
        calImg.current = '/img/navIcon/inactive/cal.png';
        insightImg.current = '/img/navIcon/inactive/insight.png';
        homeImg.current = '/img/navIcon/inactive/home.png';
        communityImg.current = '/img/navIcon/inactive/community.png';
        rankImg.current = '/img/navIcon/inactive/rank.png';
        break;
    }
  }, [naviState, calImg, insightImg, homeImg, communityImg, rankImg]);

  return (
    <div className="navbar">
      <Link to="cal" className="navbar__box">
        <img
          id="cal"
          className="navbar__box__button"
          src={calImg.current}
          alt="캘린더"
        />
        <span className="navbar__box__text">챌린지</span>
      </Link>
      <Link to="insight" className="navbar__box">
        <img
          id="insight"
          className="navbar__box__button"
          src={insightImg.current}
          alt="통계"
        />
        <span className="navbar__box__text">통계</span>
      </Link>
      <Link to="/" className="navbar__box">
        <img
          id="home"
          className="navbar__box__button"
          src={homeImg.current}
          alt="홈"
        />
        <span className="navbar__box__text">홈</span>
      </Link>
      <Link to="community" className="navbar__box">
        <img
          id="community"
          className="navbar__box__button"
          src={communityImg.current}
          alt="커뮤니티"
        />
        <span className="navbar__box__text">커뮤니티</span>
      </Link>
      <Link to="rank" className="navbar__box">
        <img
          id="rank"
          className="navbar__box__button"
          src={rankImg.current}
          alt="랭킹"
        />
        <span className="navbar__box__text">랭킹</span>
      </Link>
    </div>
  );
};

export default Navbar;
