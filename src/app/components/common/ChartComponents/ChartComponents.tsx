import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    PointElement,
    ArcElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend
} from "chart.js";
import { Doughnut, Line, Radar } from "react-chartjs-2";
import {
    ChartDoughnutProps,
    ChartLineProps,
    ChartRadarProps
} from "../../../ts/types/ComponentsPropsTypes/ChartComponents/ChartComponentsProps";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    RadialLinearScale,
    LineElement,
    ArcElement,
    Filler,
    Title,
    Tooltip,
    Legend
);

interface ChartComponentsProps {
    ChartLine: React.FC<ChartLineProps>;
    ChartDoughnut: React.FC<ChartDoughnutProps>;
    ChartRadar: React.FC<ChartRadarProps>;
}
const ChartComponents: ChartComponentsProps = () => {};

const ChartLine: React.FC<ChartLineProps> = ({
    options,
    datasets,
    width,
    height
}) => {
    return (
        <Line options={options} data={datasets} width={width} height={height} />
    );
};

const ChartDoughnut: React.FC<ChartDoughnutProps> = ({
    options,
    datasets,
    width,
    height
}) => {
    return (
        <Doughnut
            options={options}
            data={datasets}
            width={width}
            height={height}
        />
    );
};

const ChartRadar: React.FC<ChartRadarProps> = ({
    options,
    datasets,
    width,
    height
}) => {
    return (
        <Radar
            options={options}
            data={datasets}
            width={width}
            height={height}
        />
    );
};

ChartComponents.ChartLine = ChartLine;
ChartComponents.ChartDoughnut = ChartDoughnut;
ChartComponents.ChartRadar = ChartRadar;
export default ChartComponents;
