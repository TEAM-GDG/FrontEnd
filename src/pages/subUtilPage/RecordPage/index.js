import React, { useState } from 'react';
import EmotionModal from '../../../components/EmotionModal';
import styles from './Record.module.css';

const RecordPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // const handleClick = () => {
  //   setModalOpen(true);
  // };

  return (
    <div className="container">
      <div className={styles.iconContainer}>
        <img src="/img/emotion.png" className={styles.icon} alt="감정" />
      </div>
      <div className={styles.recordContainer}>
        <span className={styles.recordTitle}>
          지금, 당신의 기분은 어떤가요?
        </span>
        <div className={styles.recordDetail}>
          <span className={styles.recordCount}>#12번째 질문</span>
          <span className={styles.recordDate}>2024.08.06</span>
        </div>
      </div>
      <div className={styles.userInputContainer}>
        행복지수 100% <br />
        오늘 하루는 정말이지 사랑이 가득한 하루였다. <br />
        부모님께 안부 카톡도 남기고 <br />
        남자친구와 저녁 데이트도 하고 <br />
        회사에서는 대리님께 칭찬도 듣고 {'><'} <br />
        매일매일이 오늘만 같았으면 좋겠다!
      </div>
      {modalOpen && <EmotionModal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default RecordPage;
