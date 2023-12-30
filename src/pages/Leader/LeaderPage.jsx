import "@/styles/global.module.scss";

import style from "./LeaderPage.module.scss";
//import MainContent from "@/components/MainContent/MainContent";
import ListContent from "./ListContent.jsx";
import { useEffect, useState } from "react";
import LeaderSidebar from "./LeaderSideBar/LeaderSideBar";
import * as request from "@/utils/request";

const LeaderPage = () => {
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
                <LeaderSidebar selected={selected} onSelected={setSelected} />
                <ListContent
                    deport={deport}
                    selected={selected}
                    onSelected={setSelected}
                />
                {/* <RightSide selected={selected} onSelected={setSelected} /> */}
            </div>
        </div>
    );
};

export default LeaderPage;
