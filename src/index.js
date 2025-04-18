import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers'

const store = configureStore({
  reducer: reducers ,
});
store.dispatch({
  type: 'SET_BLOGS',
  payload: {
    blogs: [{ id: 1, title: 'Blog 1', type: 1 }],
    blogFeed: [{ blogId: 1 }],
    blogFeed2: [],
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
