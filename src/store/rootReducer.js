// src/store/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import sampleReducer from '../reducers/sampleReducer';

const rootReducer = combineReducers({
  sample: sampleReducer, // `sample` is the state slice
});

export default rootReducer;
