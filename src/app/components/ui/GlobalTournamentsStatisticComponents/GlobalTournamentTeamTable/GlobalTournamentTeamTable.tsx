import React from "react";
import style from "./globalTournamentTeamTable.module.scss";
import { ITournamentDb } from "../../../../ts/models/ITournamentDb";
import { ColumnType } from "../../../../ts/types/ColumnType";
import Table from "../../../common/TableComponents/Table";
import TableRole from "../../../common/TableComponents/TableRole/TableRole";
import TablePlayerLink from "../../../common/TableComponents/TablePlayerLink/TablePlayerLink";

interface GlobalTournamentTeamTableProps {
    team: ITournamentDb[];
}

const GlobalTournamentTeamTable: React.FC<GlobalTournamentTeamTableProps> = ({
    team
}) => {
    const columns: ColumnType<ITournamentDb, keyof ITournamentDb>[] = [
        {
            key: "Игрок",
            name: "Команда чемпионов",
            component: (teammate) => (
                <TablePlayerLink.Сaptain
                    teammateId={teammate.PlayerID}
                    teammateName={teammate.Игрок}
                    teamName={teammate.Команда}
                />
            )
        },
        {
            key: "Роль",
            name: "роль",
            component: (teammate) => (
                <div className={style.team__table__role}>
                    <TableRole role={teammate.Роль} />
                </div>
            )
        },
        {
            key: "Рейтинг",
            name: "дивизион",
            component: (teammate) => (
                <>
                    {teammate.Дивизион} ({teammate.Рейтинг})
                </>
            )
        }
    ];

    return (
        <div className={style.team__table}>
            <Table columns={columns} dataBody={team} />
        </div>
    );
};

export default GlobalTournamentTeamTable;
