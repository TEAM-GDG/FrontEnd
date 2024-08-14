import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ location }) => {
  const [isCommunityPage, setIsCommunityPage] = useState(false);
  const [isWritePage, setIsWritePage] = useState(false);

  React.useEffect(() => {
    setIsCommunityPage(location.pathname === '/community');
    setIsWritePage(location.pathname === '/community/write');
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.headerPointsContainer}>
        <img
          className={styles.headerPointsImg}
          src="/img/points.png"
          alt="points"
        />
        <span className={styles.headerPointsText}>1,385,968</span>
      </div>
      <div className={styles.headerTitleContainer}>
        <Link to="/">
          <img
            src="/img/logo1.png"
            alt="logo"
            className={styles.headerTitleImg}
          />
        </Link>
      </div>
      <div className={styles.headerCommunityContainer}>
        {isCommunityPage && (
          <Link
            to="community/search"
            className={styles.headerCommunityImgContainer}
          >
            <img
              src="/img/communityIcon/search.png"
              alt="search"
              className={styles.headerCommunityImg}
            />
          </Link>
        )}
        {(isCommunityPage || isWritePage) && (
          <Link
            to={isWritePage ? '처리해줘백엔드에몽' : '/community/write'}
            className={styles.headerCommunityImgContainer}
          >
            <img
              src="/img/communityIcon/write.png"
              alt="write"
              className={styles.headerCommunityImg}
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
