import React from "react";

import style from "./RightSide.module.scss";
// import Update from "./Update/Update";
// import Review from "./Review/Review";
import PackageSearchForm from "../MainContent/PackageSearchForm/PackageSearchForm";

const RightSide = () => {
    return (
        <div className={style.RightSide}>
            <PackageSearchForm />
        </div>
    );
};

export default RightSide;
