import React from 'react';
import styles from './CommunityWrite.module.css';

const CommunityWritePage = () => {
  return (
    <div className="container">
      <div className={styles.writeContainer + ' m-b-30'}>
        <div className={styles.writeDetailContainer}>
          <input
            className={styles.writeTitle}
            placeholder="제목을 입력하세요"
          />
          <textarea
            className={styles.writeContent}
            placeholder="자유롭게 이야기를 나눠보세요"
          />
        </div>
        <div className={styles.write} />
      </div>
    </div>
  );
};

export default CommunityWritePage;
