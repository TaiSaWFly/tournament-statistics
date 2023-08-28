import React from "react";
import style from "./loader.module.scss";

const Loader: React.FC = () => {
    return (
        <div className={style.loader_conteiner}>
            <div>
                <span className={style.loader}></span>
            </div>
        </div>
    );
};

export default Loader;
