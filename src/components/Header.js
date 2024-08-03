import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ location }) => {
  const [isCommunityPage, setIsCommunityPage] = useState(false);

  React.useEffect(() => {
    setIsCommunityPage(location.pathname === '/community');
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
            src="/img/logo.png"
            alt="logo"
            className={styles.headerTitleImg}
          />
        </Link>
      </div>
      <div className={styles.headerCommunityContainer}>
        {isCommunityPage && (
          <>
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
            <Link
              to="community/write"
              className={styles.headerCommunityImgContainer}
            >
              <img
                src="/img/communityIcon/write.png"
                alt="write"
                className={styles.headerCommunityImg}
              />
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
