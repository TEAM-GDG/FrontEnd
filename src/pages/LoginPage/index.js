import React from 'react';
import '../../App.css';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <div className="container">
      <LoginContainer>
        <LoginTitle>GDG</LoginTitle>
        <AuthForm>
          <Input type="text" id="email" placeholder="아이디" />
          <Input type="password" id="pwd" placeholder="비밀번호" />
        </AuthForm>
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
  width: 100%;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30%;
`;

const LoginTitle = styled.span`
  font-family: 'yg-Jalnan';
  font-size: 50px;
  text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #f4f5ff;
  -webkit-text-stroke: 3px #678464;
`;

const Input = styled.input`
  width: 88%;
  height: 50px;
  margin: 2% 0 2% 0;
  padding-left: 2%;
  border-radius: 5px;
  border-style: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: 'NanumBarunpen';
  font-size: 15px;
`;
