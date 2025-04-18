import { act } from "react";

import blogThumb1 from "../assets/images/deploy.jpg";
import blogThumb2 from "../assets/images/github.jpg";
import blogThumb3 from "../assets/images/clone.jpg";

import authorAvt1 from '../assets/images/avatar_profile.png'



const initState = {
    blogs: [ {
      id: 1,
      image: blogThumb1,
      author: 'Marina Nicolai',
      avatar: authorAvt1,
      title: 'Deploy your app in 5 minutes',
      desc: '«Sharing is the healthiest addiction»',
      date: 'April 18, 2025',
      createdAt: 1687195683881,
      comments: 0,
      likes: 0,
      categories: ['Marina Nicolai', 'Education', 'How to deploy your app'],
      styles: {},
      type: 1,
   },
   {
    id: 2,
    image: blogThumb2,
    author: 'Marina Nicolai',
    avatar: authorAvt1,
    title: 'How to create a GitHub account',
    desc: '«Sharing is the healthiest addiction»',
    date: 'April 18, 2025',
    createdAt: 1687195683881,
    comments: 2,
    likes: 0,
    categories: ['Marina Nicolai', 'Education', 'How to create a GitHub account'],
    styles: {},
    type: 1,
 },
 {
    id: 3,
    image: blogThumb3,
    author: 'Marina Nicolai',
    avatar: authorAvt1,
    title: 'How to clone a GitHub repository',
    desc: '«Sharing is the healthiest addiction»',
    date: 'April 18, 2025',
    createdAt: 1687195683881,
    comments: 2,
    styles: {},
    categories: ['Marina Nicolai', 'Education', 'How to clone a GitHub repository'],
    likes: 0,
    type: 1,
 }],
    blogFeed: [
      { blogId: 1, type: 1, styles: {} },
      { blogId: 2, type: 1, styles: { small: true, noOverlayContent: true } },
      { blogId: 3, type: 1, styles: { small: true, noOverlayContent: true} }
    ],
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