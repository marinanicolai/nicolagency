// src/store/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import sampleReducer from '../reducers/sampleReducer';
import reducers from '../reducers';

const rootReducer = combineReducers({
  reducer: reducers,
});

export default rootReducer;
