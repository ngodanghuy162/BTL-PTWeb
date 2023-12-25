import React,  {useState} from 'react';
import styles from "./Detail.module.scss";
import { IoCloseSharp } from "react-icons/io5";

function Detail({onClose, data}) {
    const handleClose = () => {
        onClose();
      };
    return (
        <div className={styles['Main']}>
            <header className={styles['Header']}>
                <div></div>
                <h5>Thông tin tài khoản</h5>
                <IoCloseSharp className={styles['iconClose']}  onClick={handleClose}/>
            </header>
            <table className={styles['Content']}>
                <tbody>
                    <tr>
                        <td>id: {data.userInfo.id}</td>
                        <td>id word: {data.userInfo.id}</td>
                    </tr>
                    <tr>
                        <td>Họ tên: {data.userInfo.name}</td>
                        <td>Số điện thoại: {data.userInfo.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td>Công việc: {data.userInfo.role}</td>
                        <td>Địa điểm làm việc: {data.userInfo.workPlaceName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Detail;
