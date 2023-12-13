import React, { useState } from 'react';
import styles from "../Content.module.scss"
import myStyles from "./COD.module.scss"


function COD() {
    const [quantity, setQuantity] = useState(0);

    // Hàm xử lý sự kiện khi giá trị thay đổi
    const handleQuantityChange = (event) => {
        // Lấy giá trị mới từ sự kiện
        const newQuantity = event.target.value;
        // Cập nhật state với giá trị mới
        setQuantity(newQuantity);
    };
    return (
        <div className={styles['Content']}>
            <div className={styles['MainContent']}>
                <div className={myStyles['CodContent']}>
                    <div className={myStyles['ListContent']}>
                        <div>
                            <h3>TIỀN THU HỘ</h3>
                            <p>Hình thức thanh toán tiền COD</p>
                            {/* <label htmlFor="">
                                <input type="checkbox" />
                                <p>Thu hộ bằng tiền hàng</p>
                            </label> */}
                            <input type="number" min="0"
                                value={quantity}
                                onChange={handleQuantityChange} />
                        </div>
                        <div>
                            <h3>YÊU CẦU KHI GIAO</h3>
                            <label>
                                <input type="radio" name="check" />
                                <p>Cho khách xem hàng</p>
                            </label>
                            <label>
                                <input type="radio" name="check" />
                                <p>Không cho khách xem hàng</p>
                            </label>
                            <input type="text" name="" id="" placeholder="Ghi chú"/>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3>NGƯỜI TRẢ CƯỚC</h3>
                            <label>
                                <input type="radio" name="who" />
                                <p>Người gửi</p>
                            </label>
                            <label>
                                <input type="radio" name="who" />
                                <p>Người nhận</p>
                            </label>
                            <input type="text" name="" id="" placeholder="Ghi chú"/>
                        </div>
                        <div>
                            <h3>Hình thức giao hàng</h3>
                            <label>
                                <input type="radio" name="where" />
                                <p>GIao nhanh</p>
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
