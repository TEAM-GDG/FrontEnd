import React from 'react';
import '../../../App.css';
import styled from 'styled-components';

const MainPage = ({ handleChangePage }) => {
  return (
    <div className="container">
      <TopInfo>
        <Nickname>잠많은시금치</Nickname>
        <RecordTime>감정 기록 n일째</RecordTime>
        <a
          style={{ marginLeft: `auto`, marginRight: `2%`, color: `red` }}
          href="membersLogin"
          onClick={e => handleChangePage(e, `membersLogin`)}
        >
          임시로그인버튼
        </a>
      </TopInfo>
      <EmotionContainer>
        <Heart>
          <HeartInText>감정표현</HeartInText>
          <HeartInTextPercent>100%</HeartInTextPercent>
        </Heart>
        <EmotionText
          href="statusRegister"
          onClick={e => handleChangePage(e, `statusRecord`)}
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
  font-size: 18px;
  font-weight: bold;
  margin-left: auto;
  margin-right: 2%;

  @media (max-width: 425px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
`;

const RecordTime = styled.span`
  font-size: 23px;
  margin-left: auto;
  margin-right: 2%;

  @media (max-width: 425px) {
    font-size: 21px;
  }
  @meida (max-width: 320px) {
    font-size: 19px;
  }
`;

const EmotionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15%;
  margin-bottom: 30%;
`;

const Heart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 300px;
  height: 300px;
  font-family: '여기어때잘난체', 'sans-serif';
  font-size: 33px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #ffb0b8;
  -webkit-text-stroke: 1px #fff;
  background-image: url('../../../../public/heart.png');
  background-size: cover;

  @media (max-width: 425px) {
    width: 250px;
    height: 250px;
    font-size: 28px;
  }

  @media (max-width: 320px) {
    width: 200px;
    height: 200px;
    font-size: 24px;
  }
`;

const HeartInText = styled.span``;

const HeartInTextPercent = styled.span`
  z-index: 5;
  margin-top: -2%;
  margin-bottom: 5%;
`;

const EmotionText = styled.a`
  width: 100%;
  margin-top: 5%;
  margin-bottom: 10%;
  text-align: center;
  font-size: 23px;

  @media (max-width: 425px) {
    font-size: 21px;
  }

  @media (max-width: 320px) {
    font-size: 19px;
  }
`;
