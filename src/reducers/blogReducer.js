import { act } from "react";

import blogThumb1 from "../assets/images/deploy.jpg";

import authorAvt1 from '../assets/images/avatar_profile.png'



const initState = {
    blogs: [ {
      id: 1,
      image: blogThumb1,
      author: 'Marina Nicolai',
      avatar: authorAvt1,
      title: 'Deploy your app in 5 minutes',
      desc: '«Sharing is the healthiest addiction»',
      date: 'April 18th, 2025',
      createdAt: 1686735683881,
      comments: 0,
      likes: 0,
      categories: ['Marina Nicolai', 'Agency'],
      styles: {},
      type: 1,
   }],
    blogFeed: [{ blogId: 1, type: 1, styles: {} }],
    blogFeed2: [],
  };



  
  function blogReducer(state = initState, action) {
    switch (action.type) {
       case '':
          return state
 
       default:
          return state
    }
 }
 
 export default blogReducer