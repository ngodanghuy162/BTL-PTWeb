import React, { useState, useEffect } from 'react';
import styles from "./Content.module.scss"
import Layout from '../Layout/index';
import Sender from "./Sender/index"
import Receiver from "./Receiver/index"
import Information from "./GoodsInformation/Index"
import Discount from "./Discount/index"
import Cod from "./COD/index"
import {useAuth} from "../../../../hooks/AuthContext"
import OrderApi from "../../../../api/OrderApi"


function Content() {
  const {getUser} = useAuth();
  const user = getUser();

  const [fullData, setFullData] = useState({
    name: "Test",
    sender: "ABC",
    phoneSender: "0123456",
    phoneReceiver: "0123456",
    receiver: "CBA",
    id_diemgiaodichtao: 0,
    diaChigui: "Vinh Phuc",
    diaChiNhan: "Hanoi",
    weight: 2.3,
    type: "Lay ngay",
    shipCost: 1,
    cod: 1,
    isSenderPayShip: true,
    canSeeWhenReceive: true,
  });
  
  const [senderData, setSenderData] = useState({
    phone: "",
    fullName: "",
    address: "",
  });
  
  const [receiverData, setReceiverData] = useState({
    phone: "",
    fullName: "",
    address: "",
  });
  
  const [informationData, setInformationData] = useState({
    classify: "",
    name: "",
    weight: "",
  });
  
  const [codData, setCodData] = useState({
    type: "",
    shipCost: 1,
    cod: 1,
    isSenderPayShip: true,
    canSeeWhenReceive: true,
  });

  const handleSenderDataChange = (data) => {
    setSenderData(data);
  };
  
  const handleReceiverDataChange = (data) => {
    setReceiverData(data);
  };
  
  const handleInformationDataChange = (data) => {
    setInformationData(data);
  };
  
  const handleCodDataChange = (data) => {
    setCodData(data);
  };

  useEffect(() => {
    setFullData((prevData) => ({
      ...prevData,
      id_diemgiaodichtao: user.userInfo.id_work,
      sender: senderData.fullName,
      phoneSender: senderData.phone,
      diaChigui: senderData.address,
    }));
  }, [senderData]);

  useEffect(() => {
    setFullData((prevData) => ({
      ...prevData,
      id_diemgiaodichtao: user.userInfo.id_work,
      phoneReceiver: receiverData.phone,
      receiver: receiverData.fullName,
      diaChiNhan: receiverData.address,
    }));
  }, [receiverData]);

  useEffect(() => {
    setFullData((prevData) => ({
      ...prevData,
      id_diemgiaodichtao: user.userInfo.id_work,
      name: informationData.name,
      weight: informationData.weight,
    }));
  }, [informationData]);

  useEffect(() => {
    setFullData((prevData) => ({
      ...prevData,
      id_diemgiaodichtao: user.userInfo.id_work,
      type: codData.type,
      shipCost: codData.shipCost,
      cod: codData.cod,
      isSenderPayShip: codData.isSenderPayShip,
      canSeeWhenReceive: codData.canSeeWhenReceive,
    }));
  }, [codData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      OrderApi.newOrder(fullData, user.token).then(response => {
        if(response) {
          console.log(response);
        }
        else {
          console.log('err');
        }
      }).catch(error => {
        console.log(error);
        if (error.response && error.response.status === 403) {
            // Xử lý khi nhận được lỗi 403 (Forbidden)
            console.error('Access forbidden:', error.response.data);
            // setShowMess(true); // Hiển thị thông báo hoặc thực hiện hành động khác tùy thuộc vào yêu cầu của bạn
        } else {
            console.error('Error:', error);
            // setShowMess(true);
        }
    });;
    }catch (error) {
      // Xử lý lỗi khi thực hiện request
      console.error('Error:', error);
      // setShowMess(true);
  }
  }
  return (
    <Layout>
      <div className={styles['Main']}>
        <div className={styles['MainList']}>
          <Sender  onDataChange={handleSenderDataChange}/>
          <Receiver  onDataChange={handleReceiverDataChange}/>
          {/* <Discount /> */}
        </div>
        <div className={styles['MainList']}>
          <Information onDataChange={handleInformationDataChange}/>
          <Cod onDataChange={handleCodDataChange}/>
        </div>

        <button className={styles['Submit']} onClick={handleSubmit}>Submit</button>
      </div>
    </Layout>
  );
}

export default Content;
