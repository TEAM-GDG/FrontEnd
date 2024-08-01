import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ naviState }) => {
  const cal = document.getElementById('cal');
  const insight = document.getElementById('insight');
  const home = document.getElementById('home');
  const community = document.getElementById('community');
  const rank = document.getElementById('rank');

  useEffect(() => {
    switch (naviState) {
      case 'cal':
        cal.src = 'img/navIcon/active/cal.png';
        insight.src = 'img/navIcon/inactive/insight.png';
        home.src = 'img/navIcon/inactive/home.png';
        community.src = 'img/navIcon/inactive/community.png';
        rank.src = 'img/navIcon/inactive/rank.png';
        break;
      case 'insight':
        cal.src = 'img/navIcon/inactive/cal.png';
        insight.src = 'img/navIcon/active/insight.png';
        home.src = 'img/navIcon/inactive/home.png';
        community.src = 'img/navIcon/inactive/community.png';
        rank.src = 'img/navIcon/inactive/rank.png';
        break;
      case '/':
        cal.src = 'img/navIcon/inactive/cal.png';
        insight.src = 'img/navIcon/inactive/insight.png';
        home.src = 'img/navIcon/active/home.png';
        community.src = 'img/navIcon/inactive/community.png';
        rank.src = 'img/navIcon/inactive/rank.png';
        break;
      case 'community':
        cal.src = 'img/navIcon/inactive/cal.png';
        insight.src = 'img/navIcon/inactive/insight.png';
        home.src = 'img/navIcon/inactive/home.png';
        community.src = 'img/navIcon/active/community.png';
        rank.src = 'img/navIcon/inactive/rank.png';
        break;
      case 'rank':
        cal.src = 'img/navIcon/inactive/cal.png';
        insight.src = 'img/navIcon/inactive/insight.png';
        home.src = 'img/navIcon/inactive/home.png';
        community.src = 'img/navIcon/inactive/community.png';
        rank.src = 'img/navIcon/active/rank.png';
        break;
      default:
        cal.src = 'img/navIcon/inactive/cal.png';
        insight.src = 'img/navIcon/inactive/insight.png';
        home.src = 'img/navIcon/inactive/home.png';
        community.src = 'img/navIcon/inactive/community.png';
        rank.src = 'img/navIcon/inactive/rank.png';
        break;
    }
  }, [naviState, cal, insight, home, community, rank]);

  return (
    <div className="navbar">
      <Link to="cal" className="navbar__box">
        <img
          id="cal"
          className="navbar__box__button"
          src="img/navIcon/inactive/cal.png"
          alt="캘린더"
        />
        <span className="navbar__box__text">챌린지</span>
      </Link>
      <Link to="insight" className="navbar__box">
        <img
          id="insight"
          className="navbar__box__button"
          src="img/navIcon/inactive/insight.png"
          alt="통계"
        />
        <span className="navbar__box__text">통계</span>
      </Link>
      <Link to="/" className="navbar__box">
        <img
          id="home"
          className="navbar__box__button"
          src="img/navIcon/inactive/home.png"
          alt="홈"
        />
        <span className="navbar__box__text">홈</span>
      </Link>
      <Link to="community" className="navbar__box">
        <img
          id="community"
          className="navbar__box__button"
          src="img/navIcon/inactive/community.png"
          alt="커뮤니티"
        />
        <span className="navbar__box__text">커뮤니티</span>
      </Link>
      <Link to="rank" className="navbar__box">
        <img
          id="rank"
          className="navbar__box__button"
          src="img/navIcon/inactive/rank.png"
          alt="랭킹"
        />
        <span className="navbar__box__text">랭킹</span>
      </Link>
    </div>
  );
};

export default Navbar;
