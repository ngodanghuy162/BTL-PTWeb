import React from 'react';
import styles from "./Content.module.scss"
import Layout from '../index';
import Sender from "./Sender/index"
import Receiver from "./Receiver/index"
import Information from "./GoodsInformation/Index"
import Discount from "./Discount/index"
import Cod from "./COD/index"


function Content() {
  return (
    <Layout>
      <div className={styles['Main']}>
        <div className={styles['MainList']}>
          <Sender />
          <Receiver />
          {/* <Discount /> */}
        </div>
        <div className={styles['MainList']}>
          <Information />
          <Cod />
        </div>

        <button className={styles['Submit']}>Submit</button>
      </div>
    </Layout>
  );
}

export default Content;
