import "@/styles/global.module.scss";

import style from "./Admin.module.scss";
import MainContent from "@/components/MainContent/MainContent";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

const AdminPage = () => {
    const [selected, setSelected] = useState(0);
    return (
        <div className={style.App}>
            <div className={style.AppGlass}>
                <Sidebar selected={selected} onSelected={setSelected} />
                <MainContent selected={selected} onSelected={setSelected} />
            </div>
        </div>
    );
};

export default AdminPage;
