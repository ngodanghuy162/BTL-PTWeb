import React from 'react';
import styles from './Header.module.scss';
import { IoMdSearch } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";

function Header() {
  return (
    <header className={styles['wrapper']}>
      <div className={styles['inner']}>
        <img src='https://giaohangtietkiem.vn/wp-content/uploads/2015/10/logo.png' className={styles['img']} alt='logo' />

        <div className={styles['SearchContent']}>
          <input type="text"  className={styles['inputSearch']} placeholder="Tra cứu đơn hàng"/>
          <IoMdSearch  className={`${styles.iconHeader} ${styles.iconSearch}`} />
        </div>

        <div className={styles['UserAction']}>
          <p>Thông báo</p>
          <LuBellRing className={styles['iconHeader']} />
          <strong><p>Bùi Thị Nhài</p></strong>
          <FaCircleUser className={styles['iconHeader']} />
        </div>
      </div>
    </header>
  );
}

export default Header;
