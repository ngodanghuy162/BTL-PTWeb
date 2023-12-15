import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import styles from "./Login.module.scss";
import Login from "../../../api/Login";

const FormLogin = () => {
    var jwt;
    console.log("re-render login");
    const [showMess, setShowMess] = useState(false);
    const navigate = useNavigate();
    //const { handleLogin } = useAuth();
    const [formData, setFormData] = useState(
        {username: '', password: ''}
    );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                username: formData.username,
                password: formData.password
            }
        Login.login(data).then(response => {
            jwt = response.data.token;
        })
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
                <span className={styles['headInput']}>Email của bạn là gì?</span>
                <input type={'email'} name={'email'} className={styles['inputData']} placeholder='Nhập email của bạn.'
                       onChange={handleChange} required></input>
            </div>
            <div className={styles['formInput']}>
                <span className={styles['headInput']}>Nhập mật khẩu</span>
                <input type={'password'} name={'password'} className={styles['inputData']} placeholder='Nhập mật khẩu.'
                       onChange={handleChange} required></input>
            </div>
            {showMess && <span className={styles['login-status']}>
                Đăng nhập thất bại, email hoặc mật khẩu không đúng
            </span>}
            <div className={styles['footerLogin']}>
                <button type='submit' className={styles['submitLogin']}>
                    Đăng nhập
                </button>
            </div>
        </form>
    );


export default FormLogin;