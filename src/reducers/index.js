import { combineReducers } from '@reduxjs/toolkit';
import blogReducer from './blogReducer'

const reducers = combineReducers({
   blogs: blogReducer
});

export default reducers;
