import { combineReducers } from 'redux';
import isLogin from './isLogin';
import posts from './posts';

const rootReducer = combineReducers({
  isLogin: isLogin,
  posts: posts,
});

export default rootReducer;
