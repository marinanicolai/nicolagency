import React, { memo } from 'react';
import WelcomeBannerLight from '../components/WelcomeBannerLight';
import Projects from '../components/Projects';

import aboutBanner2 from '../assets/images/api.jpg';
import authorAvt2 from '../assets/images/profile-photo.jpeg';
import project1 from '../assets/images/ai-african-violet.jpg';

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
    technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'Scikit-learn'],
  }
];

const ProjectsPage = () => {
  return (
    <div>
      <WelcomeBannerLight
        title="Projects"
        subTitle="Our latest projects"
        background={aboutBanner2}
      />
      <Projects heading="Projects" data={moduleData} />
    </div>
  );
};

export default memo(ProjectsPage);
