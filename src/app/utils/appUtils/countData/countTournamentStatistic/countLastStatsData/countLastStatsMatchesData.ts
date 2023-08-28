import { ChartDataType } from "../../../../../ts/types/ChartTypes/ChartDataType";
import countDataQtyByKey from "../../countDataByKey/countDataQtyByKey";
import _ from "lodash";

type CountLastStatsMatchesSHGlobalType<T, K> = {
    matches: T[];
    tournamentNumbers: number[];
    key: K;
};
type CountLastStatsMatchesSHCurrentType<T, K> = {
    currentTournamentNumber: number;
} & CountLastStatsMatchesSHGlobalType<T, K>;

type CountLastDataSortType = {
    order: number;
} & ChartDataType;

function countLastStatsMatchesData<IMatchesDb, Key extends keyof IMatchesDb>(
    schema: "global",
    data: CountLastStatsMatchesSHGlobalType<IMatchesDb, Key>
): ChartDataType[];
function countLastStatsMatchesData<IMatchesDb, Key extends keyof IMatchesDb>(
    schema: "current",
    data: CountLastStatsMatchesSHCurrentType<IMatchesDb, Key>
): ChartDataType[];

function countLastStatsMatchesData(schema: any, data: any) {
    const sortData: CountLastDataSortType[] = [];
    let lastStatsData: ChartDataType[] = [];
    let filterData = [...data.matches];

    // schema "All tournaments"
    if (schema === "global") {
        for (let i = 0; i < 5; i++) {
            const tourNumber = data.tournamentNumbers[i];

            if (i !== 0) {
                filterData = filterData.filter(
                    (data) => data.Турнир !== tourNumber
                );
                const countData = countDataQtyByKey(filterData, data.key);
                sortData.push({
                    order: tourNumber,
                    name: "Турнир " + tourNumber,
                    value: countData
                });
            } else {
                const countData = countDataQtyByKey(filterData, data.key);
                sortData.push({
                    order: tourNumber,
                    name: "Турнир " + tourNumber,
                    value: countData
                });
            }
        }
    }

    // schema "current tournament"
    if (schema === "current") {
        const index = data.tournamentNumbers.indexOf(
            data.currentTournamentNumber
        );
        const slicesTournamentNumbers = data.tournamentNumbers.slice(
            index,
            index + 5
        );

        for (let i = 0; i < slicesTournamentNumbers.length; i++) {
            const matchesData = filterData.filter(
                (data) => data.Турнир === slicesTournamentNumbers[i]
            );

            const countData = countDataQtyByKey(matchesData, data.key);
            sortData.push({
                order: slicesTournamentNumbers[i],
                name: "Турнир " + slicesTournamentNumbers[i],
                value: countData
            });
        }
    }

    lastStatsData = _.orderBy(sortData, ["order"], ["asc"]);
    return lastStatsData;
}

export default countLastStatsMatchesData;
