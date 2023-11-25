import React from "react";
import style from "./navigationInfo.module.scss";
import useSvgIcon from "../../../../hooks/appHooks/someHooks/useSvgIcon";
import AppVersion from "../../../common/AppVersion/AppVersion";
import { REPO_STATISTICS_TOURNAMENTS_LINK } from "../../../../data/OtherData/links";

const NavigationInfo: React.FC = () => {
    const { GitHubIcon } = useSvgIcon();

    return (
        <div className={style.navigate_info}>
            <div className={style.navigate_info__resource}>
                <a
                    href={REPO_STATISTICS_TOURNAMENTS_LINK}
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHubIcon />
                </a>
            </div>

            <div className={style.navigate_info__ver}>
                <AppVersion />
            </div>
        </div>
    );
};

export default NavigationInfo;
