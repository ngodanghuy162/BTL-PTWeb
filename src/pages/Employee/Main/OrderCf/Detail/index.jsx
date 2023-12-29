import React,  {useState} from 'react';
import styles from "./Detail.module.scss";
import { IoCloseSharp } from "react-icons/io5";

function OrdeCf({onClose, data}) {
    const handleClose = () => {
        onClose();
      };
    return (
        <div className={styles['Main']}>
            <header className={styles['Header']}>
                <h5>Thông tin vận đơn</h5>
                <IoCloseSharp   onClick={handleClose}/>
            </header>
            
        </div>
    );
}

export default OrdeCf;
