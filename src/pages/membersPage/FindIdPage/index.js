import React from 'react';
import '../../../App.css';
import styles from '../Members.module.css';
import { Link } from 'react-router-dom';

const FindIdPage = () => {
  // const [isClicked, setIsClicked] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    //   setIsClicked(true);
  };

  return (
    <div className="container">
      <div className={styles.membersContainer}>
        <span className={styles.findTitle}>이메일 찾기</span>
        <div className="horizon" />
        <form className={styles.membersForm}>
          <input
            className={styles.membersTextInput}
            type="text"
            id="name"
            placeholder="이름"
          />
          <div className={styles.findAuthContainer}>
            <input
              className={styles.membersTextInput}
              type="tel"
              id="phone"
              placeholder="휴대폰 번호"
            />
            <button
              className={styles.findAuthButton}
              type="button"
              onClick={e => handleClick(e)}
            >
              전송
            </button>
          </div>
          <div className={styles.findAuthContainer}>
            <input
              className={styles.membersTextInput}
              type="text"
              id="verification_code"
              placeholder="인증번호 입력"
            />
            <button className={styles.findAuthButton} type="button">
              확인
            </button>
          </div>
          <button className={styles.membersSubmitButton} type="submit">
            이메일 찾기
          </button>
        </form>
        <div className={styles.membersUtilityContainer}>
          <Link to="../login" className={styles.membersUtilityButton}>
            돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindIdPage;
