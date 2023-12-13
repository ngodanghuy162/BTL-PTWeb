import React from 'react';
import styles from "../Content.module.scss"
import myStyles from "./Receiver.module.scss"
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { TbUserCheck } from "react-icons/tb";
import { IoIosInformationCircle } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";


function Receiver() {
  return (
    <div className={styles['Content']}>
      <header className={styles['Header']}>
        <div className={styles['ListContent']}>
          <TbUserCheck />
          <h3>Người nhận</h3>
        </div>
        <div className={styles['ListContent']}>
          <MdCheckBoxOutlineBlank />
          <p>Quản lý thông tin người gửi</p>
          <IoIosInformationCircle />
        </div>
      </header>
      <div className={styles['MainContent']}>
        <div className={myStyles['MainContentCenter']}>
          <div className={myStyles['ListMainContent']}>
            <label className={styles['InputContent']}>
              <p>Điện thoại</p>
              <input type="text" placeholder="Nhập số điện thoại người nhận"/>
            </label>

            <label className={styles['InputContent']}>
              <p>Họ tên</p>
              <input type="text" placeholder="Nhập họ và tên người gửi"/>
            </label>

            <label className={styles['InputContent']}>
              <p>Địa chỉ</p>
              <input type="text" placeholder="Nhập địa chỉ(Số nhà, phường, thị trấn, thành phố)"/>
            </label>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Receiver;
