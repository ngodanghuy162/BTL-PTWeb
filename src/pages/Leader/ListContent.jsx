import React, { useState } from "react";
import style from "./Content.module.scss";
// import Cards from "./Cards/Cards";
// import ExpandableTable from "./ExpandableTable/ExpandableTable";
// import EmployeeTable from "./EmployeeTable/EmployeeTable";
// import AdminTable from "./AdminTable/AdminTable";

import {
    packageColumns,
    subColumns,
    employeeColumns,
    adminColumns,
    deportColumns,
    officeColumns,
} from "./Category.js";
import AdminTable from "./Content/AdminTable.jsx";
// import PackageReceiveTable from "./PackageReceiveTable/PackageReceiveTable";
// import LocationTable from "./LocationTable/LocationTable";
// import SearchForm from "./SearchForm/SearchForm";

const componentListMainDash = [

    <>
        <h1>Quản lí tài khoản trưởng điểm</h1>
        {<AdminTable className={style.admintable} columns ={adminColumns}/>}
    </>,
    <>
        <h1>Thống kê đơn hàng</h1>
        {/* <PackageReceiveTable
            className={self.layout__main}
            columns={packageColumns}
            subColumns={subColumns}
        /> */}
    </>,
    <>
        <h1>Quản lí các điểm vận chuyển</h1>
        {/* <LocationTable
            className={self.layout__main}
            columns={deportColumns}
            subColumns={officeColumns}
        /> */}
    </>,
];

const ListContent = ({ selected, onSelected }) => {
    const [data, setData] = useState([]);

    return (
        <div className={style.layout}>{componentListMainDash[selected]}</div>
    );
};

export default ListContent;
