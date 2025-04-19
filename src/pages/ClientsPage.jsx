import React, {memo} from 'react'
import WelcomeBannerLight from '../components/WelcomeBannerLight';
import aboutBanner2 from '../assets/images/api.jpg';

const ClientsPage = () => {
  return (
   <div>
            <WelcomeBannerLight
            title='Clients'
            subTitle='Clients we have worked with'
            background={aboutBanner2} />
    </div>
  );
}

export default memo(ClientsPage);
