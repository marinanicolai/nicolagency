import React, { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import buildingBanner1 from '../assets/images/web-back-2-sm.jpg';
import buildingBanner2 from '../assets/images/welcomeBanner2.jpg';
import buildingBanner3 from '../assets/images/welcomeBanner3.jpg';
import buildingBanner4 from '../assets/images/welcomeBanner4.jpg';
import { Link } from 'react-router-dom';
import styles from './styles/Welcome.module.scss';

function WelcomeBanner() {
   const [isSliding, setSliding] = useState(false);
   const [slide, setSlide] = useState(1);

   const nextSlide = () => {
      if (!isSliding) {
         setSliding(true);
         setSlide(slide === 4 ? 1 : slide + 1);

         setTimeout(() => {
            setSliding(false);
         }, 1010); // slide duration 1s
      }
   };

   const prevSlide = () => {
      if (!isSliding) {
         setSliding(true);
         setSlide(slide === 1 ? 4 : slide - 1);

         setTimeout(() => {
            setSliding(false);
         }, 1010); // slide duration 1s
      }
   };

   return (
      <section className={styles.WelcomeBanner}>
         {/* <button className={`${styles.slideBtn} ${styles.prevBtn}`} onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
         </button>
         <button className={`${styles.slideBtn} ${styles.nextBtn}`} onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
         </button> */}

         <div className={styles.slideNav}>
            {[1, 2, 3, 4].map((item) => (
               <button
                  key={item}
                  className={`${styles.navBtn} ${slide === item ? styles.active : ''}`}
                  onClick={() => setSlide(item)}
               />
            ))}
         </div>

         <div
            className={`${styles.slide} ${slide === 1 ? styles.active : ''}`}
            style={{ background: `url(${buildingBanner1}) no-repeat center / cover` }}
         >
            <div className={styles.slideFeatures}>
               <div className={styles.categories}>
                  <span>Innovative</span>
                  {', '}
                  <span>Technology</span>
               </div>
               <h1 className={styles.title}>AI Solutions</h1>
               <p className={styles.subTitle}>«Empowering businesses with intelligent systems»</p>
               <Link to='/projects/1' className={`button`}>
                  EXPLORE PROJECT
               </Link>
            </div>
         </div>

         {/* <div
            className={`${styles.slide} ${slide === 2 ? styles.active : ''}`}
            style={{ background: `url(${buildingBanner2}) no-repeat center / cover` }}
         >
            <div className={styles.slideFeatures}>
               <div className={styles.categories}>
                  <span>Small Business Solution</span>
                  {', '}
                  <span>Design</span>
               </div>

               <h1 className={styles.title}>Creative Studio</h1>
               <p className={styles.subTitle}>«Showcasing innovative design processes for small businesses»</p>

               <h5 className={styles.date}>January 10, 2025</h5>

               <Link to='/projects/2' className={`button`}>
                  DISCOVER PROJECT
               </Link>
            </div>
         </div> */}

         {/* <div
            className={`${styles.slide} ${slide === 3 ? styles.active : ''}`}
            style={{ background: `url(${buildingBanner3}) no-repeat center / cover` }}
         >
            <div className={styles.slideFeatures}>
               <div className={styles.categories}>
                  <span>Modern</span>
                  {', '}
                  <span>Productivity Tools</span>
               </div>

               <h1 className={styles.title} style={{ marginLeft: '265px' }}>Digital Hub</h1>
               <p className={styles.subTitle}>
                  «Enhancing productivity through intuitive digital solutions.»
               </p>

               <h5 className={styles.date}>January 10, 2025</h5>

               <Link to='/projects/3' className={`button`}>
                  LEARN MORE
               </Link>
            </div>
         </div> */}
         {/* <div
            className={`${styles.slide} ${slide === 4 ? styles.active : ''}`}
            style={{ background: `url(${buildingBanner4}) no-repeat center / cover` }}
         >
            <div className={styles.slideFeatures}>
               <div className={styles.categories}>
                  <span>Operations</span>
                  {', '}
                  <span>design Solutions</span>
               </div>
              

               <h1 className={styles.title} 
               style={{
                   marginLeft: '50px', 
                   backgroundColor: 'rgba(0, 0, 0, 0.5) ',
                   display: 'inline-block',
                   borderRadius: '5px'
                   }}>Bussiness Dashboard</h1>
               <p className={styles.subTitle}>«Creating tools to streamline operations and enhance customer experience.»</p>

               <h5 className={styles.date}>January 10, 2025</h5>

               <Link to='/projects/4' className={`button`}>
                  EXPLORE PROJECT
               </Link>
            </div>
         </div> */}
      </section>
   );
}

export default memo(WelcomeBanner);
