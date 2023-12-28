import React, { useState } from 'react';
import {useAuth} from "../../../../../hooks/AuthContext";
import {useNavigate} from "react-router-dom";
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import { FaClipboardList } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


function Sidebar({status}) {
  const {handleLogout} = useAuth();
  const {getUser} = useAuth();
  const user = getUser();
  const navigate = useNavigate();
  // const path = `/${user.userinfo.role.toLowerCase()}`;
  const nvgdPathNvgd = '/nvgd';

  const statusDen = '/nvtk/hangden';
  const statusGui = '/nvtk/hanggui';
  const nvtkPathNvgd = '/nvtk';

  const [isListVisible, setListVisible] = useState(false);
  const [isListStatus, setListStatus] = useState(false);
  const [isListCf, setListCf] = useState(false);
  const [isNvgd, setIsNvgd] = useState(user.userInfo.role.includes('NVGD'))
  const [isNvtk, setIsNvtk] = useState(user.userInfo.role.includes('NVTK'))

  const toggleList = () => {
    setListVisible(!isListVisible);
  };

  const onClickListStatus = () => {
    setListStatus(!isListStatus);
  };

  const onClickListCf = () => {
    setListCf(!isListCf);
  };

  const onClickLogout = () => {
    handleLogout();
    navigate("/");
}

  return (
    <aside className={styles['wrapper']}>
      <ul>
        <li>
          {isNvtk && <><div className={styles["menu"]} onClick={onClickListStatus}>
            <div className={styles["menuContent"]}>
              <FaClipboardList className={styles["menuIcon"]} />
              <Link to={"/nvtk/status"}>
                <h5>Cập nhật Status</h5>
              </Link>
            </div>
            {/* <FaCaretDown className={styles["menuIcon"]} /> */}
          </div>
          {/* {isListStatus && (
            <ul className={styles["menuContentChild"]}>
              <Link to={isNvgd ? statusDen : statusGui} status={"hanggui"}>
                <li>Hàng Gửi</li>
              </Link>
              <Link to={isNvgd ? statusGui : statusDen} status={"hanggui"}>
                <li>Hàng Đến</li>
              </Link>
            </ul>
          )} */}</>}
        </li>
        <li>
         {isNvgd && <><div className={styles["menu"]} onClick={toggleList}>
            <div className={styles["menuContent"]}>
              <FaBoxes className={styles["menuIcon"]} />
              <h5>Tạo đơn</h5>
            </div>
            <FaCaretDown className={styles["menuIcon"]} />
          </div>
          {isListVisible && (
            <ul className={styles["menuContentChild"]}>
            <Link to={nvgdPathNvgd}>
              <li>Đơn lẻ</li>
            </Link>
            </ul>
          )}</>}
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
      <CiLogout onClick={handleLogout} className={styles["IconLogout"]}/>
    </aside>
  );
}

export default Sidebar;
