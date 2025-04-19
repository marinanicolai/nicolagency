import React, { memo } from 'react';
import WelcomeBanner from '../components/WelcomeBannner';
import BlogFeed from '../components/BlogFeed';
import ServiceSection from '../components/ServiceSection';
import OurAbout from '../components/OurAbout';
import EditorPickedNews from '../components/EditorPickedNews';
import FeaturedAuthors from '../components/FeaturedAuthors';
import RecentPosts from '../components/RecentPosts';

function HomePage() {
   return (
      <div>
         <WelcomeBanner />
         <BlogFeed />
         <ServiceSection />
         <OurAbout
            title="Our Stories"
            backgroundTitle="Blog"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            noBtn={false}
         />
         <EditorPickedNews />
         <FeaturedAuthors title="Featured Authors" />
         <RecentPosts />
      </div>
   );
}

export default memo(HomePage);
