import React, { useState, useEffect } from 'react';
import styles from './Search.module.scss';
import axios from 'axios';
import Detail from './Details';
import orderApi from '../../../api/OrderApi';

const OrderTracking = () => {
  const [mavandon, setMavandon] = useState('');
  const [orderData, setOrderData] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/order/tracuu?mavandon=${mavandon}`);
      // const response = await orderApi.getorderData(mavandon);
      setOrderData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleButtonClick = () => {
    getData();
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
        <input
          className={styles['inputSearch']}
          type="text"
          value={mavandon}
          placeholder="Nhập mã vận đơn"
          onChange={(e) => setMavandon(e.target.value)}
        />
        <button className={styles['buttonSearch']} onClick={handleButtonClick}>Tìm kiếm</button>

    </div>
  {orderData && (<div className={styles['contentLogs']}>
              <h1>Thông tin vận đơn {orderData.maVanDon}</h1>
                  <table className={styles['BillInformation']}>
                      <thead>
                          <tr>
                              <td className={styles['in4Left']}>Người nhận</td>
                              <td className={styles['in4Right']}>{orderData.name}</td>
                          </tr>
                          <tr>
                              <td className={styles['in4Left']}>Địa chỉ</td>
                              <td className={styles['in4Right']}>{orderData.diaChiGui}</td>
                          </tr>
                          <tr>
                              <td className={styles['in4Left']}>Người gửi</td>
                              <td className={styles['in4Right']}>{orderData.receiver}</td>
                          </tr>
                          <tr>
                              <td className={styles['in4Left']}>Địa chỉ</td>
                              <td className={styles['in4Right']}>{orderData.diaChiNhan}</td>
                          </tr>
                      </thead>
                  </table>
                  {orderData.statusDonHangModelList && orderData.statusDonHangModelList.length > 0 && (
                      <>
                      <h2>Order Status History</h2>
                      <ul className={styles['Log']}>
                          {orderData.statusDonHangModelList.map((statusItem) => (
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
              </div>   )}
    </div>
  );
};

export default OrderTracking;