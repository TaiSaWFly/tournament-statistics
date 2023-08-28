import React from "react";
import style from "./navigationClose.module.scss";
import { NavLink } from "react-router-dom";
import {
    MAIN_ROUTE,
    PLAYER_ROUTE,
    TOURNAMENTS_ROUTE
} from "../../../../data/routes";

interface NavigationCloseProps {
    Main: any;
    Tours: any;
    SearchPlayers: any;
    ChevronRight: any;
    OpenMenu: any;
    isMenuOpen: boolean;
    handleChangeMenu: () => void;
}

const NavigationClose: React.FC<NavigationCloseProps> = ({
    Main,
    Tours,
    SearchPlayers,
    ChevronRight,
    OpenMenu,
    isMenuOpen,
    handleChangeMenu
}) => {
    return (
        <aside className={style.navigation}>
            <div className={style.navigation_header}>
                <div
                    className={style.navigation_header__menu}
                    onClick={handleChangeMenu}
                >
                    <OpenMenu />
                </div>
                <a
                    className={style.logo}
                    href="https://www.twitch.tv/anakq"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={
                            "https://static-cdn.jtvnw.net/jtv_user_pictures/e4677934-9998-4c51-af88-8d4923120f3a-profile_image-70x70.png"
                        }
                    />
                </a>
            </div>

            <nav className={style.navigate}>
                <div className={style.navigate_title}>
                    <span>Страницы</span>
                    <div className={style.navigate_title__dots}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

                <ul className={style.navigate_list}>
                    <li className={style.navigate_list__item}>
                        <NavLink
                            className={(isActive) =>
                                isActive ? style.link_active : style.link
                            }
                            exact
                            to={MAIN_ROUTE}
                        >
                            <div className={style.link_icon}>
                                <Main />
                            </div>
                            <div className={style.link_name}>
                                Anak Tournament
                            </div>

                            <ChevronRight
                                className={style.link_icon__chevron}
                            />
                        </NavLink>

                        <div className={style.link_name__info}>
                            Anak Tournament
                        </div>
                    </li>

                    <li className={style.navigate_list__item}>
                        <NavLink
                            className={(isActive) =>
                                isActive ? style.link_active : style.link
                            }
                            to={{
                                pathname: TOURNAMENTS_ROUTE
                            }}
                        >
                            <div className={style.link_icon}>
                                <Tours />
                            </div>
                            <div className={style.link_name}>Tурниры</div>

                            <ChevronRight
                                className={style.link_icon__chevron}
                            />
                        </NavLink>

                        <div className={style.link_name__info}>Tурниры</div>
                    </li>

                    <li className={style.navigate_list__item}>
                        <NavLink
                            className={(isActive) =>
                                isActive ? style.link_active : style.link
                            }
                            to={{
                                pathname: PLAYER_ROUTE
                            }}
                        >
                            <div className={style.link_icon}>
                                <SearchPlayers />
                            </div>
                            <div className={style.link_name}>
                                поиск покемона
                            </div>

                            <ChevronRight
                                className={style.link_icon__chevron}
                            />
                        </NavLink>

                        <div className={style.link_name__info}>
                            поиск покемона
                        </div>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default NavigationClose;
