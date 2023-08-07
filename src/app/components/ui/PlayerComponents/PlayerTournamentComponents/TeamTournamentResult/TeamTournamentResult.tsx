import React from "react";
import style from "./teamTournamentResult.module.scss";
import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import renderPhrase from "../../../../../utils/appUtils/renderPhrase";
import editPercentNumber from "../../../../../utils/appUtils/editPercentNumber";

interface TeamTournamentResultProps {
    teamTournament: ITournamentDb;
    qtyTournamentTeams: number;
}

const TeamTournamentResult: React.FC<TeamTournamentResultProps> = ({
    teamTournament,
    qtyTournamentTeams
}) => {
    return (
        <div className={style.team_tournament_result}>
            <div className={style.team_tournament_result__title}>
                Результы Турнира
            </div>
            <span>
                {teamTournament.Место} место из {qtyTournamentTeams}
            </span>
            <span>
                Выйграно {teamTournament["Выиграно карт"]}/
                {teamTournament["Всего карт"]} карт
            </span>
            <span>
                Сыграно{" "}
                {teamTournament["Сыграно матчей"] +
                    " " +
                    renderPhrase(teamTournament["Сыграно матчей"], {
                        nominativeCase: "матч",
                        genitiveCase: "матча",
                        instrumentalCase: "матчей"
                    })}
            </span>
            <span>
                Винрейт{" "}
                {editPercentNumber(
                    Number((teamTournament["Винрейт "] * 100).toFixed(2))
                )}
                %
            </span>
            <span>
                Средняя близость{" "}
                {editPercentNumber(
                    Number(teamTournament["Средняя близость матчей"].toFixed(2))
                )}
                %
            </span>
        </div>
    );
};

export default TeamTournamentResult;
