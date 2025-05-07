import React, {memo} from 'react'
import WelcomeBannerLight from '../components/WelcomeBannerLight';
import aboutBanner2 from '../assets/images/api.jpg';

const CategoryPage = () => {
  return (
   <div>
            <WelcomeBannerLight
            title='Let us help you'
            subTitle='We build fast and beautiful websites'
            background={aboutBanner2} />
    </div>
  );
}

export default memo(CategoryPage);
