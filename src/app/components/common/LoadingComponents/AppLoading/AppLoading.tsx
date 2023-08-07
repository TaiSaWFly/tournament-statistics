import React from "react";
import style from "./appLoading.module.scss";

const AppLoading: React.FC = () => {
    return (
        <div className={style.loader_wrap}>
            <div className={style.loader}></div>
        </div>
    );
};

export default AppLoading;
