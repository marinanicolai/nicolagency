// src/reducers/sampleReducer.js
const initialState = { testValue: 'Hello Redux' };

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TEST_VALUE':
      return { ...state, testValue: action.payload };
    default:
      return state;
  }
};

export default sampleReducer;
