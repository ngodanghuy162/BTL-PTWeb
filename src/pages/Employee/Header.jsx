import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles['wrapper']}>
      <div className={styles['inner']}>
        <img src='src\assets\images\logo.png' className={styles['img']} alt='logo' />

        <input type="text"  className={styles['input']}/>

        <div className={styles['action']}></div>
      </div>
    </header>
  );
}

export default Header;
