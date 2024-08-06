import React from 'react';
import styles from '../Members.module.css';
import { Link } from 'react-router-dom';

const ChangePwdPage = () => {
  const handleChangePwd = e => {
    e.preventDefault();
    alert('뿡!');
  };

  return (
    <div className="container">
      <div className={styles.membersContainer}>
        <span className={styles.findTitle}>비밀번호 재설정</span>
        <div className="horizon" />
        <form className={styles.membersForm}>
          <input
            className={styles.membersTextInput}
            type="password"
            id="new_password"
            placeholder="새 비밀번호"
          />
          <input
            className={styles.membersTextInput}
            type="password"
            id="confirm_password"
            placeholder="비밀번호 확인"
          />
          <button
            className={styles.membersSubmitButton}
            type="button"
            onClick={e => {
              handleChangePwd(e);
            }}
          >
            비밀번호 재설정
          </button>
        </form>
        <div className={styles.membersUtilityContainer}>
          <Link to="어디로감" className={styles.membersUtilityButton}>
            돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChangePwdPage;
