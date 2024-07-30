import React, { useState } from 'react';
import '../../../App.css';
import styled from 'styled-components';

const FindPwdPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setIsClicked(true);
  };

  return (
    <div className="container">
      <FindPwdContainer>
        <FindPwdTitle>비밀번호 찾기</FindPwdTitle>
        <Horizon />
        <AuthForm>
          <TextInput type="text" id="email" placeholder="이름" />
          <TextInput type="text" id="pwd" placeholder="아이디" />
          <TextAndButtonContainer>
            <TextInput type="tel" id="email" placeholder="휴대폰 번호" />
            <Button type="button" onClick={e => handleClick(e)}>
              전송
            </Button>
          </TextAndButtonContainer>
          {isClicked && (
            <TextAndButtonContainer>
              <TextInput type="text" id="email" placeholder="인증번호 입력" />
              <Button type="button">확인</Button>
            </TextAndButtonContainer>
          )}
          <SubmitButton type="submit">비밀번호 찾기</SubmitButton>
        </AuthForm>
      </FindPwdContainer>
    </div>
  );
};

export default FindPwdPage;

const FindPwdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  font-size: 15px;
  margin-bottom: 50%;

  @media (max-width: 425px) {
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 13px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5%;
`;

const FindPwdTitle = styled.span`
  font-size: 23px;
  margin-top: 8%;
  margin-bottom: 10%;

  @media (max-width: 425px) {
    font-size: 22px;
  }
  @media (max-width: 375px) {
    font-size: 21px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

const Horizon = styled.div`
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
  margin-bottom: 5%;
`;

const TextAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TextInput = styled.input`
  width: 98%;
  height: 40px;
  margin: 2% 0 2% 0;
  padding-left: 2%;
  border-radius: 2px;
  border-style: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: 'NanumSquare';
  font-size: 15px;

  @media (max-width: 425px) {
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 13px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  width: 40%;
  height: 40px;
  margin: 2% 0 2% 2%;
  border-radius: 2px;
  border-style: none;
  background-color: #fff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: 'NanumSquare';
  color: #bbbbbb;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  margin: 11% 0 2% 0;
  border-radius: 2px;
  border-style: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: #adc3a5;
  font-family: 'NanumSquare';
  font-size: 15px;
  color: #fff;

  @media (max-width: 425px) {
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 13px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
