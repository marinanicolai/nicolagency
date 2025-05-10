import React, { memo } from 'react';
import WelcomeBanner from '../components/WelcomeBanner';
import BlogFeed from '../components/BlogFeed';
import ServiceSection from '../components/ServiceSection';
import About from '../components/About';
import Projects from '../components/Projects';

import authorReviewThumb1 from '../assets/images/api.jpg'
import authorReviewThumb2 from '../assets/images/api.jpg'
import authorAvt2 from '../assets/images/profile-photo.jpeg'
import project1 from '../assets/images/ai-african-violet.jpg'
import authorAvt3 from '../assets/images/api.jpg'

const moduleData = [
   {
     type: 'thumbnail',
     source: project1,
   },
   {
      type: 'author',
      avatar: authorAvt2,
      name: 'Marina Nicolai',
      title: `AI-Powered Identifier for African Violet Flowers`,
      date: '24 May 2025',
      desc: 'This project applies machine learning to accurately classify African Violet flower types based on uploaded images.',
      technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'Scikit-learn']
    }
    
 ]
 

function HomePage() {
   return (
      <div>
         <WelcomeBanner />
         {/* <BlogFeed /> */}
         <ServiceSection />
         <About
            title="My Stories"
            backgroundTitle="Blog"
            content="At Nicolagency, we turn ideas into beautiful, scalable digital experiences. This project showcases how we blend design, development, and emerging tech to meet client needs."
           noBtn={false}
         />
         <Projects heading='Projects' data={moduleData} />
      </div>
   );
}

export default memo(HomePage);
