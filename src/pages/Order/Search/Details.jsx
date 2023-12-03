import styles from './Search.module.scss'
import React, { useState, useEffect } from 'react';
import orderApi from '../../../api/OrderApi';
const Detail = (dataSearch) => {
    const [isDivVisible, setIsDivVisible] = useState(false);

    const handleClick = () => {
        setIsDivVisible(!isDivVisible);
      };


  const formatDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Date(dateTimeString).toLocaleDateString(undefined, options);
  };

    return (
        <div className={styles['list-hidden_content']}>
            <div className={styles['content']}>
                <h1>Thông tin vận đơn </h1>
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
                </div>
        </div>
    )
}

export default Detail;