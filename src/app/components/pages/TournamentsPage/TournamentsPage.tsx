import React, { useState, useEffect, useCallback } from "react";
import style from "./tournamentsPage.module.scss";
import useTournamentStats from "../../../hooks/appHooks/tournamentsHooks/useTournamentStats";
import { SelectOption } from "../../../ts/types/SelectOption";
import { useActions } from "../../../hooks/reduxHooks/useActions";
import { useAppSelector } from "../../../hooks/reduxHooks/reduxHooks";
import ComponentContainer from "../../common/ComponentContainer/ComponentContainer";
import TournamentStatisticsInfo from "../../ui/MainComponents/GlobalTournamentsStatisticComponents/GlobalTournamentStatisticsInfoComponents/TournamentStatisticsInfo/TournamentStatisticsInfo";
import TournamentTitleSearch from "../../ui/MainComponents/TournamentStatisticComponents/TournamentTitleSearch/TournamentTitleSearch";
import TournamentPlaces from "../../ui/MainComponents/TournamentStatisticComponents/TournamentPlaces/TournamentPlaces";

const TournamentsPage: React.FC = () => {
    const { setSearchMemoryTournamentNumber } = useActions();
    const { tournamentNumberOption } = useAppSelector(
        (state) => state.memory.entities.searchMemory
    );

    const {
        tournamentNumber,
        tournamentStatisticInfoData,
        tournamentOptions,
        tournamentPlaceTeams,
        tournamentFirstPlaceTeam,
        getTournamentListId
    } = useTournamentStats();

    const [optionData, setOptionData] = useState<SelectOption | null>(
        tournamentNumberOption
    );

    const handleChange = useCallback((target: SelectOption | null): void => {
        setOptionData(target);
        getTournamentListId(Number(target?.value));
        setSearchMemoryTournamentNumber(target);
    }, []);

    useEffect(() => {
        if (tournamentNumberOption !== null) {
            const findTournamentOption = tournamentOptions.find(
                (option) => option.value === tournamentNumberOption.value
            ) as SelectOption;
            setOptionData(findTournamentOption);
            getTournamentListId(Number(tournamentNumberOption.value));
        } else {
            setOptionData(tournamentOptions[0]);
            getTournamentListId(Number(tournamentOptions[0]?.value));
        }
    }, [tournamentNumberOption]);

    return (
        <section className={style.tournaments_page}>
            <ComponentContainer>
                {tournamentPlaceTeams.length !== 0 &&
                    tournamentFirstPlaceTeam.length !== 0 && (
                        <>
                            <TournamentTitleSearch
                                {...{
                                    tournamentOptions,
                                    optionData,
                                    handleChange,
                                    tournamentNumber
                                }}
                            />

                            <TournamentStatisticsInfo
                                statisticsInfo={tournamentStatisticInfoData}
                            />

                            <TournamentPlaces
                                {...{
                                    tournamentPlaceTeams,
                                    tournamentFirstPlaceTeam
                                }}
                            />
                        </>
                    )}
            </ComponentContainer>
        </section>
    );
};

export default TournamentsPage;
