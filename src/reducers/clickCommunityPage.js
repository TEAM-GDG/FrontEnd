const clickCommunityPage = (state = false, action) => {
  switch (action.type) {
    case 'CLICK_COMMUNITY_PAGE':
      return !state;
    default:
      return state;
  }
};

export default clickCommunityPage;
