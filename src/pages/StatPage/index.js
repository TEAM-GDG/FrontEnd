import React from 'react';
import '../../App.css';
import styled from 'styled-components';

const StatPage = () => {
  return (
    <div className="container">
      <IconContainer>
        <Icon src="diary.png" />
      </IconContainer>
      <InsightContainer>
        <Insight>
          <InsightTitle>
            일별 감정 통계
            <hr />
          </InsightTitle>
        </Insight>
        <Insight>
          <InsightTitle>
            월별 감정 통계
            <hr />
          </InsightTitle>
        </Insight>
        <Insight>
          <InsightTitle>
            전체 감정 통계
            <hr />
          </InsightTitle>
        </Insight>
      </InsightContainer>
      <ButtonContainer>
        <Button>
          <span>나의 모든 감정 보기</span>
          <span> > </span>
        </Button>
        <Button>
          <span>직종별 감정 분석</span>
          <span> > </span>
        </Button>
        <Button>
          <span>전체 사용자 감정 분석</span>
          <span> > </span>
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default StatPage;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% 0 5% 0;
`;

const Icon = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: 425px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 375px) {
    width: 125px;
    height: 125px;
  }

  @media (max-width: 320px) {
    width: 100px;
    height: 100px;
  }
`;

const InsightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

const Insight = styled.div`
  margin: 10% 0 15% 0;
`;

const InsightTitle = styled.span`
  font-size: 25px;

  @media (max-width: 425px) {
    font-size: 23px;
  }

  @media (max-width: 320px) {
    font-size: 21px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 89%;
  margin: 10% 0 15% 0;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: rgba(224, 224, 224, 0.81);
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  margin: 5% 0 5% 0;
  padding: 0 3% 0 3%;
  cursor: pointer;
  font-size: 20px;

  @media (max-width: 425px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
  }
`;
