import "@/styles/global.module.scss";

import style from "./Admin.module.scss";
import MainDash from "@/components/MainDash/MainDash";
import RightSide from "@/components/RightSide/RightSide";
import Sidebar from "@/components/Sidebar/Sidebar";
const AdminPage = () => {
    return (
        <div className={style.App}>
            <div className={style.AppGlass}>
                <Sidebar />
                <MainDash />
                <RightSide />
            </div>
        </div>
    );
};

export default AdminPage;
