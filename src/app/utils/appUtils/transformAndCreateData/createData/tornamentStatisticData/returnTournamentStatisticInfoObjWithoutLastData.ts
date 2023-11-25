import { TournamentStatisticInfoType } from "../../../../../ts/types/TournamentTypes/TournamentStatisticInfoType";
import renderPhrase, {
    RenderPhraseCasesType
} from "../../../other/renderPhrase";
import countDataQtyByKey from "../../../countData/countDataByKey/countDataQtyByKey";
import countReduceDataByKey from "../../../countData/countDataByKey/countReduceDataByKey";

type ReturnTournamentStatisticInfoObjWithoutLastDataType<T, K> = {
    countData: T[];
    key: K;
    title: string;
    prefix: RenderPhraseCasesType;
};

function returnTournamentStatisticInfoObjWithoutLastData<T, K extends keyof T>(
    schema: "count",
    data: ReturnTournamentStatisticInfoObjWithoutLastDataType<T, K>
): Omit<TournamentStatisticInfoType, "lastStatsData">;
function returnTournamentStatisticInfoObjWithoutLastData<
    T extends Record<K, number>,
    K extends keyof T
>(
    schema: "reduce",
    data: ReturnTournamentStatisticInfoObjWithoutLastDataType<T, K>
): Omit<TournamentStatisticInfoType, "lastStatsData">;

function returnTournamentStatisticInfoObjWithoutLastData(
    schema: any,
    data: any
) {
    let qtyData = 0;

    if (schema === "count") {
        qtyData = countDataQtyByKey(data.countData, data.key as never);
    }

    if (schema === "reduce") {
        qtyData = countReduceDataByKey(data.countData, data.key as never);
    }

    return {
        title: data.title,
        content: qtyData,
        prefix: renderPhrase(qtyData, {
            ...data.prefix
        })
    };
}

export default returnTournamentStatisticInfoObjWithoutLastData;
