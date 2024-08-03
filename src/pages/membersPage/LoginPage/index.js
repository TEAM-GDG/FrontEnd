import React from 'react';
import styles from '../Members.module.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="container">
      <div className={styles.membersContainer}>
        <img className={styles.loginTitle} src="/img/logo.png" alt="로고" />
        <form className={styles.membersForm}>
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
          <div className={styles.loginBoxInputContainer}>
            <input
              className={styles.loginBoxInput}
              type="checkbox"
              id="autologin"
            />
            <label className={styles.loginBoxInputLabel} htmlFor="autologin">
              자동 로그인
            </label>
          </div>
          <button className={styles.membersSubmitButton} type="submit">
            로그인
          </button>
        </form>
        <div className={styles.membersUtilityContainer}>
          <Link to="../findemail" className={styles.membersUtilityButton}>
            이메일찾기
          </Link>
          |
          <Link to="../findpassword" className={styles.membersUtilityButton}>
            비밀번호찾기
          </Link>
          |
          <Link to="../register" className={styles.membersUtilityButton}>
            회원가입
          </Link>
        </div>
        <div className="horizon" />
        소셜 계정으로 로그인
        <div className={styles.loginSocialContainer}>
          <Link to="네이버로가요" className={styles.loginSocialBox}>
            <img
              className={styles.loginSocialImage}
              src="/img/snsIcon/naverBtn.png"
              alt="네이버"
            />
          </Link>
          <Link to="카카오로가요" className={styles.loginSocialBox}>
            <img
              className={styles.loginSocialImage}
              src="/img/snsIcon/kakaoBtn.png"
              alt="카카오"
            />
          </Link>
          <Link to="구글로가요" className={styles.loginSocialBox}>
            <img
              className={styles.loginSocialImage}
              src="/img/snsIcon/googleBtn.png"
              alt="구글"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
