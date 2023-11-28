import React from 'react';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <aside className={styles['wrapper']}>
      <ul>
        <li className={styles["menu"]}>Tổng quan</li>
        <li className={styles["menu"]}>Shop</li>
        <li className={styles["menu"]}>Sản phẩm</li>
        <li className={styles["menu"]}>Quản lý mua hàng</li>
        <li className={styles["menu"]}>Tồn Kho</li>
        <li className={styles["menu"]}>Đơn hàng</li>
        <li className={styles["menu"]}>Kênh bán</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
