import React from "react";
import style from "./playerTournaments.module.scss";
import { IPlayer } from "../../../../../ts/models/IPlayer";
import TournamenList from "../TournamenList/TournamenList";
import TeamTournamentTable from "../TeamTable/TeamTournamentTable/TeamTournamentTable";
import TeamTournamentMatches from "../TeamTournamentMatchesTable/TeamTournamentMatchesTable";
import TeamTournamentResult from "../TeamTournamentResult/TeamTournamentResult";
import usePlayerTournaments from "../../../../../hooks/appHooks/playerHooks/usePlayerTournaments";
import Loading from "../../../../common/LoadingComponents/Loading/Loading";
import useDelayLoading from "../../../../../hooks/appHooks/useDelayLoading";

interface PlayerTournamentsProps {
    player: IPlayer;
}

const PlayerTournaments: React.FC<PlayerTournamentsProps> = ({ player }) => {
    const {
        sortAllTournaments,
        getListId,
        teamTournament,
        tournamentNumber,
        teamName,
        qtyTournamentTeams
    } = usePlayerTournaments(player);

    const { isLoading } = useDelayLoading(676);

    const isCountingData =
        teamTournament.length !== 0 &&
        tournamentNumber !== 0 &&
        teamName !== "" &&
        qtyTournamentTeams !== 0;

    return (
        <div className={style.player_tournaments}>
            {!isLoading ? (
                <>
                    <TournamenList
                        player={player}
                        tournaments={sortAllTournaments}
                        getCurrentListId={getListId}
                    />

                    {isCountingData && (
                        <>
                            <div className={style.tournament__team_name}>
                                <span>Команда</span>
                                <span className={style.name}>{teamName}</span>
                            </div>

                            <div className={style.tournament_wrap}>
                                <div className={style.tournament_number}>
                                    {tournamentNumber}
                                </div>

                                <div
                                    className={
                                        style.tournament_team__table_result_matches
                                    }
                                >
                                    <TeamTournamentTable
                                        team={teamTournament}
                                    />
                                    <TeamTournamentResult
                                        teamTournament={teamTournament[0]}
                                        qtyTournamentTeams={qtyTournamentTeams}
                                    />
                                    <TeamTournamentMatches
                                        teamTournament={teamTournament[0]}
                                        tournamentNumber={tournamentNumber}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default PlayerTournaments;
