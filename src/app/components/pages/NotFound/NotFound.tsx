import React from "react";
import style from "./notFound.module.scss";

const NotFound: React.FC = () => {
    return (
        <div className={style.not_found}>
            <div>Возникла ошибка 404</div>
            <div>Страница с таким адресом</div>
            <div>Не найдена</div>
        </div>
    );
};

export default NotFound;
