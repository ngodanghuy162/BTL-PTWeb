import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import styles from './App.module.scss';

function Layout() {
  return (
    <div className={styles['wrapper']}>
        <Header />
        <div className={styles['container']}>
          <div className={styles['scrollbarContent']}>
            <Sidebar />
          </div>
            
          <div className={styles['scrollbarContent']}>
            <div className={styles['content']}>
              <Content />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Layout;
