import styles from './Search.module.scss'
import React, { useState, useEffect } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMdPrint } from "react-icons/io";
import orderApi from '../../../api/OrderApi';
import Bill from '../Bill/pdf';
const Detail = ({dataSearch, onClose }) => {
    const dataToSend = { key: 'value' };
    const handleClick = () => {
        const queryString = new URLSearchParams(dataSearch).toString();
        const newTab = window.open(`/pdf?${queryString}`, '_blank');
    };
    const [clickPrint, setClickPrint] = useState(false);

    const onClickPrint = () => {
        setClickPrint(!clickPrint);
        console.log(clickPrint);
    }
    const handleClose = () => {
        onClose();
      };

  const formatDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Date(dateTimeString).toLocaleDateString(undefined, options);
  };

    return (
        <div className={styles['list-hidden_content']}>
            <div className={styles['hidden_header']}>
                <h1 className={styles['hidden_header-text']}>Tra cứu vận đơn {dataSearch.maVanDon}</h1>
                <IoMdCloseCircleOutline className={styles['hidden_header-icon']}  onClick={handleClose}/>
            </div>

            <div className={styles['contentLogs']}>
                <h1>Thông tin vận đơn {dataSearch.maVanDon}</h1>
                    <table className={styles['BillInformation']}>
                        <thead>
                            <tr>
                                <td className={styles['in4Left']}>Người nhận</td>
                                <td className={styles['in4Right']}>{dataSearch.name}</td>
                            </tr>
                            <tr>
                                <td className={styles['in4Left']}>Địa chỉ</td>
                                <td className={styles['in4Right']}>{dataSearch.diaChiGui}</td>
                            </tr>
                            <tr>
                                <td className={styles['in4Left']}>Người gửi</td>
                                <td className={styles['in4Right']}>{dataSearch.receiver}</td>
                            </tr>
                            <tr>
                                <td className={styles['in4Left']}>Địa chỉ</td>
                                <td className={styles['in4Right']}>{dataSearch.diaChiNhan}</td>
                            </tr>
                        </thead>
                    </table>
                    {dataSearch.statusDonHangModelList && dataSearch.statusDonHangModelList.length > 0 && (
                        <>
                        <h2>Order Status History</h2>
                        <ul className={styles['Log']}>
                            {dataSearch.statusDonHangModelList.map((statusItem) => (
                            <li className={styles['Status']} key={statusItem.id}>
                                <p>Type: {statusItem.type}</p>
                                <p>Status: {statusItem.status}</p>
                                <p>Time Send: {formatDateTime(statusItem.timeSend)}</p>
                                <p>Time Receive: {statusItem.timeReceive ? formatDateTime(statusItem.timeReceive) : 'Not received yet'}</p>
                            </li>
                            ))}
                        </ul>
                        </>
                    )}
                    
                    <button  onClick={handleClick}><IoMdPrint />In</button>
                </div>
        </div>
    )
}

export default Detail;