import { ChartDataType } from "../ChartTypes/ChartDataType";

export type TournamentStatisticInfoType = {
    title: string;
    content: number | string;
    prefix: string;
    lastStatsData: ChartDataType[];
};
