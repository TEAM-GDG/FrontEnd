import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ naviState, handleChangePage }) => {
  useEffect(() => {
    switch (naviState) {
      case 'cal':
        document.getElementById('cal').src = 'navIcon/active/cal.png';
        document.getElementById('insight').src = 'navIcon/inactive/insight.png';
        document.getElementById('home').src = 'navIcon/inactive/home.png';
        document.getElementById('community').src =
          'navIcon/inactive/community.png';
        document.getElementById('rank').src = 'navIcon/inactive/rank.png';
        break;
      case 'insight':
        document.getElementById('cal').src = 'navIcon/inactive/cal.png';
        document.getElementById('insight').src = 'navIcon/active/insight.png';
        document.getElementById('home').src = 'navIcon/inactive/home.png';
        document.getElementById('community').src =
          'navIcon/inactive/community.png';
        document.getElementById('rank').src = 'navIcon/inactive/rank.png';
        break;
      case '/':
        document.getElementById('cal').src = 'navIcon/inactive/cal.png';
        document.getElementById('insight').src = 'navIcon/inactive/insight.png';
        document.getElementById('home').src = 'navIcon/active/home.png';
        document.getElementById('community').src =
          'navIcon/inactive/community.png';
        document.getElementById('rank').src = 'navIcon/inactive/rank.png';
        break;
      case 'community':
        document.getElementById('cal').src = 'navIcon/inactive/cal.png';
        document.getElementById('insight').src = 'navIcon/inactive/insight.png';
        document.getElementById('home').src = 'navIcon/inactive/home.png';
        document.getElementById('community').src =
          'navIcon/active/community.png';
        document.getElementById('rank').src = 'navIcon/inactive/rank.png';
        break;
      case 'rank':
        document.getElementById('cal').src = 'navIcon/inactive/cal.png';
        document.getElementById('insight').src = 'navIcon/inactive/insight.png';
        document.getElementById('home').src = 'navIcon/inactive/home.png';
        document.getElementById('community').src =
          'navIcon/inactive/community.png';
        document.getElementById('rank').src = 'navIcon/active/rank.png';
        break;
      default:
        document.getElementById('cal').src = 'navIcon/inactive/cal.png';
        document.getElementById('insight').src = 'navIcon/inactive/insight.png';
        document.getElementById('home').src = 'navIcon/inactive/home.png';
        document.getElementById('community').src =
          'navIcon/inactive/community.png';
        document.getElementById('rank').src = 'navIcon/inactive/rank.png';
        break;
    }
  }, [naviState]);

  return (
    <div className="navbar">
      <a
        href="cal"
        className="navbar__box"
        onClick={e => handleChangePage(e, `cal`)}
      >
        <img
          id="cal"
          className="navbar__box__button"
          src="navIcon/inactive/cal.png"
          alt="캘린더"
        />
        <span className="navbar__box__text">캘린더</span>
      </a>
      <a
        href="insight"
        className="navbar__box"
        onClick={e => handleChangePage(e, `insight`)}
      >
        <img
          id="insight"
          className="navbar__box__button"
          src="navIcon/inactive/insight.png"
          alt="통계"
        />
        <span className="navbar__box__text">통계</span>
      </a>
      <a
        href="/"
        className="navbar__box"
        onClick={e => handleChangePage(e, `/`)}
      >
        <img
          id="home"
          className="navbar__box__button"
          src="navIcon/inactive/home.png"
          alt="홈"
        />
        <span className="navbar__box__text">홈</span>
      </a>
      <a
        href="community"
        className="navbar__box"
        onClick={e => handleChangePage(e, `community`)}
      >
        <img
          id="community"
          className="navbar__box__button"
          src="navIcon/inactive/community.png"
          alt="커뮤니티"
        />
        <span className="navbar__box__text">커뮤니티</span>
      </a>
      <a
        href="rank"
        className="navbar__box"
        onClick={e => handleChangePage(e, `rank`)}
      >
        <img
          id="rank"
          className="navbar__box__button"
          src="navIcon/inactive/rank.png"
          alt="랭킹"
        />
        <span className="navbar__box__text">랭킹</span>
      </a>
    </div>
  );
};

export default Navbar;
