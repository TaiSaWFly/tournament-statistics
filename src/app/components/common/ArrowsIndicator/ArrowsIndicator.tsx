import React from "react";
import style from "./arrowsIndicator.module.scss";

const ArrowsIndicator: React.FC = () => {
    return (
        <div className={style.arrow}>
            <div className={style.arrow_wrap}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default ArrowsIndicator;
