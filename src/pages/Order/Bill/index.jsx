import React from 'react';
import styles from './Bill.module.scss'

const Export = ({data}) => {
    const formatDateTime = (dateTimeString) => {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
      return new Date(dateTimeString).toLocaleDateString(undefined, options);
    };
    return (
        <div className={styles['Bill']}>
            <header className={styles['BillHeader']}>
                <h1>Magic Post</h1>
                <img src="src\assets\images\qr.png" className={styles['QrImg']} alt="qr.png" />
            </header>

            <main>
                <table>
                    <tbody className={styles['BillContentBody']}>
                    <tr className={styles['BillContentFirst']}>
                        <td>
                            <div>
                                <h4>1. Thông tin người gửi</h4>
                                <p className={styles['BillAddress']}>{data ? data.sender:""}<br/>{data ? data.diaChiGui:""}</p>
                                <strong><p>Số điện thoại: {data ? data.phoneSender:""}</p></strong>
                                <div className={styles['ContentNumber']}>
                                    <strong><p>Mã khách hàng</p></strong>
                                    <strong><p>Mã bưu chính</p></strong>
                                </div>
                            </div>
                        </td>

                        <td className={styles['BorderLeft']}>
                            <h4>2. Thông tin người nhận</h4>
                            <p className={styles['BillAddress']}>{data ? data.receiver:""}<br/>{data ? data.diaChiNhan:""}</p>
                            <strong><p>Số điện thoại: {data ? data.phoneReceiver:""}</p></strong>
                                <div className={styles['ContentNumber']}>
                                    <strong><p>Mã khách hàng</p></strong>
                                    <strong><p>Mã bưu chính</p></strong>
                                </div>
                        </td>
                    </tr>

                    <tr  className={`${styles.UpContent} ${styles.BillContentFirst}`}>
                        <td className={`${styles.BillContentFirst} ${styles.BorderNone}`}>
                            <div className={styles['UpContent']}>
                                <h4>3. Loại hàng gửi</h4>
                                <div className={`${styles.ContentNumber} ${styles.Margin5}`}>
                                    <label>
                                        <input type="checkbox" />
                                        <p>Tài liệu</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" />
                                        <p>Hàng hoá</p>
                                    </label>
                                </div>
                            </div>
                            <div className={styles['BorderTop']}>
                                <h4>4. Nội dung trị giá bưu gửi</h4>
                                <table className={`${styles.BorderNone} ${styles.Contenttext} ${styles.TableChilden}`}>
                                    <tbody>
                                    <tr>
                                        <td className={styles['BorderLeftNone']}>Nội dung</td>
                                        <td className={styles['Contenttext']}>Số lượng</td>
                                        <td>Trị giá</td>
                                        <td className={styles['BorderRightNone']}>Giấy tờ đính kèm</td>
                                    </tr>
                                    <tr>
                                        <td className={styles['BorderLeftNone']}>Tổng</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td className={styles['BorderRightNone']}>0</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            <div className={styles.BorderBottom}>
                                <h4>5. Dịch vụ đặc biệt/Cộng thêm</h4>
                                <p>..............................................</p>
                                <p>Mã hợp đồng EMSC/PPA</p>
                            </div>
                            <div className={styles['BorderBottom']}>
                                <h4>6. Chỉ dẫn của người gửi khi không phát được bưu gửi</h4>
                                <div className={styles['ListInput']}>
                                    <label>
                                    <input type="checkbox" />
                                    <p>Chuyển hoàn ngay</p>
                                    </label>
                                    <label>
                                    <input type="checkbox" />
                                    <p>Gọi điện cho người gửi/BC gửi</p>
                                    </label>
                                    <label>
                                    <input type="checkbox" checked={true}/>
                                    <p>Huỷ</p>
                                    </label>
                                </div>
                                <div className={styles['ListInput']}>
                                    <label>
                                    <input type="checkbox" />
                                    <p>Chuyển hoàn trước ngày</p>
                                    </label>
                                    <label>
                                    <input type="checkbox" />
                                    <p>Chuyền hoàn khi hết thời gian lưu trữ</p>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <h4>7. Cam kết của người gửi</h4>
                                <p>Tôi chấp nhận các điều khoản tại mặt sau phiếu gửi và cam đoan bưu gửi này không 
                                    chứa những mặt hàng nguy hiểm, cấm gửi. Trường hợp không phát được hãy thực hiện 
                                    chỉ dẫn tại mục 6, tôi sẽ trả cước chuyển hoàn.</p>
                                <div className={styles['List8']}>
                                    <div>
                                        <h4>8. Ngày giờ gửi:</h4>
                                        <p>{data?((data.dateSend ? formatDateTime(data.dateSend) : 'Not received yet')):""}</p>
                                    </div>
                                    <h4>Chữ ký người gửi</h4>
                                </div>
                            </div>
                        </td>

                        <td className={`${styles.BorderTop} ${styles.BorderLeft}`}>
                            <table className={`${styles.BorderNone}`}>
                                <tbody>
                                <tr className={styles['BorderBottom']}>
                                <td className={`${styles.BorderNone} ${styles.BorderRight} ${styles.Width60}`}>
                                        <div className={styles['BorderBottom']}>
                                            <h4>9. Cước</h4>
                                            <div className={styles['ContentNumber']}>
                                                <p>a. Cước chính</p>
                                                <p>9.500</p>
                                            </div>
                                            <div className={styles['ContentNumber']}>
                                                <p>b. Phụ phí</p>
                                                <p>0</p>
                                            </div>
                                            <div className={styles['ContentNumber']}>
                                                <p>c. Cước GTGT</p>
                                                <p>0</p>
                                            </div>
                                            <div className={styles['ContentNumber']}>
                                                <p>d. Tổng cước (gồm VAT)</p>
                                                <p>0</p>
                                            </div>
                                            <div className={styles['ContentNumber']}>
                                                <p>e. Thu khác</p>
                                                <p>0</p>
                                            </div>
                                            <div className={styles['ContentNumber']}>
                                                <strong><p>f. Tổng thu</p></strong>
                                                <p>9.500</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>11. Thu của người nhận</h4>
                                            <div className={styles['ContentNumber']}>
                                                <p>COD:</p>
                                                <p>0</p>
                                            </div>
                                            <div className={styles['ContentNumber']}>
                                                <p>Thu Khác:</p>
                                                <p>0</p>
                                            </div>
                                            <div className={styles['ContentNumber']}>
                                                <p>Tổng thu:</p>
                                                <p>0</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`${styles.UpContent} ${styles.BorderNone}`}>
                                        <div className={styles['BorderBottom']}>
                                            <h4>10. Khối lượng</h4>
                                            <div className={styles['ContentNumber']}>
                                                <p>Khối lượng thực tế:</p>
                                                <p>{data ? data.weight:""}</p>
                                            </div>
                                            <div className={styles['ContentNumber']}>
                                                <p>Khối quy đổi:</p>
                                                <p>0</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4>12. Chú dẫn nghiệp vụ</h4>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`${styles.BorderNone} ${styles.BorderRight} ${styles.UpContent} ${styles.Contenttext} ${styles.HeightUp}`}>
                                        <h4>13. Bưu cục chấp nhận</h4>
                                    </td>
                                    <td className={`${styles.BorderNone}`}>
                                        <h4>14. Ngày giờ nhận</h4>
                                        <strong><p>{data?((data.dateReceive ? formatDateTime(data.dateReceive) : 'Not received yet')):""}</p></strong>
                                        <div className={`${styles.BorderNone} ${styles.Contenttext} ${styles.StylesSignature}`}>
                                            <p>Người nhận/Người được uỷ quyền nhận</p>
                                            <p>(Ký, ghi rõ họ tên)</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
                </table>
            </main>

            <footer><strong>Hotline: 0123456789 - Website: www.abc.com.vn - Email: cskh@ems.com.vn</strong></footer>
        </div>
    )
}

export default Export;