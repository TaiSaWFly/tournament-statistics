import { ChartData, ChartOptions, ScatterDataPoint } from "chart.js";

export type ChartDataType = {
    name: string;
    value: number;
};

export type ChartLabelPercentNameType = "percent";
export type ChartLabelGamesNameType = "games";

export type ChartLabelStackAverageNameType = "average";
export type ChartLabelStackPlayerNameType = "player";

export type PlayerChartLabelNameType =
    | ChartLabelPercentNameType
    | ChartLabelGamesNameType;
export type PlayerChartLabelStackNameType =
    | ChartLabelStackAverageNameType
    | ChartLabelStackPlayerNameType;

// types ChartOptions
export type ChartLineOptions = ChartOptions<"line">;
export type ChartDoughnutOptions = ChartOptions<"doughnut">;
export type ChartRadarOptions = ChartOptions<"radar">;

// types ChartDatasets
export type ChartLineDatasets = ChartData<
    "line",
    (number | ScatterDataPoint | null)[],
    unknown
>;
export type ChartDoughnutDatasets = ChartData<"doughnut", number[], unknown>;
export type ChartRadarDatasets = ChartData<"radar", number[], unknown>;
