import React from "react";
import style from "./loading.module.scss";

const Loading: React.FC = () => {
    return (
        <div className={style.lds_ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loading;
