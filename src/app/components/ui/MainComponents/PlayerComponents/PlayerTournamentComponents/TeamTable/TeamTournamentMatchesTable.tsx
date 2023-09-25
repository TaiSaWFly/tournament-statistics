import React from "react";
import usePlayerMatches from "../../../../../../hooks/appHooks/playerHooks/usePlayerMatches";
import { ITournamentDb } from "../../../../../../ts/models/ITournamentDb";
import { IMatchesDb } from "../../../../../../ts/models/IMatchesDb";
import editPercentNumber from "../../../../../../utils/appUtils/other/editPercentNumber";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "../../../../../common/TableComponents/Table/Table";

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

    const column = createColumnHelper<IMatchesDb>();
    const columns = [
        column.display({
            id: "match name",
            header: () => "Список матчей",
            cell: ({ row }) => row.original["match name"]
        }),
        column.display({
            id: "score",
            header: () => "Результат",
            cell: ({ row }) => row.original.score
        }),
        column.display({
            id: "Близость в процентах",
            header: () => "Близость",
            cell: ({ row }) => (
                <>
                    {editPercentNumber(
                        Number(row.original["Близость в процентах"].toFixed(2))
                    )}
                    %
                </>
            )
        })
    ];

    return (
        <Table
            {...{ data: filterMatches, columns, title: "сыгранные матчи" }}
        />
    );
};

export default TeamTournamentMatches;
