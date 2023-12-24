import styles from './Search.module.scss';
import Detail from './Details';
import React, { useState, useEffect } from 'react';
import orderApi from '../../../api/OrderApi';
import axios from 'axios';

const Input = () => {
    const [isDivVisible, setIsDivVisible] = useState(false);

    
  const [displayValue, setDisplayValue] = useState('');

    const [orderData, setOrderData] = useState(null);

    const [trackingCode, setTrackingCode] = useState('');

    const [isSearch, setisSearch] = useState(false);

    const handleButtonClick = () => {
        fetchData();
        // setisSearch(!isSearch);
    };

    const handleInputChange = (event) => {
        setTrackingCode(event.target.value);
      };
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/order/tracuu?mavandon=${trackingCode}`);
            //const response = await orderApi.getDataSearch(trackingCode);
            setOrderData(response);
        } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const handleReloadData = () => {
        //fetchData();
    };

      
    const handleClick = () => {
        setIsDivVisible(!isDivVisible);
      };


    return (
        <div className={styles['contentSearch']}>
            <div className={styles['iconContent']}>
                <i class="fa-solid fa-clipboard-list"></i>
                <h2 className={styles['textSearch']}>Mã bưu gửi (tra nhiều bill thêm dấu phẩy giữa các bill VD: EB125966888VN, EI125556888VN)</h2>
            </div>
            
            <div className={styles['formInput']}>
                <input className={styles['inputSearch']}  type="text" value={trackingCode} onChange={handleInputChange} placeholder='Nhập mã bưu gửi' />
                <button className={styles['buttonSearch']}  onClick={handleButtonClick}>Tìm kiếm</button>
            </div>

            {orderData && (
        <div>
          <h2>Thông tin đơn hàng</h2>
          <p><strong>Tên đơn hàng:</strong> {orderData.name}</p>
          <p><strong>Người gửi:</strong> {orderData.sender}</p>
          <p><strong>Người nhận:</strong> {orderData.receiver}</p>
          {/* Thêm các thông tin khác tương tự... */}

          {/* Hiển thị danh sách trạng thái */}
          <h3>Danh sách trạng thái</h3>
          <ul>
            {orderData.statusDonHangModelList.map((status) => (
              <li key={status.id}>
                <strong>Thời gian gửi:</strong> {status.timeSend}<br />
                <strong>Thời gian nhận:</strong> {status.timeReceive ? status.timeReceive : 'Chưa nhận'}<br />
                <strong>Loại:</strong> {status.type}<br />
                <strong>Trạng thái:</strong> {status.status}<br />
              </li>
            ))}
          </ul>

          <p><strong>Chi phí:</strong> {orderData.cost}</p>
          <p><strong>Mã vận đơn:</strong> {orderData.maVanDon}</p>
        </div>
      )}

            {/* {isSearch && (
                <div>
                    <div onClick={handleButtonClick} className={styles['list-hidden_background']}></div>
                    {data && (<Detail data = {orderData}/>)}
                </div>
            )}     */}
    </div>
    )
}

export default Input;