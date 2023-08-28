import React from "react";
import style from "./header.module.scss";
import ComponentContainer from "../../common/ComponentContainer/ComponentContainer";

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <ComponentContainer>
                <h1 className={style.header_title}>Anak Tournaments</h1>
            </ComponentContainer>
        </header>
    );
};

export default Header;
