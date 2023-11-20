import styles from './Input.module.scss';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';

const Input = () => {
    const [isDivVisible, setIsDivVisible] = useState(false);

    const handleButtonClick = () => {
        if(!isDivVisible)
            setIsDivVisible(!isDivVisible);
    };

    const duLieu = [
        { ten: 'Nguyen Van A', lop: '12A' },
        { ten: 'Tran Thi B', lop: '11B' },
        { ten: 'Le Van C', lop: '10C' },
        // ... có thể thêm nhiều dòng dữ liệu khác nếu cần
      ];

    return (
        <div className={styles['contentSearch']}>
            <div className={styles['iconContent']}>
                <i class="fa-solid fa-clipboard-list"></i>
                <h2 className={styles['textSearch']}>Mã bưu gửi (tra nhiều bill thêm dấu phẩy giữa các bill VD: EB125966888VN, EI125556888VN)</h2>
            </div>
            
            <div className={styles['formInput']}>
                <input className={styles['inputSearch']} type="text" placeholder='Nhập mã bưu gửi' />
                <button className={styles['buttonSearch']}  onClick={handleButtonClick}>Tìm kiếm</button>
            </div>

            {isDivVisible && <div className={styles['ListContent']}>
            <table border="1">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Lớp</th>
                    </tr>
                </thead>
                <tbody>
                    {duLieu.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.ten}</td>
                        <td>{item.lop}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>}

        </div>
    )
}

export default Input;