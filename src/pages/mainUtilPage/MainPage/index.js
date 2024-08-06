import React from 'react';
import styles from './Main.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const isLogin = useSelector(state => state.isLogin);

  return (
    <div className="container">
      <div className={styles.topInfo}>
        <Link
          to={isLogin ? 'members/username' : 'members/login'}
          className={styles.link}
        >
          <img
            src="/img/profile.png"
            className={styles.profileImage}
            alt="프로필사진"
          />
          <div
            className={styles.nickname}
            style={
              isLogin
                ? { color: `black` }
                : { color: `blue`, textDecoration: `underline` }
            }
          >
            로그인이 필요합니다
          </div>
        </Link>
        <div className={styles.recordTimeText}>
          감정 기록 <span className={styles.recordTimeTextDate}>486</span>일째
        </div>
      </div>
      <div className={styles.emotionContainer}>
        <div className={styles.heart}>
          <span className={styles.heartInText}>감정표현</span>
          <span className={styles.heartInTextPercent}>100%</span>
        </div>
        <Link to="status/record" className={styles.emotionTextContainer}>
          <span className={styles.emotionText}>
            지금, 당신의 기분은 어떤가요?
          </span>
          <span className={styles.emotionSmallText}>
            이곳을 클릭하여 기록해보세요 :)
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
