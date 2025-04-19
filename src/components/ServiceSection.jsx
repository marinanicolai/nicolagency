import React, { memo, useCallback, useEffect, useRef } from 'react';
import styles from './styles/ServiceSection.module.scss';
import servicesBG from '../assets/images/servicesBG.jpg';
import servImg1 from '../assets/images/online.jpg'
import servImg2 from '../assets/images/glob.jpg'
import servImg3 from '../assets/images/chart2.jpg'
import servImg4 from '../assets/images/web.jpg'

import { Link } from 'react-router-dom'
import SeparatorTitle from './SeparatorTitle'

function ServiceSection({ style }) {
   const categoriesWrapRef = useRef(null)
   const buttonWrapRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (categoriesWrapRef.current && buttonWrapRef) {
         const elements = [...categoriesWrapRef.current.children]

         // 1
         let delay = 0.2
         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.style.animation = `floatUp 0.6s ease-in-out ${delay}s forwards`
               e.classList.add(styles.appeared)
               delay += 0.2
            }
         })

         // 2
         const btnTop = buttonWrapRef.current.getBoundingClientRect().top
         const btnBottom = buttonWrapRef.current.getBoundingClientRect().bottom

         if (btnTop < window.innerHeight && btnBottom > 0) {
            buttonWrapRef.current.classList.add('floatLeft')
            buttonWrapRef.current.classList.add(styles.appeared)
         }

         // remove event when all are appeared
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (buttonWrapRef.current.className.includes(styles.appeared)) {
            countAppeared++
         }

         if (countAppeared === elements.length + 1) {
            console.log('remove---TopCategories')
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
      <section
         className={styles.ServiceSection}
         style={{ background: `url(${servicesBG}) no-repeat center / cover`, ...style }}
      >
         <div className={`${styles.container} container`}>
            <SeparatorTitle title='Our Services' />

            <div className={styles.categoriesWrap} ref={categoriesWrapRef}>
               <div className={styles.categoriesItem}>
                  <img src={servImg1} alt='thumbnail' />
                  <h6 className={styles.cateTitle}>
                     <Link to='/services/webbuild'>Building Website</Link>
                  </h6>
               </div>
               <div className={styles.categoriesItem}>
                  <img src={servImg2} alt='thumbnail' />
                  <h6 className={styles.cateTitle}>
                     <Link to='/services/webedit'>Editing an Existing Website</Link>
                  </h6>
               </div>
               <div className={styles.categoriesItem}>
                  <img src={servImg3} alt='thumbnail' />
                  <h6 className={styles.cateTitle}>
                     <Link to='/services/design'>Designing Website</Link>
                  </h6>
               </div>
               <div className={styles.categoriesItem}>
                  <img src={servImg4} alt='thumbnail' />
                  <h6 className={styles.cateTitle}>
                     <Link to='/services/content'>Creating Social Media Content</Link>
                  </h6>
               </div>
            
            </div>

            <div className={styles.buttonWrap} ref={buttonWrapRef}>
               <Link to='/services' className={`button`}>
                  VIEW ALL SERVIES
               </Link>
            </div>
         </div>
      </section>
   )
}

export default memo(ServiceSection)
