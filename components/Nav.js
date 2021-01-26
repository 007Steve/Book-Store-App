import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import styles from "../styles/Nav.module.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
function Nav() {
  return (
    <nav className={styles.nav}>
      <div className="nav__left">
        <h2>Books</h2>
      </div>

      <div className={styles.nav__center}>
        <div className={styles.nav__inputContainer}>
          <input
            className={styles.nav__input}
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <SearchIcon />
        </div>
      </div>

      <div className={styles.nav__right}>
        <IconButton>
          <Badge badgeContent={3} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <Avatar src="" className={styles.nav__icons} />
      </div>
    </nav>
  );
}

export default Nav;
