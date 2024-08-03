import React, { useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
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
    <div className={styles.navbar}>
      <Link to="cal" className={styles.navbarContainer}>
        <img
          id="cal"
          className={styles.navbarButton}
          src={calImg.current}
          alt="캘린더"
        />
        <span className={styles.navbarText}>챌린지</span>
      </Link>
      <Link to="insight" className={styles.navbarContainer}>
        <img
          id="insight"
          className={styles.navbarButton}
          src={insightImg.current}
          alt="통계"
        />
        <span className={styles.navbarText}>통계</span>
      </Link>
      <Link to="/" className={styles.navbarContainer}>
        <img
          id="home"
          className={styles.navbarButton}
          src={homeImg.current}
          alt="홈"
        />
        <span className={styles.navbarText}>홈</span>
      </Link>
      <Link to="community" className={styles.navbarContainer}>
        <img
          id="community"
          className={styles.navbarButton}
          src={communityImg.current}
          alt="커뮤니티"
        />
        <span className={styles.navbarText}>커뮤니티</span>
      </Link>
      <Link to="rank" className={styles.navbarContainer}>
        <img
          id="rank"
          className={styles.navbarButton}
          src={rankImg.current}
          alt="랭킹"
        />
        <span className={styles.navbarText}>랭킹</span>
      </Link>
    </div>
  );
};

export default Navbar;
