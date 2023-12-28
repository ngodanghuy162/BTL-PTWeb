import React from "react";

import style from "./RightSide.module.scss";
// import Update from "./Update/Update";
// import Review from "./Review/Review";
import SearchForm from "../MainContent/SearchForm/SearchForm";

const RightSide = () => {
    return (
        <div className={style.RightSide}>
            <SearchForm />
        </div>
    );
};

export default RightSide;
