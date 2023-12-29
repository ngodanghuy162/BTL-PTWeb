import React, { useEffect, useState } from 'react';
import { useAuth } from "../../../../../../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from './Header.module.scss';
import { IoMdSearch } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import ProfileApi from "../../../../../../api/ProfileNvtkApi"
import Detail from "../Detail/index"

function Header() {
  const {getUser} = useAuth();
  const user = getUser();
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const [checkNotification, setCheckNotification] = useState(false);
  const [clickIconUser, setClickIconUser] = useState(false);
  const [clickIconBell, setClickIconBell] = useState(false);
  const [clickProfile, setClickProfile] = useState(false);
  // const [data, setData] = useState(null);

  const onClickCheck = () => {
    setCheckNotification(!checkNotification);
  }

  const onClickIconUser = () => {
    setClickIconUser(!clickIconUser);
  }

  const onClickIconBell = () => {
    setClickIconBell(!clickIconBell);
  }

  const onClickProfile = () => {
    setClickProfile(!clickProfile);
  }

  const onClickLogout = () => {
    handleLogout();
    navigate("/");
  }
  const onClickLogo = () => {
    navigate("/");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProfileApi.getDataProfile(user.token);

        // Lưu dữ liệu vào state
        console.log(response);
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

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
          <strong><p>{user.userInfo.name}</p></strong>
          <div className={styles['ListUser']}>
            <FaCircleUser onClick={onClickIconUser} className={styles['iconHeader']} />
            {clickIconUser && (
              <ul className={styles['ListTitleUser']}>
                <li onClick={onClickProfile}>Thông tin tài khoản</li>
                <li onClick={handleLogout}>Đăng xuất</li>
              </ul>
            )}
            {clickProfile && <Detail onClose={onClickProfile} data={user}/>}

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
