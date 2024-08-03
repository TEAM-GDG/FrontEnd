import React from 'react';
import styles from '../Members.module.css';
import { Link } from 'react-router-dom';

const RegisterMain = ({ purpose }) => {
  return (
    <div className={styles.registerContainer + ' m-b-30'}>
      <div className={styles.registerTitle}>
        감정을 공유하러
        <br />
        같이 가볼까요?
      </div>
      <form className={styles.membersForm}>
        <input
          className={styles.membersTextInput}
          type="text"
          id="name"
          placeholder="이름"
        />
        <input
          className={styles.membersTextInput}
          type="text"
          id="nickname"
          placeholder="닉네임"
        />
        <input
          className={styles.membersTextInput}
          type="text"
          id="email"
          placeholder="이메일"
        />
        <input
          className={styles.membersTextInput}
          type="password"
          id="pwd"
          placeholder="비밀번호"
        />
        <input
          className={styles.membersTextInput}
          type="text"
          id="phone"
          placeholder="휴대폰번호"
        />
        <input
          className={styles.membersTextInput}
          type="text"
          id="birth"
          placeholder="생년월일 (yyyy-MM-dd 형식을 지켜주세요.)"
        />
        {purpose === 'company' ? (
          <input
            className={styles.membersTextInput}
            type="text"
            id="company"
            placeholder="회사명"
          />
        ) : null}
        <button className={styles.membersSubmitButton} type="submit">
          회원가입
        </button>
      </form>
      <div className={styles.membersUtilityContainer}>
        <Link to="../login" className={styles.membersUtilityButton}>
          돌아가기
        </Link>
      </div>
    </div>
  );
};

export default RegisterMain;
