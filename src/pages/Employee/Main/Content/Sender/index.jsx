import React from 'react';
import styles from "../Content.module.scss"
import myStyles from "./Sender.module.scss";
import { TbUserShare } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";


function Sender() {
  return (
    <div className={styles['Content']}>
      <header className={styles['Header']}>
        <div className={styles['ListContent']}>
          <TbUserShare />
          <h3>Người gửi</h3>
        </div>
        <div className={styles['ListContent']}>
          <p>Quản lý thông tin người gửi</p>
          <FaArrowRight />
        </div>
      </header>
      <div className={styles['MainContent']}>
        <div className={styles['MainContentCenter']}>
          {/* <select id="mySelect" name="mySelect" className={styles['ChooseContent']}>
                    <option value="" disabled selected hidden>Chọn một mục</option>
                    <option value="0">Giá trị 0</option>
                    <option value="1">Giá trị 1</option>
                    <option value="2">Giá trị 2</option>
                </select> */}

<div className={myStyles['ListMainContent']}>
            <label className={styles['InputContent']}>
              <p>Điện thoại</p>
              <input type="text"  placeholder="Nhập số điện thoại người gửi"/>
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

export default Sender;
