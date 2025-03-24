import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function BlogFeed({ blogFeedType2 = false }) {
  const { blogs = [], blogFeed = [], blogFeed2 = [] } = useSelector((state) => state.blogs || {});

  const data = blogFeedType2
    ? blogFeed2.map((blog) => {
        const blogData = blogs.find((e) => e.id === blog.blogId);
        return blogData ? { ...blogData, ...blog } : null;
      }).filter(Boolean)
    : blogFeed.map((blog) => {
        const blogData = blogs.find((e) => e.id === blog.blogId);
        return blogData ? { ...blogData, ...blog } : null;
      }).filter(Boolean);

  const container1Ref = useRef(null);
  const container2Ref = useRef(null);

  const handleScroll = useCallback(() => {
    if (!container1Ref.current || !container2Ref.current) return;

    const elements = [...container1Ref.current.children, ...container2Ref.current.children];

    let allAppeared = true;

    elements.forEach((e) => {
      const { top, bottom } = e.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        e.classList.add('floatUp');
        e.classList.add('appeared');
      }
      if (!e.classList.contains('appeared')) {
        allAppeared = false;
      }
    });

    if (allAppeared) {
      console.log('remove---BlogFeed');
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <section style={{ padding: '40px 0' }}>
      <div ref={container1Ref}>
        {data.map((blog) => (
          <div key={blog.id} className="blog-item">
            {blog.title}
          </div>
        ))}
      </div>
      <div ref={container2Ref}>
        {/* Optional: put additional content here */}
      </div>
    </section>
  );
}

export default BlogFeed;
