import React from "react";
import style from "./MainDash.module.scss";
import Cards from "./Cards/Cards";
import ExpandableTable from "./ExpandableTable/ExpandableTable";
import StandardTable from "./StandardTable/StandardTable";

import { packageColumns, subColumns, employeeColumns } from "./Category";

const componentList = [
    <div key={1}>
        <h1>Trang chinh</h1>
        <h2>trang tin cho lanh dao cong ti: todo</h2>
    </div>,
    <div key={2}>
        <h1>Employee Management</h1>
        <StandardTable columns={employeeColumns} />
    </div>,
    <div key={3}>
        <h1>Package Management</h1>
        {/* <Cards /> */}
        <ExpandableTable columns={packageColumns} subColumns={subColumns} />
    </div>,
    <div key={4}>
        <h1>Package Management</h1>
        {/* <Cards /> */}
        <ExpandableTable columns={packageColumns} subColumns={subColumns} />
    </div>,
    <div key={5}>
        <h1>Location Analysis</h1>
    </div>,
    <div key={6}>
        <h1>Location Analysis 2</h1>
    </div>,
];

const MainDash = ({ selected, onSelected }) => {
    return <div className={style.MainDash}>{componentList[selected]}</div>;
};

export default MainDash;
