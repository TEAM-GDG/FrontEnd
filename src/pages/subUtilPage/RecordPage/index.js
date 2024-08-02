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
          오늘 당신의 하루는 어떠셨나요?
        </span>
        <div className={styles.recordDetail}>
          <span className={styles.recordCount}>#n번째 질문</span>
          <span className={styles.recordDate}>0000.00.00</span>
        </div>
      </div>
      <div className={styles.userInputContainer}>
        이곳을 클릭하여 오늘 있었던 일을 적어주세요.
      </div>
      {modalOpen && <EmotionModal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default RecordPage;
