import styles from './Login.module.scss';
import SideLogin from "./SideLogin";
import FormLogin from "./FormLogin";

const Login = () => {
    return (
            <div className={styles['Login']}>
                <h1 className={styles['headingLogin']}>Magic Post</h1>
                <SideLogin/>
                <span className={styles['spanOr']}>hoặc</span>
                <FormLogin/>
        </div>
    );
}

export default Login; 