import React from "react";
import style from "./header.module.scss";
import ComponentContainer from "../../../common/ComponentContainer/ComponentContainer";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import LinkResources from "../LinkResources/LinkResources";

const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <ComponentContainer>
                <div className={style.header_wrap}>
                    <h1 className={style.header_title}>Anak Tournaments</h1>

                    <div className={style.header_actions}>
                        <div className={style.header_actions__item}>
                            <LinkResources />
                        </div>
                        <div className={style.header_actions__item}>
                            <SwitchTheme />
                        </div>
                    </div>
                </div>
            </ComponentContainer>
        </header>
    );
};

export default Header;
