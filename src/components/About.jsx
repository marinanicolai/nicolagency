import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from '../components/styles/About.module.scss'
import aboutIcon1 from '../assets/icons/writing.png'
import aboutIcon2 from '../assets/icons/gear.png'
import aboutIcon3 from '../assets/icons/laptop.png'
import { Link } from 'react-router-dom'

function About({ title, backgroundTitle, content, noBtn }) {
   const titleRef = useRef(null)
   const paragraphRef = useRef(null)
   const categoriesRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (titleRef.current && paragraphRef.current && categoriesRef.current) {
         const elements = [titleRef.current, paragraphRef.current]
         const categoryElements = [...categoriesRef.current.children]

         // 1
         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('floatUp')
               e.classList.add(styles.appeared)
            }
         })

         // 2
         let delay = 0.2
         categoryElements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeared)
               delay += 0.2
            }
         })

         // remove event when all are appeared
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         categoryElements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (countAppeared === elements.length + categoryElements.length) {
            console.log('remove---OurAbout')
            window.removeEventListener('scroll', handleScroll)
         }
      }
   }, [])

   // appear on scroll
   useEffect(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <section className={styles.OurAbout}>
         <div className={`${styles.container} container`}>
            <div className={styles.title}>
               <h1 ref={titleRef}>{title}</h1>
               <span className={styles.textBackground}>{backgroundTitle}</span>
            </div>

            <p className={styles.paragraph} ref={paragraphRef}>
               {content}
            </p>

            <div className={styles.categories} ref={categoriesRef}>
               <div className={styles.cateItem}>
                  <div className={styles.icon}>
                     <img src={aboutIcon1} alt='icon' />
                  </div>

                  <p className={styles.text}>
                  From concept to deployment, we build responsive React-based websites tailored to client goals — fast, accessible, and user-friendly.
                  </p>

                  {noBtn || (
                     <Link to='/categories/develop' className={styles.btn}>
                        READ MORE
                     </Link>
                  )}
               </div>
               <div className={styles.cateItem}>
                  <div className={styles.icon}>
                     <img src={aboutIcon2} alt='icon' />
                  </div>

                  <p className={styles.text}>
                  We integrate AI-ready structures such as real-time analytics, chatbot components, and intelligent content layout engines, paving the way for future automation and personalization.
                  </p>

                  {noBtn || (
                     <Link to='/categories/ai' className={styles.btn}>
                        READ MORE
                     </Link>
                  )}
               </div>
               <div className={styles.cateItem}>
                  <div className={styles.icon}>
                     <img src={aboutIcon3} alt='icon' />
                  </div>

                  <p className={styles.text}>
                  Our custom CMS integration empowers clients to manage their websites easily, while dynamic content strategies help boost user engagement and SEO.
                  </p>

                  {noBtn || (
                     <Link to='/categories/seo' className={styles.btn}>
                        READ MORE
                     </Link>
                  )}
               </div>
            </div>
         </div>
      </section>
   )
}

export default memo(About)
