import React from "react";
import style from "./navigationItem.module.scss";
import { NavigateItemType } from "../../../../ts/types/NavigateItemType";
import { NavLink } from "react-router-dom";
import useViewInfo from "../../../../hooks/appHooks/someHooks/useViewInfo";

interface NavigationItemCloseProps extends NavigateItemType {}

const NavigationItemClose: React.FC<NavigationItemCloseProps> = ({
    name,
    route,
    isExact,
    icon: Icon
}) => {
    const { isMobileDevice, isViewInfo, setIsViewInfo } = useViewInfo();

    return (
        <li className={style.navigate_list__item_close}>
            <NavLink
                className={(isActive) =>
                    isActive ? style.link_close__active : style.link_close
                }
                exact={isExact}
                to={route}
                onMouseEnter={() => setIsViewInfo(true)}
                onMouseLeave={() => setIsViewInfo(false)}
            >
                <div className={style.link_icon_close}>
                    <Icon />
                </div>
            </NavLink>

            {!isMobileDevice && isViewInfo && (
                <div className={style.link_name__info_close}>{name}</div>
            )}
        </li>
    );
};

export default NavigationItemClose;
