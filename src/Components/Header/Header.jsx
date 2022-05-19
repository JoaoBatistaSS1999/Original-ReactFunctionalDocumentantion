import React from "react";
import styles from "./Header.module.css";

import Sun from "../../Assets/sun.png";
import Moon from "../../Assets/moon.png";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Functional React Documentation</h1>
      <div>
        <img
          className={styles.lightMode}
          src={Moon}
          alt='Moon'
          title='Light mode'
        />
      </div>
    </header>
  );
}

export default Header;
