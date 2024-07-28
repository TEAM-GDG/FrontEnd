import React from 'react';
import '../../App.css';
import styled from 'styled-components';

const MainPage = ({ handleChangePage }) => {
  return (
    <div className="container">
      <TopInfo>
        <Nickname>잠많은시금치</Nickname>
        <RecordTime>감정 기록 n일째</RecordTime>
      </TopInfo>
      <EmotionContainer>
        <Heart>
          <HeartInText>
            감정표현
            <br />
            58%
          </HeartInText>
        </Heart>
        <EmotionText
          href="howdoyoufeel"
          onClick={e => handleChangePage(e, `howdoyoufeel`)}
        >
          지금, 당신의 기분은 어떤가요? <br />
          <small>이곳을 클릭하여 기록해보세요.</small>
        </EmotionText>
      </EmotionContainer>
    </div>
  );
};

export default MainPage;

const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 6%;
  margin-bottom: 6%;
`;

const Nickname = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: auto;
  margin-right: 2%;

  @media (max-width: 425px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
  }
`;

const RecordTime = styled.span`
  font-size: 25px;
  margin-left: auto;
  margin-right: 2%;

  @media (max-width: 425px) {
    font-size: 23px;
  }
  @meida (max-width: 320px) {
    font-size: 21px;
  }
`;

const EmotionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 12%;
  margin-bottom: 6%;
`;

const Heart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  height: 150px;
  background: rgba(210, 205, 194, 1);
  box-shadow: 5px 1px 4px 0 rgba(0, 0, 0, 0.25);
  transform: rotate(45deg);

  &::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    left: -50%;
    border-radius: 50%;
    background-color: rgba(210, 205, 194, 1);

    @media (max-width: 425px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 320px) {
      width: 50px;
      height: 50px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    top: -50%;
    border-radius: 50%;
    background-color: rgba(210, 205, 194, 1);

    @media (max-width: 425px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 320px) {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 425px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 320px) {
    width: 50px;
    height: 50px;
  }
`;

const HeartInText = styled.div`
  z-index: 5;
  font-size: 45px;
  text-align: center;
  transform: rotate(-45deg);

  @media (max-width: 425px) {
    font-size: 30px;
  }

  @media (max-width: 320px) {
    font-size: 25px;
  }
`;

const EmotionText = styled.a`
  width: 100%;
  margin-top: 10%;
  margin-bottom: 10%;
  text-align: center;
  font-size: 25px;

  @media (max-width: 425px) {
    font-size: 23px;
  }

  @media (max-width: 320px) {
    font-size: 21px;
  }
`;
