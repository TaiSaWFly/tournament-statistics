import React from "react";
import style from "./header.module.scss";
import { NavLink } from "react-router-dom";
import ComponentContainer from "../../common/ComponentContainer/ComponentContainer";
import useSvgIcon from "../../../hooks/appHooks/useSvgIcon";

const Header: React.FC = () => {
    const { MainStats } = useSvgIcon();

    return (
        <header className={style.header}>
            <ComponentContainer>
                <nav className={style.header_navigate}>
                    <ul className={style.header_navigate__list}>
                        <li>
                            <NavLink
                                className={(isActive) =>
                                    isActive
                                        ? style.link_main__active
                                        : style.link_main
                                }
                                exact
                                to="/"
                            >
                                <MainStats />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(isActive) =>
                                    isActive ? style.link_active : style.link
                                }
                                to="/tournaments"
                            >
                                Статистика турниров
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(isActive) =>
                                    isActive ? style.link_active : style.link
                                }
                                to="/player"
                            >
                                Найти покемона
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </ComponentContainer>
        </header>
    );
};

export default Header;
