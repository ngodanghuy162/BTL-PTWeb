import React, { useRef, useState, useEffect } from 'react';
import styles from './Bill.module.scss';
import Bill from './index'

const Export = () => {

  const printBill = () => {
    // handlePrint();
  }

  

  const [receivedData, setReceivedData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const data = {};
    for (const [key, value] of urlParams) {
      data[key] = value;
    }console.log(data);

    // Lưu dữ liệu vào state hoặc thực hiện các công việc khác với dữ liệu
    setReceivedData(data);
  }, []);

  const pdfRef = useRef();

  const handlePrint = () => {
    const element = pdfRef.current;

    // Ẩn nút trước khi in
    const button = document.querySelector('.print-button');
    if (button) {
      button.style.display = 'none';
    }

    // Ẩn tiêu đề và chân trang mặc định của trình duyệt trong phiên bản in
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
      @media print {
        @page {
          size: auto;   /* auto is the current printer page size */
          margin: 0mm;  /* this affects the margin in the printer settings */
        }

        body {
          margin: 0;    /* this affects the margin on the content before sending to printer */
        }

        div#header, div#footer {
          display: none;  /* Ẩn header và footer của trình duyệt trong phiên bản in */
        }

        button.print-button {
          display: none;  /* Ẩn nút trong phiên bản in */
        }
      }
    `;

    document.head.appendChild(styleSheet);

    window.print();

    // Hiển thị lại nút sau khi in xong
    if (button) {
      button.style.display = 'block';
    }

    // Loại bỏ stylesheet sau khi in xong để không ảnh hưởng đến các trang khác
    document.head.removeChild(styleSheet);
  };

  return (
    <div ref={pdfRef} className={styles['Bill']}>
      {/* ... Nội dung của bạn ... */}
      <Bill data={receivedData}/>
      <button className="print-button" onClick={handlePrint}>
        In hoặc Lưu PDF (Ctrl+P)
      </button>
    </div>
  );
};

export default Export;
