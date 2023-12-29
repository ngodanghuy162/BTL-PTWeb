import React, { useState } from "react";
import style from "./MainContent.module.scss";
import EmployeeTable from "./EmployeeTable/EmployeeTable";

import {
    packageColumns,
    subColumns,
    employeeColumns,
    deportColumns,
    officeColumns,
    adminColumns,
} from "./Category";
import PackageReceiveTable from "./PackageReceiveTable/PackageReceiveTable";
import LocationTable from "./LocationTable/LocationTable";
import PackageAnalysis from "./PackageAnalysis/PackageAnalysis";

import { useAuth } from "@/hooks/AuthContext";
import AdminTable from "../../pages/Leader/Content/AdminTable";

const componentListMainDash = [
    <>
        <h1>Magic admin</h1>
        <PackageAnalysis key="package" className={self.layout__main} />
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
        <h1>Admin Management</h1>
        <AdminTable
            key="employee"
            className={self.layout__main}
            columns={adminColumns}
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
    const { getUser } = useAuth();
    const user = getUser();

    return (
        <div className={style.layout}>{componentListMainDash[selected]}</div>
    );
};

export default MainContent;
