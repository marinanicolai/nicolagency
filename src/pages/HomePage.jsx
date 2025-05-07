import React, { memo } from 'react';
import WelcomeBanner from '../components/WelcomeBanner';
import BlogFeed from '../components/BlogFeed';
import ServiceSection from '../components/ServiceSection';
import About from '../components/About';
import Clients from '../components/Clients';

import authorReviewThumb1 from '../assets/images/api.jpg'
import authorReviewThumb2 from '../assets/images/api.jpg'
import authorAvt2 from '../assets/images/profile-photo.jpeg'
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
      title: `Predict the name of African Violet flowers`,
      date: '24 May 2025',
      desc: 'Find out how to predict the name of African Violet flowers using machine learning and deep learning techniques.',
   }
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
            content="At Nicolagency, we turn ideas into beautiful, scalable digital experiences. This project showcases how we blend design, development, and emerging tech to meet client needs."
           noBtn={false}
         />
         <Clients heading='Clients' data={moduleData} />
      </div>
   );
}

export default memo(HomePage);
