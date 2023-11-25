import React, { useEffect, useRef, useState } from "react";
import style from "./navigation.module.scss";
import NavigationOpen from "../NavigationState/NavigationOpen/NavigationOpen";
import NavigationClose from "../NavigationState/NavigationClose/NavigationClose";
import { useActions } from "../../../../hooks/reduxHooks/useActions";
import { useAppSelector } from "../../../../hooks/reduxHooks/reduxHooks";
import { useAppStructure } from "../../../../hooks/appHooks/appContexts/useAppStructure";
import { BLOCK_BREAKPOINT_720 } from "../../../../data/AppData/breakPoints";
import { sidebarMinWidth } from "../../../../data/AppData/defaultInitialStateData";
import useBlockDimensionsOnEvents from "../../../../hooks/appHooks/someHooks/useBlockDimensionsOnEvents";
import useNavigateList from "../../../../hooks/appHooks/someHooks/useNavigateList";

const Navigation: React.FC = () => {
    const navigationRef = useRef<HTMLDivElement>(null);
    const navigateList = useNavigateList();

    const { menu } = useAppSelector(
        (state) => state.memory.entities.appMemory.dashboard
    );
    const { setDashboardMemory } = useActions();
    const { appStructureDimentions, setAppStructureDependencies } =
        useAppStructure();

    const [isMenuOpen, setIsMenuOpen] = useState(menu.isOpen);
    const [isBlockedOpen, setIsBlockedOpen] = useState(false);

    const { dimensions: navigationDimentions } = useBlockDimensionsOnEvents({
        ref: navigationRef,
        dependencies: isMenuOpen
    });

    const navigationDiff = !isMenuOpen
        ? sidebarMinWidth - navigationDimentions.clientWidth
        : 0;

    const isBlocked =
        appStructureDimentions.clientWidth - navigationDiff <=
            BLOCK_BREAKPOINT_720 && appStructureDimentions.clientWidth !== 0;

    useEffect(() => {
        setDashboardMemory(isMenuOpen);
        setAppStructureDependencies(isMenuOpen);
    }, [isMenuOpen]);

    useEffect(() => {
        if (isBlocked) {
            setIsBlockedOpen(true);
            setIsMenuOpen(false);
        } else {
            setIsBlockedOpen(false);
        }
    }, [appStructureDimentions]);

    return (
        <aside
            ref={navigationRef}
            style={{
                minWidth: isMenuOpen ? sidebarMinWidth : "auto"
            }}
            className={style.navigate}
        >
            {isBlockedOpen ? (
                <NavigationClose
                    {...{
                        NavigateList: navigateList,
                        isBlockedOpen,
                        handleChangeMenu: () => setIsMenuOpen(!isMenuOpen)
                    }}
                />
            ) : (
                <>
                    {isMenuOpen ? (
                        <NavigationOpen
                            {...{
                                NavigateList: navigateList,
                                handleChangeMenu: () =>
                                    setIsMenuOpen(!isMenuOpen)
                            }}
                        />
                    ) : (
                        <NavigationClose
                            {...{
                                NavigateList: navigateList,
                                isBlockedOpen,
                                handleChangeMenu: () =>
                                    setIsMenuOpen(!isMenuOpen)
                            }}
                        />
                    )}
                </>
            )}
        </aside>
    );
};

export default Navigation;
