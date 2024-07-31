import React, { useState } from 'react';
import '../../../App.css';
import '../Members.css';

const FindIdPage = ({ handleChangePage }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setIsClicked(true);
  };

  return (
    <div className="container">
      <div className="membersContainer">
        <span className="findTitle">이메일 찾기</span>
        <div className="horizon" />
        <form className="membersForm">
          <input
            className="membersTextInput"
            type="text"
            id="name"
            placeholder="이름"
          />
          <div className="findAuthContainer">
            <input
              className="membersTextInput"
              type="tel"
              id="phone"
              placeholder="휴대폰 번호"
            />
            <button
              className="findAuthButton"
              type="button"
              onClick={e => handleClick(e)}
            >
              전송
            </button>
          </div>
          <div className="findAuthContainer">
            <input
              className="membersTextInput"
              type="text"
              id="verification_code"
              placeholder="인증번호 입력"
            />
            <button className="findAuthButton" type="button">
              확인
            </button>
          </div>
          <button className="membersSubmitButton" type="submit">
            이메일 찾기
          </button>
        </form>
        <div className="membersUtilityContainer">
          <a
            className="membersUtilityButton"
            href="membersLogin"
            onClick={e => handleChangePage(e, `membersLogin`)}
          >
            돌아가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindIdPage;
