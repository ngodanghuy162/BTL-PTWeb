import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import { CiStickyNote } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { FaBox } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";


function Sidebar() {

  const [isListVisible, setListVisible] = useState(false);

  const toggleList = () => {
    setListVisible(!isListVisible);
  };
  return (
    <aside className={styles['wrapper']}>
      <ul>
        <li className={styles["menu"]}>
          <div className={styles["menuContent"]}>
            <CiStickyNote />
            <h5>Tổng quan</h5>
          </div>
          </li>
        <li className={styles["menu"]}>
          <div className={styles["menuContent"]}>
            <CiShop />
            <h5>Shop</h5>
          </div>
          </li>
        <li className={styles["menu"]}>
          <div className={styles["menuContent"]}>
            <MdOutlineProductionQuantityLimits />
            <h5>Sản phẩm</h5>
          </div>
          </li>
        <li className={styles["menu"]}>
          <div className={styles["menuContent"]}>
            <FaClipboardList />
            <h5>Quản lý mua hàng</h5>
          </div>
          </li>
        <li>
          <div className={styles["menu"]} onClick={toggleList}>
            <div className={styles["menuContent"]}>
              <FaBoxes />
              <h5>Tạo đơn</h5>
            </div>
            <FaCaretDown/>
          </div>
          {isListVisible && (
            <ul className={styles["menuContentChild"]}>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          )}
          </li>
        <li className={styles["menu"]}>
          <div className={styles["menuContent"]}>
            <FaBox />
            <h5>Đơn hàng</h5>
          </div>
          </li>
        <li className={styles["menu"]}>
          <div>
            <CiShoppingTag />
            <h5>Kênh bán</h5>
          </div>
          </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
