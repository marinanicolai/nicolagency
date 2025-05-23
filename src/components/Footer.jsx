import React, { memo, useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/icons/facebook-cirle.png'
import instagram from '../assets/icons/instagram-cirle.png'
import linkedin from '../assets/icons/linkedin-cirle.png'
import pinterest from '../assets/icons/pinterest-cirle.png'
import twitter from '../assets/icons/twitter-cirle.png'
import youtube from '../assets/icons/youtube-cirle.png'
import styles from '../components/styles/Footer.module.scss'

function Footer() {
   const containerRef = useRef(null)

   // appear animation on scroll
   const handleScroll = useCallback(() => {
      if (containerRef.current) {
         const elements = [...containerRef.current.children]

         elements.forEach(e => {
            const top = e.getBoundingClientRect().top
            const bottom = e.getBoundingClientRect().bottom

            if (top < window.innerHeight && bottom > 0) {
               e.classList.add('floatUp')
               e.classList.add(styles.appeared)
            }
         })

         // remove event when all are appeared
         let countAppeared = 0
         elements.forEach(e => {
            if (e.className.includes(styles.appeared)) {
               countAppeared++
            }
         })

         if (countAppeared === elements.length) {
            console.log('remove---FooterNav')
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
      <section className={styles.Footer}>
         <div className={`${styles.container} container`} ref={containerRef}>
            <div className={styles.copyrights}>
               <span>© Copyrights</span>
               <a href='/'>Nicolai Agency</a>
            </div>

            <div className={styles.nav}>
               <Link to='/' className={styles.navItem}>
                  Support
               </Link>
               <Link to='/' className={styles.navItem}>
                  Contact Us
               </Link>
               <Link to='/' className={styles.navItem}>
                  Disclaimer
               </Link>
               <Link to='/' className={styles.navItem}>
                  Privacy Policy
               </Link>
            </div>

            <div className={styles.socialsWrap}>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={facebook} alt='social' />
               </a>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={linkedin} alt='social' />
               </a>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={twitter} alt='social' />
               </a>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={instagram} alt='social' />
               </a>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={pinterest} alt='social' />
               </a>
               <a href='/' className={styles.socialItem} target='_blank' rel='noreferrer'>
                  <img src={youtube} alt='social' />
               </a>
            </div>
         </div>
      </section>
   )
}

export default memo(Footer)
