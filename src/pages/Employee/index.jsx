import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from './App.module.scss';

function Layout() {
  return (
    <div className={styles['wrapper']}>
        <Header />
        <div className={styles['container']}>
            <Sidebar />
            <div className={styles['content']}></div>
        </div>
    </div>
  );
}

export default Layout;
