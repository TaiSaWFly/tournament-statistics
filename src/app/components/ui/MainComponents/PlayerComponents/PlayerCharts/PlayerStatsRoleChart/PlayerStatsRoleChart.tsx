import React from "react";
import style from "./playerStatsRoleChart.module.scss";
import { ChartDoughnutDatasets } from "../../../../../../ts/types/ChartTypes/ChartDataType";
import ChartComponents from "../../../../../common/ChartComponents/ChartComponents";
import { playerStatsRoleOptions } from "../../../../../../data/ChartOptions";
import { BaseChartComponentProps } from "../../../../../../ts/types/ComponentsPropsTypes/ChartComponents/ChartComponentsProps";

interface PlayerStatsRoleChartProps extends BaseChartComponentProps {
    title: string;
}

const PlayerStatsRoleChart: React.FC<PlayerStatsRoleChartProps> = ({
    title,
    label = "",
    declareLabel,
    data
}) => {
    if (data.length === 0) return null;

    const datasets: ChartDoughnutDatasets = {
        labels: data.map((d) => d.name),
        datasets: [
            {
                label: declareLabel || label,
                data: data.map((d) => d.value)
            }
        ]
    };

    return (
        <div className={style.player_chart}>
            <div className={style.player_chart__title}>{title}</div>
            <div className={style.player_chart__item}>
                <ChartComponents.ChartDoughnut
                    options={playerStatsRoleOptions}
                    datasets={datasets}
                />
            </div>
        </div>
    );
};

export default PlayerStatsRoleChart;
