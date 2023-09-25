import React from "react";
import style from "./notFoundPage.module.scss";
import ComponentContainer from "../../common/ComponentContainer/ComponentContainer";

const NotFoundPage: React.FC = () => {
    return (
        <ComponentContainer>
            <div className={style.not_found}>
                <div>Возникла ошибка 404</div>
                <div>Страница с таким адресом</div>
                <div>Не найдена</div>
            </div>
        </ComponentContainer>
    );
};

export default NotFoundPage;
