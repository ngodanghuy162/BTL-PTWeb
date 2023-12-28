import React, { useState } from "react";
import style from "./MainContent.module.scss";
// import Cards from "./Cards/Cards";
// import ExpandableTable from "./ExpandableTable/ExpandableTable";
import EmployeeTable from "./EmployeeTable/EmployeeTable";
import AdminTable from "./AdminTable/AdminTable";

import {
    packageColumns,
    subColumns,
    employeeColumns,
    adminColumns,
    deportColumns,
    officeColumns,
} from "./Category";
import PackageReceiveTable from "./PackageReceiveTable/PackageReceiveTable";
import LocationTable from "./LocationTable/LocationTable";
// import SearchForm from "./SearchForm/SearchForm";

const componentListMainDash = [
    // <>
    //     <h1>Magic admin</h1>
    //     <h2>đăng nhập bằng tài khoản lãnh đạo</h2>
    // </>,
    // <>
    //     <h1>Admin Management</h1>
    //     <EmployeeTable
    //         className={self.layout__main}
    //         columns={employeeColumns}
    //     />
    // </>,
    <>
        <h1>Employee Management</h1>
        <EmployeeTable className={self.layout__main} columns={adminColumns} />
    </>,
    <>
        <h1>Package Management</h1>
        <PackageReceiveTable
            className={self.layout__main}
            columns={packageColumns}
            subColumns={subColumns}
        />
    </>,
    <>
        <h1>Location Management</h1>
        <LocationTable
            className={self.layout__main}
            columns={deportColumns}
            subColumns={officeColumns}
        />
    </>,
];

const MainContent = ({ selected, onSelected }) => {
    const [data, setData] = useState([]);

    return (
        <div className={style.layout}>{componentListMainDash[selected]}</div>
    );
};

export default MainContent;
