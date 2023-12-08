import React from 'react';
import styles from './Bill.module.scss'

const Export = () => {
    return (
        <div className={styles['Bill']}>
            <header className={styles['BillHeader']}>
                <h1>Magic Post</h1>
                <img src="src\assets\images\qr.png" className={styles['QrImg']} alt="qr.png" />
            </header>

            <main>
                <table>
                    <tr className={styles['BillContentFirst']}>
                        <td>
                            <div>
                                <p>1. Thông tin người gửi</p>
                                <p>abcxyz</p>
                                <p>Số điện thoại</p>
                                <p>Mã khách hàng</p>
                                <p>Mã Bưu chính</p>
                            </div>
                        </td>

                        <td>
                            <p>2. Thông tin người nhận</p>
                            <p>abcxyz</p>
                            <p>Số điện thoại</p>
                            <p>Mã khách hàng</p>
                            <p>Mã Bưu chính</p>
                        </td>
                    </tr>

                    <tr>
                        <td className={styles[`${styles['BillContentFirst']} ${styles['BorderNone']}`]}>
                            <table className={styles['BorderNone']}>
                                <div>
                                    <p>3. Loại hàng gửi</p>
                                    <label>
                                      <input type="checkbox" />Tài liệu
                                    </label>
                                    <label>
                                      <input type="checkbox" />Hàng hoá
                                    </label>
                                </div>
                                <div className={styles['BorderTop']}>
                                    <p>4. Nội dung trị giá bưu gửi</p>
                                    <table className={styles['BorderNone']}>
                                        <tr>
                                            <td className={styles['BorderLeftNone']}>Nội dung</td>
                                            <td>Số lượng</td>
                                            <td>Trị giá</td>
                                            <td className={styles['BorderRightNone']}>Giấy tờ đính kèm</td>
                                        </tr>
                                        <tr>
                                            <td className={styles['BorderLeftNone']}>Tổng</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td className={styles['BorderRightNone']}>0</td>
                                        </tr>
                                    </table>
                                </div>
                                <div>
                                    <p>5. Dịch vụ đặc biệt/Cộng thêm</p>
                                    <p>..............................................</p>
                                    <p>Mã hợp đồng EMSC/PPA</p>
                                </div>
                                <div>
                                    <p>6.Chỉ dẫn của người gửi khi không phát được bưu gửi</p>
                                    <div>
                                        <label>
                                        <input type="checkbox" />Chuyển hoàn ngay
                                        </label>
                                        <label>
                                        <input type="checkbox" />Gọi điện cho người gửi/BC gửi
                                        </label>
                                        <label>
                                        <input type="checkbox" />Huỷ
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                        <input type="checkbox" />Hàng hoá
                                        </label>
                                        <label>
                                        <input type="checkbox" />Hàng hoá
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <p>7 Cam kết của người gửi</p>
                                </div>
                            </table>
                        </td>

                        <td>
                            <table className={styles['FullHeight']}>
                                <tr>
                                    <td>
                                        <div>
                                            <p>9. Cước</p>
                                            <div className={styles['BillHeader']}>
                                                <p>a. Cước chính</p>
                                                <p>9.500</p>
                                            </div>
                                            <div className={styles['BillHeader']}>
                                                <p>b. Phụ phí</p>
                                                <p>9.500</p>
                                            </div>
                                            <div className={styles['BillHeader']}>
                                                <p>c, Cước GTGT</p>
                                                <p>9.500</p>
                                            </div>
                                            <div className={styles['BillHeader']}>
                                                <p>d. Tổng cước (Gồm VAT)</p>
                                                <p>9.500</p>
                                            </div>
                                            <div className={styles['BillHeader']}>
                                                <p>e. Thu khác</p>
                                                <p>9.500</p>
                                            </div>
                                            <div className={styles['BillHeader']}>
                                                <p>f. Tổng thu</p>
                                                <p>9.500</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p>11. Thu của người nhận</p>
                                            <div className={styles['BillHeader']}>
                                                <p>COD:</p>
                                                <p>0</p>
                                            </div>
                                            <div className={styles['BillHeader']}>
                                                <p>Thu Khác:</p>
                                                <p>0</p>
                                            </div>
                                            <div className={styles['BillHeader']}>
                                                <p>Tổng thu:</p>
                                                <p>0</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div>
                                        <p>10. Khối lượng</p>
                                        <div className={styles['BillHeader']}>
                                            <p>Khối lượng thực tế:</p>
                                            <p>0</p>
                                        </div>
                                        <div className={styles['BillHeader']}>
                                            <p>Khối quy đổi:</p>
                                            <p>0</p>
                                        </div>
                                    </div>
                                    <div>12. Chú dẫn nghiệp vụ</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>13. Bưu cục chấp nhận</p>
                                    </td>
                                    <td>
                                        <p>14. Ngày giờ nhận</p>
                                        <p>...h..../...../..../20......</p>
                                        <p>Người nhận/Người Được uỷ quyền nhận</p>
                                        <p>(Ký, ghi rõ họ tên)</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </main>

            <footer>Hotline: 0123456789 - Website: www.abc.com.vn - Email: cskh@ems.com.vn</footer>
        </div>
    )
}

export default Export;