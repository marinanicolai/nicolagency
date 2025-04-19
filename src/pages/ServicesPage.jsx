import React, {memo} from 'react'
import WelcomeBannerLight from '../components/WelcomeBannerLight';
import aboutBanner2 from '../assets/images/api.jpg';

const ServicesPage = () => {
  return (
   <div>
            <WelcomeBannerLight
            title='Services we offer'
            subTitle='We offer a wide range of services'
            background={aboutBanner2} />
    </div>
  );
}

export default memo(ServicesPage);
