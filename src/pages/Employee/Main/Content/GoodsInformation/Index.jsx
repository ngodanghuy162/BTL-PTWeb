import React, { useState } from 'react';
import styles from "../Content.module.scss"
import myStyles from "./GoodsInformation.module.scss"
import { TbUserShare } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaBox } from "react-icons/fa";


function GoodsInformation({ onDataChange }) {
    const [goodsInformationData, setGoodsInformationData] = useState({
        classify: "",
        name: "",
        weight: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setGoodsInformationData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  
      onDataChange(goodsInformationData);
    };
  
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
                                <p>Loại hàng</p>
                                <input
                                    type="text"
                                    name="classify"
                                    value={goodsInformationData.classify}
                                    onChange={handleChange}
                                    placeholder="Nhập thông tin hàng"
                                />
                            </div>

                            <div className={styles['InputContent']}>
                                <p>Tên hàng</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={goodsInformationData.name}
                                    onChange={handleChange}
                                    placeholder="Nhập tên hàng"
                                />
                            </div>

                            <div className={styles['InputContent']}>
                                <p>Trọng lượng</p>
                                <input
                                    type="text"
                                    name="weight"
                                    value={goodsInformationData.weight}
                                    onChange={handleChange}
                                    placeholder="Gam"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoodsInformation;
