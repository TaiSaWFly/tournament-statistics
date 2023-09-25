import React from "react";
import style from "./playerStatsRoleChart.module.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { PlayerChartLabelName } from "../../../../../../../ts/types/ChartTypes/PlayerChartOptionTypes";
import { ChartDataType } from "../../../../../../../ts/types/ChartTypes/ChartDataType";
import { playerStatsRoleOptions } from "../../../../../../../data/ChartDataOptions";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

interface PlayerStatsRoleChartProps {
    title: string;
    label: PlayerChartLabelName;
    data: ChartDataType[];
}

const PlayerStatsRoleChart: React.FC<PlayerStatsRoleChartProps> = ({
    title,
    label,
    data
}) => {
    return (
        <div className={style.player_chart}>
            <div className={style.player_chart__title}>{title}</div>
            <div className={style.player_chart__item}>
                <Doughnut
                    options={playerStatsRoleOptions}
                    data={{
                        labels: data.map((d) => d.name),
                        datasets: [
                            {
                                label: label,
                                data: data.map((d) => d.value),
                                backgroundColor: [
                                    "#6D6A6D",
                                    "#CF3C3C",
                                    "#FDD46A"
                                ],
                                hoverOffset: 4
                            }
                        ]
                    }}
                />
            </div>
        </div>
    );
};

export default PlayerStatsRoleChart;
