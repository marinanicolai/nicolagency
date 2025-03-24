import React, { useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

function BlogFeed({ blogFeedType2 = false }) {
   const { blogs = [], blogFeed = [], blogFeed2 = [] } = useSelector(state => state.blogs || {})

   const data = blogFeedType2
      ? blogFeed2.map(blog => ({
           ...blogs.find(e => e.id === blog.blogId),
           ...blog,
        }))
      : blogFeed.map(blog => ({
           ...blogs.find(e => e.id === blog.blogId),
           ...blog,
        }))

   const container1Ref = useRef(null)
   const container2Ref = useRef(null)

   const handleScroll = useCallback(() => {
      if (container1Ref.current && container2Ref.current) {
         const elements = [...container1Ref.current.children, ...container2Ref.current.children]

         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('floatUp')
               e.classList.add('appeared')
            }
         })

         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes('appeared')) {
               countAppeared++
            }
         })

         if (countAppeared === elements.length) {
            console.log('remove---BlogFeed')
            window.removeEventListener('scroll', handleScroll)
         }
      }
   }, [])

   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <section style={{ padding: '40px 0' }}>
         <div ref={container1Ref}>
            {data.map(blog => (
               <div key={blog.id}>{blog.title}</div> // simple rendering for now
            ))}
         </div>
         <div ref={container2Ref}>
            {/* You can render more here */}
         </div>
      </section>
   )
}

export default BlogFeed
