import React, { useEffect, useState } from 'react';
import styles from "../OrderCf/OrderCf.module.scss";
import Layout from '../Layout/index';
import Detail from '../../../Order/Search/Details';
import { useAuth } from "../../../../hooks/AuthContext"
import OrderApi from "../../../../api/OrderApi"
import UpdateStatusApi from '../../../../api/UpdateStatusGdApi';

function OrdeCf() {
  const [selectedOption, setSelectedOption] = useState(1);
  const { getUser } = useAuth();
  const user = getUser();
  const [CheckIn4, setCheckIn4] = useState(false);
  const [CheckCf, setCheckCf] = useState(false);
  const [data, setData] = useState(null);
  const [dataOrder, setDataOrder] = useState(null);
  const [mvd, setMvd] = useState(null);
  const [clickEdit, setClickEdit] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const [clickButton, setClickButton] = useState(false);

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
        const response = await UpdateStatusApi.LayDsDonGiao(user.userInfo.id_work, user.token);
        setData(response);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedOption, clickButton]);

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
  const handleSubmit = async (idVanDon, isOk) => {
    // e.preventDefault();

    try {
      UpdateStatusApi.XacNhanDonGiao(user.userInfo.id_work, isOk, idVanDon, user.token).then(response => {
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
    setClickButton(!clickButton);
    setMvd(id);
    setDataDetail(data)
    onClickCheck();
  }

  const onClickOk = (mavandon) => {
    setClickButton(!clickButton);
    handleSubmit(mavandon, true);
  };

  const onClickNotOk = (mavandon) => {
    setClickButton(!clickButton);
    handleSubmit(mavandon, false);
  };

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
          {/* <select value={selectedOption} onChange={handleSelectChange} className={styles['SelectStatus']}>
            <option value="1">Đơn hàng thành công</option>
            <option value="2">Đơn hàng không thành công</option>
            <option value="3">Đơn hoàn trả</option>
          </select> */}

        </div>
        {data && data.map((order) => (
          <div key={order.id} className={styles['ListOrder']}>
            <div className={styles['ListName']}>
              <p className={styles['ListNameId']}>thời gian gửi: {formatDateTime(parseTimeString(order.timeSend))}</p>
              <h3>Mã vận đơn: {order.mavandonNotCol}</h3>
              <p className={styles['ListNameStatus']}>{order.status}</p>
            </div>
            <div className={styles['ListButton']}>
              <button
                value={order.mavandonNotCol}
                onClick={(e) => onClickOk(order.mavandonNotCol)}
                className={styles['button1']}
              >
                Thành Công
              </button>
              <button
                value={order.mavandonNotCol}
                onClick={(e) => onClickNotOk(order.mavandonNotCol)}
                className={styles['button3']}
              >
                Thất Bại
              </button>
              <button
                value={order.mavandonNotCol}
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
