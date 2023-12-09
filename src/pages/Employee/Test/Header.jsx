import React from 'react';
import styles from './Header.module.scss';
import { IoMdSearch } from "react-icons/io";

function Header() {
  return (
    <header className={styles['wrapper']}>
      <div className={styles['inner']}>
        <img src='src\assets\images\logo.png' className={styles['img']} alt='logo' />

        <div>
          <input type="text"  className={styles['input']}/>
          <IoMdSearch />
        </div>

        <div className={styles['action']}></div>
      </div>
    </header>
  );
}

export default Header;