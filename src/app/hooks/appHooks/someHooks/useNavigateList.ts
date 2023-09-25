import { useMemo } from "react";
import useSvgIcon from "./useSvgIcon";
import {
    MAIN_ROUTE,
    PLAYER_ROUTE,
    TOURNAMENTS_ROUTE
} from "../../../data/routes";
import { NavigateItemType } from "../../../ts/types/NavigateItemType";

const useNavigateList = (): NavigateItemType[] => {
    const { Main, Tours, SearchPlayers } = useSvgIcon();
    const navigateList: NavigateItemType[] = useMemo(
        () => [
            {
                name: "Anak Tournament",
                route: MAIN_ROUTE,
                isExact: true,
                icon: Main
            },

            {
                name: "турниры",
                route: TOURNAMENTS_ROUTE,
                isExact: false,
                icon: Tours
            },
            {
                name: "поиск покемона",
                route: PLAYER_ROUTE,
                isExact: false,
                icon: SearchPlayers
            }
        ],
        []
    );

    return navigateList;
};

export default useNavigateList;
