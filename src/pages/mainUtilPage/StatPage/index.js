import React from 'react';
import styles from './Stat.module.css';
import { Link } from 'react-router-dom';

const StatPage = () => {
  return (
    <div className="container">
      <div className={styles.iconContainer}>
        <img src="img/diary.png" className={styles.icon} />
      </div>
      <div className={styles.insightContainer}>
        <div className={styles.insight}>
          <span className={styles.insightTitle}>
            일별 감정 통계
            <hr />
          </span>
        </div>
        <div className={styles.insight}>
          <span className={styles.insightTitle}>
            월별 감정 통계
            <hr />
          </span>
        </div>
        <div className={styles.insight}>
          <span className={styles.insightTitle}>
            전체 감정 통계
            <hr />
          </span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="#" className={styles.button}>
          <span>나의 모든 감정 보기</span>
          <span> > </span>
        </Link>
        <Link to="#" className={styles.button}>
          <span>직종별 감정 분석</span>
          <span> > </span>
        </Link>
        <Link to="#" className={styles.button}>
          <span>전체 사용자 감정 분석</span>
          <span> > </span>
        </Link>
      </div>
    </div>
  );
};

export default StatPage;
