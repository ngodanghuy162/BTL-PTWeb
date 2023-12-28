import "@/styles/global.module.scss";

import style from "./Admin.module.scss";
import MainContent from "@/components/MainContent/MainContent";
import RightSide from "@/components/RightSide/RightSide";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

const AdminPage = () => {
    const [deport, setDeport] = useState([]);

    const [selected, setSelected] = useState(0);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const res = await request.get("point/tapket/all");
                setDeport(res);
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log(`Error: ${error}`);
                }
            }
        };

        fetchLocations();
    }, []);

    return (
        <div className={style.App}>
            <div className={style.AppGlass}>
                <Sidebar selected={selected} onSelected={setSelected} />
                <MainContent
                    deport={deport}
                    selected={selected}
                    onSelected={setSelected}
                />
                {/* <RightSide selected={selected} onSelected={setSelected} /> */}
            </div>
        </div>
    );
};

export default AdminPage;
