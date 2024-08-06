import React from 'react';
import styles from '../Members.module.css';
import { Link } from 'react-router-dom';

const PurposeSelect = ({ purpose, setPurpose, setCompleteSelect }) => {
  return (
    <div className={styles.registerContainer + ' m-b-30'}>
      <div className={styles.registerTitle}>
        어떤 용도로
        <br />
        사용하시나요?
      </div>
      <div className={styles.registerPurposeContainer}>
        <div
          style={purpose === 'private' ? { background: '#aeaeae' } : {}}
          className={styles.registerPurposeButton}
          onClick={() => setPurpose('private')}
        >
          <span>개인</span>
          <img
            src="/img/private.png"
            alt="기업"
            className={styles.registerPurposeImg}
          />
        </div>
        <div
          style={purpose === 'company' ? { background: '#aeaeae' } : {}}
          className={styles.registerPurposeButton}
          onClick={() => setPurpose('company')}
        >
          <span>기업</span>
          <img
            src="/img/company.png"
            alt="기업"
            className={styles.registerPurposeImg}
          />
        </div>
      </div>
      <button
        className={styles.membersSubmitButton}
        type="button"
        onClick={() => setCompleteSelect(true)}
      >
        다음
      </button>
      <div className={styles.membersUtilityContainer}>
        <Link to="../login" className={styles.membersUtilityButton}>
          돌아가기
        </Link>
      </div>
    </div>
  );
};

export default PurposeSelect;
