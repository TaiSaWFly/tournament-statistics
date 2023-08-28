import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { tournamentStatisticsInfoOptions } from "../../../../data/ChartDataOptions";
import { ChartDataType } from "../../../../ts/types/ChartTypes/ChartDataType";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface TournamentStatisticsInfoChartProps {
    data: ChartDataType[];
}

const TournamentStatisticsInfoChart: React.FC<
    TournamentStatisticsInfoChartProps
> = ({ data }) => {
    return (
        <Line
            options={tournamentStatisticsInfoOptions}
            data={{
                labels: data.map((d) => d.name),
                datasets: [
                    {
                        label: "КВО",
                        data: data.map((d) => d.value),
                        fill: true,
                        borderColor: "#FF8901",
                        backgroundColor: "#f1f5f9",
                        tension: 0.4
                    }
                ]
            }}
            width={100}
            height={60}
        />
    );
};

export default TournamentStatisticsInfoChart;
