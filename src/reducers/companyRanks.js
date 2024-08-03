const rank = [
  {
    rank: 1,
    company: 'TEAM-GDG',
    score: 1214,
    human: 6,
  },
  {
    rank: 2,
    company: 'LG전자',
    score: 90,
    human: 421,
  },
  {
    rank: 3,
    company: 'SK하이닉스',
    score: 80,
    human: 192,
  },
  {
    rank: 4,
    company: '네이버',
    score: 70,
    human: 421,
  },
  {
    rank: 5,
    company: '카카오',
    score: 60,
    human: 124,
  },
  {
    rank: 6,

    company: '삼성SDI',
    score: 50,
    human: 48,
  },
  {
    rank: 7,
    company: 'LG화학',
    score: 40,
    human: 421,
  },
  {
    rank: 8,
    company: '셀트리온',
    score: 30,
    human: 48,
  },
  {
    rank: 9,
    company: '현대차',
    score: 20,
    human: 8211,
  },
  {
    rank: 10,
    company: '기아차',
    score: 10,
    human: 1294,
  },
];

const companyRanks = (state = rank, action) => {
  switch (action.type) {
    case 'SET_COMPANY_RANKS':
      return rank;
    default:
      return state;
  }
};

export default companyRanks;
