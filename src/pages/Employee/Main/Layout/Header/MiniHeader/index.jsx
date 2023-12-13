import React, { useState } from 'react';
import styles from './MiniHeader.module.scss';
import { HiMenu } from "react-icons/hi";
import { CgCloseR } from "react-icons/cg";
import { LuBellRing } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { FaBoxes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isListVisible, setListVisible] = useState(false);
  const [isListStatus, setListStatus] = useState(false);
  const [isListCf, setListCf] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleList = () => {
    setListVisible(!isListVisible);
  };

  const onClickListStatus = () => {
    setListStatus(!isListStatus);
  };

  const onClickListCf = () => {
    setListCf(!isListCf);
  };

  return (
    <header className={styles['wrapper']}>
      <div className={styles['inner']}>
        <img src='src\assets\images\logo.png' className={styles['img']} alt='logo' />

        <div className={styles['UserAction']} onClick={toggleMenu}>
          {isMenuOpen ? (
            <CgCloseR className={styles['iconHeader']} />
          ) : (
            <HiMenu className={styles['iconHeader']} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        // Render your menu items here
        <div className={styles['menu']}>
          <div className={styles['UserAction']}>
            <LuBellRing className={styles['iconHeader']} />
            <p>Thông báo</p>
          </div>
          <div className={styles['UserAction']}>
            <FaCircleUser className={styles['iconHeader']} />
            <strong><p>Bùi Thị Nhài</p></strong>
          </div>
          <div className={styles["MenuAction"]} onClick={onClickListStatus}>
            <div>
              <FaBoxes className={styles["menuIcon"]} />
              <h5>Cập nhật Status</h5>
            </div>
            {isListStatus && (
              <ul className={styles["menuContentChild"]}>
                <li>Danh sách đơn hàng</li>
              </ul>
            )}
          </div>
          <div className={styles["MenuAction"]} onClick={toggleList}>
            <div>
              <FaBoxes className={styles["menuIcon"]}/>
              <h5>Tạo đơn</h5>
            </div>
            {isListVisible && (
              <ul className={styles["menuContentChild"]}>
                <li>Đơn lẻ</li>
              </ul>
            )}
          </div>
          <div className={styles["MenuAction"]} onClick={onClickListCf}>
            <div>
              <FaBoxes className={styles["menuIcon"]} />
              <h5>Xác nhận đơn hàng</h5>
            </div>
            {isListCf && (
              <ul className={styles["menuContentChild"]}>
                <li>Đơn trung chuyển</li>
                <li>Đơn giao</li>
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
