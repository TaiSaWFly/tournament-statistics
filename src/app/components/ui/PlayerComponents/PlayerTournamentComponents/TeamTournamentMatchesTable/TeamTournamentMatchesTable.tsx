import React from "react";
import style from "./teamTournamentMatchesTable.module.scss";
import usePlayerMatches from "../../../../../hooks/appHooks/playerHooks/usePlayerMatches";
import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import { ColumnType } from "../../../../../ts/types/ColumnType";
import { IMatchesDb } from "../../../../../ts/models/IMatchesDb";
import Table from "../../../../common/TableComponents/Table";
import editPercentNumber from "../../../../../utils/appUtils/editPercentNumber";

interface TeamTournamentMatchesProps {
    teamTournament: ITournamentDb;
    tournamentNumber: number;
}

const TeamTournamentMatches: React.FC<TeamTournamentMatchesProps> = ({
    teamTournament,
    tournamentNumber
}) => {
    const { filterMatches } = usePlayerMatches(
        teamTournament,
        tournamentNumber
    );

    const culumns: ColumnType<IMatchesDb, keyof IMatchesDb>[] = [
        {
            key: "match name",
            name: "Список матчей",
            component: (match) => <div>{match["match name"]}</div>
        },
        {
            key: "score",
            name: "Список матчей",
            component: (match) => <div>{match.score}</div>
        },
        {
            key: "Близость в процентах",
            name: "Близость",
            component: (match) => (
                <div>
                    {editPercentNumber(
                        Number(match["Близость в процентах"].toFixed(2))
                    )}
                    %
                </div>
            )
        }
    ];
    return (
        <div className={style.matches_table}>
            <Table columns={culumns} dataBody={filterMatches} />
        </div>
    );
};

export default TeamTournamentMatches;
