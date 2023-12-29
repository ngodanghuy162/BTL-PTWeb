import React, { useState, useEffect } from 'react';
import styles from "../Content.module.scss"
import myStyles from "./Receiver.module.scss"
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { TbUserCheck } from "react-icons/tb";
import { IoIosInformationCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";

function Receiver({ onDataChange }) {
  const [receiverData, setReceiverData] = useState({
    phone: "",
    fullName: "",
    address: "",
  });

  useEffect(() => {
    onDataChange(receiverData);
  }, [receiverData, onDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReceiverData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
          <FaArrowRight />
        </div>
      </header>
      <div className={styles['MainContent']}>
        <div className={myStyles['MainContentCenter']}>
          <div className={myStyles['ListMainContent']}>
            <label className={styles['InputContent']}>
              <p>Điện thoại</p>
              <input
                type="text"
                name="phone"
                value={receiverData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại người gửi"
              />
            </label>

            <label className={styles['InputContent']}>
              <p>Họ tên</p>
              <input
                type="text"
                name="fullName"
                value={receiverData.fullName}
                onChange={handleChange}
                placeholder="Nhập họ và tên người gửi"
              />
            </label>

            <label className={styles['InputContent']}>
              <p>Địa chỉ</p>
              <input
                type="text"
                name="address"
                value={receiverData.address}
                onChange={handleChange}
                placeholder="Nhập địa chỉ (Số nhà, phường, thị trấn, thành phố)"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receiver;
