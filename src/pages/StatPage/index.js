import React from 'react';
import '../../App.css';
import {
  Button,
  ButtonContainer,
  Icon,
  IconContainer,
  Insight,
  InsightContainer,
  InsightTitle,
} from './styled';

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
