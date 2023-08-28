import { IMatchesDb } from "../../../../../ts/models/IMatchesDb";
import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import { TournamentStatisticInfoType } from "../../../../../ts/types/TournamentTypes/TournamentStatisticInfoType";
import _ from "lodash";
import filterDoubleDataByKey from "../../../filterSortData/filterDoubleDataByKey";
import returnTournamentStatisticInfoObjWithoutLastData from "./returnTournamentStatisticInfoObjWithoutLastData";
import countLastStatsTournamentData from "../../../countData/countTournamentStatistic/countLastStatsData/countLastStatsTournametData";
import countLastStatsMatchesData from "../../../countData/countTournamentStatistic/countLastStatsData/countLastStatsMatchesData";

type ReturnTournamentStatisticType = {
    tournaments: ITournamentDb[];
    matches: IMatchesDb[];
    currentTournamentData: ITournamentDb[];
    currentTournamentNumber: number;
};

const returnTournamentStatistic = ({
    tournaments,
    matches,
    currentTournamentData,
    currentTournamentNumber
}: ReturnTournamentStatisticType): TournamentStatisticInfoType[] => {
    const filterDoubleData = filterDoubleDataByKey(
        tournaments,
        "Номер турнира"
    );
    const tournamentNumbers = _.orderBy(
        filterDoubleData,
        ["Номер турнира"],
        ["desc"]
    ).map((tour) => tour["Номер турнира"]);

    const matchesByCurrentTournament = matches.filter(
        (match) => match.Турнир === currentTournamentNumber
    );
    const currentTournamentByTeam = currentTournamentData.filter(
        (tour) =>
            tour.Команда.toLocaleLowerCase() === tour.Игрок.toLocaleLowerCase()
    );

    const tournamentStatsInfo = [
        {
            ...returnTournamentStatisticInfoObjWithoutLastData("count", {
                countData: currentTournamentData,
                key: "ID команды",
                title: "Набаланшено",
                prefix: {
                    nominativeCase: "команда",
                    genitiveCase: "команды",
                    instrumentalCase: "команд"
                }
            }),
            lastStatsData: countLastStatsTournamentData("current", "count", {
                tournaments,
                tournamentNumbers,
                currentTournamentNumber,
                key: "ID команды"
            })
        },
        {
            ...returnTournamentStatisticInfoObjWithoutLastData("count", {
                countData: currentTournamentData,
                key: "PlayerID",
                title: "Отбаланшено",
                prefix: {
                    nominativeCase: "игрок",
                    genitiveCase: "игрока",
                    instrumentalCase: "игроков"
                }
            }),
            lastStatsData: countLastStatsTournamentData("current", "count", {
                tournaments,
                tournamentNumbers,
                currentTournamentNumber,
                key: "PlayerID"
            })
        },
        {
            ...returnTournamentStatisticInfoObjWithoutLastData("count", {
                countData: matchesByCurrentTournament,
                key: "Уникальный номер матча",
                title: "Сыграно",
                prefix: {
                    nominativeCase: "матч",
                    genitiveCase: "матча",
                    instrumentalCase: "матчей"
                }
            }),
            lastStatsData: countLastStatsMatchesData("current", {
                matches,
                tournamentNumbers,
                key: "Уникальный номер матча",
                currentTournamentNumber
            })
        },
        {
            ...returnTournamentStatisticInfoObjWithoutLastData("reduce", {
                countData: currentTournamentByTeam,
                key: "Выиграно карт",
                title: "Сыграно",
                prefix: {
                    nominativeCase: "карта",
                    genitiveCase: "карты",
                    instrumentalCase: "карт"
                }
            }),
            lastStatsData: countLastStatsTournamentData(
                "currentAsMaps",
                "reduce",
                {
                    tournaments,
                    tournamentNumbers,
                    currentTournamentNumber,
                    key: "Выиграно карт"
                }
            )
        },
        {
            ...returnTournamentStatisticInfoObjWithoutLastData("reduce", {
                countData: currentTournamentData,
                key: "Новичок ",
                title: "Отбаланшено",
                prefix: {
                    nominativeCase: "новичок",
                    genitiveCase: "новичка",
                    instrumentalCase: "новичков"
                }
            }),
            lastStatsData: countLastStatsTournamentData("current", "reduce", {
                tournaments,
                tournamentNumbers,
                currentTournamentNumber,
                key: "Новичок "
            })
        }
    ];

    return tournamentStatsInfo;
};

export default returnTournamentStatistic;
