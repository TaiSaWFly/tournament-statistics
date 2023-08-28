import { IMatchesDb } from "../../../../../ts/models/IMatchesDb";
import { ITournamentDb } from "../../../../../ts/models/ITournamentDb";
import { TournamentStatisticInfoType } from "../../../../../ts/types/TournamentTypes/TournamentStatisticInfoType";
import _ from "lodash";
import filterDoubleDataByKey from "../../../filterSortData/filterDoubleDataByKey";
import returnTournamentStatisticInfoObjWithoutLastData from "./returnTournamentStatisticInfoObjWithoutLastData";
import countLastStatsTournamentData from "../../../countData/countTournamentStatistic/countLastStatsData/countLastStatsTournametData";
import countLastStatsMatchesData from "../../../countData/countTournamentStatistic/countLastStatsData/countLastStatsMatchesData";

const returnGlobalTournamentStatistic = (
    tournaments: ITournamentDb[],
    matches: IMatchesDb[]
): TournamentStatisticInfoType[] => {
    const filterDoubleData = filterDoubleDataByKey(
        tournaments,
        "Номер турнира"
    );
    const tournamentNumbers = _.orderBy(
        filterDoubleData,
        ["Номер турнира"],
        ["desc"]
    ).map((tour) => tour["Номер турнира"]);

    const filterChampions = tournaments.filter((tour) => tour.Чемпионство);

    const globalTournamentStatsInfo = [
        {
            ...returnTournamentStatisticInfoObjWithoutLastData("count", {
                countData: tournaments,
                key: "Номер турнира",
                title: "Проведено",
                prefix: {
                    nominativeCase: "турнир",
                    genitiveCase: "турнира",
                    instrumentalCase: "турниров"
                }
            }),
            lastStatsData: countLastStatsTournamentData("global", "count", {
                tournaments,
                tournamentNumbers,
                key: "Номер турнира"
            })
        },
        {
            ...returnTournamentStatisticInfoObjWithoutLastData("count", {
                countData: tournaments,
                key: "ID команды",
                title: "Набаланшено",
                prefix: {
                    nominativeCase: "команда",
                    genitiveCase: "команды",
                    instrumentalCase: "команд"
                }
            }),
            lastStatsData: countLastStatsTournamentData("global", "count", {
                tournaments,
                tournamentNumbers,
                key: "ID команды"
            })
        },
        {
            ...returnTournamentStatisticInfoObjWithoutLastData("count", {
                countData: tournaments,
                key: "PlayerID",
                title: "Отбаланшено",
                prefix: {
                    nominativeCase: "игрок",
                    genitiveCase: "игрока",
                    instrumentalCase: "игроков"
                }
            }),
            lastStatsData: countLastStatsTournamentData("global", "count", {
                tournaments,
                tournamentNumbers,
                key: "PlayerID"
            })
        },
        {
            ...returnTournamentStatisticInfoObjWithoutLastData("count", {
                countData: matches,
                key: "Уникальный номер матча",
                title: "Сыграно",
                prefix: {
                    nominativeCase: "матч",
                    genitiveCase: "матча",
                    instrumentalCase: "матчей"
                }
            }),
            lastStatsData: countLastStatsMatchesData("global", {
                matches,
                tournamentNumbers,
                key: "Уникальный номер матча"
            })
        },
        {
            ...returnTournamentStatisticInfoObjWithoutLastData("count", {
                countData: filterChampions,
                key: "PlayerID",
                title: "Выведено",
                prefix: {
                    nominativeCase: "чемпион",
                    genitiveCase: "чемпиона",
                    instrumentalCase: "чемпионов"
                }
            }),
            lastStatsData: countLastStatsTournamentData("global", "count", {
                tournaments: filterChampions,
                tournamentNumbers,
                key: "PlayerID"
            })
        }
    ];

    return globalTournamentStatsInfo;
};

export default returnGlobalTournamentStatistic;
