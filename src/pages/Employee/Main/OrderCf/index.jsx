import React from 'react';
import styles from "./OrdeCf.module.scss";
import Layout from '../Layout/index';

function OrdeCf() {
  return (
    <Layout>
      <div className={styles['Main']}>
        <div className={styles['ListOrder']}>
          <p>id: 12345</p>
          <h3>Họ tên: Hoàng Bảo Khanh</h3>
          <p>Trạng thái: </p>
        </div>
        <div className={styles['ListOrder']}>
          <p>id: 12345</p>
          <h3>Họ tên: Hoàng Bảo Khanh</h3>
          <p>Trạng thái: </p>
        </div>
      </div>
    </Layout>
  );
}

export default OrdeCf;
