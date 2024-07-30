import React from 'react';
import '../../App.css';
import {
  LoginContainer,
  LoginTitle,
  AuthForm,
  TextInput,
  BoxInputContainer,
  BoxInput,
  BoxInputLabel,
  Button,
  UtilityContainer,
  UtilityButton,
  Horizon,
  SNSLoginContainer,
  SNSLoginLinkBox,
  SNSLoginLinkImage,
} from './styled';

const LoginPage = () => {
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
          <Button type="submit">로그인</Button>
        </AuthForm>
        <UtilityContainer>
          <UtilityButton>아이디찾기</UtilityButton> |
          <UtilityButton>비밀번호찾기</UtilityButton> |
          <UtilityButton>회원가입</UtilityButton>
        </UtilityContainer>
        <Horizon />
        SNS 간편 로그인
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
