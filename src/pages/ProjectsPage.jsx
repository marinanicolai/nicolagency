import React, {memo} from 'react'
import WelcomeBannerLight from '../components/WelcomeBannerLight';
import aboutBanner2 from '../assets/images/api.jpg';

const ProjectsPage = () => {
  return (
   <div>
            <WelcomeBannerLight
            title='Projects'
            subTitle='Our latest projects'
            background={aboutBanner2} />
    </div>
  );
}

export default memo(ProjectsPage);
