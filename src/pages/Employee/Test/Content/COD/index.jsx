import React from 'react';
import styles from "../Content.module.scss"
import myStyles from "./COD.module.scss"


function COD() {
    return (
        <div className={styles['Content']}>
            <div className={styles['MainContent']}>
                <div className={myStyles['CodContent']}>
                    <div className={myStyles['ListContent']}>
                        <div>
                            <h3>TIỀN THU HỘ</h3>
                            <p>Hình thức thanh toán tiền COD</p>
                            <label htmlFor="">
                                <input type="checkbox" />
                                <p>Thu hộ bằng tiền hàng</p>
                            </label>
                            <input type="number" min="0"/>
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
                            <input type="text" name="" id="" />
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
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <h3>YÊU CẦU LẤY HÀNG</h3>
                            <label>
                                <input type="radio" name="where" />
                                <p>Đến lấy hàng tại nhà</p>
                            </label>
                            <label>
                                <input type="radio" name="where" />
                                <p>Gửi tại bưu cục</p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default COD;
