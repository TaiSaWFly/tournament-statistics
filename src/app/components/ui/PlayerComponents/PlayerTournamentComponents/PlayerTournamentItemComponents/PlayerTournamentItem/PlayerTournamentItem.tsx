import React, { useState } from "react";
import style from "./playerTournamentItem.module.scss";
import { ITournamentDb } from "../../../../../../ts/models/ITournamentDb";
import TeamTournamentTable from "../../TeamTable/TeamTournamentTable/TeamTournamentTable";
import TeamTournamentResult from "../../TeamTournamentResult/TeamTournamentResult";
import TeamTournamentMatches from "../../TeamTable/TeamTournamentMatchesTable";
import PlayerTournamentItemActions from "../PlayerTournamentItemActions/PlayerTournamentItemActions";

interface PlayerTournamentItemProps {
    teamName: string;
    tournamentNumber: number;
    teamTournament: ITournamentDb[];
    tournamentTeamsQty: number;
}

const PlayerTournamentItem: React.FC<PlayerTournamentItemProps> = ({
    teamName,
    tournamentNumber,
    teamTournament,
    tournamentTeamsQty
}) => {
    const [isOpenTeamResult, setIsOpenTeamResult] = useState(false);
    const [isOpenTeamMatches, setIsOpenTeamMatches] = useState(false);

    return (
        <>
            <div className={style.tournament__team_name}>
                <span>Команда</span>
                <span className={style.team_name}>{teamName}</span>
            </div>

            <div className={style.tournament_wrap}>
                <div className={style.tournament_wrap__group}>
                    <div className={style.tournament_number}>
                        {tournamentNumber}
                    </div>

                    <PlayerTournamentItemActions
                        {...{
                            isOpenTeamResult,
                            onOpenTeamResult: () =>
                                setIsOpenTeamResult(!isOpenTeamResult),
                            isOpenTeamMatches,
                            onOpenTeamMatches: () =>
                                setIsOpenTeamMatches(!isOpenTeamMatches)
                        }}
                    />
                </div>

                <div className={style.tournament_team__table}>
                    <div className={style.tournament_team__table_item}>
                        <TeamTournamentTable team={teamTournament} />
                    </div>

                    {isOpenTeamResult && (
                        <div className={style.tournament_team__table_item}>
                            <TeamTournamentResult
                                teamTournament={teamTournament[0]}
                                qtyTournamentTeams={tournamentTeamsQty}
                            />
                        </div>
                    )}

                    {isOpenTeamMatches && (
                        <div className={style.tournament_team__table_item}>
                            <TeamTournamentMatches
                                teamTournament={teamTournament[0]}
                                tournamentNumber={tournamentNumber}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PlayerTournamentItem;
