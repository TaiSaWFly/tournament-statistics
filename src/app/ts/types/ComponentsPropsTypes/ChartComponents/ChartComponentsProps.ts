import {
    ChartDataType,
    ChartDoughnutDatasets,
    ChartDoughnutOptions,
    ChartLineDatasets,
    ChartLineOptions,
    ChartRadarDatasets,
    ChartRadarOptions,
    PlayerChartLabelNameType
} from "../../ChartTypes/ChartDataType";

export interface BaseChartComponentProps {
    label?: string;
    declareLabel?: PlayerChartLabelNameType;
    data: ChartDataType[];
}

interface ChartComponentsProps<Options, Datasets> {
    options: Options;
    datasets: Datasets;
    width?: string | number;
    height?: string | number;
}

export type ChartLineProps = ChartComponentsProps<
    ChartLineOptions,
    ChartLineDatasets
>;
export type ChartDoughnutProps = ChartComponentsProps<
    ChartDoughnutOptions,
    ChartDoughnutDatasets
>;
export type ChartRadarProps = ChartComponentsProps<
    ChartRadarOptions,
    ChartRadarDatasets
>;
