import React from "react";

import style from "./RightSide.module.scss";
import Update from "./Update/Update";
import Review from "./Review/Review";

const RightSide = () => {
    return (
        <div className={style.RightSide}>
            <div>
                <h3>Update</h3>
                <Update />
            </div>
            <div>
                <h3>Customer Review</h3>
                <Review />
            </div>
        </div>
    );
};

export default RightSide;
