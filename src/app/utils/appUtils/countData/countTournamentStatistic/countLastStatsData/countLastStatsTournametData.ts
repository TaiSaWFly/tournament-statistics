import countDataQtyByKey from "../../countDataByKey/countDataQtyByKey";
import _ from "lodash";
import countReduceDataByKey from "../../countDataByKey/countReduceDataByKey";
import { ChartDataType } from "../../../../../ts/types/ChartTypes/ChartDataType";

type CountLastTournametDataSHGlobalType<T, K> = {
    tournaments: T[];
    key: K;
    tournamentNumbers: number[];
};

type CountLastTournametDataSHCurrentType<T, K> = {
    currentTournamentNumber: number;
} & CountLastTournametDataSHGlobalType<T, K>;

type CountLastDataSortType = {
    order: number;
} & ChartDataType;

// Overloads //
function countLastStatsTournametData<
    ITournamentDb,
    K extends keyof ITournamentDb
>(
    schema: "global",
    countShema: "count",
    data: CountLastTournametDataSHGlobalType<ITournamentDb, K>
): ChartDataType[];

function countLastStatsTournametData<
    ITournamentDb extends Record<K, number>,
    K extends keyof ITournamentDb
>(
    schema: "global",
    countShema: "reduce",
    data: CountLastTournametDataSHGlobalType<ITournamentDb, K>
): ChartDataType[];

function countLastStatsTournametData<
    ITournamentDb,
    K extends keyof ITournamentDb
>(
    schema: "current",
    countShema: "count",
    data: CountLastTournametDataSHCurrentType<ITournamentDb, K>
): ChartDataType[];

function countLastStatsTournametData<
    ITournamentDb extends Record<K, number>,
    K extends keyof ITournamentDb
>(
    schema: "current",
    countShema: "reduce",
    data: CountLastTournametDataSHCurrentType<ITournamentDb, K>
): ChartDataType[];

function countLastStatsTournametData<
    ITournamentDb extends Record<K, number>,
    K extends keyof ITournamentDb
>(
    schema: "currentAsMaps",
    countShema: "reduce",
    data: CountLastTournametDataSHCurrentType<ITournamentDb, K>
): ChartDataType[];
// Overloads //

function countLastStatsTournametData(schema: any, countShema: any, data: any) {
    const sortData: CountLastDataSortType[] = [];
    let lastStatsData: ChartDataType[] = [];
    let filterData = [...data.tournaments];

    // schema "All tournaments"
    if (schema === "global") {
        for (let i = 0; i < 5; i++) {
            const tourNumber = data.tournamentNumbers[i];

            // countShema "All tournaments count"
            if (countShema === "count") {
                if (i !== 0) {
                    filterData = filterData.filter(
                        (data) => data["Номер турнира"] !== tourNumber
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
            const tournamentData = filterData.filter(
                (data) => data["Номер турнира"] === slicesTournamentNumbers[i]
            );

            // countShema "current tournament count"
            if (countShema === "count") {
                const countData = countDataQtyByKey(tournamentData, data.key);

                sortData.push({
                    order: slicesTournamentNumbers[i],
                    name: "Турнир " + slicesTournamentNumbers[i],
                    value: countData
                });
            }

            // countShema "current tournament reduce"
            if (countShema === "reduce") {
                const countData = countReduceDataByKey(
                    tournamentData,
                    data.key
                );

                sortData.push({
                    order: slicesTournamentNumbers[i],
                    name: "Турнир " + slicesTournamentNumbers[i],
                    value: countData
                });
            }
        }
    }

    // schema "currentAsMaps tournament"
    if (schema === "currentAsMaps") {
        const index = data.tournamentNumbers.indexOf(
            data.currentTournamentNumber
        );
        const slicesTournamentNumbers = data.tournamentNumbers.slice(
            index,
            index + 5
        );

        for (let i = 0; i < slicesTournamentNumbers.length; i++) {
            const tournamentData = filterData.filter(
                (data) => data["Номер турнира"] === slicesTournamentNumbers[i]
            );
            const tournamentDataByTeam = tournamentData.filter(
                (data) =>
                    data.Команда.toLocaleLowerCase() ===
                    data.Игрок.toLocaleLowerCase()
            );

            const countData = countReduceDataByKey(
                tournamentDataByTeam,
                data.key
            );
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

export default countLastStatsTournametData;
