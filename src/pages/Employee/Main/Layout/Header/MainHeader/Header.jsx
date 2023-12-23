import React, { useState } from 'react';
import { useAuth } from "../../../../../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import { IoMdSearch } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";

function Header() {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const [checkNotification, setCheckNotification] = useState(false);
  const [clickIconUser, setClickIconUser] = useState(false);
  const [clickIconBell, setClickIconBell] = useState(false);

  const onClickCheck = () => {
    setCheckNotification(!checkNotification);
  }

  const onClickIconUser = () => {
    setClickIconUser(!clickIconUser);
  }

  const onClickIconBell = () => {
    setClickIconBell(!clickIconBell);
  }

  const onClickLogout = () => {
    handleLogout();
    navigate("/");
  }
  const onClickLogo = () => {
    navigate("/");
  }

  return (
    <header className={styles['wrapper']}>
      <div className={styles['inner']}>
        <img onClick={onClickLogo} src='https://bambooship.cdn.vccloud.vn/wp-content/uploads/2021/11/shipper-1-1.png' className={styles['img']} alt='logo' />

        <div className={styles['SearchContent']}>
          <input type="text" className={styles['inputSearch']} placeholder="Tra cứu đơn hàng" />
          <IoMdSearch onClick={onClickCheck} className={`${styles.iconHeader} ${styles.iconSearch}`} />
          {checkNotification && (
            <ul>
              <li>Tin chuẩn</li>
              <li>Tin chuẩn</li>
              <li>Tin chuẩn</li>
            </ul>
          )}
        </div>

        <div className={styles['UserAction']}>
          <p>Thông báo</p>
          <div>
            <LuBellRing onClick={onClickIconBell} className={styles['iconHeader']} />
            {clickIconBell && (
              <ul className={styles['ListTitleBell']}>
                <li>Thông báo 1</li>
                <li>Thông báo 2</li>
                <li>Thông báo 3</li>
              </ul>
            )}
          </div>
          <strong><p>Bùi Thị Nhài</p></strong>
          <div className={styles['ListUser']}>
            <FaCircleUser onClick={onClickIconUser} className={styles['iconHeader']} />
            {clickIconUser && (
              <ul className={styles['ListTitleUser']}>
                <li>Thông tin tài khoản</li>
                <li onClick={handleLogout}>Đăng xuất</li>
              </ul>
            )}

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
