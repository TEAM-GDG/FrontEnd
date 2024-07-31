import React from 'react';
import '../../../App.css';
import '../Members.css';

const ChangePwdPage = ({ handleChangePage }) => {
  const handleChangePwd = e => {
    e.preventDefault();
    alert('뿡!');
  };

  return (
    <div className="container">
      <div className="membersContainer">
        <span className="findTitle">비밀번호 재설정</span>
        <div className="horizon" />
        <form className="membersForm">
          <input
            className="membersTextInput"
            type="password"
            id="new_password"
            placeholder="새 비밀번호"
          />
          <input
            className="membersTextInput"
            type="password"
            id="confirm_password"
            placeholder="비밀번호 확인"
          />
          <button
            className="membersSubmitButton"
            type="button"
            onClick={e => {
              handleChangePwd(e);
            }}
          >
            비밀번호 재설정
          </button>
        </form>
        <div className="membersUtilityContainer">
          <a
            className="membersUtilityButton"
            href="#"
            onClick={e => handleChangePage(e, `어디로감?`)}
          >
            돌아가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChangePwdPage;
