import React from "react";
import style from "./globalTournamentTeamsPlacesTable.module.scss";
import { ITournamentDb } from "../../../../ts/models/ITournamentDb";
import Table from "../../../common/TableComponents/Table";
import { ColumnType } from "../../../../ts/types/ColumnType";
import TablePlayerLink from "../../../common/TableComponents/TablePlayerLink/TablePlayerLink";

interface GlobalTournamentTeamsPlacesTableProps {
    placeTeams: ITournamentDb[];
}

const GlobalTournamentTeamsPlacesTable: React.FC<
    GlobalTournamentTeamsPlacesTableProps
> = ({ placeTeams }) => {
    const columns: ColumnType<ITournamentDb, keyof ITournamentDb>[] = [
        {
            key: "Место",
            name: "Место",
            component: (team) => <div>{team.Место}</div>
        },
        {
            key: "Команда",
            name: "Команда",
            component: (team) => (
                <TablePlayerLink
                    teammateId={team.PlayerID}
                    teammateName={team.Игрок}
                />
            )
        }
    ];

    return (
        <div className={style.teams_places__table}>
            <Table columns={columns} dataBody={placeTeams} />
        </div>
    );
};

export default GlobalTournamentTeamsPlacesTable;
