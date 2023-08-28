import React from "react";
import style from "./navigationOpen.module.scss";
import { NavLink } from "react-router-dom";
import {
    MAIN_ROUTE,
    PLAYER_ROUTE,
    TOURNAMENTS_ROUTE
} from "../../../../data/routes";

interface NavigationOpenProps {
    Main: any;
    Tours: any;
    SearchPlayers: any;
    ChevronRight: any;
    OpenMenu: any;
    isMenuOpen: boolean;
    handleChangeMenu: () => void;
}

const NavigationOpen: React.FC<NavigationOpenProps> = ({
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
                <div
                    className={style.navigation_header__menu}
                    onClick={handleChangeMenu}
                >
                    <OpenMenu />
                </div>
            </div>

            <nav className={style.navigate}>
                <div className={style.navigate_title}>Страницы</div>

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
                            <div>Anak Tournament</div>

                            <ChevronRight
                                className={style.link_icon__chevron}
                            />
                        </NavLink>
                    </li>

                    <li className={style.navigate_list__item}>
                        <NavLink
                            className={(isActive) =>
                                isActive ? style.link_active : style.link
                            }
                            to={TOURNAMENTS_ROUTE}
                        >
                            <div className={style.link_icon}>
                                <Tours />
                            </div>
                            <div>турниры</div>

                            <ChevronRight
                                className={style.link_icon__chevron}
                            />
                        </NavLink>
                    </li>

                    <li className={style.navigate_list__item}>
                        <NavLink
                            className={(isActive) =>
                                isActive ? style.link_active : style.link
                            }
                            to={PLAYER_ROUTE}
                        >
                            <div className={style.link_icon}>
                                <SearchPlayers />
                            </div>
                            <div>поиск покемона</div>

                            <ChevronRight
                                className={style.link_icon__chevron}
                            />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default NavigationOpen;
