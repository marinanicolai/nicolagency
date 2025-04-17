import React, { memo, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import BlogQuote from './BlogQuote';
import BlogType1 from './BlogType1';
import BlogType2 from './BlogType2';
import styles from './styles/BlogFeed.module.scss';

function BlogFeed({ blogFeedType2, style }) {
   // Hooks must be called unconditionally
   const { blogs = [], blogFeed = [], blogFeed2 = [] } = useSelector(state => state.blogs);
   const container1Ref = useRef(null);
   const container2Ref = useRef(null);

   // Callback for scroll animation
   const handleScroll = useCallback(() => {
      if (container1Ref.current && container2Ref.current) {
         const elements = [...container1Ref.current.children, ...container2Ref.current.children];

         elements.forEach(e => {
            const top = e.getBoundingClientRect().top;
            const bottom = e.getBoundingClientRect().bottom;

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('floatUp');
               e.classList.add(styles.appeared);
            }
         });

         // Remove event when all elements have appeared
         let countAppeared = 0;
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++;
            }
         });

         if (countAppeared === elements.length) {
            console.log('remove---BlogFeed');
            window.removeEventListener('scroll', handleScroll);
         }
      }
   }, []);

   // Effect for scroll animation
   useEffect(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [handleScroll]);

   // Conditional rendering after hooks
   if (blogs.length === 0) {
      return <div>Loading...</div>;
   }

   console.log('Redux State:', { blogs, blogFeed, blogFeed2 });

   const data = blogFeedType2
      ? blogFeed2.map(blog => ({
           ...blogs.find(e => e.id === blog.blogId),
           ...blog,
        }))
      : blogFeed.map(blog => ({
           ...blogs.find(e => e.id === blog.blogId),
           ...blog,
        }));

   return (
      <section className={`${styles.BlogFeed}`} style={style}>
         <div className={`${styles.container} container`}>
            <div
               className={`${styles.container1} ${blogFeedType2 ? styles.blogFeed2 : ''}`}
               ref={container1Ref}
            >
               {data.map((blog, index) => {
                  if (blog.type === 1) {
                     return <BlogType1 myArea={index === 0} data={blog} key={blog.id} />;
                  } else if (blog.type === 3) {
                     return <BlogQuote data={blog} key={blog.id} />;
                  } else {
                     return null;
                  }
               })}
            </div>

            <div className={styles.container2} ref={container2Ref}>
               {data.map(blog => blog.type === 2 && <BlogType2 data={blog} key={blog.id} />)}
            </div>
         </div>
      </section>
   );
}

export default memo(BlogFeed);