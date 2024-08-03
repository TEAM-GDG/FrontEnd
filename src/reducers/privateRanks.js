const rank = [
  {
    rank: 1,
    name: '잠많은시금치',
    score: 1214,
    chain: 18,
  },
  {
    rank: 2,
    name: 'dohun1109',
    score: 1109,
    chain: 17,
  },
  {
    rank: 3,
    name: 'rohgibong',
    score: 929,
    chain: 34,
  },
  {
    rank: 4,
    name: 'tkdgml822',
    score: 822,
    chain: 17,
  },
  {
    rank: 5,
    name: '55yong',
    score: 709,
    chain: 16,
  },
  {
    rank: 6,
    name: 'seo-garden',
    score: 523,
    chain: 20,
  },

  {
    rank: 7,
    name: '12seungheon',
    score: 511,
    chain: 12,
  },
  {
    rank: 8,
    name: 'kingxeesu',
    score: 418,
    chain: 6,
  },

  {
    rank: 9,
    name: '불타는망곰이',
    score: 310,
    chain: 3,
  },
  {
    rank: 10,
    name: '움',
    score: 300,
    chain: 6,
  },
];

const privateRanks = (state = rank, action) => {
  switch (action.type) {
    case 'SET_PRIVATE_RANKS':
      return rank;
    default:
      return state;
  }
};

export default privateRanks;
