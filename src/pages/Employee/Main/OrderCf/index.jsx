import React, { useState } from 'react';
import styles from "./OrderCf.module.scss";
import Layout from '../Layout/index';
import Detail from './Detail/index';
import {useAuth} from "../../../../hooks/AuthContext"

function OrdeCf() {
  const {getUser} = useAuth();
  const user = getUser();
  const [CheckIn4, setCheckIn4] = useState(false);
  const [CheckCf, setCheckCf] = useState(false);

  const onClickCheck = () => {
    setCheckIn4(!CheckIn4);
    console.log(user.token);
  }

  const onClickCf = () => {
    setCheckCf(!CheckCf);
  }
  return (
    <Layout>
      <div className={styles['Main']}>
        <div className={styles['ListOrder']}>
          <div className={styles['ListName']}>
            <p className={styles['ListNameId']}>id: 12345</p>
            <h3>Họ tên: Hoàng Bảo Khanh</h3>
            <p className={styles['ListNameStatus']}>Trạng thái: </p>
          </div>
          <div className={styles['ListButton']}>
            <div>
            <button className={styles['button1']} onClick={onClickCf}>Xác nhận</button>
            {CheckCf && (
              <ul className={styles['ListStatus']}>
                <li>click</li>
                <li>click</li>
                <li>click</li>
              </ul>
            )}

            </div>
            <button onClick={onClickCheck} className={styles['button2']}>Thông tin</button>
          </div>
        </div>
        
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
