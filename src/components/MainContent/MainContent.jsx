import React, { useState } from "react";
import style from "./MainContent.module.scss";
import EmployeeTable from "./EmployeeTable/EmployeeTable";

import {
    packageColumns,
    subColumns,
    employeeColumns,
    deportColumns,
    officeColumns,
} from "./Category";
import PackageReceiveTable from "./PackageReceiveTable/PackageReceiveTable";
import LocationTable from "./LocationTable/LocationTable";

const componentListMainDash = [
    <>
        <h1>Magic admin</h1>
        <h2>Thống kê</h2>
        <h1>hello</h1>
    </>,
    <>
        <h1>Admin Management</h1>
        <EmployeeTable
            className={self.layout__main}
            columns={employeeColumns}
        />
    </>,
    <>
        <h1>Employee Management</h1>
        <EmployeeTable
            key="employee"
            className={self.layout__main}
            columns={employeeColumns}
        />
    </>,
    <>
        <h1>Package Management</h1>
        <PackageReceiveTable
            key="package"
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
