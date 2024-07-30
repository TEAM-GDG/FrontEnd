import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10% 0 5% 0;
`;

export const Icon = styled.img`
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

export const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-top: 5%;
`;

export const RecordTitle = styled.span`
  font-size: 25px;

  @media (max-width: 425px) {
    font-size: 21px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

export const RecordDetail = styled.div`
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

export const RecordCount = styled.span`
  color: #959595;
`;

export const RecordDate = styled.span`
  color: #aaaaaa;
  margin-left: 2%;
`;

export const UserInputContainer = styled.div`
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
