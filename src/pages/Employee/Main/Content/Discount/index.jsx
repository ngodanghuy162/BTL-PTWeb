import React from 'react';
import styles from "../Content.module.scss";
import myStyles from "./Discount.module.scss";
import { FiTruck } from "react-icons/fi";
import { MdOutlineAdfScanner } from "react-icons/md";
import { BsTicketDetailed } from "react-icons/bs";


function Sender() {
  return (
    <div className={styles['Content']}>
      <header className={styles['Header']}>
        <div className={styles['ListContent']}>
        <FiTruck />
          <h3>Người gửi</h3>
        </div>
        <div className={styles['ListContent']}>
          {/* <p>Quản lý thông tin người gửi</p> */}
          {/* <FaArrowRight /> */}
        </div>
      </header>
      <div className={styles['MainContent']}>
        <div className={myStyles['SaleContent']}>
            <div className={myStyles['NameContent']}>
            <MdOutlineAdfScanner />
            <p>Dịch vụ cộng thêm</p>
            </div>
            <div className={myStyles['NameContent']}>
                <div className={myStyles['NameContent']}>
            <BsTicketDetailed />
            <p>Khuyến mại</p>
                </div>
                <select id="mySelect" name="mySelect">
                    <option value="" disabled selected hidden>Chọn một mục</option>
                    <option value="0">Giá trị 0</option>
                    <option value="1">Giá trị 1</option>
                    <option value="2">Giá trị 2</option>
                </select>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sender;
