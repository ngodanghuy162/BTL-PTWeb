import React, { useState, useEffect } from 'react';
import styles from './Search.module.scss';
import axios from 'axios';
import Detail from './Details';
import orderApi from '../../../api/OrderApi';

const OrderTracking = () => {
  const [mavandon, setMavandon] = useState('');
  const [orderData, setOrderData] = useState(null);
  const [isDivVisible, setIsDivVisible] = useState(false);

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
    setIsDivVisible(!isDivVisible);
};

const handleClose = () => {
  setIsDivVisible(!isDivVisible);
};

const formatDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return new Date(dateTimeString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={styles['contentSearch']}>
    <div className={styles['iconContent']}>
        <i class="fa-solid fa-clipboard-list"></i>
        <h2 className={styles['textSearch']}>Mã bưu gửi</h2>
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
    {isDivVisible && orderData && (
                    <div>
                        <div onClick={handleClose} className={styles['list-hidden_background']}></div>
                        <Detail dataSearch = {orderData} onClose={handleClose}/>
                    </div>
                )}
    </div>
  );
};

export default OrderTracking;