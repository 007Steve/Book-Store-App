import React from 'react'

import styles from "../styles/Row.module.css";
 import BookCard from '../components/BookCard'
function Row({name}) {
    return (
        <div className={styles.row}>
            <h1 className={styles.row__title}>Popular</h1>
            <div className="" className={styles.row_items}>
                 <BookCard 
            image="https://www.washingtonpost.com/resizer/2YQdlcFZmfaDO5a4-nFis9MkJiE=/arc-anglerfish-washpost-prod-washpost/public/QYBBN33NPQ3UNCX3TBOSNDW6XA.jpg" 
            title=" Becoming Michelle Obama" 
            author="Michelle Obama" 
            rating="5"/>
             <BookCard 
            image="https://www.washingtonpost.com/resizer/2YQdlcFZmfaDO5a4-nFis9MkJiE=/arc-anglerfish-washpost-prod-washpost/public/QYBBN33NPQ3UNCX3TBOSNDW6XA.jpg" 
            title=" Becoming Michelle Obama" 
            author="Michelle Obama" 
            rating="5"/>
             <BookCard 
            image="https://www.washingtonpost.com/resizer/2YQdlcFZmfaDO5a4-nFis9MkJiE=/arc-anglerfish-washpost-prod-washpost/public/QYBBN33NPQ3UNCX3TBOSNDW6XA.jpg" 
            title=" Becoming Michelle Obama" 
            author="Michelle Obama" 
            rating="5"/>
             <BookCard 
            image="https://www.washingtonpost.com/resizer/2YQdlcFZmfaDO5a4-nFis9MkJiE=/arc-anglerfish-washpost-prod-washpost/public/QYBBN33NPQ3UNCX3TBOSNDW6XA.jpg" 
            title=" Becoming Michelle Obama" 
            author="Michelle Obama" 
            rating="5"/>
             <BookCard 
            image="https://www.washingtonpost.com/resizer/2YQdlcFZmfaDO5a4-nFis9MkJiE=/arc-anglerfish-washpost-prod-washpost/public/QYBBN33NPQ3UNCX3TBOSNDW6XA.jpg" 
            title=" Becoming Michelle Obama" 
            author="Michelle Obama" 
            rating="5"/>
             <BookCard 
            image="https://www.washingtonpost.com/resizer/2YQdlcFZmfaDO5a4-nFis9MkJiE=/arc-anglerfish-washpost-prod-washpost/public/QYBBN33NPQ3UNCX3TBOSNDW6XA.jpg" 
            title=" Becoming Michelle Obama" 
            author="Michelle Obama" 
            rating="5"/>
             <BookCard 
            image="https://www.washingtonpost.com/resizer/2YQdlcFZmfaDO5a4-nFis9MkJiE=/arc-anglerfish-washpost-prod-washpost/public/QYBBN33NPQ3UNCX3TBOSNDW6XA.jpg" 
            title=" Becoming Michelle Obama" 
            author="Michelle Obama" 
            rating="5"/>
             <BookCard 
            image="https://www.washingtonpost.com/resizer/2YQdlcFZmfaDO5a4-nFis9MkJiE=/arc-anglerfish-washpost-prod-washpost/public/QYBBN33NPQ3UNCX3TBOSNDW6XA.jpg" 
            title=" Becoming Michelle Obama" 
            author="Michelle Obama" 
            rating="5"/>
             <BookCard 
            image="https://www.washingtonpost.com/resizer/2YQdlcFZmfaDO5a4-nFis9MkJiE=/arc-anglerfish-washpost-prod-washpost/public/QYBBN33NPQ3UNCX3TBOSNDW6XA.jpg" 
            title=" Becoming Michelle Obama" 
            author="Michelle Obama" 
            rating="5"/>
             
            </div>
            
   
        </div>
    )
}

export default Row
