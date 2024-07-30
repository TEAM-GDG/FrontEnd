import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
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

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5%;
`;

export const LoginTitle = styled.span`
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

export const TextInput = styled.input`
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

export const BoxInputContainer = styled.div`
  width: 100%;
  margin: 2% auto 2% 0;
  font-family: 'NanumSquare';
`;

export const BoxInput = styled.input`
  border-radius: 50%;
`;

export const BoxInputLabel = styled.label`
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

export const Button = styled.button`
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

export const UtilityContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 5% 0 5% 0;
  color: #bbbbbb;
  font-family: 'NanumSquare';
`;

export const UtilityButton = styled.a`
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

export const Horizon = styled.div`
  width: 100%;
  border-bottom: 1px solid #bbbbbb;
  margin-bottom: 5%;
`;

export const SNSLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2% 0 5% 0;
`;

export const SNSLoginLinkBox = styled.a`
  margin: 0 2% 0 2%;
`;

export const SNSLoginLinkImage = styled.img`
  width: 40px;
  height: 40px;
`;
