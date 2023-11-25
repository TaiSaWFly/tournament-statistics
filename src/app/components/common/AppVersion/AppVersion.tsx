import React from "react";
import style from "./appVersion.module.scss";

const AppVersion: React.FC = () => {
    return <div className={style.ver}>ver.{process.env.REACT_APP_VERSION}</div>;
};

export default AppVersion;
