import React from "react";
import style from "./errorPage.module.scss";
import ComponentContainer from "../../common/ComponentContainer/ComponentContainer";

interface ErrorPageProps {
    errorMessage: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
    return (
        <ComponentContainer>
            <div className={style.error}>
                <div>На сервере возникла ошибка</div>
                <div>{errorMessage}</div>
            </div>
        </ComponentContainer>
    );
};

export default ErrorPage;
