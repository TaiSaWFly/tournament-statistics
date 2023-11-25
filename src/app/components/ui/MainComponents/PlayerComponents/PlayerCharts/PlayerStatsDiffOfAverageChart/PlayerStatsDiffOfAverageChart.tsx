import React, { useEffect, useState } from "react";
import style from "./playerStatsDiffOfAverageChart.module.scss";
import ChartComponents from "../../../../../common/ChartComponents/ChartComponents";
import {
    ChartDataType,
    ChartRadarDatasets
} from "../../../../../../ts/types/ChartTypes/ChartDataType";
import { useAppSelector } from "../../../../../../hooks/reduxHooks/reduxHooks";
import { playerStatsDiffOfAverageOptions } from "../../../../../../data/ChartOptions";
import { useAppThemes } from "../../../../../../hooks/appHooks/appContexts/useAppThemes";
import {
    textViolet,
    textVioletDark
} from "../../../../../../data/AppData/colors";

import useWindowDimensions from "../../../../../../hooks/appHooks/someHooks/useWindowDimensions";
import { VIEW_PORT_BREAKPOINT_440 } from "../../../../../../data/AppData/breakPoints";

interface PlayerStatsDiffOfAverageChartProps {
    averagePlayerData: ChartDataType[];
}

const PlayerStatsDiffOfAverageChart: React.FC<
    PlayerStatsDiffOfAverageChartProps
> = ({ averagePlayerData }) => {
    const changeChartOptions = { ...playerStatsDiffOfAverageOptions };

    const { windowWidth } = useWindowDimensions();
    const { isDarkTheme } = useAppThemes();
    const { data: averagePlayersStatsChart } = useAppSelector(
        (state) => state.playerStatisticsData.entities.averagePlayersStatsChart
    );

    const [optionsChart, setOptionsChart] = useState(
        playerStatsDiffOfAverageOptions
    );

    useEffect(() => {
        if (windowWidth <= VIEW_PORT_BREAKPOINT_440) {
            changeChartOptions.plugins!.tooltip!.titleFont = { size: 10 };
            changeChartOptions.elements!.point!.borderWidth = 1;
            changeChartOptions.elements!.point!.radius = 4;
            changeChartOptions.scales!.r!.pointLabels!.font = { size: 11 };
            changeChartOptions.scales!.r!.ticks!.font = { size: 10 };
            setOptionsChart(changeChartOptions);
        } else {
            changeChartOptions.plugins!.tooltip!.titleFont = { size: 12 };
            changeChartOptions.elements!.point!.borderWidth = 2;
            changeChartOptions.elements!.point!.radius = 5.75;
            changeChartOptions.scales!.r!.pointLabels!.font = { size: 14 };
            changeChartOptions.scales!.r!.ticks!.font = { size: 12 };
            setOptionsChart(changeChartOptions);
        }
    }, [windowWidth]);

    useEffect(() => {
        if (isDarkTheme) {
            changeChartOptions.scales!.r!.pointLabels!.color = textVioletDark;
            changeChartOptions.scales!.r!.ticks!.color = textVioletDark;
            setOptionsChart(changeChartOptions);
        } else {
            changeChartOptions.scales!.r!.pointLabels!.color = textViolet;
            changeChartOptions.scales!.r!.ticks!.color = textViolet;
            setOptionsChart(changeChartOptions);
        }
    }, [isDarkTheme]);

    const data: ChartRadarDatasets = {
        labels: averagePlayersStatsChart.map((d) => d.name),
        datasets: [
            {
                label: "percent",
                stack: "average",
                data: averagePlayersStatsChart.map((d) => d.value),
                backgroundColor: "rgba(229, 11, 11, 0.2)",
                borderColor: "rgb(229, 11, 11)",
                pointBackgroundColor: "rgb(229, 11, 11)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(229, 11, 11)"
            },
            {
                label: "percent",
                stack: "player",
                data: averagePlayerData.map((d) => d.value),
                backgroundColor: "rgba(255, 137, 1, 0.2)",
                borderColor: "rgb(255, 137, 1)",
                pointBackgroundColor: "rgb(255, 137, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 137, 1)"
            }
        ]
    };

    return (
        <div className={style.chart}>
            <div className={style.chart_wrap}>
                <ChartComponents.ChartRadar
                    options={optionsChart}
                    datasets={data}
                />
            </div>
        </div>
    );
};

export default PlayerStatsDiffOfAverageChart;
