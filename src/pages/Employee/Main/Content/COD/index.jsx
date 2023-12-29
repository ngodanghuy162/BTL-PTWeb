import React, { useState, useEffect } from 'react';
import styles from "../Content.module.scss";
import myStyles from "./COD.module.scss";

function COD({ onDataChange }) {
  const [codData, setCodData] = useState({
    type: "",
    shipCost: 0,
    cod: 0,
    isSenderPayShip: true,
    canSeeWhenReceive: true,
  });

  useEffect(() => {
    onDataChange(codData);
  }, [codData, onDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCodData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setCodData((prevData) => ({
      ...prevData,
      [name]: value === 'true',
    }));
  };

  return (
    <div className={styles['Content']}>
      <div className={styles['MainContent']}>
        <div className={myStyles['CodContent']}>
          <div className={myStyles['ListContent']}>
            <div>
              <h3>TIỀN THU HỘ</h3>
              <p>Hình thức thanh toán tiền COD</p>
              <input
                type="number"
                min="0"
                value={codData.cod}
                name="cod"
                onChange={handleChange}
              />
            </div>
            <div>
              <h3>YÊU CẦU KHI GIAO</h3>
              <label>
                <input
                  type="radio"
                  name="canSeeWhenReceive"
                  value="true"
                  checked={codData.canSeeWhenReceive}
                  onChange={handleRadioChange}
                />
                <p>Cho khách xem hàng</p>
              </label>
              <label>
                <input
                  type="radio"
                  name="canSeeWhenReceive"
                  value="false"
                  checked={!codData.canSeeWhenReceive}
                  onChange={handleRadioChange}
                />
                <p>Không cho khách xem hàng</p>
              </label>
              <input
                type="text"
                name="shipCost"
                id=""
                placeholder="Ghi chú"
                value={codData.type}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <div>
              <h3>NGƯỜI TRẢ CƯỚC</h3>
              <label>
                <input
                  type="radio"
                  name="isSenderPayShip"
                  value="true"
                  checked={codData.isSenderPayShip}
                  onChange={handleRadioChange}
                />
                <p>Người gửi</p>
              </label>
              <label>
                <input
                  type="radio"
                  name="isSenderPayShip"
                  value="false"
                  checked={!codData.isSenderPayShip}
                  onChange={handleRadioChange}
                />
                <p>Người nhận</p>
              </label>
              <input type="text" name="" id="" placeholder="Ghi chú" />
            </div>
            <div>
              <h3>Hình thức giao hàng</h3>
              <label>
                <input type="radio" name="where" />
                <p>Giao nhanh</p>
              </label>
              <label>
                <input type="radio" name="where" />
                <p>Giao tiết kiệm</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default COD;
