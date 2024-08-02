import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ location }) => {
  const [isMembersPage, setIsMembersPage] = useState(false);
  const [isCommunityPage, setIsCommunityPage] = useState(false);

  React.useEffect(() => {
    setIsCommunityPage(location.pathname === '/community');
    setIsMembersPage(location.pathname.includes('/members'));
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header__points">
        {!isMembersPage && (
          <>
            <img
              className="header__points__img"
              src="/img/points.png"
              alt="points"
            />
            <span className="header__points__text">1,385,968</span>
          </>
        )}
      </div>
      <div className="header__title">
        <Link to="/">
          <img src="/img/logo.png" alt="logo" className="header__title__img" />
        </Link>
      </div>
      <div className="header__community__toggle">
        {isCommunityPage && (
          <Link to="community/write">
            <img
              style={{ width: `10px`, height: `10px` }}
              src="/img/communityIcon/search.png"
              alt="search"
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
