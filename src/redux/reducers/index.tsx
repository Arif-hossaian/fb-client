import { combineReducers } from 'redux';
import auth from './authReducer';
import createPost from './postReducer';

export default combineReducers({
  auth,
  createPost,
});
