import React from 'react';
import '../../App.css';
import styled from 'styled-components';

const FindIdPage = () => {
  return (
    <div className="container">
      <FindIdContainer>
        <FindIdTitle>아이디 찾기</FindIdTitle>
        <Horizon />
        <AuthForm>
          <TextInput type="text" id="email" placeholder="이메일" />
          <TextInput type="password" id="pwd" placeholder="비밀번호" />
          <Button type="submit">로그인</Button>
        </AuthForm>
      </FindIdContainer>
    </div>
  );
};

export default FindIdPage;

const FindIdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  font-family: 'NanumSquare';
  font-size: 15px;
  color: #bbbbbb;

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

const FindIdTitle = styled.span`
  font-family: 'yg-Jalnan';
  font-size: 50px;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #f4f5ff;
  -webkit-text-stroke: 3px #678464;

  @media (max-width: 425px) {
    font-size: 45px;
  }
  @media (max-width: 375px) {
    font-size: 40px;
  }
  @media (max-width: 320px) {
    font-size: 35px;
  }
`;

const Horizon = styled.div`
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
  margin-bottom: 5%;
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
  width: 100%;
  height: 40px;
  margin: 2% 0 2% 0;
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
