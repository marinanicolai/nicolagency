import React, { memo } from 'react';
import WelcomeBanner from '../components/WelcomeBanner';
import BlogFeed from '../components/BlogFeed';
import ServiceSection from '../components/ServiceSection';
import About from '../components/About';
import Clients from '../components/Clients';

import authorReviewThumb1 from '../assets/images/api.jpg'
import authorReviewThumb2 from '../assets/images/api.jpg'
import authorAvt2 from '../assets/images/api.jpg'
import authorAvt3 from '../assets/images/api.jpg'

const moduleData = [
   {
      type: 'thumbnail',
      source: authorReviewThumb1,
   },
   {
      type: 'author',
      avatar: authorAvt2,
      name: 'Marina Nicolai',
      title: `The best way to predict the\nfuture is to invent it.`,
      date: '19 April 2025',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   },
   {
      type: 'author',
      avatar: authorAvt3,
      name: 'Marina Nicolai',
      title: `The best way to predict the\nfuture is to invent it.`,
      date: '19 April 2025',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   },
   {
      type: 'thumbnail',
      source: authorReviewThumb2,
   },
]

function HomePage() {
   return (
      <div>
         <WelcomeBanner />
         <BlogFeed />
         <ServiceSection />
         <About
            title="My Stories"
            backgroundTitle="Blog"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            noBtn={false}
         />
         <Clients heading='Clients' data={moduleData} />
      </div>
   );
}

export default memo(HomePage);
