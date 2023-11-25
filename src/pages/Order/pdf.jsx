import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class DownloadPDFButton extends React.Component {
  downloadPDF = () => {
    const input = document.getElementById('table-to-export');
    const pdf = new jsPDF('p', 'mm', 'a4'); // Chỉnh kích thước với 'a4' hoặc 'letter' tùy chọn

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 40; // Chiều rộng của ảnh trang (A4)
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Chiều cao theo tỉ lệ

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('data.pdf');
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.downloadPDF}>Tải xuống PDF</button>
        {/* Thêm bảng cần xuất dữ liệu */}
        <table id="table-to-export">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ</th>
              <th>Tên</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nguyễn</td>
              <td>Văn A</td>
            </tr>
            {/* Thêm dữ liệu khác nếu cần */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DownloadPDFButton;
