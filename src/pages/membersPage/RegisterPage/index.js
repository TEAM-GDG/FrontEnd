import React, { useEffect, useState } from 'react';
import styles from '../Members.module.css';

const RegisterPage = () => {
  const [yongdo, setYongdo] = useState('');

  useEffect(() => {
    console.log(yongdo);
  }, [yongdo]);

  return (
    <div className="container">
      <div className={styles.registerContainer}>
        <div className={styles.registerTitle}>어떤 용도로 사용하시나요?</div>
        <div>
          <div className={styles.registerYongdoSelect}>
            <div
              className={styles.registerYongdoButton}
              onClick={() => setYongdo('private')}
            >
              개인
            </div>
            <div
              className={styles.registerYongdoButton}
              onClick={() => setYongdo('company')}
            >
              기업
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
