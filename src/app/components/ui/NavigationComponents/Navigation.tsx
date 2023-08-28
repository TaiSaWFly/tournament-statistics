import React, { useEffect, useState } from "react";
import useSvgIcon from "../../../hooks/appHooks/useSvgIcon";
import NavigationOpen from "./NavigationOpen/NavigationOpen";
import NavigationClose from "./NavigationClose/NavigationClose";
import { useActions } from "../../../hooks/reduxHooks/useActions";
import { useAppSelector } from "../../../hooks/reduxHooks/reduxHooks";

const Navigation: React.FC = () => {
    const { menu } = useAppSelector(
        (state) => state.memory.entities.dashboardMemory
    );
    const { setDashboardMemory } = useActions();

    const { Main, Tours, SearchPlayers, ChevronRight, OpenMenu } = useSvgIcon();
    const [isMenuOpen, setIsMenuOpen] = useState(() => menu.isOpen);

    useEffect(() => {
        setDashboardMemory(isMenuOpen);
    }, [isMenuOpen]);

    return (
        <>
            {isMenuOpen ? (
                <NavigationOpen
                    {...{
                        Main,
                        Tours,
                        SearchPlayers,
                        ChevronRight,
                        OpenMenu,
                        isMenuOpen,
                        handleChangeMenu: () => setIsMenuOpen(!isMenuOpen)
                    }}
                />
            ) : (
                <NavigationClose
                    {...{
                        Main,
                        Tours,
                        SearchPlayers,
                        ChevronRight,
                        OpenMenu,
                        isMenuOpen,
                        handleChangeMenu: () => setIsMenuOpen(!isMenuOpen)
                    }}
                />
            )}
        </>
    );
};

export default Navigation;
