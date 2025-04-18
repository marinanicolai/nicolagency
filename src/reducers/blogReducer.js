import { act } from "react";

import blogThumb1 from "../assets/images/deploy.jpg";
import blogThumb2 from "../assets/images/github.jpg";
import blogThumb3 from "../assets/images/clone.jpg";
import blogThumb4 from "../assets/images/deploy-free.jpg";
import blogThumb5 from "../assets/images/hosting.jpg";
import blogThumb6 from "../assets/images/basics.jpg";


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
    comments: 0,
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
    comments: 0,
    styles: {},
    categories: ['Marina Nicolai', 'Education', 'How to clone a GitHub repository'],
    likes: 0,
    type: 1,
 },
 {
  id: 4,
  image: blogThumb4,
  author: 'Marina Nicolai',
  avatar: authorAvt1,
  title: '',
  desc: '«Sharing is the healthiest addiction»',
  date: 'April 18, 2025',
  createdAt: 1687195683881,
  comments: 0,
  categories: ['Marina Nicolai', ''],
  likes: 0,
  styles: {},
  type: 1,
},
{
  id: 5,
  image: blogThumb5,
  author: 'Marina Nicolai',
  avatar: authorAvt1,
  title: '',
  desc: '«Sharing is the healthiest addiction»',
  date: 'April 18, 2025',
  createdAt: 1687195683881,
  comments: 0,
  categories: ['Marina Nicolai', ''],
  likes: 0,
  styles: {},
  type: 1,
},
{
  id: -99,
  image: null,
  author: 'Marina Nicolai',
  avatar: null,
  title: ['Life if a Journey.', 'Make', 'the Best of it.'],
  desc: '',
  createdAt: 1687195683881,
  date: 'April 18, 2025',
  styles: {},
  type: 3,
  comments: 0,
  likes: 0,
},
{
  id: 6,
  image: blogThumb6,
  author: 'Marina Nicolai',
  avatar: authorAvt1,
  title: '',
  desc: '«Sharing is the healthiest addiction»',
  date: 'April 18, 2025',
  createdAt: 1687195683881,
  comments: 0,
  categories: ['Marina Nicolai', ''],
  likes: 0,
  styles: {},
  type: 1,
},
{
  id: 7,
  image: blogThumb4,
  author: 'Marina Nicolai',
  avatar: authorAvt1,
  title: '',
  desc: '«Sharing is the healthiest addiction»',
  date: 'April 18, 2025',
  createdAt: 1687195683881,
  comments: 0,
  categories: ['Marina Nicolai', ''],
  likes: 0,
  styles: {},
  type: 1,
}
],
    blogFeed: [
      { blogId: 1, type: 1, styles: {} },
      { blogId: 2, type: 1, styles: { small: true, noOverlayContent: true } },
      { blogId: 3, type: 1, styles: { small: true, noOverlayContent: true} },
      { blogId: 4, type: 1, styles: { extraSmall: true, visual: true } },
      { blogId: 5, type: 1, styles: { extraSmall: true, visual: true } },
      { blogId: -99, type: 3 },
      { blogId: 6, type: 1, styles: { extraSmall: true , visual: true} }
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