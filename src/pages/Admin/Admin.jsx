import "@/styles/global.module.scss";

import style from "./Admin.module.scss";
import MainDash from "@/components/MainDash/MainDash";
import RightSide from "@/components/RightSide/RightSide";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from "react";

const AdminPage = () => {
    const [selected, setSelected] = useState(0);

    const onSelected = (index) => {
        setSelected(index);
    };

    return (
        <div className={style.App}>
            <div className={style.AppGlass}>
                <Sidebar selected={selected} onSelected={setSelected} />
                <MainDash selected={selected} onSelected={setSelected} />
                <RightSide />
            </div>
        </div>
    );
};

export default AdminPage;
