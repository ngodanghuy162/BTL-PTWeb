import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./OrderCf.module.scss";
import Layout from '../Layout/index';
import Detail from '../../../Order/Search/Details';
import { useAuth } from "../../../../hooks/AuthContext"
import Edit from './Edit/Edit';
import StatusApi from "../../../../api/UpdateStatusTkApi"
import OrderApi from "../../../../api/OrderApi"
import UpdateStatusApi from '../../../../api/UpdateStatusTkApi';

function OrdeCf() {
  const [selectedOption, setSelectedOption] = useState('hanggui');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const { getUser } = useAuth();
  const user = getUser();
  const [CheckIn4, setCheckIn4] = useState(false);
  const [CheckCf, setCheckCf] = useState(false);
  const [data, setData] = useState(null);
  const [dataOrder, setDataOrder] = useState(null);
  const [mvd, setMvd] = useState(null);
  const [selectedOrderStatus, setselectedOrderStatus] = useState(null);
  const [clickEdit, setClickEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState({});

  const parseTimeString = (timeString) => {
    return timeString ? new Date(timeString) : null;
  };

  // Hàm để định dạng đối tượng Date thành chuỗi ngày giờ
  const formatDateTime = (dateTime) => {
    return dateTime ? dateTime.toLocaleString() : "Không có dữ liệu";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StatusApi.getDataStatus(user.userInfo.id_work, selectedOption, user.token);
        setData(response);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedOption]);

  useEffect(() => {
    const fetchDataOrder = async () => {
      try {
        const response = await OrderApi.getDataSearch(mvd);
        // Lưu dữ liệu vào state
        setDataOrder(response);
      } catch (error) {
        console.log(user.userInfo.id_work);
        console.error('Error fetching data:', error);
      }
    };

    fetchDataOrder();
  }, [mvd]);
  const handleSubmit = async (idVanDon) => {
    // e.preventDefault();

    try {
      UpdateStatusApi.updateStatus(user.userInfo.id_work, idVanDon, user.token).then(response => {
        if (response) {
          console.log(response);
        } else {
          console.error('Try again pls.');
        }
      }).catch(error => {
        if (error.response && error.response.status === 403) {
          // Xử lý khi nhận được lỗi 403 (Forbidden)
          console.error(error.response.data);
          // setShowMess(true); // Hiển thị thông báo hoặc thực hiện hành động khác tùy thuộc vào yêu cầu của bạn
        } else {
          console.error('Error:', error);
          // setShowMess(true);
        }
      });
    } catch (error) {
      // Xử lý lỗi khi thực hiện request
      console.error('Error:', error);
      // setShowMess(true);
    }
  };


  const onClickCheck = () => {
    setCheckIn4(!CheckIn4);
  }

  const onClickCheckIn4 = (id) => {
    setMvd(id);
    onClickCheck();
  }

  // useEffect(() => {
  //   setSelectedType(selectedType);
  //   setSelectedPlace(selectedPlace);
  // }, [selectedType, selectedPlace])

  // Hàm xử lý sự kiện khi giá trị thanh lựa chọn thay đổi
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectType = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSelectPlace = (event) => {
    setSelectedPlace(event.target.value);
  };

  const onClickCf = (orderId, idDon) => {
    // setGetMvd(idDon)
    handleSubmit(idDon);
    setselectedOrderStatus(orderId);
    setCheckCf(!CheckCf);
  }

  const onClickEdit = (data) => {
    setClickEdit(!clickEdit);
    console.log(1);
    console.log(data);
    setDataEdit(data);
  }

  return (
    <Layout>
      <div className={styles['Main']}>
        <div>
          <select value={selectedOption} onChange={handleSelectChange} className={styles['SelectStatus']}>
            <option value="hanggui">Hàng Gửi</option>
            <option value="hangnhan">Hàng Đến</option>
          </select>

        </div>
        {/* <div className={styles['ListOrder']}>
          <div className={styles['ListName']}>
            <p className={styles['ListNameId']}>Thời gian gửi</p>
            <h3>Mã vận đơn</h3>
          </div>
        </div> */}
        {data && data.map((order) => (
          <div key={order.id} className={styles['ListOrder']}>
            <div className={styles['ListName']}>
              <p className={styles['ListNameId']}>thời gian gửi: {formatDateTime(parseTimeString(order.timeSend))}</p>
              <h3>Mã vận đơn: {order.mavandonNotCol}</h3>
              <p className={styles['ListNameStatus']}>{order.status}</p>
            </div>
            <div className={styles['ListButton']}>
              {order.status === "Đang vận chuyển" && selectedOption === "hanggui" ? <></> : <div>
                {order.status === 'Đang vận chuyển' ?
                  <button
                    className={styles['button1']}
                    onClick={() => onClickCf(order.id, order.mavandonNotCol)}
                  >
                    Xác nhận
                  </button> :
                  <button
                    className={styles['button1']}
                    onClick={() => onClickEdit(order)}
                  >
                    Chuyển tiếp
                  </button>
                }
                {clickEdit && <Edit onClose={onClickEdit} dataEdit={dataEdit} />}
                {/* {selectedOrderStatus === order.id && CheckCf && (
                <ul className={styles['ListStatus']}>
                  {order.status === 'Đang vận chuyển' ? (<li>Xác nhận đơn</li>):(<li>Chuyển tiếp</li>)}
                </ul>
              )} */}
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
        {CheckIn4 && dataOrder && user && (
          <div>
            <div onClick={onClickCheck} className={styles['list-hidden_background']}></div>
            <Detail onClose={onClickCheck} dataSearch={data} />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default OrdeCf;
