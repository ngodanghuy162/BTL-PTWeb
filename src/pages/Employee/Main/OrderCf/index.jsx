import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./OrderCf.module.scss";
import Layout from '../Layout/index';
import Detail from '../../../Order/Search/Details';
import {useAuth} from "../../../../hooks/AuthContext"
import StatusApi from "../../../../api/UpdateStatusApi"
import OrderApi from "../../../../api/OrderApi"

function OrdeCf() {
  const [selectedOption, setSelectedOption] = useState('hanggui');
  const {getUser} = useAuth();
  const user = getUser();
  const [CheckIn4, setCheckIn4] = useState(false);
  const [CheckCf, setCheckCf] = useState(false);
  const [data, setData] = useState(null);
  const [dataOrder, setDataOrder] = useState(null);
  const [mvd, setMvd] = useState(null);
  const [selectedOrderStatus, setselectedOrderStatus] = useState(null);
  const [selectedOrderId, setselectedOrderId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StatusApi.getDataStatus(user.userInfo.id_work, selectedOption, user.token);
        // Lưu dữ liệu vào state
        console.log(response);
        setData(response);
      } catch (error) {
        console.log(user.userInfo.id_work);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedOption]); 

  
  // useEffect(() => {
  //   const fetchStatus = async () => {
  //     try {
  //       const response = await StatusApi.updateStatus(user.id_work, selectedOption, user.token);
  //       // Lưu dữ liệu vào state
  //       setData(response);
  //       console.log(selectedOrderId);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchStatus();
  // }, [selectedOrderId]); 
  
  useEffect(() => {
    const fetchDataOrder = async () => {
      try {
        const response = await OrderApi.getDataSearch(mvd);
        // Lưu dữ liệu vào state
        console.log(response);
        console.log(mvd);
        setDataOrder(response);
      } catch (error) {
        console.log(user.userInfo.id_work);
        console.error('Error fetching data:', error);
      }
    };

    fetchDataOrder();
  }, [mvd]); 

  const onClickCheck = () => {
    setCheckIn4(!CheckIn4);
  }

  const onClickCheckIn4 =(id) => {
    setMvd(id);
    onClickCheck();
  }

  // Hàm xử lý sự kiện khi giá trị thanh lựa chọn thay đổi
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onClickCf = (orderId) => {
    setselectedOrderStatus(orderId);
    setCheckCf(!CheckCf);
  }

  return (
    <Layout>
      <div className={styles['Main']}>
        <div>
          <select value={selectedOption} onChange={handleSelectChange}>
            <option value="hanggui">Hang Gui</option>
            <option value="hangnhan">Hang Den</option>
          </select>

        </div>
      {data && data.map((order) => (
        <div key={order.id} className={styles['ListOrder']}>
          <div className={styles['ListName']}>
            <p className={styles['ListNameId']}>thời gian gửi: {order.id}</p>
            <h3>Mã vận đơn: {order.mavandonNotCol}</h3>
            <p className={styles['ListNameStatus']}>{order.status}</p>
          </div>
          <div className={styles['ListButton']}>
            {order.status === "Đang vận chuyển" && selectedOption === "hanggui" ? <></> : <div>
              <button
                className={styles['button1']}
                onClick={() => onClickCf(order.id)}
              >
                Xác nhận
              </button>
              {selectedOrderStatus === order.id && CheckCf && (
                <ul className={styles['ListStatus']}>
                  {order.status === 'Đang vận chuyển' ? (<li>Done</li>):(<li>Chuyển tiếp</li>)}
                  
                </ul>
              )}
            </div>}
            <button
              value={order.mavandonNotCol}
              onClick={(e) => onClickCheckIn4(e.target.value)}
              className={styles['button2']}
            >
              Thông tin
            </button>
          </div>
        </div>
      ))}
          {CheckIn4 && dataOrder && (
            <div>
              <div onClick={onClickCheck} className={styles['list-hidden_background']}></div>
              <Detail onClose={onClickCheck} dataSearch={dataOrder}/>
            </div>
          )}
      </div>
    </Layout>
  );
}

export default OrdeCf;
