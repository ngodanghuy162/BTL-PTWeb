import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
// const { handleLogin } = useAuth();
import styles from "./Login.module.scss";
import Login from "../../../api/Login";
import {useAuth} from "../../../hooks/AuthContext";

const FormLogin = () => {
    console.log("re-render login");
    const [showMess, setShowMess] = useState(false);
    const navigate = useNavigate();
    const { handleLogin } = useAuth();
    const [formData, setFormData] = useState(
        {username: '', password: ''}
    );
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const data = {
                username: formData.username,
                password: formData.password
            };

            Login.login(data).then(response => {
                if (response) {
                    handleLogin(response);
                    const path = `/${response.userinfo.role.toLowerCase()}`;
                    navigate(path);
                } else {
                    console.error('Try again pls.');
                }
            }).catch(error => {
                if (error.response && error.response.status === 403) {
                    // Xử lý khi nhận được lỗi 403 (Forbidden)
                    console.error('Access forbidden:', error.response.data);
                    setShowMess(true); // Hiển thị thông báo hoặc thực hiện hành động khác tùy thuộc vào yêu cầu của bạn
                } else {
                    console.error('Error:', error);
                    setShowMess(true);
                }
            });
        } catch (error) {
            // Xử lý lỗi khi thực hiện request
            console.error('Error:', error);
            setShowMess(true);
        }
    };

    const handleChange = (event) => {
        setShowMess(false);
        setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    });
    }

    return (
        <form className={styles['formGroup']} onSubmit={handleSubmit}>
            <div className={styles['formInput']}>
                <span className={styles['headInput']}>Tên đăng nhập của bạn là gì?</span>
                <input type={'username'} name={'username'} className={styles['inputData']} placeholder='Nhập tên đăng nhập của bạn.'
                       onChange={handleChange} required></input>
            </div>
            <div className={styles['formInput']}>
                <span className={styles['headInput']}>Nhập mật khẩu</span>
                <input type={'password'} name={'password'} className={styles['inputData']} placeholder='Nhập mật khẩu.'
                       onChange={handleChange} required></input>
            </div>
            {showMess && <span className={styles['login-status']}>
                Đăng nhập thất bại.
            </span>}
            <div className={styles['footerLogin']}>
                <button type='submit' className={styles['submitLogin']}>
                    Đăng nhập
                </button>
            </div>
        </form>
    );
    }

export default FormLogin;