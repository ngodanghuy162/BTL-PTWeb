import React, { useState } from 'react';
import styles from "../Content.module.scss";
import myStyles from "./Sender.module.scss";
import { TbUserShare } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";

function Sender({ onDataChange }) {
  const [senderData, setSenderData] = useState({
    phone: "",
    fullName: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSenderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Notify parent component about data change
    onDataChange(senderData);
  };

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
          <div className={myStyles['ListMainContent']}>
            <label className={styles['InputContent']}>
              <p>Điện thoại</p>
              <input
                type="text"
                name="phone"
                value={senderData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại người gửi"
              />
            </label>

            <label className={styles['InputContent']}>
              <p>Họ tên</p>
              <input
                type="text"
                name="fullName"
                value={senderData.fullName}
                onChange={handleChange}
                placeholder="Nhập họ và tên người gửi"
              />
            </label>

            <label className={styles['InputContent']}>
              <p>Địa chỉ</p>
              <input
                type="text"
                name="address"
                value={senderData.address}
                onChange={handleChange}
                placeholder="Nhập địa chỉ(Số nhà, phường, thị trấn, thành phố)"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sender;
