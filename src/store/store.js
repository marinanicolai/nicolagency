// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Updated path

const store = configureStore({
  reducer: rootReducer, // Combine your reducers here
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;
