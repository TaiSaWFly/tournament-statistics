import React from "react";
import style from "./navigationOpen.module.scss";
import { NavigateItemType } from "../../../../../ts/types/NavigateItemType";
import useSvgIcon from "../../../../../hooks/appHooks/someHooks/useSvgIcon";
import NavigationItemOpen from "../../NavigationItem/NavigationItemOpen";
import AppLogo from "../../../../common/AppLogo/AppLogo";

interface NavigationOpenProps {
    NavigateList: NavigateItemType[];
    handleChangeMenu: () => void;
}

const NavigationOpen: React.FC<NavigationOpenProps> = ({
    NavigateList,
    handleChangeMenu
}) => {
    const { OpenMenu } = useSvgIcon();

    return (
        <div className={style.navigation}>
            <div className={style.navigation_header}>
                <AppLogo />

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
                    {NavigateList.map((item, i) => (
                        <NavigationItemOpen
                            key={item.name + i}
                            name={item.name}
                            route={item.route}
                            isExact={item.isExact}
                            icon={item.icon}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default NavigationOpen;
