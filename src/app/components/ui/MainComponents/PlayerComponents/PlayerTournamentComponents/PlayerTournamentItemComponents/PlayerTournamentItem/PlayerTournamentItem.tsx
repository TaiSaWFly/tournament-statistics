import React, { useState } from "react";
import style from "./playerTournamentItem.module.scss";
import { ITournamentDb } from "../../../../../../../ts/models/ITournamentDb";
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
    const [isOpenTeamMatches, setIsOpenTeamMatches] = useState(false);

    return (
        <>
            <div className={style.tournament__team_name}>
                <div className={style.tournament__team_name__wrap}>
                    <div className={style.team_name__title}>Команда</div>
                    <div className={style.team_name}>{teamName}</div>
                </div>
            </div>

            <div className={style.tournament_wrap}>
                <div className={style.tournament_wrap__group}>
                    <div className={style.tournament_wrap__group_wrap}>
                        <div className={style.tournament_number}>
                            <span>Турнир</span> {tournamentNumber}
                        </div>

                        <PlayerTournamentItemActions
                            {...{
                                isOpenTeamMatches,
                                onOpenTeamMatches: () =>
                                    setIsOpenTeamMatches(!isOpenTeamMatches)
                            }}
                        />
                    </div>
                </div>

                <div className={style.tournament_team__table}>
                    <div className={style.tournament_team__table_item}>
                        <TeamTournamentTable team={teamTournament} />
                    </div>

                    <div className={style.tournament_team__table_item_result}>
                        <TeamTournamentResult
                            teamTournament={teamTournament[0]}
                            qtyTournamentTeams={tournamentTeamsQty}
                        />
                    </div>

                    {isOpenTeamMatches && (
                        <div
                            className={
                                style.tournament_team__table_item_matches
                            }
                        >
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
