import React from "react";
import style from "./teamTournamentTable.module.scss";
import { ITournamentDb } from "../../../../../../ts/models/ITournamentDb";
import Table from "../../../../../common/TableComponents/Table";
import { ColumnType } from "../../../../../../ts/types/ColumnType";
import TableRole from "../../../../../common/TableComponents/TableRole/TableRole";
import TablePlayerLink from "../../../../../common/TableComponents/TablePlayerLink/TablePlayerLink";
import TeamNewRolePlayerTable from "../TeamNewRolePlayerTable/TeamNewRolePlayerTable";

interface TeamTournamentTableProps {
    team: ITournamentDb[];
}

const TeamTournamentTable: React.FC<TeamTournamentTableProps> = ({ team }) => {
    const columns: ColumnType<ITournamentDb, keyof ITournamentDb>[] = [
        {
            key: "Роль",
            name: "",
            component: (teammate) => <TableRole role={teammate.Роль} />
        },
        {
            key: "Подроль",
            name: "Подроль",
            component: (teammate) => <div>{teammate.Подроль}</div>
        },
        {
            key: "Игрок",
            name: "Тиммейт",
            component: (teammate) => (
                <TablePlayerLink.CurrentPlayerWithСaptain
                    teammateName={teammate.Игрок}
                    teammateId={teammate.PlayerID}
                    teamName={teammate.Команда}
                />
            )
        },
        {
            key: "Рейтинг",
            name: "Рейтинг",
            component: (teammate) => <div>{teammate.Рейтинг}</div>
        },
        {
            key: "Дивизион",
            name: "Дивизион",
            component: (teammate) => <div>{teammate.Дивизион}</div>
        },
        {
            key: "Новичок ",
            name: "Новичок",
            component: (teammate) => (
                <TeamNewRolePlayerTable isNew={teammate["Новичок "]} />
            )
        },
        {
            key: "Новичок на роли",
            name: "Нв. Роль",
            component: (teammate) => (
                <TeamNewRolePlayerTable isNew={teammate["Новичок на роли"]} />
            )
        }
    ];

    return (
        <div className={style.team_table}>
            <div className={style.team_table__wrap}>
                <Table columns={columns} dataBody={team} />
            </div>
        </div>
    );
};

export default TeamTournamentTable;
