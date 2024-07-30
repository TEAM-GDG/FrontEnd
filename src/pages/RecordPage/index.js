import React, { useState } from 'react';
import '../../App.css';
import EmotionModal from '../../components/EmotionModal';
import {
  Icon,
  IconContainer,
  RecordContainer,
  RecordCount,
  RecordDate,
  RecordDetail,
  RecordTitle,
  UserInputContainer,
} from './styled';

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
