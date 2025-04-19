import React, {memo} from 'react'
import WelcomeBannerLight from '../components/WelcomeBannerLight';
import aboutBanner2 from '../assets/images/api.jpg';

const BlogPage = () => {
  return (
   <div>
            <WelcomeBannerLight
            title='Blog'
            subTitle='Latest news and updates'
            background={aboutBanner2} />
    </div>
  );
}

export default memo(BlogPage);
