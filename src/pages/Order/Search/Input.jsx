import styles from './Input.module.scss';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


const Input = () => {
    return (
        <div className={styles['contentSearch']}>
            <div className={styles['iconContent']}>
                <i class="fa-solid fa-clipboard-list"></i>
                <h2 className={styles['textSearch']}>Mã bưu gửi (tra nhiều bill thêm dấu phẩy giữa các bill VD: EB125966888VN, EI125556888VN)</h2>
            </div>
            
            <div className={styles['formInput']}>
                <input className={styles['inputSearch']} type="text" placeholder='Nhập mã bưu gửi' />
                <button className={styles['buttonSearch']}>Tìm kiếm</button>
            </div>
        </div>
    )
}

export default Input;