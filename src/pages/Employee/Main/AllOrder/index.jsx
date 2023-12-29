import React, { useEffect, useState } from 'react';
import styles from "../OrderCf/OrderCf.module.scss";
import Layout from '../Layout/index';
import Detail from '../../../Order/Search/Details';
import { useAuth } from "../../../../hooks/AuthContext"
import StatusApi from "../../../../api/UpdateStatusGdApi"
import OrderApi from "../../../../api/OrderApi"
import UpdateStatusApi from '../../../../api/UpdateStatusGdApi';

function OrdeCf() {
  const [selectedOption, setSelectedOption] = useState(1);
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
  const [dataDetail, setDataDetail] = useState({});

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
        const response = await OrderApi.getAllOrder(user.userInfo.id_work, true, user.token);
        setData(response);
        console.log(selectedOption);
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

  const onClickCheckIn4 = (id, data) => {
    setMvd(id);
    setDataDetail(data)
    onClickCheck();
  }

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
    setDataEdit(data);
  }

  return (
    <Layout>
      <div className={styles['Main']}>
        <div>
          <select value={selectedOption} onChange={handleSelectChange} className={styles['SelectStatus']}>
            <option value="1">Đơn hàng thành công</option>
            <option value="2">Đơn hàng không thành công</option>
            <option value="3">Đơn hoàn trả</option>
          </select>

        </div>
        {data && data.map((order) => (
          <div key={order.id} className={styles['ListOrder']}>
            <div className={styles['ListName']}>
              <p className={styles['ListNameId']}>thời gian gửi: {formatDateTime(parseTimeString(order.dateSend))}</p>
              <h3>Mã vận đơn: {order.maVanDon}</h3>
              <p className={styles['ListNameStatus']}>{order.status}</p>
            </div>
            <div className={styles['ListButton']}>
              <button
                value={order.maVanDon}
                onClick={(e) => onClickCheckIn4(e.target.value, order)}
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
            <Detail onClose={onClickCheck} dataSearch={dataDetail} />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default OrdeCf;
