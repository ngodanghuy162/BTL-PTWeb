import React from "react";
import style from "./MainDash.module.scss";
import Cards from "./Cards/Cards";
import InfoTable from "./Table/InfoTable";

const MainDash = () => {
    return (
        <div className={style.MainDash}>
            <h1>Dashboard</h1>
            <Cards />
            <InfoTable />
        </div>
    );
};

export default MainDash;
