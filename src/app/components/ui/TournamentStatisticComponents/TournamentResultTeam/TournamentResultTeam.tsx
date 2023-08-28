import React from "react";
import style from "./tournamentResultTeam.module.scss";
import { ITournamentDb } from "../../../../ts/models/ITournamentDb";
import editPercentNumber from "../../../../utils/appUtils/other/editPercentNumber";

interface TournamentResultTeamProps {
    firstPlaceTeamResult: ITournamentDb;
}

const TournamentResultTeam: React.FC<TournamentResultTeamProps> = ({
    firstPlaceTeamResult
}) => {
    return (
        <div className={style.tournament_result_team}>
            <div className={style.tournament_result_team__title}>
                Статистика команды
            </div>

            {firstPlaceTeamResult["Средняя близость матчей"] !== 0 && (
                <div className={style.tournament_result}>
                    <div className={style.tournament_result_item}>
                        <span>Средняя близость</span>
                        <span>
                            {editPercentNumber(
                                Number(
                                    firstPlaceTeamResult[
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

            {firstPlaceTeamResult["Винрейт "] !== 0 && (
                <div className={style.tournament_result}>
                    <div className={style.tournament_result_item}>
                        <span>Винрейт</span>
                        <span>
                            {editPercentNumber(
                                Number(
                                    (
                                        firstPlaceTeamResult["Винрейт "] * 100
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

            {firstPlaceTeamResult["Цена команды"] !== 0 && (
                <div className={style.tournament_result}>
                    <div className={style.tournament_result_item}>
                        <span>Цена команды</span>
                        <span>{firstPlaceTeamResult["Цена команды"]}</span>
                    </div>

                    <div className={style.tournament_result_item}>
                        <span>по турниру</span>
                        <span>{editPercentNumber(0)}%</span>
                    </div>
                </div>
            )}

            <div className={style.tournament_result}>
                <div className={style.tournament_result_item}>
                    <span>Сыграно матчей</span>
                    <span>{firstPlaceTeamResult["Сыграно матчей"]}</span>
                </div>
            </div>
        </div>
    );
};

export default TournamentResultTeam;
