import { act } from "react";

const initialState = {
    blogs: [],
    blogFeed: [],
    blogFeed2: [],
  };
  
  export default function blogsReducer(state = initialState, action) {
    console.log('Action:', action);
    console.log('State before:', state);
  
    switch (action.type) {
      case 'SET_BLOGS':
        const newState = {
          ...state,
          ...action.payload,
        };
        console.log('State after:', newState);
        return newState;
      default:
        return state;
    }
  }