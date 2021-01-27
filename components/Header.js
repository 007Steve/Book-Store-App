import React from "react";

import styles from "../styles/Header.module.css";
import { Button } from "@material-ui/core";
function Header() {
  return (
    <div  className={styles.header}>
      <div  className={styles.header__links}>
        <h4>Home</h4>
        <h4>Bestseller</h4>
        <h4>Category</h4>
        <h4>Find a store</h4>
      </div>

      <div className="header__banner" className={styles.header__banner} >
        <div className="header__bannerInfo" className={styles.header__bannerInfo}>
          <h1>Build your Library</h1>
          <p>Discover books from our endeless collections </p>
          <button className={styles.button}>View all</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
