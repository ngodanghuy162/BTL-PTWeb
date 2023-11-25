import styles from './Input.module.scss';
import React, { useState, useEffect } from 'react';
import orderApi from '../../../assets/api/OrderApi';

const Input = () => {
    const [isDivVisible, setIsDivVisible] = useState(false);

    const [orderData, setOrderData] = useState(null);

    const [trackingCode, setTrackingCode] = useState('');

    const handleButtonClick = () => {
        if(!isDivVisible)
            setIsDivVisible(!isDivVisible);
    };

    const handleInputChange = (event) => {
        setTrackingCode(event.target.value);
      };
    
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await orderApi.getDataSearch('1HWC1700386580181');
            setOrderData(response);
        } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

    const handleReloadData = () => {
        //fetchData();
    };


  const formatDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Date(dateTimeString).toLocaleDateString(undefined, options);
  };

    return (
        <div className={styles['contentSearch']}>
            <div className={styles['iconContent']}>
                <i class="fa-solid fa-clipboard-list"></i>
                <h2 className={styles['textSearch']}>Mã bưu gửi (tra nhiều bill thêm dấu phẩy giữa các bill VD: EB125966888VN, EI125556888VN)</h2>
            </div>
            
            <div className={styles['formInput']}>
                <input className={styles['inputSearch']}  type="text" value={trackingCode} onChange={handleInputChange} placeholder='Nhập mã bưu gửi' />
                <button className={styles['buttonSearch']}  onClick={handleReloadData()}>Tìm kiếm</button>
            </div>

            {orderData ? (
                <div className={styles['contentLogs']}>
                <h1>Thông tin vận đơn {orderData.maVanDon}</h1>
                    <table className={styles['BillInformation']}>
                        <tbody>
                            <tr>
                                <td>Người nhận</td>
                                <td>{orderData.name}</td>
                            </tr>
                            <tr>
                                <td>Địa chỉ</td>
                                <td>{orderData.diaChiGui}</td>
                            </tr>
                            <tr>
                                <td>Người gửi</td>
                                <td>{orderData.receiver}</td>
                            </tr>
                            <tr>
                                <td>Địa chỉ</td>
                                <td>{orderData.diaChiNhan}</td>
                            </tr>
                        </tbody>
                    </table>
                    {orderData.statusDonHangModelList && orderData.statusDonHangModelList.length > 0 && (
                        <>
                        <h2>Order Status History</h2>
                        <ul>
                            {orderData.statusDonHangModelList.map((statusItem) => (
                            <li key={statusItem.id}>
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
            ) : (<div></div>)}    
    </div>
    )
}

export default Input;