import { combineReducers } from 'redux';
import isLogin from './isLogin';
import posts from './posts';
import privateRanks from './privateRanks';
import companyRanks from './companyRanks';

const rootReducer = combineReducers({
  isLogin: isLogin,
  posts: posts,
  privateRanks: privateRanks,
  companyRanks: companyRanks,
});

export default rootReducer;
