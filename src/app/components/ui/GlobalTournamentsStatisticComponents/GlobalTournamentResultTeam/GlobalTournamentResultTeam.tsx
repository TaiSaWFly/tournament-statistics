import React from "react";
import style from "./globalTournamentResultTeam.module.scss";
import { ITournamentDb } from "../../../../ts/models/ITournamentDb";
import editPercentNumber from "../../../../utils/appUtils/editPercentNumber";

interface GlobalTournamentResultTeamProps {
    tournamentFirstPlaceTeam: ITournamentDb;
}

const GlobalTournamentResultTeam: React.FC<GlobalTournamentResultTeamProps> = ({
    tournamentFirstPlaceTeam
}) => {
    return (
        <div className={style.tournament_result_team}>
            {tournamentFirstPlaceTeam["Средняя близость матчей"] !== 0 && (
                <div className={style.tournament_result}>
                    <div className={style.tournament_result_item}>
                        <span>Средняя близость</span>
                        <span>
                            {editPercentNumber(
                                Number(
                                    tournamentFirstPlaceTeam[
                                        "Средняя близость матчей"
                                    ].toFixed(2)
                                )
                            )}
                            %
                        </span>
                    </div>

                    <div className={style.tournament_result_item}>
                        <span>по турниру</span>
                        <span>{editPercentNumber(0)}%</span>
                    </div>
                </div>
            )}

            {tournamentFirstPlaceTeam["Винрейт "] !== 0 && (
                <div className={style.tournament_result}>
                    <div className={style.tournament_result_item}>
                        <span>Винрейт</span>
                        <span>
                            {editPercentNumber(
                                Number(
                                    (
                                        tournamentFirstPlaceTeam["Винрейт "] *
                                        100
                                    ).toFixed(2)
                                )
                            )}
                            %
                        </span>
                    </div>

                    <div className={style.tournament_result_item}>
                        <span>по турниру</span>
                        <span>{editPercentNumber(0)}%</span>
                    </div>
                </div>
            )}

            {tournamentFirstPlaceTeam["Цена команды"] !== 0 && (
                <div className={style.tournament_result}>
                    <div className={style.tournament_result_item}>
                        <span>Цена команды</span>
                        <span>{tournamentFirstPlaceTeam["Цена команды"]}</span>
                    </div>

                    <div className={style.tournament_result_item}>
                        <span>по турниру</span>
                        <span>{editPercentNumber(0)}%</span>
                    </div>
                </div>
            )}

            <div className={style.tournament_result_item}>
                <span>Сыграно матчей</span>
                <span>{tournamentFirstPlaceTeam["Сыграно матчей"]}</span>
            </div>
        </div>
    );
};

export default GlobalTournamentResultTeam;
