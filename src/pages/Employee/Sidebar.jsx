import React from 'react';
import styles from './Sidebar.module.scss';
import { CiStickyNote } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { FaBox } from "react-icons/fa";


function Sidebar() {
  return (
    <aside className={styles['wrapper']}>
      <ul>
        <li className={styles["menu"]}>
          <CiStickyNote />
          <h5>Tổng quan</h5>
          </li>
        <li className={styles["menu"]}>
          <CiShop />
          <h5>Shop</h5>
          </li>
        <li className={styles["menu"]}>
          <MdOutlineProductionQuantityLimits />
          <h5>Sản phẩm</h5>
          </li>
        <li className={styles["menu"]}>
          <FaClipboardList />
          <h5>Quản lý mua hàng</h5>
          </li>
        <li className={styles["menu"]}>
          <FaBoxes />
          <h5>Tồn Kho</h5>
          </li>
        <li className={styles["menu"]}>
          <FaBox />
          <h5>Đơn hàng</h5>
          </li>
        <li className={styles["menu"]}>
          <CiShoppingTag />
          <h5>Kênh bán</h5>
          </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
