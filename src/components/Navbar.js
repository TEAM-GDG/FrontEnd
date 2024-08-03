import React, { useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = ({ naviState }) => {
  let rankImg = useRef('/img/navIcon/inactive/rank.png');
  let insightImg = useRef('/img/navIcon/inactive/insight.png');
  let homeImg = useRef('/img/navIcon/inactive/home.png');
  let communityImg = useRef('/img/navIcon/inactive/community.png');
  let myPageImg = useRef('/img/navIcon/inactive/mypage.png');

  useEffect(() => {
    switch (naviState) {
      case 'rank':
        insightImg.current = '/img/navIcon/inactive/insight.png';
        homeImg.current = '/img/navIcon/inactive/home.png';
        communityImg.current = '/img/navIcon/inactive/community.png';
        rankImg.current = '/img/navIcon/active/rank.png';
        myPageImg.current = '/img/navIcon/inactive/mypage.png';
        break;

      case 'insight':
        insightImg.current = '/img/navIcon/active/insight.png';
        homeImg.current = '/img/navIcon/inactive/home.png';
        communityImg.current = '/img/navIcon/inactive/community.png';
        rankImg.current = '/img/navIcon/inactive/rank.png';
        myPageImg.current = '/img/navIcon/inactive/mypage.png';
        break;
      case '/':
        insightImg.current = '/img/navIcon/inactive/insight.png';
        homeImg.current = '/img/navIcon/active/home.png';
        communityImg.current = '/img/navIcon/inactive/community.png';
        rankImg.current = '/img/navIcon/inactive/rank.png';
        myPageImg.current = '/img/navIcon/inactive/mypage.png';
        break;
      case 'community':
        insightImg.current = '/img/navIcon/inactive/insight.png';
        homeImg.current = '/img/navIcon/inactive/home.png';
        communityImg.current = '/img/navIcon/active/community.png';
        rankImg.current = '/img/navIcon/inactive/rank.png';
        myPageImg.current = '/img/navIcon/inactive/mypage.png';
        break;
      case 'mypage':
        insightImg.current = '/img/navIcon/inactive/insight.png';
        homeImg.current = '/img/navIcon/inactive/home.png';
        communityImg.current = '/img/navIcon/inactive/community.png';
        rankImg.current = '/img/navIcon/inactive/rank.png';
        myPageImg.current = '/img/navIcon/active/mypage.png';
        break;
      default:
        insightImg.current = '/img/navIcon/inactive/insight.png';
        homeImg.current = '/img/navIcon/inactive/home.png';
        communityImg.current = '/img/navIcon/inactive/community.png';
        rankImg.current = '/img/navIcon/inactive/rank.png';
        myPageImg.current = '/img/navIcon/inactive/mypage.png';
        break;
    }
  }, [naviState, insightImg, homeImg, communityImg, rankImg, myPageImg]);

  return (
    <div className={styles.navbar}>
      <Link to="rank" className={styles.navbarContainer}>
        <img
          id="rank"
          className={styles.navbarButton}
          src={rankImg.current}
          alt="랭킹"
        />
        <span className={styles.navbarText}>랭킹</span>
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
      <Link to="mypage" className={styles.navbarContainer}>
        <img
          id="mypage"
          className={styles.navbarButton}
          src={myPageImg.current}
          alt="마이"
        />
        <span className={styles.navbarText}>마이</span>
      </Link>
    </div>
  );
};

export default Navbar;
