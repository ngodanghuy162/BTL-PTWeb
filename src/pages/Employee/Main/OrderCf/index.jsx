import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./OrderCf.module.scss";
import Layout from '../Layout/index';
import Detail from './Detail/index';
import {useAuth} from "../../../../hooks/AuthContext"

function OrdeCf() {
  const {getUser} = useAuth();
  const user = getUser();
  const [CheckIn4, setCheckIn4] = useState(false);
  const [CheckCf, setCheckCf] = useState(false);
  const [data, setData] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy token từ nơi bạn lưu trữ nó (localStorage, Redux state, etc.)
        const token = user.token;

        const response = await axios.get('http://localhost:8080/order/thongkestatusorder/dtk?iddtk=1&type=hanggui', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        // Lưu dữ liệu vào state
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const onClickCheck = () => {
    setCheckIn4(!CheckIn4);
    console.log(user.token);
  }

  const onClickCf = (orderId) => {
    setSelectedOrderId(orderId);
    setCheckCf(!CheckCf);
  }

  return (
    <Layout>
      <div className={styles['Main']}>
      {data && data.map((order) => (
        <div key={order.id} className={styles['ListOrder']}>
          <div className={styles['ListName']}>
            <p className={styles['ListNameId']}>id: {order.id}</p>
            <h3>Mã vận đơn: {order.mavandonNotCol}</h3>
            <p className={styles['ListNameStatus']}>Trạng thái: {order.status}</p>
          </div>
          <div className={styles['ListButton']}>
            <div>
              <button
                className={styles['button1']}
                onClick={() => onClickCf(order.id)}
              >
                Xác nhận
              </button>
              {selectedOrderId === order.id && (
                <ul className={styles['ListStatus']}>
                  <li>click</li>
                  <li>click</li>
                  <li>click</li>
                </ul>
              )}
            </div>
            <button
              onClick={onClickCheck}
              className={styles['button2']}
            >
              Thông tin
            </button>
          </div>
        </div>
      ))}
          {CheckIn4 && (
            <div>
              <div onClick={onClickCheck} className={styles['list-hidden_background']}></div>
              <Detail onClose={onClickCheck}/>
            </div>
          )}
      </div>
    </Layout>
  );
}

export default OrdeCf;
