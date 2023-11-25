import React from "react";
import style from "./navigationClose.module.scss";
import { NavigateItemType } from "../../../../../ts/types/NavigateItemType";
import NavigationItemClose from "../../NavigationItem/NavigationItemClose";
import useSvgIcon from "../../../../../hooks/appHooks/someHooks/useSvgIcon";
import AppLogo from "../../../../common/AppLogo/AppLogo";
import NavigationInfo from "../../NavigationInfo/NavigationInfo";

interface NavigationCloseProps {
    NavigateList: NavigateItemType[];
    isBlockedOpen: boolean;
    handleChangeMenu: () => void;
}

const NavigationClose: React.FC<NavigationCloseProps> = ({
    NavigateList,
    isBlockedOpen,
    handleChangeMenu
}) => {
    const { OpenMenu } = useSvgIcon();

    return (
        <div className={style.navigation}>
            <div>
                <div className={style.navigation_header}>
                    {!isBlockedOpen && (
                        <div
                            className={style.navigation_header__menu}
                            onClick={handleChangeMenu}
                        >
                            <OpenMenu />
                        </div>
                    )}

                    <AppLogo />
                </div>

                <nav className={style.navigate}>
                    <div className={style.navigate_title}>
                        <div className={style.navigate_title__dots}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <ul className={style.navigate_list}>
                        {NavigateList.map((item, i) => (
                            <NavigationItemClose
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

            <div className={style.navigate_info}>
                <NavigationInfo />
            </div>
        </div>
    );
};

export default NavigationClose;
