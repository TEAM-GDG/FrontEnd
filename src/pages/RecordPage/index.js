import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import EmotionModal from '../../components/EmotionModal';

const RecordPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="container">
      <IconContainer>
        <Icon src="emotion.png" />
      </IconContainer>
      <RecordContainer>
        <RecordTitle>오늘 당신의 하루는 어떠셨나요?</RecordTitle>
        <RecordDetail>
          <RecordCount>#n번째 질문</RecordCount>
          <RecordDate>0000.00.00</RecordDate>
        </RecordDetail>
      </RecordContainer>
      <UserInputContainer>
        이곳을 클릭하여 오늘 있었던 일을 적어주세요.
      </UserInputContainer>
      {modalOpen && <EmotionModal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default RecordPage;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10% 0 5% 0;
`;

const Icon = styled.img`
  width: 120px;
  height: 120px;

  @media (max-width: 425px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 375px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 320px) {
    width: 60px;
    height: 60px;
  }
`;

const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-top: 5%;
`;

const RecordTitle = styled.span`
  font-size: 25px;

  @media (max-width: 425px) {
    font-size: 21px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

const RecordDetail = styled.div`
  display: flex;
  margin-top: 2%;
  font-size: 17px;

  @media (max-width: 425px) {
    font-size: 15px;
  }

  @media (max-width: 320px) {
    font-size: 13px;
  }
`;

const RecordCount = styled.span`
  color: #959595;
`;

const RecordDate = styled.span`
  color: #aaaaaa;
  margin-left: 2%;
`;

const UserInputContainer = styled.div`
  display: flex;
  width: 95%;
  height: 250px;
  margin-top: 5%;
  margin-bottom: 25%;
  font-size: 17px;
  color: #8c8b8b;

  @media (max-width: 425px) {
    font-size: 15px;
  }

  @media (max-width: 320px) {
    font-size: 13px;
  }
`;
