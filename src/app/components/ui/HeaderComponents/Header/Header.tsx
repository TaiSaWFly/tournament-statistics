import React from "react";
import style from "./header.module.scss";
import ComponentContainer from "../../../common/ComponentContainer/ComponentContainer";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <ComponentContainer>
                <div className={style.header_wrap}>
                    <h1 className={style.header_title}>Anak Tournaments</h1>

                    <SwitchTheme />
                </div>
            </ComponentContainer>
        </header>
    );
};

export default Header;
