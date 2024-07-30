import React from 'react';
import '../../../App.css';
import { styled } from 'styled-components';

const LoginPage = ({ handleChangePage }) => {
  return (
    <div className="container">
      <LoginContainer>
        <LoginTitle>GDG</LoginTitle>
        <AuthForm>
          <TextInput type="text" id="email" placeholder="이메일" />
          <TextInput type="password" id="pwd" placeholder="비밀번호" />
          <BoxInputContainer>
            <BoxInput type="checkbox" id="autologin" />
            <BoxInputLabel htmlFor="autologin">자동 로그인</BoxInputLabel>
          </BoxInputContainer>
          <SubmitButton type="submit">로그인</SubmitButton>
        </AuthForm>
        <UtilityContainer>
          <UtilityButton
            href="membersFindEmail"
            onClick={e => handleChangePage(e, `membersFindEmail`)}
          >
            이메일찾기
          </UtilityButton>
          |
          <UtilityButton
            href="membersFindPassword"
            onClick={e => handleChangePage(e, `membersFindPassword`)}
          >
            비밀번호찾기
          </UtilityButton>
          |<UtilityButton href="membersRegister">회원가입</UtilityButton>
        </UtilityContainer>
        <Horizon />
        소셜 계정으로 로그인
        <SNSLoginContainer>
          <SNSLoginLinkBox href="네이버로 가요">
            <SNSLoginLinkImage src="snsIcon/naverBtn.png" />
          </SNSLoginLinkBox>
          <SNSLoginLinkBox href="카카오로 가요">
            <SNSLoginLinkImage src="snsIcon/kakaoBtn.png" />
          </SNSLoginLinkBox>
          <SNSLoginLinkBox href="구글로 가요">
            <SNSLoginLinkImage src="snsIcon/googleBtn.png" />
          </SNSLoginLinkBox>
        </SNSLoginContainer>
      </LoginContainer>
    </div>
  );
};

export default LoginPage;

const LoginContainer = styled.div`
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

const LoginTitle = styled.span`
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

const BoxInputContainer = styled.div`
  width: 100%;
  margin: 2% auto 2% 0;
  font-family: 'NanumSquare';
`;

const BoxInput = styled.input`
  border-radius: 50%;
`;

const BoxInputLabel = styled.label`
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

const SubmitButton = styled.button`
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

const UtilityContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5% 0 5% 0;
  color: #bbbbbb;
  font-family: 'NanumSquare';
`;

const UtilityButton = styled.a`
  margin: 0 2% 0 2%;
  font-size: 13px;
  font-family: 'NanumSquare';
  color: #bbbbbb;

  @media (max-width: 425px) {
    font-size: 12px;
  }
  @media (max-width: 375px) {
    font-size: 11px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
  }
`;

const Horizon = styled.div`
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
  margin-bottom: 5%;
`;

const SNSLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2% 0 5% 0;
`;

const SNSLoginLinkBox = styled.a`
  margin: 0 2% 0 2%;
`;

const SNSLoginLinkImage = styled.img`
  width: 40px;
  height: 40px;
`;
