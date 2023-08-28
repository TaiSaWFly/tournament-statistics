import React from "react";
import style from "./notFoundPage.module.scss";

const NotFoundPage: React.FC = () => {
    return (
        <div className={style.not_found}>
            <div>Возникла ошибка 404</div>
            <div>Страница с таким адресом</div>
            <div>Не найдена</div>
        </div>
    );
};

export default NotFoundPage;
