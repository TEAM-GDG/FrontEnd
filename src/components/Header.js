import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ location }) => {
  const [isCommunityPage, setIsCommunityPage] = useState(false);

  React.useEffect(() => {
    if (location.pathname === '/community') {
      setIsCommunityPage(true);
    } else {
      setIsCommunityPage(false);
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header__points">
        <img
          className="header__points__img"
          src="img/points.png"
          alt="points"
        />
        <span className="header__points__text">1,385,968</span>
      </div>
      <div className="header__title">
        <Link to="/" className="header__title__text">
          app name
        </Link>
      </div>
      <div className="header__community__toggle">
        {isCommunityPage && (
          <Link to="community/write">
            <img
              style={{ width: `10px`, height: `10px` }}
              src="img/communityIcon/search.png"
              alt="search"
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
