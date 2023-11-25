import React from "react";
import { ChartLineDatasets } from "../../../ts/types/ChartTypes/ChartDataType";
import ChartComponents from "./ChartComponents";
import { tournamentStatisticsInfoOptions } from "../../../data/ChartOptions";
import { BaseChartComponentProps } from "../../../ts/types/ComponentsPropsTypes/ChartComponents/ChartComponentsProps";

const TournamentStatisticsInfoChart: React.FC<BaseChartComponentProps> = ({
    label = "",
    data
}) => {
    const datasets: ChartLineDatasets = {
        labels: data.map((d) => d.name),
        datasets: [{ label, data: data.map((d) => d.value) }]
    };

    return (
        <ChartComponents.ChartLine
            options={tournamentStatisticsInfoOptions}
            datasets={datasets}
            width={100}
            height={60}
        />
    );
};

export default TournamentStatisticsInfoChart;
