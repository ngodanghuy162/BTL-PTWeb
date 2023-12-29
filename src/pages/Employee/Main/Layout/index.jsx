import React, { useState, useEffect } from 'react';
import Header from './Header/MainHeader/Header';
import MiniHeader from "./Header/MiniHeader/index"
import Sidebar from './Sidebar/Sidebar';
import styles from './Layout.module.scss';


function Layout({children}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles['background']}>
      <div className={styles['wrapper']}>
      {isMobile ? (
        <div className={styles['menuIcon']}>
          <MiniHeader />
        </div>
      ) : (
        <div className={styles['header']}>
          <Header />
        </div>
      )}
      <div className={styles['container']}>
        {isMobile ? null : (
          <div className={`${styles['scrollbarContent']} ${styles['sidebar']}`}>
            <Sidebar />
          </div>
        )}
        <div className={`${styles['scrollbarContent']} ${styles['content']}`}>
        {children}
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Layout;
