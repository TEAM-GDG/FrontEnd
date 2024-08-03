import { combineReducers } from 'redux';
import clickCommunityPage from './clickCommunityPage';

const rootReducer = combineReducers({
  clickCommunityPage: clickCommunityPage,
});

export default rootReducer;
