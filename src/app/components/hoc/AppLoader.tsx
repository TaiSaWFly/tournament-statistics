import React, { useEffect, useState } from "react";
import {
    useAppDispatch,
    useAppSelector
} from "../../hooks/reduxHooks/reduxHooks";
import { loadplayersDbList } from "../../store/silces/playersDb";
import { loadTournamentDbList } from "../../store/silces/tournamentDb";
import { loadmatchesDbList } from "../../store/silces/matchesDb";
import AppLoading from "../common/LoadingComponents/AppLoading/AppLoading";
import { countingPlayerStatisticsData } from "../../store/silces/playerStatisticsData";
import filterDoubleDataByKey from "../../utils/appUtils/filterSearchData/filterDoubleDataByKey";
import localStorageService from "../../services/app.services/localStorage.service";
import { ErrorType } from "../../ts/types/ErrorType";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

interface AppLoaderProps {
    children: React.ReactNode;
}

const AppLoader: React.FC<AppLoaderProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    const [isLoading, setIsLoading] = useState(true);
    const [isDataLoading, setIsDataLoading] = useState(true);
    const [error, setError] = useState<ErrorType | null>(null);

    const { isLoading: playersDbIsLoading, entities: playersDb } =
        useAppSelector((state) => state.playersDb);

    const { isLoading: tournamentDbIsLoading, entities: tournamentDb } =
        useAppSelector((state) => state.tournamentDb);

    const { isLoading: matchesDbIsLoading } = useAppSelector(
        (state) => state.matchesDb
    );

    const { isCounting } = useAppSelector(
        (state) => state.playerStatisticsData
    );

    useEffect(() => {
        localStorageService.removefromStorage("error");

        setIsLoading(true);
        setIsDataLoading(true);
        dispatch(loadplayersDbList());
        dispatch(loadTournamentDbList());
        dispatch(loadmatchesDbList());

        const timeout = setTimeout(() => {
            setError(localStorageService.fromStorage("error") as ErrorType);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        if (
            !playersDbIsLoading &&
            !tournamentDbIsLoading &&
            !matchesDbIsLoading
        ) {
            setIsDataLoading(false);
        }
    }, [playersDbIsLoading, tournamentDbIsLoading, matchesDbIsLoading]);

    useEffect(() => {
        if (!isDataLoading) {
            const filterDoubleDataPlayer = filterDoubleDataByKey(
                playersDb,
                "ID"
            );
            dispatch(
                countingPlayerStatisticsData(
                    tournamentDb,
                    filterDoubleDataPlayer
                )
            );
        }
    }, [isDataLoading]);

    useEffect(() => {
        if (!isCounting) {
            setIsLoading(false);
        }
    }, [isCounting]);

    if (error) return <ErrorPage errorMessage={error.errorMessage} />;
    return <>{isLoading ? <AppLoading /> : children}</>;
};

export default AppLoader;
