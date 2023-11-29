import React from "react";
import style from "./MainDash.module.scss";
import Cards from "./Cards/Cards";
import InfoTable from "./Table/InfoTable";

const MainDash = ({ selected, onSelected }) => {
    return (
        <div className={style.MainDash}>
            {selected === 0 ? (
                <>
                    <h1>Dashboard</h1>
                    <Cards />
                    <InfoTable />
                </>
            ) : (
                <h1>{selected}</h1>
            )}
        </div>
    );
};

export default MainDash;
