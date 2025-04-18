import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './styles/BlogType1.module.scss'

function BlogType1({ data, myArea }) {
   const navigate = useNavigate()

   // Ensure data and styles are defined
  if (!data || !data.styles) {
    return <div>Invalid Blog Data</div>;
  }

   let { visual, small, extraSmall, square, squareSmall, noOverlayContent } = data.styles || {}
   if (extraSmall) {
      visual = true
   }

   return (
      <div
         className={`${styles.blogType1} ${myArea ? styles.myArea : ''} ${small ? styles.small : ''} ${
            extraSmall ? styles.extraSmall : ''
         } ${square ? styles.square : ''} ${squareSmall ? styles.squareSmall : ''} ${
            visual ? styles.visual : ''
         }`}
         onClick={() => navigate('/blogs/1')}
      >
         <div className={styles.blogType1Container}>
            <div className={`${styles.thumbnail} ${visual ? styles.visual : ''}`}>
               <img src={data.image} alt='blog' />

               <div className={styles.overlay}>
                  <div className={styles.iconWrap}>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faShareAlt} />
                     </div>
                     <div className={styles.icon}>
                        <FontAwesomeIcon icon={faMessage} />
                        <span>{data.comments}</span>
                     </div>
                  </div>
               </div>

               <div
                  className={`${styles.slideContent} ${
                     noOverlayContent ? styles.noOverlayContent : ''
                  } ${visual ? styles.visual : ''}`}
               >
                  <div className={styles.content}>
                     <p className={styles.date}>{data.date}</p>
                     <h4 className={styles.title}>{data.title}</h4>
                  </div>
                  <div className={styles.author}>
                     <img src={data.avatar} alt='avatar' />
                     <span>{data.author}</span>
                     <p className={styles.desc}>{data.desc}</p>
                  </div>
               </div>
            </div>

            <div className={`${styles.content} ${visual ? styles.visual : ''}`}>
               <p className={styles.date}>{data.date}</p>
               <h4 className={styles.title}>{data.title}</h4>
            </div>
         </div>
      </div>
   )
}
BlogType1.propTypes = {
  data: PropTypes.shape({
     id: PropTypes.number.isRequired,
     image: PropTypes.string,
     styles: PropTypes.shape({
        visual: PropTypes.bool,
        small: PropTypes.bool,
        extraSmall: PropTypes.bool,
        square: PropTypes.bool,
        squareSmall: PropTypes.bool,
        noOverlayContent: PropTypes.bool,
     }),
     date: PropTypes.string,
     title: PropTypes.string,
     comments: PropTypes.number,
     avatar: PropTypes.string,
     author: PropTypes.string,
     desc: PropTypes.string,
  }).isRequired,
  myArea: PropTypes.bool,
};



export default memo(BlogType1);
