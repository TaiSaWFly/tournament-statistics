import React from "react";
import style from "./navigationItem.module.scss";
import { NavigateItemType } from "../../../../ts/types/NavigateItemType";
import { NavLink } from "react-router-dom";
import useSvgIcon from "../../../../hooks/appHooks/someHooks/useSvgIcon";

interface NavigationItemOpenProps extends NavigateItemType {}

const NavigationItemOpen: React.FC<NavigationItemOpenProps> = ({
    name,
    route,
    isExact,
    icon: Icon
}) => {
    const { ChevronRight } = useSvgIcon();

    return (
        <li className={style.navigate_list__item_open}>
            <NavLink
                className={(isActive) =>
                    isActive ? style.link_open__active : style.link_open
                }
                exact={isExact}
                to={route}
            >
                <div className={style.link_icon_open}>
                    <Icon />
                </div>
                <div>{name}</div>

                <ChevronRight className={style.link_icon__chevron_open} />
            </NavLink>
        </li>
    );
};

export default NavigationItemOpen;
