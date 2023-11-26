import React from "react";

import style from "./Update.module.scss";
import { UpdatesData } from "./Data/Data";
const Update = () => {
    return (
        <div className={style.Update}>
            {UpdatesData.map((update) => {
                return (
                    <div className={style.update}>
                        <img src={update.img} alt="profile" />
                        <div className={style.noti}>
                            <div style={{ marginBottom: "0.5rem" }}>
                                <span>{update.name}</span>
                                <span> {update.noti}</span>
                            </div>
                            <span>{update.time}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Update;
