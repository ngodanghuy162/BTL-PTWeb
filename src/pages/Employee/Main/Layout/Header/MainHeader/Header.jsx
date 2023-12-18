import React, {useState} from 'react';
import styles from './Header.module.scss';
import { IoMdSearch } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";

function Header() {

  const [checkNotification, setCheckNotification] = useState(false);

  const onClickCheck = () => {
    setCheckNotification(!checkNotification);
  }
  
  return (
    <header className={styles['wrapper']}>
      <div className={styles['inner']}>
        <img src='https://bambooship.cdn.vccloud.vn/wp-content/uploads/2021/11/shipper-1-1.png' className={styles['img']} alt='logo' />

        <div className={styles['SearchContent']}>
          <input type="text"  className={styles['inputSearch']} placeholder="Tra cứu đơn hàng"/>
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
          <LuBellRing className={styles['iconHeader']} />
          <strong><p>Bùi Thị Nhài</p></strong>
          <FaCircleUser className={styles['iconHeader']} />
        </div>
      </div>
    </header>
  );
}

export default Header;
