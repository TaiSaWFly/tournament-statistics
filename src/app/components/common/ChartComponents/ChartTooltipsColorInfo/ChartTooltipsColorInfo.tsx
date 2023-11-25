import React from "react";
import style from "./chartTooltipsColorInfo.module.scss";
import { TooltipsColorInfoDataType } from "../../../../ts/types/TooltipsColorInfoDataType";

interface ChartTooltipsColorInfoProps {
    colorsInfo: TooltipsColorInfoDataType[];
}

const ChartTooltipsColorInfo: React.FC<ChartTooltipsColorInfoProps> = ({
    colorsInfo
}) => {
    return (
        <div className={style.color_info}>
            <div className={style.color_info__wrap}>
                {colorsInfo.map((info, i) => (
                    <div key={info.name + i} className={style.color__item}>
                        <span
                            style={{
                                backgroundColor: info.hex
                            }}
                        ></span>
                        <div className={style.color__item_name}>
                            {info.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChartTooltipsColorInfo;
