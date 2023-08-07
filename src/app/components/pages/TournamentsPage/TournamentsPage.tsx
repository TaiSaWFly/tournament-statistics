import React, { useState, useEffect, useCallback } from "react";
import style from "./tournamentsPage.module.scss";
import useTournamentStats from "../../../hooks/appHooks/tournamentsHooks/useTournamentStats";
import { SelectOption } from "../../../ts/types/SelectOption";
import TournamentStatisticInfo from "../../ui/GlobalTournamentsStatisticComponents/TournamentStatisticInfo";
import TournamentNumberSelect from "../../ui/GlobalTournamentsStatisticComponents/TournamentNumberSelect/TournamentNumberSelect";
import GlobalTournamentTeamTable from "../../ui/GlobalTournamentsStatisticComponents/GlobalTournamentTeamTable/GlobalTournamentTeamTable";
import GlobalTournamentTeamsPlacesTable from "../../ui/GlobalTournamentsStatisticComponents/GlobalTournamentTeamsPlacesTable/GlobalTournamentTeamsPlacesTable";
import GlobalTournamentResultTeam from "../../ui/GlobalTournamentsStatisticComponents/GlobalTournamentResultTeam/GlobalTournamentResultTeam";
import { useActions } from "../../../hooks/reduxHooks/useActions";
import { useAppSelector } from "../../../hooks/reduxHooks/reduxHooks";

const TournamentsPage: React.FC = () => {
    const { setSearchMemoryTournamentNumber } = useActions();
    const { tournamentNumberOption } = useAppSelector(
        (state) => state.searchMemory.entities
    );

    const {
        tournamentOptions,
        tournamentStatisticData,
        tournamentPlaceTeams,
        tournamentFirstPlaceTeam,
        getTournamentListId
    } = useTournamentStats();

    const {
        tournamentNumber: tourNumber,
        tournamentTeamsQty,
        tournamentPlayersQty,
        tournamentMatchesQty,
        tournamentMapsQty,
        tournamentNewPlayersQty
    } = tournamentStatisticData;

    const [tournamentNumber, setTournamentNumber] =
        useState<SelectOption | null>(tournamentNumberOption);

    const handleChange = useCallback((target: SelectOption | null): void => {
        setTournamentNumber(target);
        getTournamentListId(Number(target?.value));
        setSearchMemoryTournamentNumber(target);
    }, []);

    useEffect(() => {
        if (tournamentNumberOption !== null) {
            const findTournamentOption = tournamentOptions.find(
                (option) => option.value === tournamentNumberOption.value
            ) as SelectOption;
            setTournamentNumber(findTournamentOption);
            getTournamentListId(Number(tournamentNumberOption.value));
        } else {
            setTournamentNumber(tournamentOptions[0]);
            getTournamentListId(Number(tournamentOptions[0]?.value));
        }
    }, [tournamentNumberOption]);

    return (
        <div className={style.tournaments_page}>
            {tournamentPlaceTeams.length !== 0 &&
                tournamentFirstPlaceTeam.length !== 0 && (
                    <>
                        <div className={style.tournaments_page__group}>
                            <TournamentNumberSelect
                                options={tournamentOptions}
                                value={tournamentNumber}
                                onChange={handleChange}
                            />

                            <div
                                className={style.tournaments_page__group_title}
                            >
                                Турнир Анака № {tourNumber}
                            </div>
                        </div>

                        <div className={style.tournaments_page__statistic_info}>
                            <TournamentStatisticInfo
                                {...{
                                    tournamentTeamsQty,
                                    tournamentPlayersQty,
                                    tournamentMatchesQty,
                                    tournamentMapsQty,
                                    tournamentNewPlayersQty
                                }}
                            />
                        </div>

                        <div className={style.tournaments_page__group_tables}>
                            <div
                                className={
                                    style.tournaments_page__group_tables_wrap
                                }
                            >
                                <div className={style.tournaments_page__table}>
                                    <GlobalTournamentTeamsPlacesTable
                                        placeTeams={tournamentPlaceTeams}
                                    />
                                </div>

                                <div className={style.tournaments_page__table}>
                                    <GlobalTournamentTeamTable
                                        team={tournamentFirstPlaceTeam}
                                    />
                                </div>

                                <div className={style.tournaments_page__table}>
                                    <GlobalTournamentResultTeam
                                        tournamentFirstPlaceTeam={
                                            tournamentFirstPlaceTeam[0]
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
        </div>
    );
};

export default TournamentsPage;
