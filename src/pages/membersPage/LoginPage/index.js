import React from 'react';
import '../../../App.css';
import '../Members.css';

const LoginPage = ({ handleChangePage }) => {
  return (
    <div className="container">
      <div className="membersContainer">
        <span className="loginTitle">GDG</span>
        <form className="membersForm">
          <input
            className="membersTextInput"
            type="text"
            id="email"
            placeholder="이메일"
          />
          <input
            className="membersTextInput"
            type="password"
            id="pwd"
            placeholder="비밀번호"
          />
          <div className="loginBoxInputContainer">
            <input className="loginBoxInput" type="checkbox" id="autologin" />
            <label className="loginBoxInputLabel" htmlFor="autologin">
              자동 로그인
            </label>
          </div>
          <button className="membersSubmitButton" type="submit">
            로그인
          </button>
        </form>
        <div className="membersUtilityContainer">
          <a
            className="membersUtilityButton"
            href="membersFindEmail"
            onClick={e => handleChangePage(e, `membersFindEmail`)}
          >
            이메일찾기
          </a>
          |
          <a
            className="membersUtilityButton"
            href="membersFindPassword"
            onClick={e => handleChangePage(e, `membersFindPassword`)}
          >
            비밀번호찾기
          </a>
          |
          <a
            className="membersUtilityButton"
            href="membersRegister"
            onClick={e => handleChangePage(e, `membersRegister`)}
          >
            회원가입
          </a>
        </div>
        <div className="horizon" />
        소셜 계정으로 로그인
        <div className="loginSocialContainer">
          <a className="loginSocialBox" href="네이버로 가요">
            <img
              className="loginSocialImage"
              src="snsIcon/naverBtn.png"
              alt="네이버"
            />
          </a>
          <a className="loginSocialBox" href="카카오로 가요">
            <img
              className="loginSocialImage"
              src="snsIcon/kakaoBtn.png"
              alt="카카오"
            />
          </a>
          <a className="loginSocialBox" href="구글로 가요">
            <img
              className="loginSocialImage"
              src="snsIcon/googleBtn.png"
              alt="구글"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
