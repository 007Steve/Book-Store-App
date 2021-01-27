import React from 'react'
import styles from "../styles/BookCard.module.css";
import StarRateOutlinedIcon from '@material-ui/icons/StarRateOutlined';
function BookCard({image,title, author,rating}) {
    return (
        <div className={styles.bookcard}>
             <img className={styles.bookcard__image} src={image} alt=""/>
             <h3 className={styles.bookcard__title}>{title}</h3>
             <p className={styles.bookcard__author}>{author}</p>
             <StarRateOutlinedIcon className={styles.bookcard__ratings}/>
             <StarRateOutlinedIcon className={styles.bookcard__ratings}/>
             <StarRateOutlinedIcon className={styles.bookcard__ratings}/>
             <StarRateOutlinedIcon className={styles.bookcard__ratings}/>
             <StarRateOutlinedIcon className={styles.bookcard__ratings}/>
        </div>
    )
}

export default BookCard
