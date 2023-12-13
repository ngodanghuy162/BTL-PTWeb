import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import { FaClipboardList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";


function Sidebar() {
  const [isListVisible, setListVisible] = useState(false);
  const [isListStatus, setListStatus] = useState(false);
  const [isListCf, setListCf] = useState(false);

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
    <aside className={styles['wrapper']}>
      <ul>
        <li>
          <div className={styles["menu"]} onClick={onClickListStatus}>
            <div className={styles["menuContent"]}>
              <FaClipboardList className={styles["menuIcon"]} />
              <h5>Cập nhật Status</h5>
              {/* Thay đổi trạng thái đơn hàng trung chuyển giữa các đơn vị và thay đổi trạng thái nhận hàng để đi giao */}
            </div>
            <FaCaretDown className={styles["menuIcon"]} />
          </div>
          {isListStatus && (
            <ul>
              <Link to="/" className={styles["menuContentChild"]}>
                <li>Danh sách đơn hàng</li>
              </Link>
            </ul>
          )}
        </li>
        <li>
          <div className={styles["menu"]} onClick={toggleList}>
            <div className={styles["menuContent"]}>
              <FaBoxes className={styles["menuIcon"]} />
              <h5>Tạo đơn</h5>
            </div>
            <FaCaretDown className={styles["menuIcon"]} />
          </div>
          {isListVisible && (
            <ul className={styles["menuContentChild"]}>
              <li>Đơn lẻ</li>
            </ul>
          )}
        </li>
        <li>
          <div className={styles["menu"]} onClick={onClickListCf} >
            <div className={styles["menuContent"]} >
              <FaBox className={styles["menuIcon"]} />
              <h5>Xác nhận đơn hàng</h5>
              {/* list 2 loại đơn xác nhận gồm đơn trung chuyển và đơn giao đến người nhận */}
            </div>
            <FaCaretDown className={styles["menuIcon"]} />
          </div>
          {isListCf && (
            <ul className={styles["menuContentChild"]}>
              <li>Đơn trung chuyển</li>
              <li>Đơn giao</li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
