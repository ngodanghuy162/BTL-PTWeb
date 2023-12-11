import React from 'react';
import styles from "../Content.module.scss"
import myStyles from "./GoodsInformation.module.scss"
import { TbUserShare } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaBox } from "react-icons/fa";


function GoodsInformation() {
    return (
        <div className={styles['Content']}>
            <header className={styles['Header']}>
                <div className={styles['ListContent']}>
                    <FaBox />
                    <h3>Thông tin hàng hoá</h3>
                </div>
                <div className={styles['ListContent']}>
                    <p>Quản lý danh sách hàng hoá</p>
                    <FaArrowRight />
                </div>
            </header>
            <div className={styles['MainContent']}>
                <div className={styles['MainContentCenter']}>
                    <div className={myStyles['MainContentCenter']}>
                        <div className={myStyles['ListMainContent']}>
                            <div className={styles['InputContent']}>
                                <p>Mã đơn hàng</p>
                                <input type="text" />
                            </div>

                            <div className={styles['InputContent']}>
                                <p>Tên hàng</p>
                                <input type="text" />
                            </div>

                            <div className={styles['InputContent']}>
                                <p>Số lượng</p>
                                <input type="text" />
                            </div>

                            <div className={styles['InputContent']}>
                                <p>Trọng lượng</p>
                                <input type="text" />
                            </div>
                            <div className={styles['InputContent']}>
                                <p>Giá trị</p>
                                <input type="text" />
                            </div>

                            {/* <div  className={myStyles['InputContent']}>
                                <p>Kích thước</p>
                                <div className={myStyles['InputList']}>
                                    <input type="text" name="" id="" />
                                    <input type="text" name="" id="" />
                                    <input type="text" name="" id="" />
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoodsInformation;
