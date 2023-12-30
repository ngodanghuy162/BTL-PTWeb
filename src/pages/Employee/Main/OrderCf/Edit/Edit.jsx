import React, { useState, useEffect } from 'react';
import styles from "./Edit.module.scss";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../../../../../hooks/AuthContext"
import PointApi from '../../../../../api/PointApi';
import UpdateStatusApi from '../../../../../api/UpdateStatusTkApi';

function Edit({ onClose, dataEdit }) {
    const { getUser } = useAuth();
    const user = getUser();
    const [data, setData] = useState({});
    const [selectedType, setSelectedType] = useState('');
    const [selectedPoint, setSelectedPoint] = useState('');
    const [dataSelect, setDataSelect] = useState('');

    const handleClose = () => {
        onClose();
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handlePointChange = (event) => {
        setSelectedPoint(event.target.value);
    };

    useEffect(() => {
        setDataSelect(selectedType);
    }, [selectedType])

    useEffect(() => {
        const fetchData = async () => {
            var response;
            try {
                if (dataSelect === "TK-TK" || dataSelect === "GD-TK")
                    response = await PointApi.getDataDtk();
                else
                    response = await PointApi.getDataDgd(dataEdit.id_receivePlace);
                setData(response);
                console.log(dataEdit.id_receivePlace);
                // console.log(response[3].name)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [dataSelect]);

    const handleConfirm = () => {
        const dataChuyenTiep = {
            type: selectedType,
            id_sendPlace: user.userInfo.id_work,
            id_receivePlace: selectedPoint,
        }
        try {
            UpdateStatusApi.orderForward(dataChuyenTiep, dataEdit.mavandonNotCol, user.token).then(response => {
                if (response) {
                    console.log(response);
                    handleClose();
                } else {
                    console.error('Try again pls.');
                }
            }).catch(error => {
                if (error.response && error.response.status === 403) {
                    // Xử lý khi nhận được lỗi 403 (Forbidden)
                    console.error(error.response.data);
                    // setShowMess(true); // Hiển thị thông báo hoặc thực hiện hành động khác tùy thuộc vào yêu cầu của bạn
                } else {
                    console.error('Error:', error);
                    // setShowMess(true);
                }
            });
        } catch (error) {
            // Xử lý lỗi khi thực hiện request
            console.error('Error:', error);
            // setShowMess(true);
        }
    };

    return (
        <div className={styles['Main']}>
            <header className={styles['Header']}>
                <div></div>
                <h5>Kiểm tra vận đơn và chuyển tiếp</h5>
                <IoCloseSharp className={styles['iconClose']} onClick={handleClose} />
            </header>
            <div className={styles['boxContent']}>
                <table className={styles['Content']}>
                    <tbody>
                        <tr>
                            <td>Mã vận đơn: {dataEdit.mavandonNotCol}</td>
                        </tr>
                        <tr>
                            <td>Trạng thái: {dataEdit.status}</td>
                            <td>type: {dataEdit.type}</td>
                        </tr>
                        <tr>
                            <td>
                                {dataSelect === "TK-GD" && (
                                    <select value={selectedPoint} onChange={handlePointChange}>
                                        <option value="" disabled>Chọn địa chỉ</option>
                                        {data.diemGiaoDichModelList &&
                                            data.diemGiaoDichModelList.map((diemGiaoDich) => (
                                                <option key={diemGiaoDich.id} value={diemGiaoDich.id}>
                                                    {diemGiaoDich.name}
                                                </option>
                                            ))}
                                    </select>
                                )}

                                {(dataSelect === "TK-TK" || dataSelect === "GD-TK") && (
                                    <select value={selectedPoint} onChange={handlePointChange}>
                                        <option value="" disabled>Chọn địa chỉ</option>
                                        {data && data.length > 0 ? (
                                            (() => {
                                                const options = [];
                                                for (let index = 0; index < data.length; index++) {
                                                    const diemGiaoDich = data[index];
                                                    options.push(
                                                        <option key={index} value={diemGiaoDich.id}>
                                                            {diemGiaoDich.name}
                                                        </option>
                                                    );
                                                }
                                                return options;
                                            })()
                                        ) : (
                                            <option value="" disabled>
                                                No options available
                                            </option>
                                        )}
                                    </select>
                                )}
                            </td>
                            <td>
                                <select value={selectedType} onChange={handleTypeChange}>
                                    <option value="" disabled>Chọn kiểu</option>
                                    {(dataEdit.type === "TK-TK" || dataEdit.type === "GD-TK") && (<>
                                        <option value="TK-GD">TK-GD</option>
                                        <option value="TK-TK">TK-TK</option>
                                    </>)}
                                    {dataEdit.type === "TK-GD" && (<>
                                        <option value="GD-TK">GD-TK</option>
                                        <option value="GD-KH">GD-KH</option>
                                    </>)}
                                </select>

                            </td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={handleConfirm}>Xác nhận</button>

            </div>
        </div>
    );
}

export default Edit;
